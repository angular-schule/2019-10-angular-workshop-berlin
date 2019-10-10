import { Component, OnInit } from '@angular/core';
import { Subject, merge, concat, race, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'rxw-chat',
  templateUrl: './chat.component.html',
})
export class ChatComponent implements OnInit {

  msg = {
    julia$: new Subject<string>(),
    georg$: new Subject<string>(),
    john$: new Subject<string>()
  };

  logStream$ = new Subject<string>();

  ngOnInit() {
    /******************************/

    race(
      this.msg.julia$.pipe(map(msg => '👩🏻 JULIA: ' + msg)),
      this.msg.georg$.pipe(map(msg => '🧔🏻 GEORG: ' + msg)),
      this.msg.john$.pipe(map(msg => '👦🏾 JOHN: ' + msg))
    ).subscribe(
      msg => this.log(msg),
      () => {},
      () => this.log('Alle weg.')
    );

    /******************************/
  }


  private log(msg: any) {
    this.logStream$.next(msg.toString());
  }
}
