import axios from 'axios';
import React, { Component } from 'react'

 class Followers extends Component {
   state={
     followers: []
   }

componentDidMount() {
  axios.get("https://api.github.com/users/PriscilaMonteiro/followers")
      .then((res) => {
        this.setState({
          followers: res.data,
        });
      })
      .catch((err) => console.log("err---", err));
}

  render() {
    const { followers } = this.state;
    if (this.state.followers.length === 0) return <p> Loading Followers</p>
    return (
      <div>
        <div className="btn" >Priscila's Followers:</div>
        
        { followers.map((follower) => (
          <div key={follower.id} className="card">
          <img src={follower.avatar_url} alt="usergitcard"/>
          <div>
            <h3 className="name">{follower.name}</h3>
            <p className="username">{follower.login}</p>
            <p>Location: {follower.location}</p>
            <p>
              "Profile: "
              <a href={follower.html_url}>http://github.com/{follower.login}</a>
            </p>
            <p>Followers: {follower.followers} </p>
            <p>Following: {follower.following}</p>
            <p>Bio: {follower.bio}</p>
          </div>
        </div>
        ))}

        
      </div>
    )
  }
};

export default Followers;
