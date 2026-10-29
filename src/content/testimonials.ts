/**
 * Recommendations from LinkedIn, quoted word for word (trimmed with "..." only).
 * Every card links to the recommendations page so visitors can verify them.
 */
export interface Testimonial {
  name: string;
  title: string;
  relationship: string;
  quote: string;
  /** Shown on the homepage (the rest appear on /work-with-me). */
  featured?: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Chukwuebuka Ugome',
    title: 'Cofounder & CEO',
    relationship: 'Managed Obum directly',
    quote:
      'His work ethic and versatility are incredible. He worked with the team to deliver our first stable Dado ecosystem. Today, we can boast of that! I must not fail to mention that he gets the work done no matter how much doubt there is.',
    featured: true,
  },
  {
    name: 'Godson Njoku',
    title: 'Quality Assurance Engineer, Technical Product Manager',
    relationship: 'Managed Obum directly',
    quote:
      'His deep understanding of Flutter and how to use it to drive business logic made a huge impact on our projects. He played a key role in ensuring our product releases were stable, well-structured, and met high-quality standards.',
    featured: true,
  },
  {
    name: 'David Eze',
    title: 'Operational Strategist, 2× Founder',
    relationship: 'Managed Obum directly',
    quote:
      '...he pays attention to details and he is very innovative. Managing him, makes my role very easy cause all tasks and milestones that were scheduled on every project we have worked on, he always finishes before the timeline.',
    featured: true,
  },
  {
    name: 'Emmanuel Uchenna',
    title: 'Co-founder & CTO, MedixDeck',
    relationship: 'Worked with Obum on the same team',
    quote:
      'Obum is a highly skilled software developer... I highly recommend Obum and trust him to handle your project from start to finish.',
  },
  {
    name: 'Jc Favour-Global',
    title: 'Chief Executive Officer, Coders Triangle',
    relationship: 'Managed Obum directly',
    quote:
      'Your attention to detail and commitment to quality assurance have ensured that CTLearn mobile app is of the highest caliber, meeting our expectations.',
  },
];

export const initials = (name: string) =>
  name
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
