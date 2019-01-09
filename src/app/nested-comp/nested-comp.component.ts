import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nested-comp',
  templateUrl: './nested-comp.component.html',
  styleUrls: ['./nested-comp.component.css']
})
export class NestedCompComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() name;

}
