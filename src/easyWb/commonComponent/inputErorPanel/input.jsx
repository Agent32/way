import inputStyle from './input.module.css'

//---------------------------------------------------------------------------------------------
export const inputCondition =
{
  required :  (value) => {return (value || typeof value === 'number' ? undefined : 'Required')},
   maxLength: (max) => (value) => { return (
    value && value.length > max ? `Max is ${max}` : undefined)},
    minLength: min => value =>
  value && value.length < min ? `Min is ${min}` : undefined,
   number: value =>
  value && isNaN(Number(value)) ? 'Must be a numb' : undefined,
 minValue : min => value =>
  value && value < min ? `Must be at least ${min}` : undefined,
   email: value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined,


}

/* const required = value => (value || typeof value === 'number' ? undefined : 'Required')
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
      : undefined */
//---------------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------------

    export const renderField = ({
      input,
      label,
      type,
      meta: { touched, error, warning }
    }) => (
      // className={reg.erors}
        <span className={inputStyle.field + " " +(touched && error ?  inputStyle.erors: '' )}>
          <input {...input} 
          placeholder={touched && error ? error : label} 
          type={type} />
         
        {/*   {touched &&
            ((error && <span>{error}</span>) ||
              (warning && <span>{warning}</span>))} */}
              
        </span>
     
    )
//---------------------------------------------------------------------------------------------