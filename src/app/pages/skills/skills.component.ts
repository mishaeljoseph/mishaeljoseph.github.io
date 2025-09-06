import { Component } from '@angular/core';
@Component({
  selector: 'app-skills',
  standalone: true,
  template: `
    <section class="skills-section">
      <h2>MY <span class="highlight">SKILLS</span></h2>
      <div class="skills-grid">
        <div class="skill-card">
          <h3>Frontend</h3>
          <ul>
            <li>Angular <span class="bar bar-5"></span></li>
            <li>React <span class="bar bar-4"></span></li>
            <li>TypeScript <span class="bar bar-4"></span></li>
            <li>HTML/CSS <span class="bar bar-5"></span></li>
          </ul>
        </div>
        <div class="skill-card">
          <h3>UI/UX</h3>
          <ul>
            <li>Figma <span class="bar bar-4"></span></li>
            <li>Adobe XD <span class="bar bar-3"></span></li>
            <li>Wireframing <span class="bar bar-4"></span></li>
            <li>Prototyping <span class="bar bar-4"></span></li>
          </ul>
        </div>
        <div class="skill-card">
          <h3>Tools</h3>
          <ul>
            <li>Git <span class="bar bar-5"></span></li>
            <li>VS Code <span class="bar bar-5"></span></li>
            <li>Jira <span class="bar bar-3"></span></li>
            <li>Slack <span class="bar bar-4"></span></li>
          </ul>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {}
