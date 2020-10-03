import { animate, state, transition, trigger, style } from '@angular/animations';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../shared/models/card.model';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('zoom', [
      state('on', style({
        transform: 'scale(2)'
      })),
      state('off', style({
        transform: 'scale(1)'
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

  public zoomState: 'on' | 'off' = 'off';

  @Input()
  public card: Card;

  @Output()
  public cardClicked = new EventEmitter<any>();

  public get isZoomed(): boolean {
    return this.zoomState === 'on';
  }
  public set isZoomed(prop: boolean) {
    prop
      ? this.zoomState = 'on'
      : this.zoomState = 'off';
  }

  constructor(private elemRef: ElementRef) { }

  ngOnInit(): void {
  }

  public get position(): {x: number, y: number} {
    return this.elemRef.nativeElement.getBoundingClientRect();
  }


  public toggleZoom() {
    this.isZoomed = !this.isZoomed;
    console.log(this.zoomState);
  }
}
