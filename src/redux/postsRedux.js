import shortid from 'shortid';

//selectors

// actions
const createActionName = actionName => `app/posts/${actionName}`;
const REMOVE_POST = createActionName('REMOVE_POST');
const ADD_POST = createActionName('ADD_POST');
const EDIT_POST = createActionName('EDIT_POST');
// action creators
const postsReducer = (statePart = [], action) => {
  switch (action.type) {

    case REMOVE_POST:
    
      return statePart.filter((post) => post.id !== action.payload);

    case ADD_POST:
      return [...statePart, { ...action.payload, id: shortid() }];

    case EDIT_POST:
     return statePart.map(post => (post.id === action.payload.id ? { ...post, ...action.payload } : post));

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
});


export const editPost = (post) => ({
  type: EDIT_POST,
  payload: post,


});

export default postsReducer;