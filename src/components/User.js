import axios from 'axios';
import React, { Component } from 'react'

 class User extends Component {
   state = {
    user: null
  }

  componentDidMount(){
    axios
      .get("https://api.github.com/users/PriscilaMonteiro")
      .then((res) => {
        this.setState({
          user: res.data,
        });
      })
      .catch((err) => console.log(err));
  }






  render() {
    // destructure state
    const { user } = this.state;
    
    if(!this.state.user) return <p>Loading</p>
    return (
      
      <div className="card">
          <img src={user.avatar_url} alt="usergitcard"/>
          <div>
            <h3 className="name">{user.name}</h3>
            <p className="username">{user.login}</p>
            <p>Location: {user.location}</p>
            <p>
              "Profile: "
              <a href={user.html_url}>http://github.com/{user.login}</a>
            </p>
            <p>Followers: {user.followers} </p>
            <p>Following: {user.following}</p>
            <p>Bio: {user.bio}</p>
          </div>
        </div>
    )
  }
}

export default User;
