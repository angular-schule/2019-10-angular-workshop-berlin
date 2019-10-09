import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  url = '//angular.schule';

  books: Book[];

  constructor(private rs: BookRatingService, private bs: BookStoreService) {}

  ngOnInit() {
    this.bs.getAll()
      .subscribe(books => this.books = books);
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

  createBook(book: Book) {
    this.bs.create(book).subscribe(() => {
      this.books = [...this.books, book];
    });

  }
}
