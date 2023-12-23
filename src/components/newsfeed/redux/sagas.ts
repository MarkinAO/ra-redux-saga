import axios from "axios";
import { put, retry, spawn, takeLatest } from "redux-saga/effects";
import { PayloadAction } from '@reduxjs/toolkit';
import { setError, setPosts } from "./postsSlice";

function* handleGetPostsSaga(action: PayloadAction<number>): Generator {    
    try {
        const count = Infinity;
        const delay = 1000;
        const data = yield retry(count, delay, getPostsQuery, action.payload);
        yield put(setPosts(data));
    } catch (error: any) {
        yield put(setError(error?.message));
    }   
}

function* watchGetStartPostsSaga(): Generator {
    yield takeLatest("posts/getStartPosts", handleGetPostsSaga)
}

function* watchGetPostsSaga(): Generator {
    yield takeLatest("posts/getPosts", handleGetPostsSaga)
}

export async function getPostsQuery(lastPostId: number) {
    let url = import.meta.env.VITE_URL_NEWSFEED;
    if(lastPostId) {
        url = url + `?lastSeenId=${lastPostId}`;
    }
    return await axios.get(url).then(res => {
                        if(res.status === 200) {                            
                            return res.data
                        }
                    })    
}

export default function* sagas(): Generator {
    yield spawn(watchGetStartPostsSaga);
    yield spawn(watchGetPostsSaga);
}