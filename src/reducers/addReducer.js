import initialState from './intialState';

const addReducer = (state=initialState, action) => {
   // console.log(action);
   const posts = action.posts;
    if(action.type === 'ADD_POST'){
          return {
       ...state, posts
     }
    }
    return state;
  }
  export default addReducer