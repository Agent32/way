import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getNewsPostsTC } from "../../../store/newsReducer";
import NewsPage from "./newsDrawer";

function NewsConnectContainer(props) {
  useEffect(() => {
    props.getNewsPostsTC();
  }, []);

  return (
    <>
      <NewsPage {...props} />
    </>
  );
}

// ========================================
const mapStateToProps = (state) => {
  return {
    newsList: state.newsPart.newsList,
  };
};

export default connect(mapStateToProps, { getNewsPostsTC })(
  NewsConnectContainer
);
