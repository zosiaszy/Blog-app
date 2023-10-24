import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import { formatDate } from '../../utils/dateToStr';
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';

const PostForm = ({ action, actionText, ...props }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(new Date());

  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');

  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);

  useEffect(() => {
    const parsedDate = Date.parse(props.publishedDate);
    if (!isNaN(parsedDate)) {
      setPublishedDate(new Date(parsedDate));
    }
  }, [props.publishedDate]);

  const onSubmit = (data) => {
    
    if (!content || !publishedDate) {
      if (!content) {
        setContentError(true);
      } else {
        setContentError(false);
      }
      if (!publishedDate) {
        setDateError(true);
      } else {
        setDateError(false);
      }
      return;
    }

    action({ ...data, content });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mt-3" controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                {...register('title', { required: true })}
                value={title}
                onChange={e => setTitle(e.target.value)}
                type="text"
                placeholder="Enter title"
              />
              {errors.title && <span>This field is required</span>}
            </Form.Group>

            <Form.Group controlId="author" className="mt-3">
              <Form.Label>Author</Form.Label>
              <Form.Control
                {...register('author', { required: true })}
                value={author}
                type="text"
                placeholder="Enter author"
                onChange={e => setAuthor(e.target.value)}
              />
              {errors.author && <span>This field is required</span>}
            </Form.Group>

            <Form.Group controlId="publishedDate" className="mt-3">
              <Form.Label>Edit date:</Form.Label>
              <DatePicker
                selected={publishedDate}
                onChange={(date) => setPublishedDate(date)}
                dateFormat="MM/dd/yyyy"
              />
              <p className="card-text font-weight-bold mt-3">
                Published Date: {formatDate(publishedDate)}
              </p>
              {dateError && <span>Date is required</span>}
            </Form.Group>

            <Form.Group controlId="shortDescription" className="mt-4">
              <Form.Label>Short Description</Form.Label>
              <Form.Control
                {...register('shortDescription', { required: true })}
                as="textarea"
                placeholder="Enter short description"
                value={shortDescription}
                onChange={e => setShortDescription(e.target.value)}
              />
              {errors.shortDescription && <span>This field is required</span>}
            </Form.Group>

            <div className="form-group mt-5">
              <label>Content</label>
              <ReactQuill
                className="form-control"
                value={content}
                onChange={value => setContent(value)}
              />
              {contentError && <span>Content is required</span>}
            </div>

            <Button type="submit" className="btn btn-primary mt-5">
              {actionText}
            </Button>
          </Form>
        </div>
      </div>
    </div>
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
