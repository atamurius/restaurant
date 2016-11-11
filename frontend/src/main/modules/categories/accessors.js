import { createSelector } from 'reselect'

export const categories = state => state.categories

export const categoriesList = createSelector(categories, c => c.get('list'))
