import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

import { searchUserActions } from '../actions';
import { SearchUserService } from '../services/search-user.service';


@Injectable()
export class SearchEffects {
    constructor(private actions$: Actions, private searchUserService: SearchUserService) { }

    readonly search$ = createEffect(() =>
        this.actions$.pipe(
            ofType(searchUserActions.search),
            switchMap((action) => {
                return this.searchUserService.search(action?.userName).pipe(
                    map((searchResponse) =>
                        searchUserActions.searchSuccess({ searchResult: searchResponse }),
                    ),
                    catchError(() =>
                        of(
                            searchUserActions.searchFailed({
                                error: 'failed to get search result',
                            }),
                        ),
                    ),
                );
            }),
        ),
    );
}