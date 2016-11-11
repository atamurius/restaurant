import * as Actions from './actions'
import { fromJS, Record } from 'immutable'

const Category = Record({
  id: 0,
  name: '',
})

const initialState = fromJS({
  list: []
})

let id = 0;

export default (state = initialState, action) => {
  switch (action.type) {

    case Actions.FETCH_LIST.SUCCESS:
      return state.set('list', fromJS(action.response.data._embedded.categories));

    default:
      return state;
  }
}
