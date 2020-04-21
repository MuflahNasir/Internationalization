import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dynamic-translations';
  public changeLanguage(code) {
    localStorage.setItem('locale', code.target.value);
    window.location.reload();
  }
}
