import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BooksRoutingModule } from './books-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { BookFormComponent } from './book-form/book-form.component';

@NgModule({
  declarations: [
    DashboardComponent,
    BookComponent,
    BookFormComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    FormsModule
  ],
  exports: [
    DashboardComponent
  ]
})
export class BooksModule { }
