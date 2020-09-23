import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('flip', [
      state('front', style({
        transform: 'rotateY(0deg)'
      })),
      state('back', style({
        transform: 'rotateY(180deg)'
      })),
      transition('front => back', [
        animate('1s 0s ease-out')
      ]),
      transition('back => front', [
        animate('1s 0s ease-out')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  public flipState: 'front' | 'back' = 'front';

  constructor() { }

  ngOnInit(): void {
  }

  public onFlipToggle() {
    this.flipState === 'front'
      ? this.flipState = 'back'
      : this.flipState = 'front';
  }

}
