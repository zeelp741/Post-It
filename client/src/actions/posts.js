import * as api from '../api'

// Action creators
//  - functions that return actions 
//  - action is an object

// Implemented redux thunk 
//  - since dealing with async logic we have to dispatch it 

export const getPosts = () => async(dispatch) =>{

    try {
        // First getting response from API
        // In the response we have the data object that we are returning from backend
        // data represents posts
        const {data} = await api.fetchPosts()

        // Dispatches action
        // old code: const action = {type: 'FETCH_ALL', payload: []}
        dispatch ({type: 'FETCH_ALL', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);
  
        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
  };