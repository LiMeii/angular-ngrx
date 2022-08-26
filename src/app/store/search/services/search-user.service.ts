import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SearchResult } from '../models/search-user.model';


@Injectable({ providedIn: 'root' })

export class SearchUserService {
    constructor(private http: HttpClient) { }

    public search(userName: string): Observable<SearchResult> {
        const url = `https://api.github.com/search/users?q=${userName}`
        return this.http.get<SearchResult>(url);
    }
}