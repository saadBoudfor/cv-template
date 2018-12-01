import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit{
  public state = '';
  ngOnInit(): void {
    document.getElementById('main').onscroll = function ($event) {
    };
  }
  onPageScrolling() {
    this.state = 'scrolling';
  }
}
