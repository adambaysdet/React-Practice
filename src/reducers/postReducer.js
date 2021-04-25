import initialState from './intialState';

const postReducer = (state=initialState, action) => {
   // console.log(action);
    if(action.type === 'LIST_POST'){
          return {
       ...state.posts
     }
    }
    if(action.type === 'DELETE_POST'){
        const newPosts = state.posts.filter(post => {
          return post.id !== action.id
        });
        return {
          ...state,
          posts: newPosts
        }
       }
       if(action.type === 'ADD_POST'){
        const posts = action.posts;
        return {
     ...state, posts
   }
  }
    return state;
  }
  export default postReducer