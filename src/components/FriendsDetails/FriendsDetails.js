import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";

const FriendsDetails = () => {
  const { friendId } = useParams();
  const [friend, setFriend] = useState({});
//   const Spinner=document.getElementById("spinner");
   
  useEffect(() => {
          // Spinner.style.display="none"
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
      .then((res) => res.json())
      .then((friendDetail) => setFriend(friendDetail));
  }, []);
  return (
    <div>
      <Container>
                
      {/* <Spinner animation="border" role="status" id="spinner">
  <span className="visually-hidden">Loading...</span>
</Spinner> */}
        <Row>
          <Col>
            <h1>This is friend details page{friendId}</h1>
            <h2>Name:{friend.name}</h2>
            <h3>User Name:{friend.username}</h3>
            
            <h4>Email:{friend.email}</h4>
            <h4>City:{friend.address?.city}</h4>
            <h4>Lat:{friend.address?.geo?.lat}</h4>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
};

export default FriendsDetails;
