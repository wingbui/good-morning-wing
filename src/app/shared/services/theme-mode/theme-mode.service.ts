import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ThemeModeService {
  themeMode = new BehaviorSubject<string>('dark')
  themeModeAction$ = this.themeMode.asObservable()

  constructor() {}

  selectThemeMode(mode: string) {
    console.log(mode)
    this.themeMode.next(mode)
  }
}
