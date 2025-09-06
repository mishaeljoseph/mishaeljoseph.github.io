import { Component } from '@angular/core';
@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="about-section">
      <h2>ABOUT <span class="highlight">ME</span></h2>
      <div class="about-card">
        <p>Hello! I'm <span class="highlight">mishaeljoseph</span>, a frontend web developer and UI/UX designer currently pursuing my Bachelor's in Computer Science. I enjoy building clean, modern, and interactive websites that focus on user experience and performance.</p>
        <ul class="about-highlights">
          <li><span class="highlight">3+ years</span> experience</li>
          <li><span class="highlight">Lagos, Nigeria</span></li>
          <li><span class="highlight">Available</span> for freelance & remote</li>
        </ul>
      </div>
    </section>
  `,
  styleUrls: ['./about.component.css']
})
export class AboutComponent {}
