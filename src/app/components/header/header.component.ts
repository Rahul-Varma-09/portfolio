import { Component } from '@angular/core';
import { IntroComponent } from '../intro/intro.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    IntroComponent,
    FooterComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
