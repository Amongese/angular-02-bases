import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DbzComponent} from "./pages/main-page.component";
import { ListDbzComponent } from './components/list-dbz/list-dbz.component';
import { FormDbzComponent } from './components/form-dbz/form-dbz.component';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    DbzComponent,
    ListDbzComponent,
    FormDbzComponent
  ],
  exports: [
    DbzComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }