import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './book.component';
import { Book } from '../shared/book';

describe('BookComponent', () => {
  let component: BookComponent;
  let fixture: ComponentFixture<BookComponent>;

  let book: Book;

  beforeEach(() => {
    book = {
      isbn: '',
      title: '',
      description: '',
      rating: 3
    };
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookComponent);
    component = fixture.componentInstance;

    // Daten setzen in der Komponente
    component.book = book;

    // detectChanges() erst nach Initialisierung der Daten
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit event for doRateUp()', () => {
    // Arrange
    let emittedBook: Book;

    component.rateUp.subscribe(b => {
      emittedBook = b;
    });

    // Act
    component.doRateUp();

    // Assert
    expect(emittedBook).toBe(component.book);

  });
});
