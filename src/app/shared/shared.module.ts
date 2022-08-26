import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const modules = [FormsModule, ReactiveFormsModule, CommonModule];

@NgModule({
    imports: [...modules],
    declarations: [],
    exports: [...modules]

})

export class SharedModule { }