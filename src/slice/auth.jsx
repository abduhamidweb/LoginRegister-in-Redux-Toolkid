import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  isLoading: false,
  loggedIn: false,
  error: null,
  user: null,
}
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // LOGIN
    loginUserStart: (state) => {
      state.isLoading = true
    },
    loginUserSuccess: (state) => {},
    loginUserFailure: (state) => {},
    // LOGIN
    registerUserStart: (state) => {
      state.isLoading = true
    },
    registernUserSuccess: (state) => {
      state.loggedIn = true
      state.isLoading = false
    },
    registerUserFailure: (state) => {
      state.isLoading = false
      state.error = 'Error registering user'
    },
  },
})
export const {
  loginUserStart,
  registerUserStart,
  registernUserSuccess,
  registerUserFailure,
} = authSlice.actions
export default authSlice.reducer
