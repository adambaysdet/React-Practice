import addReducer from './addReducer';
import deleteReducer from './deleteReducer';
import { combineReducers } from 'redux';


//const rootReducer = combineReducers({ deleteReducer});
// const rootReducer = deleteReducer;
// export default rootReducer

const rootReducer = (state = initState, action) => {
    console.log(action);
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
  
  export default rootReducer


