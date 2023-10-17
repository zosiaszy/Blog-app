
import React, { useState } from 'react';
import PropTypes from 'prop-types';


const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');

    const handleSubmit = e => {
    e.preventDefault();
    action({ title, author, publishedDate, shortDescription, content });
  };


    return (

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
        <label>Published Date</label>
        <input
          type="text"
          className="form-control"
          value={publishedDate}
          onChange={(e) => setPublishedDate(e.target.value)}
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

        {actionText}
      </button>
    </form>



    );





};

PostForm.propTypes = {
  action: PropTypes.func.isRequired,
  actionText: PropTypes.string.isRequired,
  title: PropTypes.string,
  author: PropTypes.string,
  shortDescription: PropTypes.string,
  content: PropTypes.string,
};





export default PostForm;