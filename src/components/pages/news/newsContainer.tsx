import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { getNewsPostsTC } from "../../../store/newsReducer";
import { mainStateType } from "../../../store/rStore";
import LoadingModule from "../../modules/loader/loader";
import NewsPage from "./newsDrawer";


const mapStateToProps = (state: mainStateType) => {
  return {
    newsList: state.newsPart.newsList,
    isSomethingLoading: state.commonPart.loadingModules.isSomethingLoading
  };
};


const connector = connect(mapStateToProps, { getNewsPostsTC })
type PropsFromRedux = ConnectedProps<typeof connector>


function NewsConnectContainer(props: PropsFromRedux){
  useEffect(() => {
    props.getNewsPostsTC();
  }, []);

  return (
    <>
      {props.isSomethingLoading ? <LoadingModule /> : null}
      <NewsPage {...props} />
    </>
  )
}


// ========================================


export default connect(mapStateToProps, { getNewsPostsTC })(NewsConnectContainer);
