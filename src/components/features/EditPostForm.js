import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editPost } from '../../redux/postsRedux';
import { useNavigate, useParams } from 'react-router-dom';
import PostForm from './PostForm';

const EditPostForm = () => {
    const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams(); 
  const posts = useSelector(state => state.posts); 
  const postToEdit = posts.find(post => post.id === id); 


const handleSubmit = post => {
  dispatch(editPost({ id, ...post }));
  navigate('/');
};




  if (!postToEdit) {
   
    navigate('/');
    return null;
  }

  return (
  <PostForm
    action={handleSubmit}
    actionText="Save Changes"
    title={postToEdit.title} 
    author={postToEdit.author}
    publishedDate={postToEdit.publishedDate}
    shortDescription={postToEdit.shortDescription}
    content={postToEdit.content}
  />
);

};

export default EditPostForm;
