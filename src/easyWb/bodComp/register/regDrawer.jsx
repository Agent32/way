import reg from "./reg.module.css";
import { Redirect} from "react-router-dom";
import { Field, reduxForm } from 'redux-form'
import { renderField, inputCondition } from "../../commonComponent/inputErorPanel/input";



//---------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------
    const maxLength10 = inputCondition.maxLength(10)
    const minLength2 = inputCondition.minLength(2)

//---------------------------------------------------------------------------------------------
function RegDrawer(props) {
  const ContactForm = reduxForm({
    form: 'registerForm'
  })(RegForm)
//-----------------------****------------------------------
   function RegForm  (props)
{
  const {  pristine, submitting } = props
  return(
    <form className={reg.form} onSubmit={props.handleSubmit }>
    <div> <Field component="input" name="firstName" label={`First Name`} 
    component={renderField}
     validate={[inputCondition.required, maxLength10, minLength2]}
    /> 
     <Field component="input" name="lastName"  label={`Second Name`} 
     component={renderField}
    validate={[inputCondition.required, maxLength10, minLength2]}
    /></div>
    
    <div> <Field component="input" name="email" label={`email`}
     component={renderField}
     validate={[inputCondition.required,  inputCondition.email ]}
     /> </div>

    <div> <Field component="input" name="adressCountry" label={`Country`} 
         component={renderField}
         validate={[inputCondition.required,  maxLength10 ]}
    />  
    <Field component="input" name="adressCity" label={`City`} 
    component={renderField}
    validate={[inputCondition.required,  maxLength10 ]}
    /> </div>
    <div><Field component="input" name="quote" label={`qwote`} 
      component={renderField}
      validate={[  minLength2 ]}
    /> </div>
    <div> <Field component="input" name="picture" placeholder={`Avatar Url`} /> </div>
    <div> Born:    <Field component="input" name="isFollow" type={`checkbox`}/>Yes </div>
    
    <div> <button  type="submit"  disabled={pristine || submitting}> Send </button> {` `}
       
    </div>

    </form>
    )
}

//-----------------------****------------------------------

//if logined then redirect to profile
  return <div className={reg.main}>
    <ContactForm onSubmit={props.subitRegToServer} />
    </div>;
}


//=============================================================
export default RegDrawer;


