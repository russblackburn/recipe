import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  iconCheck = false;
  icons = [
    'apron',
    'blender',
    'chef-hat',
    'fridge2',
    'grater',
    'kitchen-scale',
    'measuring-cup',
    'microwave',
    'oven',
    'pot-large',
    'stove',
    'strainer'
  ];

  constructor() { }

  ngOnInit() {
  }

  onEnter(index: number) {
    if (!this.iconCheck) {
      this.iconCheck = true;
      if (!this.icons[index].includes('-2')) {
        this.icons[index] = this.icons[index] + '-2';
      }
    }
  }

  onLeave(index: number) {
    if (this.iconCheck) {
      this.icons[index] = this.icons[index].replace('-2', '');
      this.iconCheck = false;
    }
  }

}
