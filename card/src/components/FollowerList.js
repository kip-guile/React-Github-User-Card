import React, {Component} from 'react';
import Follower from './Follower'
import axios from 'axios';


class FollowerList extends Component {
    constructor(props){
        super(props);
        this.state = {
        followers: []
        }
    }

    getFollowers = () => {
        axios.get(`https://api.github.com/users/kip-guile/followers`)
            .then(response => {
            this.setState({followers: response.data})
            console.log(this.state.followers);
            })
            .catch(error => {
            console.log(error.message);
            })
    }

    componentDidMount(){
        this.getFollowers();
    }

        render(){
        return (
            <div className="App">
                {
                this.state.followers.map(follower => { 
                return (
                    <div>  
                    <Follower 
                    login={follower.login}  
                    img={follower.avatar_url}
                    />
                    </div>
                    )
                })
            }
            </div>
        );
    }
}

export default FollowerList;