import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SearchEffects } from './effects';
import { featurekey } from './keys';
import { reducer } from './reducers';

@NgModule({
    imports: [
        SharedModule,
        StoreModule.forFeature(featurekey, reducer),
        EffectsModule.forFeature([SearchEffects])
    ]
})

export class SearchStoreModule { }