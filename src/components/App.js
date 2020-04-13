import React, { Component } from "react";
import { fetchRepositories, sortArray } from "../utils/api";
import Repository from "./Repository";
import Filters from "./Filters";

class App extends Component {
  state = {
    repos: [],
    page: 1,
    loading: true,
    searchTerm:'',
  };

  componentDidMount() {
    fetchRepositories(this.state.page)
      .then((result) => {
        this.mergeData(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  loadMore = () => {
    this.setState({ loading: true });
    fetchRepositories(this.state.page)
      .then((result) => this.mergeData(result))
      .catch((error) => {
        console.log(error);
      });
  };

  searchFilter = (search) => {
    this.setState({
      searchTerm: search
    })
  }

  sortStar = (filter) => {
    const sorted = sortArray(this.state.repos, filter)
    this.setState({
      repos: [...sorted]
    })
  }

  mergeData = (resposne) => {
    this.setState(({ repos, page }) => ({
      repos: [...repos, ...resposne.data.items],
      page: page + 1,
      loading: false,
    }));
  };

  render() {
    const { repos, loading } = this.state;
    return (
      <div className="container">
        <Filters search={this.searchFilter} startSorting={this.sortStar} />
        <div className="repos">
          {repos.filter(repo => repo.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())).map((repo) => (
            <Repository key={repo.id} repo={repo} />
          ))}
        </div>
        <div className="bottom">
          <button className="btn" onClick={this.loadMore}>
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      </div>
    );
  }
}

export default App;
