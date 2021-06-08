import news from './news.module.css'
import React from "react";
import { connectorReturnType, PropsFromRedux } from './newsContainer'



const NewsPage :React.FunctionComponent<PropsFromRedux> = (props) => {
  const newsPostList = props.newsList.map((current) => {
    return (
      <div key={current.likes} className={news.post}>
        <div className={news.autorData}>
          {' '}
          <img src={current.owner.picture} alt={'owner'} className={news.smallAva} />
          {`${current.owner.firstName} ${current.owner.lastName}`} <hr />{' '}
        </div>
        <div className={news.infoBody}>
          <img src={current.image} className={news.image} alt={`DogPict`} />
          <div>
            {' '}
            {current.tags + ''}
            <hr />
          </div>
          <div> {current.text} </div>{' '}
        </div>
      </div>
    )
  })
  //--------------------------------------------------------
  return <div className={news.main}>{newsPostList}</div>
}

export default NewsPage
