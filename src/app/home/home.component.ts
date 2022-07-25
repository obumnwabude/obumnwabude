import { Component } from '@angular/core';
import sampleSize from 'lodash-es/sampleSize';

import { ObumCard } from '../card/card.model';
import { articles } from '../content/articles';
import { coding } from '../content/coding';
import { community } from '../content/community';
import { ShowcaseInViewService } from '../services/showcase-in-view.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  categories = {
    articles: sampleSize(articles, 3),
    coding: sampleSize(coding, 3),
    community: sampleSize(community, 3)
  };

  get categoryKeys() {
    return Object.keys(this.categories);
  }

  constructor(public showcaseInView: ShowcaseInViewService) {}

  capitalize = (str: string) => str[0].toUpperCase() + str.substring(1);

  category(key: string): ObumCard[] {
    return this.categories[key as keyof typeof this.categories];
  }

  ctaCategory(key: string): string {
    if (key === 'coding') return 'projects';
    if (key === 'community') return 'events';
    else return key;
  }
}
