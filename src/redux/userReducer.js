import { cloneDeep } from "lodash";
// ========================================
const FIND = "FIND";

// ========================================
export const pmSendActionCreator = (id, text) => ({
  type: FIND,
  id: id,
  text: text,
});

// ========================================

//state= this._state.massagePart//
const init = {
  usersList:[
  {id:1, 
  name:'Борян',
  secondName: 'Полякович',
  adressCountry: 'Россия',
  adressCity: 'Москва',
  userQuote: 'Обколится своим СИ и начинают бредить)',
  avatarImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUJ9LQeTvg3D7ZEtvNdY8349V-HLFz0UelMw&usqp=CAU',
  },
  {id:2, 
    name:'Cаня',
    secondName: 'Зауральский',
    adressCountry: 'Россия',
    adressCity: 'Москва',
    userQuote: 'смотрел обзоры второй чивы? Вкатываться будешь? Релиз 8 june',
    avatarImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUJ9LQeTvg3D7ZEtvNdY8349V-HLFz0UelMw&usqp=CAU',
   },
   {id:3, 
    name:'Никита',
    secondName: 'Питерский',
    adressCountry: 'Британия',
    adressCity: 'Лондон',
    userQuote: 'вот нашел ты ксюху, считай дни твои сочтены',
    avatarImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUJ9LQeTvg3D7ZEtvNdY8349V-HLFz0UelMw&usqp=CAU',
   },
   {id:4, 
    name:'Барак',
    secondName: 'Обэма',
    adressCountry: 'США',
    adressCity: 'Калифорния',
    userQuote: 'Хачу сказать этим россиянам...',
    avatarImg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUJ9LQeTvg3D7ZEtvNdY8349V-HLFz0UelMw&usqp=CAU',
   },
   
  ],
 
};
// ========================================
function usersReducer(state = init, action) {
  switch (action.type) {
    // --------------

    case FIND: {
      return _postMassage(state, action);
    }

    // --------------
    default:
      return state;
  }
}
// ========================================

// ---------------------------------------
function _postMassage() {

}
// ---------------------------------------


export default usersReducer;
