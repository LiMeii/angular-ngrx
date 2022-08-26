import { Action, createReducer, on } from '@ngrx/store';
import { initialState, State } from '../states';
import { searchUserActions } from '../actions';


const _reducer = createReducer<State>(
    initialState,
    on(searchUserActions.search, (state) => ({
        ...state,
        isLoading: true,
        error: undefined
    })),

    on(searchUserActions.searchSuccess, (state, action) => ({
        ...state,
        searchResult: action.searchResult,
        isLoading: false,
        error: undefined
    })),

    on(searchUserActions.searchFailed, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error
    }))
)

export function reducer(state: State | undefined, action: Action): State {
    return _reducer(state, action);
}