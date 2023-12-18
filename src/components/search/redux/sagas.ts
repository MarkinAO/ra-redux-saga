import axios from "axios";
import { debounce, put, retry, spawn, takeLatest } from "redux-saga/effects";
import { PayloadAction } from '@reduxjs/toolkit';
import { searchSkillsRequest, searchSkillsSuccess, searchSkillsFailure, setInitialState } from "./skillsSlice";

function filterChangeSearchAction({ type }: any) {
    return type === "skills/changeSearchField";
}

function* handleChangeSearchSaga(action: PayloadAction<string>) {    
    if(action.payload.trim() !== '') {
        yield put(searchSkillsRequest(action.payload))
    } else {
        yield put(setInitialState())
    }    
}

function* handleSearchSkillsSaga(action: PayloadAction<string>) {
    try {
        const count = 3;
        const delay = 1000;        
        const data = yield retry(count, delay, searchSkills, action.payload);
        yield put(searchSkillsSuccess(data))
    } catch (error: any) {
        yield put(searchSkillsFailure(error?.message))
    }
}

function* watchChangeSearchSaga() {
    yield debounce(300, filterChangeSearchAction, handleChangeSearchSaga)
}

function* watchSearchSkillsSaga() {
    yield takeLatest("skills/searchSkillsRequest", handleSearchSkillsSaga)
}

export async function searchSkills(query: string) {
    const url = import.meta.env.VITE_URL_SEARCH + query;
    return await axios.get(url).then(res => {                
                        if(res.status === 200) {
                            return res.data
                        }
                    })    
}

export function* sagas() {
    yield spawn(watchChangeSearchSaga);
    yield spawn(watchSearchSkillsSaga);
}