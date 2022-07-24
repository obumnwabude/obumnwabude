import { Component, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

import { ObumCard } from '../card/card.model';
import { constants } from '../constants';
import { articles } from './articles';
import { coding } from './coding';
import { community } from './community';

@Component({
  selector: 'obum-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnDestroy {
  private _categories = { articles, coding, community };
  content?: ObumCard[];

  constructor(router: Router, private title: Title) {
    const category = router.url
      .split('?')[0]
      .split('#')[0]
      .substring(1) // remove the leading slash
      .split('/')[0];

    if (Object.keys(this._categories).includes(category)) {
      this.content =
        this._categories[category as keyof typeof this._categories];
      this.title.setTitle(`${this.capitalize(category)} | ${constants.TITLE}`);
    } else {
      router.navigateByUrl('/');
    }
  }

  capitalize = (str: string) => str[0].toUpperCase() + str.substring(1);

  ngOnDestroy = () => this.title.setTitle(constants.TITLE);
}
