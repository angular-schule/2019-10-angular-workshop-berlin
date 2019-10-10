import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, concatMap } from 'rxjs/operators';

@Component({
  selector: 'br-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'book-rating';


  constructor() {
    function producer(o) {
      o.next(1);
      o.next(2);

      setTimeout(() => o.next(3), 2000);
      setTimeout(() => o.complete(), 3000);
    }

    const observer = {
      next: e => console.log(e),
      error: e => console.error(e),
      complete: () => console.log('cool.')
    };

    // producer(observer);

    const myObs$ = new Observable(producer);

    myObs$.subscribe(observer);


    ///////////////////////////////////////

    const http1$ = param => of(1).pipe(delay(1000));
    const http2$ = param => of(2).pipe(delay(2000));


    of(0).pipe(
      concatMap(zero => http1$(zero)),
      concatMap(one => http2$(one)),
    );



  }
}
