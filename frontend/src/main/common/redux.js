
export const requestAct = prefix => ({
  REQUEST: `${prefix}__REQUEST`,
  SUCCESS: `${prefix}__SUCCESS`,
  FAILURE: `${prefix}__FAILURE`,
})

export const dispatchRequest = ({
  type: { REQUEST, SUCCESS, FAILURE },
  params = { },
  request,
}) => dispatch => { // redux-thunk
  dispatch({ type: REQUEST, ...params });
  return (request
    .then(response => dispatch({ type: SUCCESS, ...params, response }))
    .catch(error => dispatch({ type: FAILURE, ...params, error }))
  )
}
