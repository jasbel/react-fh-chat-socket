import { types } from '../../types/types'

export const chatReducer = (state, action) => {
  switch (action.type) {
    case types.usersLoad:
      return { ...state, users: [...action.payload] }

    case types.chatActive:
      if (state.chatActive === action.payload) return state
      return { ...state, chatActive: action.payload, messages: [] }

    default:
      return state
  }
}
