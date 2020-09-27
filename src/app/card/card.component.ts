import { animate, state, transition, trigger, style } from '@angular/animations';
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Card } from '../shared/models/card.model';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('flip', [
      state('on', style({
        height: '100px'
      })),
      state('off', style({
        height: 0
      })),
      transition('off => on', [
        animate('1s ease-out')
      ]),
      transition('on => off', [
        animate('1s ease-in')
      ])
    ])
  ]
})
export class CardComponent implements OnInit {

  public flipState: 'on' | 'off' = 'off';

  @Input()
  public card: Card;

  public get isFront(): boolean {
    return this.flipState === 'on';
  }

  constructor(private elemRef: ElementRef) { }

  ngOnInit(): void {
    console.log(this.position);
  }

  public get position(): {x: number, y: number} {
    return this.elemRef.nativeElement.getBoundingClientRect();
  }


  public onCardEnter() {
    if (this.flipState !== 'on') {
      this.flipState = 'on';
    }
  }

  public onCardLeave() {
    this.flipState = 'off';
  }
}
