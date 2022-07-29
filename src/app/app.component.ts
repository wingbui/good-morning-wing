import { Component } from '@angular/core'
import { ThemeModeService } from './shared/services/theme-mode/theme-mode.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'good-morning-wing'
  themeMode$ = this.themeModeService.themeModeAction$

  constructor(private themeModeService: ThemeModeService) {}
}
