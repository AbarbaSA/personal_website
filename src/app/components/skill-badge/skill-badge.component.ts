import { Component, Input } from '@angular/core';
import { Skill } from '../../models/project.model';

@Component({
  selector: 'app-skill-badge',
  standalone: true,
  imports: [],
  template: `
    <span class="skill-badge" [attr.data-category]="skill.category">
      {{ skill.name }}
    </span>
  `,
  styles: [`
    .skill-badge {
      display: inline-flex;
      align-items: center;
      gap: var(--spacing-xs);
      padding: var(--spacing-sm) var(--spacing-md);
      background-color: var(--bg-secondary);
      border: 1px solid var(--border-color);
      border-radius: var(--radius-md);
      font-size: 0.875rem;
      font-weight: 500;
      color: var(--text-primary);
      transition: all var(--transition-fast);

      &:hover {
        border-color: var(--accent-color);
        transform: translateY(-2px);
      }

      &[data-category="frontend"] {
        border-left: 3px solid var(--color-blue);
      }

      &[data-category="backend"] {
        border-left: 3px solid var(--color-green);
      }

      &[data-category="tools"] {
        border-left: 3px solid var(--color-purple);
      }

      &[data-category="other"] {
        border-left: 3px solid var(--color-mustard);
      }
    }
  `]
})
export class SkillBadgeComponent {
  @Input({ required: true }) skill!: Skill;
}
