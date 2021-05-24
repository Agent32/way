import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getNewsPostsTC } from "../../../store/newsReducer";
import LoadingModule from "../../modules/loader/loader";
import NewsPage from "./newsDrawer";

function NewsConnectContainer(props) {
  useEffect(() => {
    props.getNewsPostsTC();
  }, []);

  return (
    <>
     {props.isSomethingLoading ? <LoadingModule /> : null}
      <NewsPage {...props} />
    </>
  );
}

// ========================================
const mapStateToProps = (state) => {
  return {
    newsList: state.newsPart.newsList,
    isSomethingLoading: state.commonPart.loadingModules.isSomethingLoading
  };
};

export default connect(mapStateToProps, { getNewsPostsTC })(
  NewsConnectContainer
);
