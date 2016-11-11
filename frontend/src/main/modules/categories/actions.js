import { requestAct, dispatchRequest } from '../../common/redux'
import * as CategoryApi from '../../api/categories'

const PREFIX = 'CATEGORIES_';

export const FETCH_LIST = requestAct(`${PREFIX}_FETCH_LIST`);

export const fetchList = () =>
  dispatchRequest({
    type: FETCH_LIST,
    request: CategoryApi.list()
  })
