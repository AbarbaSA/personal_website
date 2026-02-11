import { Component } from '@angular/core';
import { SOCIAL_LINKS } from '../../data/projects';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  socialLinks = SOCIAL_LINKS;
}
