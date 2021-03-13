import { Component, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  count = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      document.querySelector('#addToCart').addEventListener('click', () => {
        this.count++;
      });
    }
    if (isPlatformServer(this.platformId)) {
      console.log('TEST SERVER')
    }
  }
}
