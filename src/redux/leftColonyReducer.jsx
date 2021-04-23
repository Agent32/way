// ========================================
const POST_PRIVATE_MASSAGE = "POST-PRIVATE-MASSAGE";
const EDIT_PM_AREA = "EDIT-PM-AREA";
// ========================================
export const pmSendActionCreator = (id, text) => ({
  type: POST_PRIVATE_MASSAGE,
  id: id,
  text: text,
});
export const editPmTempActionCreator = (text) => ({
  type: EDIT_PM_AREA,
  text: text,
});
// ========================================

//state= this._state.massagePart//
function leftColonePartReducer (state, action) {
  switch (action.type) {
    // --------------

    case POST_PRIVATE_MASSAGE: {
      return _postMassage(state, action);
    }
    // --------------
    case EDIT_PM_AREA: {
      return _privMassTempAreaEdit(state, action);
    }

    // --------------
    default:
      return state;
  }
}
// ========================================

// ---------------------------------------
function _postMassage(state, action) {

  return state;
}
// ---------------------------------------
function _privMassTempAreaEdit(state, action) {
  
  return state;
}
// ---------------------------------------

export default leftColonePartReducer;
