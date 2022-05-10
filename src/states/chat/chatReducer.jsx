import { types } from '../../types/types'

export const chatReducer = (state, action) => {
  switch (action.type) {
    case types.usersLoad:
      return { ...state, users: [...action.payload] }

    case types.chatActive:
      if (state.chatActive === action.payload) return state
      return { ...state, chatActive: action.payload, messages: [] }

    case types.newMsg:
      if (
        state.chatActive === action.payload.from ||
        state.chatActive === action.payload.to
      ) {
        return { ...state, messages: [...state.messages, action.payload] }
      }
      return { ...state }

    default:
      return state
  }
}
