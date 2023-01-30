import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  isLoading: false,
  loggedIn: false,
  error: null,
  user: null,
  count: 0,
};
const backgraung = {
  color: "#FFFFFF",
  backGraundColor: "#0000",
}
// console.log(initialState.count);
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  backgraung,

  reducers: {
    changBackgraund: (state2) => {
      state2.color = `fff`
    },
    // LOGIN
    loginUserStart: (state) => {
      state.isLoading = true
    },
    setCount: (state) => {
      state.count += 1
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
  changBackgraund,
  setCount,
} = authSlice.actions
export default authSlice.reducer