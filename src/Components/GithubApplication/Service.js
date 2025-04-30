import axios from "axios"

export const getUserDetails=(username)=>{
//logic to fetch user data from github server
  return  axios.get(`https://api.github.com/users/${username}`);
}

