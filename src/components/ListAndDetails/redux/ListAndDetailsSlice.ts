import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type listItem = {
    id: number
    name: string
    price: number
    content?: string
}

export interface LAD {
    list: listItem[]
    item: listItem | null
    load: boolean
    error?: string | null
}

const initialState: LAD = {
    list: [],
    item: null,
    load: false
}

export const LADSlice = createSlice({
  name: 'LAD',
  initialState,
  reducers: {
    getList: (state) => {
      state.load = true
    },
    setList: (state, action: PayloadAction<listItem[]>) => {
        state.list = action.payload
        state.load = false
        state.error = null
    },
    getItem: (state, action: PayloadAction<string>) => {
        state.load = true
    },
    setItem: (state, action: PayloadAction<listItem>) => {
        state.item = action.payload
        state.load = false
        state.error = null
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
      state.load = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { getList, setList, getItem, setItem, setError } = LADSlice.actions
export default LADSlice.reducer
