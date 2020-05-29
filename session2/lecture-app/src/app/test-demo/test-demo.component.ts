import { Component, OnInit } from '@angular/core';
import { PropertyBindingType } from '@angular/compiler';

@Component({
  selector: 'app-test-demo',
  templateUrl: './test-demo.component.html',
  styleUrls: ['./test-demo.component.css'],
})
export class TestDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
test(){
  alert('Aizaz');
}
}
