import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { INews } from '../NewsPost';

export interface posts {
  list: INews[]
  load: boolean
  error: string | null
}

const initialState: posts = {
    list: [],
    load: false,
    error: null
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getStartPosts: (state) => {
        state.load = true
        state.error = null
    },
    getPosts: (state, action: PayloadAction<string>) => {
        state.load = true
        state.error = null
    },
    setPosts: (state, action: PayloadAction<INews[]>) => {
        state.load = false
        state.list = [...state.list, ...action.payload]
        state.error = null
    },
    setError: (state, action: PayloadAction<string>) => {
        state.error = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { getStartPosts, setError, setPosts, getPosts } = postsSlice.actions
export default postsSlice.reducer