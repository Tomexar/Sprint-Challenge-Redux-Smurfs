/*
  Be sure to import in all of the action types from `../actions`
*/

import {
  DATA_START,
  DATA_SUCCESS,
  DELETE_START,
  DELETE_SUCCESS,
  ADD_START,
  ADD_SUCCESS,
  
} from '../actions'


//  Your initial/default state for this project could *Although does not have to* look a lot like this
const initialState = 
{
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
const reducer = (state = initialState, action ) =>{
  // console.log(action.payload);
  switch (action.type){
    case DATA_START:
    return {
      ...state,
      fetchingSmurfs: true 
    };
    case DATA_SUCCESS:
      return {
        ...state,
        fetchingSmurfs:false,
        error: null,
        smurfs: action.payload,
      }
    case ADD_START:
      return {
        ...state,
        addingSmurf:true,
      };
    case ADD_SUCCESS:
      return {
        ...state,
        addingSmurf: false,
        error:'',
        smurfs: action.payload
      }
    case DELETE_START:
      return {
        ...state,
        deletingSmurf: true,
      }
    case DELETE_SUCCESS:
      return {
        ...state,
        deletingSmurf:false,
        error: '',
        smurfs: action.payload
      }

    default:
      return state;
  }
}

export default reducer;