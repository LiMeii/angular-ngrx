import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { searchedGitUserLists, searchedGitUserCount } from 'src/app/store/search/selectors';

@Component({
    selector: 'app-search-result',
    templateUrl: './search-result.component.html',
    styleUrls: ['./search-result.component.scss'],
})
export class SearchResultComponent implements OnInit {
    public userLists$ = this.store.select(searchedGitUserLists);
    public userCount$ = this.store.select(searchedGitUserCount);

    constructor(private store: Store) { }

    ngOnInit() { }

}
