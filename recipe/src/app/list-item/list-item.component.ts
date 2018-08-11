import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() recipe;
  mealTime = '';
  slicedTitle = '';

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.mealTime = params.mealTime;
    });
    this.slicedTitle = this.sliceTitle(this.recipe.title);
  }

  sliceTitle(title: string) {
    if (title.length >= 25) {
      title = title.slice(0, 25);
      title = title.trim();
      title += '...';
      return title;
    }
    return title;
  }

}
