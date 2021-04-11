import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

function getProfile()
{
  const dataMass = [
    "https://www.vokrug.tv/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg",
    "Anon",
    "2 jan",
    "Minsk",
    "HNAGH-11",
    "https://learn.javascript",
  ];

  return dataMass
}

function getWall()
{
  const postsWall = [
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
  ];

  return postsWall
}


export {getProfile, getWall}
