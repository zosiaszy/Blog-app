import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import PostSummary from './PostSummary';

const PostList = () => {
  const { categoryName } = useParams();
  const posts = useSelector((state) => state.posts);

  const filteredPosts = posts.filter((post) => post.category === categoryName);
 
  

 return (
  <div>
    <h2>Posts in Category: {categoryName}</h2>
    {filteredPosts.length > 0 ? (
      <ul>
        {filteredPosts.map((post) => (
          <PostSummary
            id={post.id}
            title={post.title}
            author={post.author}
            publishedDate={post.publishedDate}
            category={post.category}
            shortDescription={post.shortDescription}
            content={post.content}
          />
        ))}
      </ul>
    ) : (
      <p>No posts in this category.</p>
    )}
  </div>
);

};

export default PostList;
