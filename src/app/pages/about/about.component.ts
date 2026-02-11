import { Component } from '@angular/core';
import { SkillBadgeComponent } from '../../components/skill-badge/skill-badge.component';
import { SKILLS } from '../../data/projects';
import { Skill } from '../../models/project.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SkillBadgeComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  skills = SKILLS;

  get frontendSkills(): Skill[] {
    return this.skills.filter(s => s.category === 'frontend');
  }

  get backendSkills(): Skill[] {
    return this.skills.filter(s => s.category === 'backend');
  }

  get toolsSkills(): Skill[] {
    return this.skills.filter(s => s.category === 'tools');
  }
}
