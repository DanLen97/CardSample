import { CardDetailComponent } from './../card-detail/card-detail.component';
import { Card } from './../shared/models/card.model';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
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

  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }

  public onCardClick(card: Card) {
    const ref = this.modalService.open(CardDetailComponent, { centered: true, backdropClass: 'blur' });
    ref.componentInstance.card = card;
  }


}
