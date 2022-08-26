import { SearchResult } from '../models/search-user.model';

export interface State {
    isLoading: boolean;
    error?: string;
    searchResponse: SearchResult;
}

export const initialState: State = {
    isLoading: false,
    error: undefined,
    searchResponse: {} as SearchResult
}