import { Component } from '@angular/core';
import { Subject, throwError, of } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'rxw-error-handling',
  templateUrl: './error-handling.component.html',
})
export class ErrorHandlingComponent {

  logStream$ = new Subject();

  constructor(private es: ExerciseService) { }

  start() {
    this.es.randomError().pipe(
      // retry(5)
      catchError(err => {
        console.log('FEHLER GEFANGEN!');
        // return throwError('BÖSER FEHLER!');
        return of('Nichts passiert! 😇');
      })
    ).subscribe(
      value => this.logStream$.next(value),
      err => this.logStream$.next('💥 ERROR: ' + err)
    );
  }
}
