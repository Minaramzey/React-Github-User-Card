import React from "react";
import axios from "axios";
import UserCard from "./Usercard";
import "../App.css";

class User extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    };
  }

  componentDidMount() {
    axios
      .get("https://api.github.com/users/Minaramzey")
      .then(res => {
        console.log(res.data.followers_url);
        this.setState({
          user: res.data
        });
      })
      .catch(err => console.log(err('You fucked up dude')));

    axios
      .get("https://api.github.com/users/Minaramzey/followers")
      .then(res => {
        console.log(res.data);
        this.setState({
          followers: res.data
        });
      })
      .catch(err => console.log(err('You fucked up dude')));
  }

  handleChanges = e => {
    this.setState({
      user: e.target.value
    });
  };

  fetchFollowers = e => {
    e.preventDefault();
    axios
      .get(`https://api.github.com/users/Minaramzey/${this.state.followers}`)
      .then(res => {
        // res.data.message
        this.setState({
          followers: res.data.message
        });
      })
      .catch(err => console.log(err.message));
  };

  render() {
    return (
      <div className="cards">
           <input value={this.followers} onChange={this.handleChanges} />
          <button onClick={this.fetchFollowers}>Search Followers</button>
        <div className="main-card">
          
          {
            <UserCard
            
              login={this.state.user.login}
              id={this.state.user.id}
              avatar_url={this.state.user.avatar_url}
              location={this.state.user.location}
              html_url={this.state.user.html_url}
            />
          }
        </div>

        <div className="followers-card">
      
          {this.state.followers.map(follower => (
            <UserCard
            
              login={follower.login}
              id={follower.id}
              avatar_url={follower.avatar_url}
              location={follower.location}
              html_url={follower.html_url}
            />
          ))}
        </div>
      </div>
    );
  }
}
export default User;