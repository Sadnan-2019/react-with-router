import React from 'react';
import { Button, Card, Container, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Friend = (props) => {

          const {name,username,id} =props.friend;
          const navigate = useNavigate();

          const friendDetails=()=>{

                    const path =`/friend/${id}`;

                    navigate(path)

          }
          // console.log(props.friend)
          return (
                    <div>
       <Container>
                 <Row>

                 <Card className='mt-5'>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Name:{name}</Card.Title>
      <Card.Text>
      Username:{username} 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Link to={'/friend/' + id}>show-details</Link>
      <Button onClick={friendDetails}>Details</Button>
    </Card.Footer>
  </Card>
                 </Row>
       </Container>
                    </div>
          );
};

export default Friend;