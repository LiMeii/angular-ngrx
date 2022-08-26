import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GitUser } from '../models/search-user.model';


@Injectable({ providedIn: 'root' })

export class SearchUserService {
    constructor(private http: HttpClient) { }

    public search(userName: string): Observable<GitUser> {
        const url = `https://api.github.com/users/${userName}`
        return this.http.get<GitUser>(url);
    }
}