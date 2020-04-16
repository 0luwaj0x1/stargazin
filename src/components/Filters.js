import React, { Component } from "react";

class Filters extends Component {

  state = {
    search: ''
  }

  handleChange = (evt) => {
    this.setState({
      search: evt.target.value
    })
    this.props.search(this.state.search)
  }

  handleStarSort = (evt) => {
      this.props.startSorting(evt.target.value)
  }


  render() {
    return (
      <div className="filters">
        <label className="check-container" onClick={this.handleStarSort}>
          filter stars &#8593;
          <input type="radio" name="filter" value='asc' />
          <span className="checkmark"></span>
        </label>

        <label className="check-container" onClick={this.handleStarSort}>
          filter start &#8595;
          <input type="radio" name="filter" value='desc' />
          <span className="checkmark"></span>
        </label>

        <input className="filter-input" value={this.state.search} onChange={this.handleChange} placeholder="Enter word to filter" />
      </div>
    );
  }
}

export default Filters;
