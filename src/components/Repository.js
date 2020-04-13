import React from "react";

const Repository = (props) => {
  return (
    <div className="repo">
      <img src={props.repo.owner.avatar_url} alt={props.repo.name} />
      <div className="items-container">
        <ul className="items">
          <li>Owner: {props.repo.owner.login}</li>
          <li>ID: {props.repo.id}</li>
          <li>Name: {props.repo.name}</li>
          <li>Stars: {props.repo.stargazers_count}</li>
          <li>Watchers: {props.repo.watchers_count}</li>
        </ul>
      </div>
    </div>
  );
};

export default Repository;
