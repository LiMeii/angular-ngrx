import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

import { SearchWrapperComponent } from './search-wrapper/search-wrapper.component';

const routes: Route[] = [
    {
        path: '',
        component: SearchWrapperComponent

    }
]

@NgModule({
    imports: [RouterModule.forChild(routes), SharedModule],
    declarations: [SearchWrapperComponent]
})

export class SearchModule { }