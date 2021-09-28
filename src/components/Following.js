import axios from 'axios';
import React, { Component } from 'react'

 class Following extends Component {
   state={
     following: []
   }

componentDidMount() {
  axios.get("https://api.github.com/users/PriscilaMonteiro/following")
      .then((res) => {
        this.setState({
          following: res.data,
        });
      })
      .catch((err) => console.log("err---", err));
}

  render() {
    const { following } = this.state;
    if (this.state.following.length === 0) return <p> Loading Following</p>
    return (
      <div>
        <div className="btn" >Priscila is Following:</div>
        
        { following.map((following) => (
          <div key={following.id} className="card">
          <img src={following.avatar_url} alt="usergitcard"/>
          <div>
            <h3 className="name">{following.name}</h3>
            <p className="username">{following.login}</p>
            <p>Location: {following.location}</p>
            <p>
              "Profile: "
              <a href={following.html_url}>http://github.com/{following.login}</a>
            </p>
            <p>Followers: {following.followers} </p>
            <p>Following: {following.following}</p>
            <p>Bio: {following.bio}</p>
          </div>
        </div>
        ))}

        
      </div>
    )
  }
};

export default Following;
