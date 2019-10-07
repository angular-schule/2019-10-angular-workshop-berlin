import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor() { }

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
      },
    ];
  }

}


