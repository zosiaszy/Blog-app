import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import  {formatDate}  from '../../utils/dateToStr';
import "react-datepicker/dist/react-datepicker.css";


const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(new Date()); 

  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');

  
  useEffect(() => {
    const parsedDate = Date.parse(props.publishedDate);
    if (!isNaN(parsedDate)) {
      setPublishedDate(new Date(parsedDate));
    }
  }, [props.publishedDate]);

  const handleSubmit = (e) => {
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
  <label>Edit date: </label> 
  <DatePicker
    selected={publishedDate}
    className="form-control"
    onChange={(date) => setPublishedDate(date)}
    dateFormat="MM/dd/yyyy" 
  />
  <p className="card-text font-weight-bold">Published Date: {formatDate(publishedDate)}</p>
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
        <ReactQuill className="form-control" value={content} onChange={setContent} />
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
  publishedDate: PropTypes.string, 
};

export default PostForm;
