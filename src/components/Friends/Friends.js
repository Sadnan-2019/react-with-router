import React, { useEffect, useState } from "react";
import { CardGroup, Col, Container, Row } from "react-bootstrap";
import Friend from "../Friend/Friend";

const Friends = () => {
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((data) => setFriends(data));
  }, []);
  return (
    <div >
              <Container>
      <Row>
      <h1>This your Friends</h1>
      <h1>Please sleep now Friends.....{friends.length}</h1>

      <CardGroup>
                 
                  {friends.map((friend) => (
          <Friend friend={friend} key={friend.id}></Friend>
        ))}
                 
      
      </CardGroup>
      </Row>
              </Container>
      
    </div>
  );
};

export default Friends;
