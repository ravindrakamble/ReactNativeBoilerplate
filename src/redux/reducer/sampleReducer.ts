import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ACTION } from '@utils/Constants'

const sampleSlice = createSlice({
  name: 'sample',
  initialState: {
    sampleData: undefined,
    loggedIn: false,
  },
  reducers: {
    changeLoginStatus(state, action: PayloadAction<boolean>) {
      state.loggedIn = action.payload
    },
    setData(state, action) {
      const { type, data, error } = action.payload
      console.log(error, data)
      switch (type) {
        case ACTION.USER_LOGIN:
          state.loggedIn = true
          break

        default:
          return state
      }
    },
  },
})

export const { changeLoginStatus, setData } = sampleSlice.actions

export default sampleSlice.reducer
