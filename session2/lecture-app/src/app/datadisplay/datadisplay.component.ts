import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-datadisplay',
  templateUrl: './datadisplay.component.html',
  styleUrls: ['./datadisplay.component.css']
})
export class DatadisplayComponent implements OnInit {

  @Input() element: {name : string, type : string, content : string};

  constructor() { }

  ngOnInit(): void {
  }

}
