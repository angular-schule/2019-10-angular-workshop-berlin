import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
import { catchError } from 'rxjs/operators';
import { throwError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  private apiUrl = 'https://api.angular.schule';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Book[]>(`${this.apiUrl}/books`).pipe(
      catchError(err => {
        console.log(err);

        return of([
          {
            isbn: '000',
            title: 'Fehlerbuch...',
            description: 'Leider ist ein Fehler aufgetreten.',
            rating: 1
          }
        ]);
      })
    );
  }

  getSingle(isbn: string) {
    return this.http.get<Book>(`${this.apiUrl}/books/${isbn}`);
  }

  create(book: Book) {
    return this.http.post(`${this.apiUrl}/books`, book, { responseType: 'text' });
  }
}
