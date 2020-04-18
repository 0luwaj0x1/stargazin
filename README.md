This project was bootstrapped with [Create React App]

## Available Scripts

In the project directory, you can run: to install all dependencies

### `yarn install`


Start the app 

### `yarn start`


The App Breakdown.

1. The app is a simple one, the was no need to use a state management tools like redux. despite the fact that i would have loved to flex my redux skills. so all states are local.

2. The entry point is index.js and main.css for the sytles.

3. The App contains 3 componenets App component (Parent) and two sibling component FIlters Component, Repository Component.

4.The App Component: When it mounts, fires a call to the github api to fetch 16 repositories paginated. These are stored in an array[] called repos, locally on the App component 
  the App component loops through the repos and passes each repo to the Repository Component to render. 
  There is also a Load More buttton that fetch new pages and adds it to the existing repos array.

5. The Repository Component is a simple stateless component that only take a prop from the parent and renders.

6. The Filter Component abstract all the job of filtering jobs, filtering by repo name, and also start count in ascending and descending order.
   the filter component has its own state because it has a controlled input field for the search. The searh value is sent back to the parent through the props provided by the parent.
   which is the way child to parent communication happens in react. Same goes for the star count filtering.

7. All the helper function can be found in the utils folder.  

8. Deplyed on Github pages.



# stargazin
