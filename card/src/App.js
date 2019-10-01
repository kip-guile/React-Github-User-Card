import React, {Component} from 'react';
import Card from './components/Card'
import axios from 'axios';
import FollowerList from './components/FollowerList';
import './App.css';
import styled from 'styled-components';

const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 95%;
    background-color: gold;
    justify-content: center;
    align-content: center;
    padding: 2em;
    align-items: center;`


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userData: []
    }
  }

  getProfile = () => {
      axios.get(`https://api.github.com/users/kip-guile`)
        .then(response => {
          this.setState({userData: response.data})
          console.log(this.state.userData);
        })
        .catch(error => {
          console.log(error.message);
        })
  }

  componentDidMount(){
    this.getProfile();
  }

    render(){
      return (
        <Body>
          <Card 
          name={this.state.userData.name} 
          login={this.state.userData.login} 
          location={this.state.userData.location} 
          company={this.state.userData.company} 
          bio={this.state.userData.bio} 
          img={this.state.userData.avatar_url}
          />
          <h3>Followers</h3>
          <div>
            
            <FollowerList/>
          </div>
        </Body>
      );
  }
}

export default App;
