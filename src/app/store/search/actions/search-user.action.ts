import { createAction, props } from '@ngrx/store';
import { actionKey } from '../keys';
import { SearchResult } from '../models/search-user.model';

const actionPrefix = `${actionKey}[API]`;

export const search = createAction(`${actionPrefix} Search`, props<{ userName: string }>());

export const searchSuccess = createAction(`${actionPrefix} Search Success`, props<{ searchResult: SearchResult, searchedKeywords: string }>());

export const searchFailed = createAction(`${actionPrefix} Search Failed`, props<{ error: string }>())