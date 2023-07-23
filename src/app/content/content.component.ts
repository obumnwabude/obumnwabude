import { Component, OnDestroy } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import intersectionBy from 'lodash-es/intersectionBy';
import uniqBy from 'lodash-es/uniqBy';
import xorBy from 'lodash-es/xorBy';

import { CardTag, ObumCard } from '../card/card.model';
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
  private _category?: keyof typeof this._categories;
  content?: ObumCard[];
  selectedTags: CardTag[] = [];

  get selectedContent(): ObumCard[] {
    if (this.content) {
      return this.content.filter(
        (c) =>
          intersectionBy(c.tags, this.selectedTags, (c) => c.svg).length > 0
      );
    } else {
      return [];
    }
  }

  get tags(): CardTag[] {
    if (this._category) {
      return uniqBy(
        this._categories[this._category].map((c) => c.tags).flat(),
        (c) => c.svg
      ).sort((a, b) =>
        (a.title ?? a.svg)
          .toLowerCase()
          .localeCompare((b.title ?? b.svg).toLowerCase())
      );
    } else {
      return [];
    }
  }

  constructor(private meta: Meta, router: Router, private title: Title) {
    const category = router.url
      .split('?')[0]
      .split('#')[0]
      .substring(1) // remove the leading slash
      .split('/')[0];

    if (Object.keys(this._categories).includes(category)) {
      this._category = category as keyof typeof this._categories;
      this.content = this._categories[this._category];
      this.selectedTags = this.tags;
      this.meta.updateTag(
        {
          name: 'og:title',
          content: `${this.capitalize(category)} || ${constants.OG_TITLE}`
        },
        'name="og:title"'
      );
      this.meta.updateTag(
        {
          name: 'twitter:title',
          content: `${this.capitalize(category)} || ${constants.OG_TITLE}`
        },
        'name="twitter:title"'
      );
      this.title.setTitle(`${this.capitalize(category)} | ${constants.TITLE}`);
    } else {
      router.navigateByUrl('/');
    }
  }
  capitalize = (str: string): string => str[0].toUpperCase() + str.substring(1);

  ngOnDestroy() {
    this.meta.updateTag(
      { name: 'og:title', content: constants.OG_TITLE },
      'name="og:title"'
    );
    this.meta.updateTag(
      { name: 'twitter:title', content: constants.OG_TITLE },
      'name="twitter:title"'
    );
    this.title.setTitle(constants.TITLE);
  }

  toggleAll(event: any): void {
    event.stopPropagation();
    this.selectedTags =
      this.selectedTags.length === this.tags.length ? [] : this.tags;
  }

  toggleTag(event: any, tag: CardTag): void {
    event.stopPropagation();
    this.selectedTags = xorBy(this.selectedTags, [tag], (t) => t.svg);
  }
}
