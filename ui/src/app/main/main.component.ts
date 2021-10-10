import { Component, OnInit } from '@angular/core';

const TEST_ARRAY : any [] = [
  {Id : 1, Name: 'Billy', Pets : [{animal : 'cat', name:'mizzy'} ]},
  {Id : 2, Name: 'Frances', Pets : [{animal : 'cat', name:'mizzy'},{animal : 'hamster', name:'poopy'} ]},
  {Id : 3, Name: 'Eggy', Pets : [{animal : 'dog', name:'arf'},{animal : 'dog', name:'biggo'},{animal : 'dog', name:'woof'} ]}
];

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  people :any[] = TEST_ARRAY;

  constructor() { }

  ngOnInit(): void {
  }

}
