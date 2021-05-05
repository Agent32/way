import profileStyle from './profileStatus.module.css'
import React from "react";
class ProfileStatus extends React.Component {
     
    state= { 
        showForm: false
    }


    
 render () { 
const textFunk = () => 
{
    return <span onDoubleClick={ () => this.setState({showForm:true}) }> {this.props.quote} </span>
}
const textForm = () => 
{
    return <input autoFocus={true} value= {this.props.quote} onBlur={() => this.setState({showForm:false}) } />
}

    return (
  
    <div className={profileStyle.main} > { this.state.showForm ?  textForm() : textFunk() }</div>
  
    )
  }
}
export default ProfileStatus