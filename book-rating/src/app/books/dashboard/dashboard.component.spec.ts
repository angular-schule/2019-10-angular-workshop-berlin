import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  let book: Book;

  let ratingMock;

  beforeEach(() => {
    book = {
      isbn: '',
      title: '',
      rating: 3,
      description: ''
    };

    ratingMock = {
      rateUp: b => b
    };
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: BookRatingService, useValue: ratingMock }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call service for rateUp()', () => {
    const rs = TestBed.get(BookRatingService);
    spyOn(rs, 'rateUp').and.callThrough();

    component.rateUp(book);
    
    expect(rs.rateUp).toHaveBeenCalled();
  });
});
