import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { BookComponent }   from './books/book.component';
 
export const routes: Routes = [
  { path: '', redirectTo: '/book', pathMatch: 'full' },
  { path: 'book', component: BookComponent }
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class RoutingModule {}