import { Component, OnInit, AfterViewInit, ViewChild, ViewChildren, QueryList } from '@angular/core';
import {MatTabGroup} from '@angular/material'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit, AfterViewInit  {
  name = 'Angular 6';

  ngOnInit() {
    // this.getTabs();
  }

  @ViewChildren("allTabs") allTabs: QueryList<any>
  
  ngAfterViewInit() {
    console.log('total tabs: ' + this.allTabs.first._tabs.length);
  }

  tabChanged(tabChangeEvent: number) {
    console.log('tab selected: ' + tabChangeEvent);
  }

  
  // @ViewChild('allTabs') allTabs: MatTabGroup;
  // getTabs() {
  //   console.log('alltabs: ' + this.allTabs);
  // }

}
