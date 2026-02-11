import { Component } from '@angular/core';
import { SOCIAL_LINKS } from '../../data/projects';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  socialLinks = SOCIAL_LINKS;

  getLink(icon: string): string {
    return this.socialLinks.find(link => link.icon === icon)?.url ?? '';
  }

  getEmailDisplay(): string {
    const emailUrl = this.getLink('email');
    return emailUrl.replace('mailto:', '');
  }

  getLinkDisplay(icon: string): string {
    const url = this.getLink(icon);
    return url.replace(/^https?:\/\/(www\.)?/, '');
  }
}
