import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderAreaComponent } from './components/header-area/header-area.component';
import { AnnounceAreaComponent } from './components/announce-area/announce-area.component';
import { MainAreaComponent } from './components/main-area/main-area.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderAreaComponent, AnnounceAreaComponent, MainAreaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'nikeClone';
}
