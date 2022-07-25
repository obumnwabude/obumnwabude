import { Component } from '@angular/core';

@Component({
  selector: 'obum-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.scss']
})
export class ShowcaseComponent {
  profiles = [
    { icon: 'linkedin', link: 'https://linkedin.com/in/obumnwabude' },
    { icon: 'twitter', link: 'https://twitter.com/obumnwabude' },
    { icon: 'stackoverflow', link: 'https://stackoverflow.com/users/13644299' },
    { icon: 'facebook', link: 'https://facebook.com/obumnwabude.page' },
    { icon: 'instagram', link: 'https://instagram.com/obumnwabude' }
  ];

  capitalize = (str: string) => str[0].toUpperCase() + str.substring(1);
}
