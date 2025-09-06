import { Component } from '@angular/core';
@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
    <section class="projects-section">
      <h2>MY <span class="highlight">PROJECTS</span></h2>
      <div class="projects-grid">
        <div class="project-card">
          <img class="project-image" src="/port.png" alt="Portfolio Website screenshot" loading="lazy" />
          <h3>Portfolio Website</h3>
          <p>Modern, responsive portfolio built with Angular and SCSS.</p>
          <div class="tech-chips">
            <span>Angular</span><span>SCSS</span><span>Responsive</span>
          </div>
          <div class="project-links">
            <a href="#" class="btn">Live</a>
            <a href="#" class="btn outline">Code</a>
          </div>
        </div>
        <div class="project-card">
          <img class="project-image" src="/waste.png" alt="Payment Gateway screenshot" loading="lazy" />
          <h3>Payment Gateway</h3>
          <p>Payment Gateway for waste management monthly fee collection.</p>
          <div class="tech-chips">
            <span>Angular</span><span>Figma</span><span>Charts</span>
          </div>
          
          <div class="project-links">
            <a href="#" class="btn">Live</a>
            <a href="#" class="btn outline">Code</a>
          </div>
        </div>
        <div class="project-card">
          <img class="project-image" src="login.png" alt="Login Page screenshot" loading="lazy" />
          <h3>Login Page</h3>
          <p>Login page for user authentication and access control.</p>
          <div class="tech-chips">
            <span>Angular</span><span></span><span>Charts</span>
          </div>
          
          <div class="project-links">
            <a href="#" class="btn">Live</a>
            <a href="#" class="btn outline">Code</a>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {}
