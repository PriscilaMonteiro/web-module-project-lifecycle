import React, { Component } from 'react'
import axios from 'axios';
// search func is not working yet
class Search extends Component {
  state = {
    userInfo: [],
    user: null
  };

  componentDidMount(){
    axios
      .get(`https://api.github.com/users/priscilaMonteiro`)
      .then((res) => {
        this.setState({
          userInfo: res.data,
        });
      })
      .catch((err) => console.log(err));
  }

  componentDidUpdate() {
            axios
            .get(`https://api.github.com/users/${this.state.user}`)
            .then((res) => console.log(res))
           .catch((err) => console.log(err));
      
      
  }

  handleSubmit = (e)=> {
    e.preventDefault();
    axios
        .get(`https://api.github.com/users/${this.state.user}`)
        .then((res) => {
          this.setState({ 
            ...this.state,
            userInfo: res.data,
          });
        })
        .catch((err) => console.log(err));
    
  };
  

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      ...this.state,
      user: value,
    });
  };

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.user} onChange={this.handleChange}/>
          <button>Search Github User</button>
        </form>
        <img src={this.state.userInfo.avatar_url} alt="usergitcard"/>
        <div className="card">
          
          <div>
            <h3 className="name">{this.state.userInfo.name}</h3>
            <p className="username">{this.state.userInfo.login}</p>
            <p>Location: {this.state.userInfo.location}</p>
            <p>
              "Profile: "
              <a href={this.state.userInfo.html_url}>http://github.com/{this.state.userInfo.login}</a>
            </p>
            <p>Followers: {this.state.userInfo.followers} </p>
            <p>Following: {this.state.userInfo.following}</p>
            <p>Bio: {this.state.userInfo.bio}</p>
          </div>
          

        </div>


      </div>
    )
  }
}

export default Search;


//   render() {
//      const { searchUser } = this.state;
    
//     if(!this.state.searchUser) return <p>Type a Github login</p>
//     return (
      
//       <div className="card">
//           <img src={searchUser.avatar_url} alt="usergitcard"/>
//           <div>
//             <h3 className="name">{searchUser.name}</h3>
//             <p className="username">{searchUser.login}</p>
//             <p>Location: {searchUser.location}</p>
//             <p>
//               "Profile: "
//               <a href={searchUser.html_url}>http://github.com/{searchUser.login}</a>
//             </p>
//             <p>Followers: {searchUser.followers} </p>
//             <p>Following: {searchUser.following}</p>
//             <p>Bio: {searchUser.bio}</p>
//           </div>
//         </div>
//     )
//   }
// }




//  <div className="cards">
//         <div className="card">
//           <img src={this.state.avatar_url} alt="usergitcard"/>
//           <div>
//             <h3 className="name">{this.state.name}</h3>
//             <p className="username">{this.state.login}</p>
//             <p>Location: {this.state.location}</p>
//             <p>
//               "Profile: "
//               <a href={this.state.html_url}>http://github.com/{this.state.login}</a>
//             </p>
//             <p>Followers: {this.state.followers} </p>
//             <p>Following: {this.state.following}</p>
//             <p>Bio: {this.state.bio}</p>
//           </div>
//         </div> 

//  <form onSubmit={this.handleSubmit}>
//       <input type="text" className="input" onChange={this.handleChange}/>
//       <button className= "inputBtn">Try another Github Username</button>
//     </form> 
