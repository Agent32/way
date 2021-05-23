
export const changeObjInMass = (arrayOfProps, needChangePropNameStr, needChangePropNameValue, newValueStr) =>
{
  return arrayOfProps.map ((current, count) => {
    if (current[needChangePropNameStr] === needChangePropNameValue) { current[newValueStr]= !current[newValueStr]}
    return current
  })

}