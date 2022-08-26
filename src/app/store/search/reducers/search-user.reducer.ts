import { Action, createReducer, on } from '@ngrx/store';
import { initialState, State } from '../states';
import { searchActions } from '../actions';


const _reducer = createReducer<State>(
    initialState,
    on(searchActions.search, (state) => ({
        ...state,
        isLoading: true,
        error: undefined
    })),

    on(searchActions.searchSuccess, (state, action) => ({
        ...state,
        searchGitUserResponse: action.searchResponse,
        isLoading: false,
        error: undefined
    })),

    on(searchActions.searchFailed, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.error
    }))
)

export function reducer(state: State | undefined, action: Action): State {
    return _reducer(state, action);
}