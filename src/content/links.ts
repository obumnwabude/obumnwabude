/**
 * Centralized links repository.
 * Exports all primary site, contact, profile, community, and external URLs in one central LINKS object.
 */
export const LINKS = {
  // Canonical & Personal Website
  canonical: 'https://obumnwabude.com',

  // Direct Communication / Leads
  email: 'contact@obum.me',
  mailto: 'mailto:contact@obum.me',
  telegram: 'https://t.me/obumnwabude',

  // Social & Community Profiles
  linkedin: 'https://linkedin.com/in/obumnwabude',
  github: 'https://github.com/obumnwabude',
  stackoverflow: 'https://stackoverflow.com/users/13644299',
  x: 'https://x.com/obumnwabude',
  facebook: 'https://facebook.com/obumnwabude',
  instagram: 'https://instagram.com/obumnwabude',

  // Professional & Developer Profiles
  gdev: 'https://g.dev/obumnwabude?utm_campaign=deveco_gdemembers&utm_source=deveco',
  cssTricks: 'https://www.css-tricks.com/author/obumnwabude',
  freeCodeCamp: 'https://www.freeCodeCamp.org/news/author/obumnwabude',
  devTo: 'https://dev.to/obumnwabude',
  hashnodeBlog: 'https://blog.obumnwabude.com',
  mediumStories: 'https://stories.obumnwabude.com',

  // Community Organizations, Programs & Tech Initiatives
  gde: 'https://developers.google.com/community/experts?utm_campaign=deveco_gdemembers&utm_source=deveco',
  gdg: 'https://developers.google.com/community/gdg?utm_campaign=deveco_gdemembers&utm_source=deveco',
  funai: 'https://funai.edu.ng',
  gdsc: 'https://developers.google.com/community/gdsc?utm_campaign=deveco_gdemembers&utm_source=deveco',
  genesys: 'https://genesystechhub.com',
  mlsa: 'https://mvp.microsoft.com/studentambassadors?utm_campaign=deveco_gdemembers&utm_source=deveco',
  flutter: 'https://flutter.dev?utm_campaign=deveco_gdemembers&utm_source=deveco',
  gdsa: 'https://blog.google/around-the-globe/google-africa/digitalskillsforafrica-over-500000-people-africa-trained?utm_campaign=deveco_gdemembers&utm_source=deveco',
} as const;

export type LinkKey = keyof typeof LINKS;
export type LinkUrl = (typeof LINKS)[LinkKey];
