import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { BookComponent }   from './books/book.component';
import { BookListComponent }   from './books/book-list.component';
 
export const routes: Routes = [
  { path: '', redirectTo: 'book', pathMatch: 'full' },
  { path: 'book', component: BookComponent },
  { path: 'book-list', component: BookListComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule {}