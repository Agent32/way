const state = {
  // ========================================
  bodyPart: {
  // ========================================
  postsWall: [
    {
      avatarImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU",
      text: "I hate my life",
      date: "27.01.21",
      likes: 2,
    },
    {
      avatarImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU",
      text: "Fuck de system",
      date: "23.02.21",
      likes: 5,
    },
  ],
  // ========================================
  dataMass :[
    "https://www.vokrug.tv/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg",
    "Anon",
    "2 jan",
    "Minsk",
    "HNAGH-11",
    "https://learn.javascript",
  ],
},
// ========================================
massagePart:{
// ========================================
  
  dialogsMain: [
    {
      id: 1,
      name: "Борян",
      path: "/massage/test",
      userDialogs: ["Борян: Еп, никитин баланс", "Я: Похуй", "Борян: Калаш с отдачей ХК?", "Борян: мы абузим", "Я: Лах"],
    },
    {
      id: 2,
      name: "Саня",
      path: "/massage/test2",
      userDialogs: [
        "Саня: Объявляю крестовый поход на Харьков",
        "Саня: Ну отслужил и иди на пограмиста",
        "Я: Отслужил тебе за зеку, проверяй",
        "Саня: Это и есть прогрессивный налог",
        "Я: Сасай кудасай"
      ],
    },
  ],
},
// ========================================
leftColonePart:{
  friendPanel: [ 
    {avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9UFLmQd7NpWuL9uIZGl7dhgdZzvZNHfBUnQ&usqp=CAU', url: '/profile'},  
    {avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGrJrIYwuzxXd1wyofUM2TS9CDfUCYJr0Qxw&usqp=CAU', url: '/profile'},
    {avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-W5InZ2e1xZmvfkOOMmoOK0hFfVLJyJW7cQ&usqp=CAU', url: '/profile'},
    {avatar:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbnjfsdxdZA8BDLxwd4GMC7zB10_SOuHk8KA&usqp=CAU', url: '/profile'},
   
  ]
}
  
};

function addPostWall (postText)
{
  let curr= {avatarImg:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU",
  text: postText,
  date: "15.04.21",
  likes: 0}
  
  
  state.bodyPart.postsWall.push(curr)
  debugger
}

export {addPostWall}
export default state;
