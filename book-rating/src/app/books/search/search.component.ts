import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { BookStoreService } from '../shared/book-store.service';
import { filter, debounceTime, distinctUntilChanged, switchMap, tap, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Book } from '../shared/book';

@Component({
  selector: 'br-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup;
  result$: Observable<Book[] | any[]>;

  isLoading = false;

  constructor(private bs: BookStoreService) { }

  ngOnInit() {
    this.searchForm = new FormGroup({
      term: new FormControl('')
    });

    this.result$ = this.searchForm.get('term').valueChanges.pipe(
      filter((term: string) => term.length >= 3),
      debounceTime(1000),
      distinctUntilChanged(),
      tap(() => this.isLoading = true),
      switchMap(term => this.bs.search(term).pipe(startWith([{ title: 'LADEN' }]))),
      tap(() => this.isLoading = false),
    );

    // Suchbegriff muss mindestens 3 Zeichen lang sein
    // erst suchen, wenn Nutzer die Finger still hält
    // keine zwei gleichen Suchen nacheinander
    // Suchbegriffe zum Server schicken this.bs.search()
    // Ergebnisse anzeigen (ul, li), nur den Titel
    // AsyncPipe (auch im ngFor nutzbar)
    // (Ladeanzeige)
  }

}
