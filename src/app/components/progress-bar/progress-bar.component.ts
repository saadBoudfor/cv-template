import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: 'progress-bar.component.html',
  styleUrls: ['progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input() color: string;
  @Input() width: string;

  constructor() { }

  ngOnInit() {
    const bar = document.getElementsByClassName('progress bar')[0];
    const container = document.getElementsByClassName('progress container')[0];
    bar.style.width = this.width;
    bar.style.backgroundColor = this.color;
    container.style.border = '2px solid ' + this.color;
  }

}
