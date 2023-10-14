import React from 'react';
import { useSelector } from 'react-redux';
import SinglePost from '../pages/SinglePost';
import { Row, Col} from 'react-bootstrap';

const Posts = () => {
  const posts = useSelector((state) => state.posts);

  return (
    <Row>
      {posts.map((post) => (
        <Col key={post.id} sm={12} md={6} lg={4}>
          <SinglePost
            id={post.id}
            title={post.title}
            author={post.author}
            publishedDate={post.publishedDate}
            shortDescription={post.shortDescription}
            content={post.content}
            
            
          />
        </Col>
      ))}
    </Row>
  );
  
};

export default Posts;
