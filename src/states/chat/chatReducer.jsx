import { types } from '../../types/types'

export const chatReducer = (state, action) => {
  switch (action.type) {
    case types.usersLoad:
      return { ...state, users: [...action.payload] }

    default:
      return state
  }
}
