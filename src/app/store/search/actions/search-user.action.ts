import { createAction, props } from '@ngrx/store';
import { actionKey } from '../keys';
import { GitUser } from '../models/search-user.model';

const actionPrefix = `${actionKey}[API]`;

export const search = createAction(`${actionPrefix} Search`, props<{ userName: string }>());

export const searchSuccess = createAction(`${actionPrefix} Search Success`, props<{ searchResponse: GitUser }>());

export const searchFailed = createAction(`${actionPrefix} Search Failed`, props<{ error: string }>())