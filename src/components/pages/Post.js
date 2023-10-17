import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Modal } from 'react-bootstrap';
import { removePost } from '../../redux/postsRedux';
import { Navigate } from 'react-router-dom';

const Post = () => {
  const { id } = useParams();
  const posts = useSelector(state => state.posts);
  const post = posts.find(post => post.id === id);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate(); 

  const handleDelete = () => {
    dispatch(removePost(post.id));
    setShowModal(false);
  };

  const handleEdit = () => {
  navigate(`/post/edit/${post.id}`);
};


  if (!post) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card mb-3 mt-3 border-0">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between">
                <h2 className="card-title">{post.title}</h2>
                <div className="custom-button-group ml-2">
                  <button className="btn btn-outline-primary" onClick={handleEdit}>
                    Edit
                  </button>
                  <button className="btn btn-outline-danger" onClick={() => setShowModal(true)}>
                    Delete
                  </button>
                </div>
              </div>
              <p className="card-text font-weight-bold">Author: {post.author}</p>
              <p className="card-text font-weight-bold">Published Date: {post.publishedDate}</p>
              <p className="card-text">{post.shortDescription}</p>
              <p className="card-text">{post.content}</p>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this post?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Post;
