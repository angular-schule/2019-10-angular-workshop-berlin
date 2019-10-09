import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'br-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  myText = 'Hallo';

  constructor() { }

  ngOnInit() {
  }

}
