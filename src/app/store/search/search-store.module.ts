import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SearchEffects } from './effects';
import { featurekey } from './keys';
import { reducer } from './reducers';

@NgModule({
    imports: [
        StoreModule.forFeature(featurekey, reducer),
        EffectsModule.forFeature([SearchEffects])
    ]
})

export class SearchStoreModule { }