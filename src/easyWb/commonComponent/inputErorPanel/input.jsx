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

    export const bigField = ({
      input,
      label,
      type,
      meta: { touched, error, warning }
    }) => (
      // className={reg.erors}
        <span >
          <input {...input} 
          placeholder={touched && error ? error : label} 
          type={type} 
          className={inputStyle.bField + " " +(touched && error ?  inputStyle.erors: '' )}
          />
         
        {/*   {touched &&
            ((error && <span>{error}</span>) ||
              (warning && <span>{warning}</span>))} */}
              
        </span>
     
    )
//---------------------------------------------------------------------------------------------