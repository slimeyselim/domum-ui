import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';

import { IPerson } from './IPerson';

const TEST_ARRAY : IPerson [] = [
  {Id : 1, Name: 'Billy', Pets : [{Animal : 'cat', Name:'mizzy', Rating: 4.5} ]},
  {Id : 2, Name: 'Frances', Pets : [{Animal : 'cat', Name:'mizzy',Rating: 1},{Animal : 'hamster', Name:'poopy', Rating: 2.5} ]},
  {Id : 3, Name: 'Eggy', Pets : [{Animal : 'dog', Name:'arf',Rating: 2.5},{Animal : 'dog', Name:'biggo',Rating: 5},{Animal : 'dog', Name:'woof',Rating: 1.5} ]}
];

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnChanges, OnDestroy {
  private _test :string = '';

  people :any[] = TEST_ARRAY;

  get test() :string {
    return this._test;
  }

  set test(value:string) {
    //usually do stuff here and nothing in get
    console.log(value);
    this._test = value
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() : void {

  }

  ngOnDestroy() : void {

  }

}
