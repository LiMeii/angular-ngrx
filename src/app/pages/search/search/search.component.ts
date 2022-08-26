import { Component, ElementRef, OnDestroy, OnInit, ViewChild, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subject, Subscription, merge, of, debounceTime, map, switchMap, distinctUntilChanged, filter } from 'rxjs';
import { searchUserActions } from 'src/app/store/search/actions';
import { isLoading, searchedKeywords } from 'src/app/store/search/selectors';


@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
    @ViewChild('search') searchElement!: ElementRef;
    @ViewChild('searchContainer') searchContainer!: ElementRef;

    public onSearch$ = new Subject<KeyboardEvent>();
    private validSearch$!: Observable<any>;
    private emptySearch$!: Observable<any>;
    private subscription!: Subscription;

    public searchVal: string = '';

    public isSearchLoading$ = this.store.select(isLoading);

    public searchedKeyword$ = this.store.select(searchedKeywords);

    constructor(
        private ngZone: NgZone,
        private store: Store,
        private router: Router,
    ) { }

    ngOnInit() {
        this.onSearchKeyupListener();

        this.searchedKeyword$.subscribe((val) => {
            if (this.router.url === '/search/result') this.searchVal = val;
        });
    }

    onSearchKeyupListener() {
        this.validSearch$ = this.onSearch$.pipe(
            debounceTime(500),
            map((event) => (<HTMLInputElement>event.target).value),
            distinctUntilChanged(),
            filter((input) => input !== ''),
            switchMap((searchText) => {
                this.ngZone.run(() => {
                    this.store.dispatch(
                        searchUserActions.search({
                            userName: searchText,
                        }),
                    );
                });

                return of([]);
            }),
        );

        this.emptySearch$ = this.onSearch$.pipe(
            debounceTime(500),
            map((event) => (<HTMLInputElement>event?.target).value),
            filter((input) => input === ''),
            switchMap((data) => {
                return of([]);
            }),
        );

        this.subscription = merge(this.validSearch$, this.emptySearch$).subscribe();
    }


    public onClearSerch() {
        this.searchVal = '';
        this.searchElement.nativeElement.focus();
    }


    public onSearch() {
        this.ngZone.run(() => {
            this.store.dispatch(searchUserActions.search({ userName: this.searchVal?.trim() }));
        });
        this.router.url === '/search'
            ? this.router.navigate(['search/result'])
            : '';
    }

    ngOnDestroy() {
        this.subscription?.unsubscribe();
    }
}
