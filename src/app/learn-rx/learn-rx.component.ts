import { Component, OnInit } from '@angular/core';
import { distinct, interval, last, of, take } from 'rxjs';

@Component({
  selector: 'app-learn-rx',
  templateUrl: './learn-rx.component.html',
  styleUrls: ['./learn-rx.component.css']
})
export class LearnRXComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // let obs = interval(1000);
    // obs.subscribe((value) => { console.log(value) })

    of(1,2,3,2,4,2,6,4)
    .pipe
    (
      distinct(),
      take(2),
      last()

    ) .subscribe(
      (data) => {
        console.log(data)
      }
    );
  }

}
