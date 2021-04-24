import initialState from './intialState';

const deleteReducer = (state=initialState, action) => {
    console.log('actiondeleteabdr',action);
    if(action.type === 'DELETE_POST'){
     let newPosts = state.posts.filter(post => {
       return post.id !== action.id
     });
     return {
       ...state,
       posts: newPosts
     }
    }
    return state;
  }
  export default deleteReducer