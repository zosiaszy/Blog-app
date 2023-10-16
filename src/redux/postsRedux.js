import shortid from 'shortid';

//selectors

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const REMOVE_POST = createActionName('REMOVE_POST');
const ADD_POST = createActionName('ADD_POST');
// action creators
const postsReducer = (statePart = [], action) => {
  switch (action.type) {

    case REMOVE_POST:
    
      return statePart.filter((post) => post.id !== action.payload);

    case ADD_POST:
      return [...statePart, { ...action.payload, id: shortid() }];

    default:
      return statePart;
  };
};

export const removePost = (postId) => ({
  type: REMOVE_POST,
  payload: postId,
});

export const addPost = (post) => ({
  type: ADD_POST,
  payload: post,


})

export default postsReducer;