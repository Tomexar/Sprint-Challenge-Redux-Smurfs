/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

import axios from 'axios';

export const DATA_START = 'DATA_START';
export const DATA_SUCCESS = 'DATA_SUCCESS';
export const DATA_FAIL = 'DATA_FAIL';

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
export const getData = () => dispatch => {
  dispatch({ type: DATA_START });
  axios
    .get('http://localhost:3333/smurfs')
    .then(res => {
      dispatch({ type: DATA_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: DATA_FAIL, payload: err.response })
    })
}

export const ADD_START = 'ADD_START';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAIL = 'ADD_FAIL';

export const addSmurf = newSmurf => dispatch => {
  dispatch({ type: ADD_START });
  return axios 
    .post('http://localhost:3333/smurfs' , newSmurf)
    .then(res =>{
      dispatch({ type: ADD_SUCCESS , payload :res.data})
    })
    .catch(err =>{
      dispatch({ type: ADD_FAIL , payload: err.response})
    })
}

export const DELETE_START = 'DELETE_START';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAIL = 'DELETE_FAIL';

export const delelteSmurf = id => dispatch =>{
  dispatch({ type: DELETE_START});
  axios
    .delete(`http://localhost:3333/smurfs/${id}`)
    .then(res =>{
      dispatch ({ type: DELETE_SUCCESS, payload: res.data })
    })
    .catch(err =>{
      dispatch({ type: DELETE_FAIL, payload: err.response})
    })
}