import reg from "./reg.module.css";
import { Redirect} from "react-router-dom";
import { Field, reduxForm } from 'redux-form'

//---------------------------------------------------------------------------------------------
const required = value => (value || typeof value === 'number' ? undefined : 'Required')
const maxLength = max => value =>
  value && value.length > max ? `Max is ${max}` : undefined

  const minLength = min => value =>
  value && value.length < min ? `Min is ${min}` : undefined
  const number = value =>
  value && isNaN(Number(value)) ? 'Must be a numb' : undefined
const minValue = min => value =>
  value && value < min ? `Must be at least ${min}` : undefined
  const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined
    const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric'
    : undefined
export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number'
    : undefined
//---------------------------------------------------------------------------------------------
    const maxLength10 = maxLength(10)
    const minLength2 = minLength(2)

    const renderField = ({
      input,
      label,
      type,
      meta: { touched, error, warning }
    }) => (
      // className={reg.erors}
        <span className={reg.field + " " +(touched && error ?  reg.erors: '' )}>
          <input {...input} 
          placeholder={touched && error ? error : label} 
          type={type} />
         
          {touched &&
            ((error && <span>{error}</span>) ||
              (warning && <span>{warning}</span>))}
              
        </span>
     
    )
//---------------------------------------------------------------------------------------------
function RegDrawer(props) {
  const ContactForm = reduxForm({
    form: 'registerForm'
  })(RegForm)
//-----------------------****------------------------------
   function RegForm  (props)
{

  return(
    <form className={reg.form} onSubmit={props.handleSubmit }>
    <div> <Field component="input" name="firstName" label={`First Name`} 
    component={renderField}
     validate={[required, maxLength10, minLength2]}
    />  <Field component="input" name="lastName"  placeholder={`Second Name`} 
    validate={[required, maxLength10, minLength2]}
    /></div>
    
    <div> <Field component="input" name="email" placeholder={`email`} /> </div>
    <div> <Field component="input" name="adressCountry" placeholder={`Country`} />  <Field component="input" name="adressCity" placeholder={`City`} /> </div>
    <div><Field component="input" name="quote" placeholder={`qwote`} /> </div>
    <div> <Field component="input" name="picture" placeholder={`Avatar Url`} /> </div>
    <div> Born:    <Field component="input" name="isFollow" type={`checkbox`}/>Yes </div>
    
    <div> <button > Send </button> {` `}
       
    </div>

    </form>
    )
}

function test (form)
{console.log(form)}

//-----------------------****------------------------------

//if logined then redirect to profile
  return <div className={reg.main}>
    <ContactForm onSubmit={props.subitRegToServer} />
    </div>;
}


//=============================================================
export default RegDrawer;


