import { LOCATION_CHANGE } from 'react-router-redux'
import { fetchList } from './actions'

export default (action, dispatch, state) => {

  if (action.type === LOCATION_CHANGE
  && action.payload.pathname === '/categories') {
    dispatch(fetchList())
  }

}
