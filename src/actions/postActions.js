export const deletePost = (id) => {
  return {
    type: 'DELETE_POST',
    id
  }
}

export const addPost = (id,title,body) => {
  return {
    type: 'ADD_POST',
    posts:{
      id,
      title,
      body
    }
  }
}
export const listPost = () => {
  return {
    type: 'LIST_POST',
  }
}

