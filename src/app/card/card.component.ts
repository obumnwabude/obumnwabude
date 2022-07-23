import { Component, Input } from '@angular/core';
import { ObumCard } from './card.model';

@Component({
  selector: 'obum-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input('content') content?: ObumCard;
}
