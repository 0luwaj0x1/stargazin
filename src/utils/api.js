import axios from 'axios';

const baseUrl = 'https://api.github.com';

export const fetchRepositories = (page) => {
 return axios.get(`${baseUrl}/search/repositories?q=stars&page=${page}&per_page=16`)
}

export const sortArray = (array, order) => {
  if(order === 'asc') {
    return array.sort((a, b) => a.stargazers_count - b.stargazers_count)
  }else if(order === 'desc') {
    return array.sort((a, b) => b.stargazers_count - a.stargazers_count)
  }else {
    return array;
  }
}



