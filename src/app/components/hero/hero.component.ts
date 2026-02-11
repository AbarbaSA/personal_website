import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class HeroComponent {
  @Input() title = 'Hi, you\'ve reached Sarah';
  @Input() subtitle = 'Full-Stack Developer';
  @Input() description = 'I like building stuff and solving problems. Let\'s about how we can do that together. Leave a message after the beep!';
  @Input() showCta = true;
}
