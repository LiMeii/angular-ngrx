import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchStoreModule } from 'src/app/store/search/search-store.module';

import { SearchUserWrapperComponent } from './search-user-wrapper/search-user-wrapper.component';
import { SearchLandingComponent } from './search-landing/search-landing.component';
import { SearchComponent } from './search/search.component';

const routes: Route[] = [
    {
        path: '',
        component: SearchUserWrapperComponent,
        children: [
            { path: '', pathMatch: 'full', component: SearchLandingComponent }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes), CommonModule, FormsModule, ReactiveFormsModule, SearchStoreModule],
    declarations: [SearchUserWrapperComponent, SearchLandingComponent, SearchComponent]
})

export class SearchUserModule { }