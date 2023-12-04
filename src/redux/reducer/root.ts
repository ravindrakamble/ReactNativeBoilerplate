import { combineReducers } from '@reduxjs/toolkit'
import { api } from '@api/ApiService'
import sampleReducer from '@redux/reducer/sampleReducer'

const rootReducer = combineReducers({
  sample: sampleReducer,
  [api.reducerPath]: api.reducer,
})

export default rootReducer
