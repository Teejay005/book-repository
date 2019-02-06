// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { ReactiveFormsModule } from '@angular/forms';

// import { AppComponent } from './app.component';
// import { BookComponent } from './books/book.component';
// import { BookListComponent } from './books/book-list.component';
// import { RoutingModule } from './routing.module';
// import {MatButtonModule} from '@angular/material/button';


// @NgModule({
//   declarations: [
//     AppComponent,
//     BookComponent,
//     BookListComponent
//   ],
//   imports: [
//     BrowserModule,
//     ReactiveFormsModule,
//     RoutingModule
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookComponent } from './books/book.component';
import { BookListComponent } from './books/book-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }