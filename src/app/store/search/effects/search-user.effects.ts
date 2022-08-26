import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, switchMap, map } from 'rxjs/operators';
import { of } from 'rxjs';

import { searchActions } from '../actions';
import { SearchUserService } from '../services/search-user.service';


@Injectable()
export class SearchEffects {
    constructor(private actions$: Actions, private searchUserService: SearchUserService) { }

    readonly search$ = createEffect(() =>
        this.actions$.pipe(
            ofType(searchActions.search),
            switchMap((action) => {
                return this.searchUserService.search(action?.userName).pipe(
                    map((searchResponse) =>
                        searchActions.searchSuccess({ searchResponse }),
                    ),
                    catchError(() =>
                        of(
                            searchActions.searchFailed({
                                error: 'failed to get search result',
                            }),
                        ),
                    ),
                );
            }),
        ),
    );
}