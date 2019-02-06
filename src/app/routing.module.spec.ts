import { Location } from "@angular/common";
import { TestBed, fakeAsync } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';

import { BookComponent } from "./books/book.component";
import { AppComponent } from "./app.component";
import { routes } from "./routing.module";

describe("Router: App", () => {
  let location: Location;
  let router: Router;
  let fixture;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes), ReactiveFormsModule],
      declarations: [BookComponent, AppComponent]
    });

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  it('navigate to "" redirects you to /book', fakeAsync(() => {
    router.navigate([""]).then(() => {
      expect(location.path()).toBe("/book");
    });
  }));
});