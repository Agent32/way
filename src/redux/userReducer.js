import { cloneDeep } from "lodash";

// ========================================
const CHANGE_FOLLOW = "CHANGE-FOLLOW";
const GET_MORE_USERS = "GET-MORE-USERS";
// ========================================
export const changeUsrFollowAction = (id) => ({
  type: CHANGE_FOLLOW,
  id: id,
});
// --------------
export const getMoreUsrAction = (id) => ({
  type: GET_MORE_USERS,
  id: id,
});

// ========================================
//https://60885809a6f4a300174263e9.mockapi.io/Test
//state= this._state.massagePart//
const init = {
  usersList: [
    {
      id: 1,
      isFollow: true,
      name: "Борян",
      secondName: "Полякович",
      adressCountry: "Россия",
      adressCity: "Москва",
      userQuote: "Обколится своим СИ и начинают бредить)",
      avatarImg: "https://cdn.discordapp.com/emojis/814691159544561685.png?v=1",
    },
    {
      id: 2,
      isFollow: true,
      name: "Cаня",
      secondName: "Зауральский",
      adressCountry: "Россия",
      adressCity: "Москва",
      userQuote: "смотрел обзоры второй чивы? Вкатываться будешь? Релиз 8 june",
      avatarImg: "https://cdn.discordapp.com/emojis/814691159544561685.png?v=1",
    },
    {
      id: 3,
      isFollow: false,
      name: "Никита",
      secondName: "Питерский",
      adressCountry: "Британия",
      adressCity: "Лондон",
      userQuote: "вот нашел ты ксюху, считай дни твои сочтены",
      avatarImg: "https://cdn.discordapp.com/emojis/814691159544561685.png?v=1",
    },
    {
      id: 4,
      isFollow: false,
      name: "Барак",
      secondName: "Обэма",
      adressCountry: "США",
      adressCity: "Калифорния",
      userQuote: "Хачу сказать этим россиянам...",
      avatarImg: "https://cdn.discordapp.com/emojis/814691159544561685.png?v=1",
    },
  ],
};
// ========================================
function usersReducer(state = init, action) {
  switch (action.type) {
    // --------------

    case CHANGE_FOLLOW: {
      return _changeFollowed(state, action);
    }
    // --------------
    case GET_MORE_USERS: {
      return _getUsrs(state, action);
    }

    // --------------
    default:
      return state;
  }
}
// ========================================

// ---------------------------------------
function _changeFollowed(state, action) {
  
  return {
    ...state,
    usersList: state.usersList.map((now, id) => {
      if (now.id === action.id) {
        now.isFollow = !now.isFollow;
      }
      return now;
    }),
  };
}
// ---------------------------------------

function _getUsrs(state, action) {
  const pip= action.id.map( (now, count) => { if (now.id) return now }  )
 
  return {
    ...state, usersList: [...state.usersList, ...pip]

  };
}

export default usersReducer;
