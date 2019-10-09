import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    /*
    const isbn = this.route.snapshot.paramMap.get('isbn');
    console.log(isbn);
    */

    this.route.paramMap.subscribe(params => {
      const isbn = params.get('isbn');
      console.log(isbn);
    });
  }
}
