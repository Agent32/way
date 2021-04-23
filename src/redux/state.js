import  massageReducer from './massageReducer'
import  bodyReducer from './bodyReducer'
// ========================================
const WALL_POST_PUBLISH = 'WALL-POST-PUBLISH'
const TEXTAREA_EDIT_WALL = 'TEXTAREA-EDIT-WALL'
const POST_PRIVATE_MASSAGE = 'POST-PRIVATE-MASSAGE'
const EDIT_PM_AREA = 'EDIT-PM-AREA'
// ========================================

export const wallPostActionCreator = () =>({type:WALL_POST_PUBLISH})
export const textEditWallActionCreator = (text) =>({type:TEXTAREA_EDIT_WALL, text:text})
export const pmSendActionCreator = (id,text) =>({type:POST_PRIVATE_MASSAGE, id: id, text:text})
export const editPmTempActionCreator = (text) =>({type:EDIT_PM_AREA,text:text})

// ========================================

const store = {
  _state: {
    // ========================================
    bodyPart: {
      // ---------------------------------------
      postsWall: [
        {
          avatarImg:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU',
          text: 'I hate my life',
          date: '27.01.21',
          likes: 2
        },
        {
          avatarImg:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU',
          text: 'Fuck de system',
          date: '23.02.21',
          likes: 5
        }
      ],
      changedText: {
        wallText: '',
        PMtext: ''
      },
      // ---------------------------------------
      dataMass: [
        'https://www.vokrug.tv/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg',
        'Anon',
        '2 jan',
        'Minsk',
        'HNAGH-11',
        'https://learn.javascript'
      ]
    },
    // ========================================
    massagePart: {
      // ---------------------------------------

      dialogsMain: [
        {
          id: 0,
          name: 'Борян',
          path: '/massage/test',
          userDialogs: [
            'Борян: Еп, никитин баланс',
            'Я: Похуй',
            'Борян: Калаш с отдачей ХК?',
            'Борян: мы абузим',
            'Я: Лах'
          ]
        },
        {
          id: 1,
          name: 'Саня',
          path: '/massage/test2',
          userDialogs: [
            'Саня: Объявляю крестовый поход на Харьков',
            'Саня: Ну отслужил и иди на пограмиста',
            'Я: Отслужил тебе за зеку, проверяй',
            'Саня: Это и есть прогрессивный налог',
            'Я: Сасай кудасай'
          ]
        }
      ],
      changedText: {
         PMtext: ''
      },
    },
    // ========================================
    leftColonePart: {
      friendPanel: [
        {
          avatar:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9UFLmQd7NpWuL9uIZGl7dhgdZzvZNHfBUnQ&usqp=CAU',
          url: '/profile'
        },
        {
          avatar:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGrJrIYwuzxXd1wyofUM2TS9CDfUCYJr0Qxw&usqp=CAU',
          url: '/profile'
        },
        {
          avatar:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-W5InZ2e1xZmvfkOOMmoOK0hFfVLJyJW7cQ&usqp=CAU',
          url: '/profile'
        },
        {
          avatar:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbnjfsdxdZA8BDLxwd4GMC7zB10_SOuHk8KA&usqp=CAU',
          url: '/profile'
        }
      ]
    }
  },
  // ========================================

  _postWallComment () {
    const curr = {
      avatarImg:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU',
      text: this._state.bodyPart.changedText.wallText,
      date: '15.04.21',
      likes: 0
    }
    this._state.bodyPart.postsWall.push(curr)
    this._state.bodyPart.changedText.wallText = ''
    this._observerHolder(store)
  },
  // ---------------------------------------
  _postMassage (id) {
    const curr = 'Я: ' + this._state.massagePart.changedText.PMtext
    this._state.massagePart.dialogsMain[id].userDialogs.push(curr)
    this._state.massagePart.changedText.PMtext = ''
    this._observerHolder(store)
  },
  // ---------------------------------------
  _textAreaEditWall (postText) {
    this._state.bodyPart.changedText.wallText = postText
    this._observerHolder(store)
    // state.bodyPart.changedText.wallText = '' state.bodyPart.changedText.wallText+
  },
   // ---------------------------------------
   _privMassTempAreaEdit (postText) {
    this._state.massagePart.changedText.PMtext = postText
    this._observerHolder(store)
  },
  // ---------------------------------------
  _observerHolder () {
    console.log('state observer dont get item')
  },
  // ========================================
  getRenderCallback (observer) {
    this._observerHolder = observer
  },
  // ---------------------------------------
  getState () {
    return this._state
  },
  // ---------------------------------------
  dispatch (obj) {

    switch (obj.type) {
      // --------------
      case POST_PRIVATE_MASSAGE: {
        this._postMassage(obj.id)
        break
      }
      // --------------
      case TEXTAREA_EDIT_WALL: {
        this._textAreaEditWall(obj.text)
        break
      }
      // --------------
      case WALL_POST_PUBLISH: {
        this._postWallComment()
        break
      }
      case EDIT_PM_AREA: {
        this._privMassTempAreaEdit(obj.text)
        break
      }
      // --------------
      default:
        console.log('state dispatch break')
    }
  } 

  // ========================================

  // ---------------------------------------
}

// ========================================

export default store
