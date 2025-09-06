import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section class="contact-section">
      <h2>CONTACT <span class="highlight">ME</span></h2>
      <form class="contact-form" (ngSubmit)="onSubmit()" #form="ngForm">
        <input type="text" name="name" placeholder="Name" required ngModel>
        <input type="email" name="email" placeholder="Email" required ngModel>
        <textarea name="message" placeholder="Message" required ngModel></textarea>
        <button class="btn" type="submit" [disabled]="!form.valid">Send Message</button>
      </form>
      <div class="contact-social">
        <a href="https://github.com/mishaeljoseph" target="_blank" aria-label="GitHub">GitHub</a>
        <a href="https://linkedin.com/in/mishaeljoseph" target="_blank" aria-label="LinkedIn">LinkedIn</a>
        <a href="https://x.com/mishaeljoseph" target="_blank" aria-label="X">X</a>
      </div>
    </section>
  `,
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  onSubmit() {
    console.log('Contact form submitted!');
  }
}
