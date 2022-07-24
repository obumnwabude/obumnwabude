import { Component, Input } from '@angular/core';
import { ObumCard } from './card.model';

@Component({
  selector: 'obum-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input('content') content?: ObumCard;

  months = [
    '',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  
  capitalize = (str: string) => str[0].toUpperCase() + str.substring(1);
}
