import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Card } from '../shared/models/card.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public readonly data: Card[] = [
    {
      title: '#001',
      subTitle: 'Grundstück = Unikat',
      text: 'Jedes Grundstück hat eine andere Geometrie, ist nie gleich und immer ein Unikat, daher ist ein Denken in gleichartigen modularen Holzbausystemen zu starr und unwirtschaftlich.',
      imgSrc: 'assets/sample-pic.png'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }



}
