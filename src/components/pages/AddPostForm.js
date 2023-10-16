import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPost } from '../../redux/postsRedux';
import {  useNavigate } from 'react-router-dom';

const AddPostForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
  e.preventDefault();
  const newPost = { title, author, shortDescription };
  dispatch(addPost(newPost));
  setTitle('');
  setAuthor('');
  setShortDescription('');

navigate('/');
  
};

  return (

    <div className="container">
    <div className="row justify-content-center">
    <div className="col-md-8 mt-5">
    <form onSubmit={handleSubmit}>
    
      <div className="form-group">
        <label>Title</label>
        <input
          type="text"
          className="form-control"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="form-group mt-5">
        <label>Author</label>
        <input
          type="text"
          className="form-control"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>

      <div className="form-group mt-5">
        <label>Short Description</label>
        <textarea
          className="form-control"
          value={shortDescription}
          onChange={(e) => setShortDescription(e.target.value)}
        />
      </div>

      <div className="form-group mt-5">
        <label>Content</label>
        <textarea
          className="form-control"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary mt-5">
   
        Add Post
      </button>
    </form>
    </div>
    </div>
    </div>
  );
};

export default AddPostForm;
