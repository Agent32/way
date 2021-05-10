import profileStyle from "./profileStatus.module.css";
import React from "react";

class ProfileStatus extends React.Component {
  state = {
    showForm: false,
    tempQuoteText: 1,
  };

  //this.props.editQuote()
  //this.setState({tempQuoteText:this.areaNewPost.current.value})
  render() {
    const areaNewPost = React.createRef();
    const textFunk = () => {
      return (
        <span onDoubleClick={() => this.setState({ showForm: true })}>
          {" "}
          {this.props.quote}{" "}
        </span>
      );
    };
    const textForm = () => {
      return (
        <input
          ref={areaNewPost}
          onChange={() => this.props.editQuote(areaNewPost.current.value)}
          autoFocus={true}
          value={this.props.quote}
          onBlur={() => {
            this.setState({ showForm: false });
            this.props.updateQuoteOnServer();
          }}
        />
      );
    };

    return (
      <div className={profileStyle.main}>
        {" "}
        {this.state.showForm && this.props.isLoadinFinished
          ? textForm()
          : textFunk()}
      </div>
    );
  }
}
export default ProfileStatus;

{
  /* <ProfileStatus
quote={userData.quote}
editQuote={props.editQuote}
isLoadinFinished={props.changedText.isLoadinFinished}
updateQuoteOnServer={props.updateQuoteOnServer}
/>




 */
}
