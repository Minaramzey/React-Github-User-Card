import React from "react";
import {Card, CardImg, CardText,} from "reactstrap"
import { Button } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import styled from "styled-components"

const CardWrapper= styled.div`
 margin: 10% 40% 10% 40%;
border-width: 20px;
border-style: outset;
border-color: #28A745;
border-radius: 7px;
box-shadow: 0 0 50px 20px #28A745;
`;

const Img = styled.img`
object-fit:cover;
width:100%`




function UserCard(props) {
  console.log(props.login);

  return (
    <div className="userCards">
      <CardWrapper key={props.id}>
        <div>
          <Img 
          src={props.avatar_url} 
          alt={props.id}>    
          </Img>
          <CardText>{props.login}</CardText>
          <CardText>{props.location}</CardText>
          <Button variant="contained" color="secondary" as={Link} href={props.html_url} >User GitHub!</Button>
        </div>
      </CardWrapper>
    </div>
  );
}

export default UserCard; 