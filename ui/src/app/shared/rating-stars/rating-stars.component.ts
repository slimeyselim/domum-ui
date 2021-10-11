import { Component, OnInit, OnChanges, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-rating-stars',
  templateUrl: './rating-stars.component.html',
  styleUrls: ['./rating-stars.component.scss']
})
export class RatingStarsComponent implements OnInit, OnChanges, OnDestroy  {
  @Input() rating:number = 0;
  cropWidth: number = 96;

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges():void{
      this.cropWidth = this.rating * 96/5;
  }

  ngOnDestroy():void {

  }

}
