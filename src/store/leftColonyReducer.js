import { serverAL } from "../api/api";

// ========================================
const UPDATE_FRIEND_PANEL = "UPDATE-FRIEND-PANEL/COLONY-REDUCER";
// ========================================
export const udpateFriends = (data) => ({
  type: UPDATE_FRIEND_PANEL,
  data,
});
// ========================================s
const init = {
  friendPanel: [
  
  ],
};
// ========================================

// state= this._state.massagePart//
function leftColonePartReducer(state = init, action) {
  switch (action.type) {
    // --------------

    case UPDATE_FRIEND_PANEL: {
      return _setAvatars(state, action);
    }
    // --------------
    default:
      return state;
  }
}
// ========================================
function _setAvatars(state, action) {
 
  return {
    ...state,
    friendPanel: [...action.data],
  };
}
// ---------------------------------------
export const updateFriendsTC = (data) => async (dispatch) => {
  try {
    //dispatch(changeIsFinished(false));

    const wallPostSucces = await serverAL.getSubscrUsers();
    
   dispatch(udpateFriends(wallPostSucces.data));
    
    //  dispatch(changeIsFinished(true));
  } catch (err) {
    console.log(err);
  }
};
// ---------------------------------------

/* getUsersList: (CurrentPage = 0, maxUsersAtPage = 10) => {
  return instanceMock
    .get(`?page=${CurrentPage}&limit=${maxUsersAtPage}`)

    .then((res) => {
      return res.data;
    });
},   */
// ---------------------------------------

export default leftColonePartReducer;
