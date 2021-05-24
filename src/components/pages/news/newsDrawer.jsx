import news from "./news.module.css";

function NewsPage(props) {
  const newsPostList = props.newsList.map((current, count) => {
    return (
      <div className={news.post}>
        <div className={news.autorData}>
          {" "}
          <img src={current.owner.picture} className={news.smallAva} />
          {`${current.owner.firstName} ${current.owner.lastName}`} <hr />{" "}
        </div>
        <div className={news.infoBody}>
          <img src={current.image} className={news.smallAva} alt={`DogPict`}/>
           {current.text} </div>
      </div>
    );
  });
  //--------------------------------------------------------
  return <div className={news.main}>{newsPostList}</div>;
}

export default NewsPage;
