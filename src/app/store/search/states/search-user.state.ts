import { SearchResult } from '../models/search-user.model';

export interface State {
    isLoading: boolean;
    error?: string;
    searchResult: SearchResult;
    searchedKeywords: string;
}

export const initialState: State = {
    isLoading: false,
    error: undefined,
    searchResult: {} as SearchResult,
    searchedKeywords: ''
}