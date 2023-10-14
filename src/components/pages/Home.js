import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Posts from '../features/Posts'; 
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Row>
      <Col>
        <h1>All posts</h1>
      </Col>
      <Col xs={4} className="text-end">
      <Link to="/post/add"> 
        <Button className="border border-primary">Add Post</Button>
        
          
        </Link>
      </Col>
      
        <Posts />
      
      
    </Row>
  );
};

export default Home;
