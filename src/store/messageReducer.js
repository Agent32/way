import { cloneDeep } from "lodash";
// ========================================
const POST_PRIVATE_MESSAGE = "POST-PRIVATE-MASSAGE";
const EDIT_PM_AREA = "EDIT-PM-AREA";
// ========================================
export const pmSendActionCreator = (id, text) => ({
  type: POST_PRIVATE_MESSAGE,
  id: id,
  text: text,
});
export const editPmTempActionCreator = (text) => ({
  type: EDIT_PM_AREA,
  text: text,
});
// ========================================

//state= this._state.massagePart//
const init = {
  dialogsMain: [
    {
      id: 0,
      name: "Борян",
      path: "/message/test",
      userDialogs: [
        "Борян: Еп, никитин баланс",
        "Я: Похуй",
        "Борян: Калаш с отдачей ХК?",
        "Борян: мы абузим",
        "Я: Лах",
      ],
    },
    {
      id: 1,
      name: "Саня",
      path: "/message/test2",
      userDialogs: [
        "Саня: Объявляю крестовый поход на Харьков",
        "Саня: Ну отслужил и иди на пограмиста",
        "Я: Отслужил тебе за зеку, проверяй",
        "Саня: Это и есть прогрессивный налог",
        "Я: Сасай кудасай",
      ],
    },
  ],
  changedText: {
    PMtext: "",
  },
};
// ========================================
function messageReducer(state = init, action) {
  switch (action.type) {
    // --------------

    case POST_PRIVATE_MESSAGE: {
      return _postMessage(state, action);
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
function _postMessage(state, action) {
  const currState = cloneDeep(state);
  const curr = "Я: " + state.changedText.PMtext;
  currState.dialogsMain[action.id].userDialogs.push(curr);
  currState.changedText.PMtext = "";
  return currState;
}
// ---------------------------------------
function _privMassTempAreaEdit(state, action) {
  return {
    ...state,
    changedText: { ...state.changedText, PMtext: action.text },
  };
}
// ---------------------------------------

export default messageReducer;
