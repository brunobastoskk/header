import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  count = 0;

  ngOnInit() {
    document.querySelector('#addToCart').addEventListener('click', () => {
      this.count++;
    })
  }
}