import { Component, OnInit } from '@angular/core'
import { ThemeModeService } from '../../../../services/theme-mode/theme-mode.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  themeMode$ = this.themeModeService.themeModeAction$

  constructor(private themeModeService: ThemeModeService) {}


  ngOnInit(): void {}

  selectMode(mode: string) {
    this.themeModeService.selectThemeMode(mode)
  }
}
