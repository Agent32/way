import { cloneDeep } from "lodash";

// ========================================
const CHANGE_FOLLOW = "CHANGE-FOLLOW";
const GET_MORE_USERS = "GET-MORE-USERS";
const CHANGE_CURRENT_PAGE = "CHANGE-CURRENT-PAGE";
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
// --------------
export const changeCurrPageAction = (id) => ({
  type: CHANGE_CURRENT_PAGE,
  id: id,
});
// --------------
//------------------------------------------
const friendTest = [
  {
    id: 998,
    isFollow: true,
    name: "Борян",
    secondName: "Полякович",
    adressCountry: "Россия",
    adressCity: "Москва",
    userQuote: "Обколится своим СИ и начинают бредить)",
    avatarImg: "https://cdn.discordapp.com/emojis/814691159544561685.png?v=1",
  },
  {
    id: 997,
    isFollow: true,
    name: "Cаня",
    secondName: "Зауральский",
    adressCountry: "Россия",
    adressCity: "Москва",
    userQuote: "смотрел обзоры второй чивы? Вкатываться будешь? Релиз 8 june",
    avatarImg: "https://cdn.discordapp.com/emojis/814691159544561685.png?v=1",
  },
  {
    id: 996,
    isFollow: false,
    name: "Никита",
    secondName: "Питерский",
    adressCountry: "Британия",
    adressCity: "Лондон",
    userQuote: "вот нашел ты ксюху, считай дни твои сочтены",
    avatarImg: "https://cdn.discordapp.com/emojis/814691159544561685.png?v=1",
  },
  {
    id: 995,
    isFollow: false,
    name: "Барак",
    secondName: "Обэма",
    adressCountry: "США",
    adressCity: "Калифорния",
    userQuote: "Хачу сказать этим россиянам...",
    avatarImg: "https://cdn.discordapp.com/emojis/814691159544561685.png?v=1",
  },
];
// ========================================
//https://60885809a6f4a300174263e9.mockapi.io/Test
//state= this._state.massagePart//

/*
https://60885809a6f4a300174263e9.mockapi.io/Test/?id=5 
https://60885809a6f4a300174263e9.mockapi.io/Test/?page=1&limit=10
https://mockapi.io/docs
*/

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
  pageSettings: {
    currentPage: 1,
    allUsersCount: 16,
    maxUsersAtPage: 4,
  },
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
    case CHANGE_CURRENT_PAGE: {
      return _usersPageSwitch(state, action);
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
  return {
    ...state,
    usersList: [...friendTest, ...action.id],
  };
}

// ---------------------------------------

function _usersPageSwitch(state, action) {
  return {
    ...state,
    pageSettings: { ...state.pageSettings, currentPage: action.id },
  };
}

export default usersReducer;
