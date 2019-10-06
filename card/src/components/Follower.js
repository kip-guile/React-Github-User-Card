import React, {Component} from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`
    display: flex;
    background-color: lightgreen;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 100%;
    align-content: space-around;
    justify-content: baseline;
    border-radius: 1em;
    margin: 1em;
    padding: 1em;`

const Image = styled.img`
    width: 150px;
  height: 150px;
  border-radius: 3px;
  margin-right: 20px;`

const StyledInfoDiv = styled.div`
    padding: 1em;
    margin: 0.5em;`

class Follower extends Component {
    

  render() {
      const {login, img} = this.props;
    return (
      <StyledCard>
        <div>
            <Image src={img} alt="face"/>
        </div>
        <StyledInfoDiv>
            <h4>Login: {login}</h4>
        </StyledInfoDiv>
      </StyledCard>
    );
  }
}

export default Follower;