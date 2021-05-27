import { serverAL } from "../api/api";

// ========================================
const UPDATE_FRIEND_PANEL = "UPDATE-FRIEND-PANEL/COLONY-REDUCER";
//---------------
type actionType = typeof UPDATE_FRIEND_PANEL

type actionCreatorType = {
  type: actionType,
  data: friendPanelType
}
//--------------
// ========================================
export const udpateFriends = (data: actionCreatorType) => ({
  type: UPDATE_FRIEND_PANEL,
  data,
});


// ========================================s
const init = {
  friendPanel: [
    {
      id: 0 as number | null,
      adressCity: "loadin" as string | null,
      adressCountry: "loadin" as string | null,
      email: "loadin" as string | null,
      firstName: "loadin" as string | null,
      isFollow: true as boolean | null,
      lastName: "loadin" as string | null,
      phone: "loadin" as string | null,
      picture: "loadin" as string | null,
      quote: "loadin" as string | null,
      registerDate: "loadin" as string | null,
      title: "loadin" as string | null,
      childRs: [
        {
          pmId: 0 as number | null,
          userId: 0 as number | null,
          text: "loadin" as string | null,
          avatar: "loadin" as string | null,
          firstName: "loadin" as string | null,
        },
      ],
    },
  ],
};

type friendPanelInitType = typeof init
type friendPanelType = typeof init.friendPanel


function leftColonePartReducer(state = init, action: actionCreatorType) {
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
function _setAvatars(state: friendPanelInitType, action: actionCreatorType): friendPanelInitType {
  return {
    ...state,
    friendPanel: [...action.data],
  };
}
// ---------------------------------------
export const updateFriendsTC = (data: friendPanelType) => async (dispatch: Function) => {
  try {
    const wallPostSucces = await serverAL.getSubscrUsers();

    dispatch(udpateFriends(wallPostSucces.data));
  } catch (err) {
    console.log(err);
  }
};
// ---------------------------------------

export default leftColonePartReducer;
