import { createSelector } from 'reselect';

const getUserState = state => state.user;

export const getUsers = createSelector(
  [getUserState],
  ({ ids, entities }) => ids.map(id => entities[id]),
);