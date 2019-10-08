import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  url = '//angular.schule';

  books: Book[];

  constructor(private rs: BookRatingService) {}

  ngOnInit() {
    this.books = [
      {
        isbn: '0000',
        title: 'Angular',
        description: 'Grundlagen und fortgeschrittene Themen',
        rating: 5
      },
      {
        isbn: '1111',
        title: 'React',
        description: 'Ein anderes Framework',
        rating: 3
      }
    ];
  }

  rateUp(book: Book) {
    const ratedBook = this.rs.rateUp(book);
    this.updateList(ratedBook);
  }

  rateDown(book: Book) {
    const ratedBook = this.rs.rateDown(book);
    this.updateList(ratedBook);
  }

  updateList(book: Book) {
    this.books = this.books
      .map(b => (book.isbn === b.isbn ? book : b))
      .sort((a, b) => b.rating - a.rating);
  }
}
