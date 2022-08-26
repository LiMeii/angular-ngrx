import { createFeatureSelector, createSelector } from '@ngrx/store';
import { featurekey } from '../keys';
import * as searchStates from '../states';


const featureStateSelector = createFeatureSelector<searchStates.State>(featurekey);

export const isLoading = createSelector(featureStateSelector, (fs) => fs.isLoading);

export const searchResult = createSelector(featureStateSelector, (fs) => fs.searchResult);

export const searchedGitUserLists = createSelector(searchResult, (data) => data?.items);

export const searchedGitUserCount = createSelector(searchedGitUserLists, (data) => data?.length)

