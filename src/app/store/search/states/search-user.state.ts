import { GitUser } from '../models/search-user.model';

export interface State {
    isLoading: boolean;
    error?: string;
    searchGitUserResponse: GitUser;
}

export const initialState: State = {
    isLoading: false,
    error: undefined,
    searchGitUserResponse: {} as GitUser
}