import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const observable = new Observable<number>((observer) => {
      let x = 0;

      const interval = setInterval(() => {
        if (x === 5) {
          observer.error('Oops');
        } else {
          observer.next(x++);
        }
      }, 1000);

      return {
        unsubscribe: () => clearInterval(interval),
      };
    });

    observable.pipe(catchError((err) => of(-1))).subscribe({
      next: (x) => console.log(`${x} received`),
      complete: () => console.log('Completed'),
      error: (err) => console.warn(err),
    });
  }
}
