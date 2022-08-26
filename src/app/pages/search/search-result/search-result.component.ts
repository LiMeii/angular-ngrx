import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { searchUserActions } from 'src/app/store/search/actions';
import { SearchResult } from 'src/app/store/search/models/search-user.model';
import { searchedGitUserLists, searchedGitUserCount } from 'src/app/store/search/selectors';

@Component({
    selector: 'app-search-result',
    templateUrl: './search-result.component.html',
    styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
    public userLists$ = this.store.select(searchedGitUserLists);
    public userCount$ = this.store.select(searchedGitUserCount);
    // public searchedKeyword$ = this.store.select(searchedKeyword);

    private searchKeyword: string = '';

    constructor(
        private store: Store
    ) { }

    ngOnInit() {
        // this.searchedKeyword$.subscribe((val) => {
        //   this.searchKeyword = val;
        // });

        this.userCount$.subscribe(res=> console.log(`here is the result count ${res}`));

        this.userLists$.subscribe(res=> {
            console.log(`here is the result: ${JSON.stringify(res)}`)
        });
    }

}
