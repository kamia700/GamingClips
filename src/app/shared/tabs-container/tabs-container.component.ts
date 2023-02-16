import { Component, OnInit, ContentChildren, AfterContentInit, QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css']
})

export class TabsContainerComponent implements OnInit, AfterContentInit {
  // @ContentChildren(TabComponent) tabs: QueryList<TabComponent> = new QueryList();
  // another option is to make this property optional
  @ContentChildren(TabComponent) tabs?: QueryList<TabComponent>;

  constructor() { }

  ngOnInit(): void {
    // console.log(this.tabs)
  }

  ngAfterContentInit(): void {
    const activeTabs = this.tabs?.filter(tab => tab.active);

    //if there is no active tab we can set the first one from this.tabs as active by selectTab function
    if(!activeTabs || activeTabs.length === 0) {
      this.selectTab(this.tabs!.first)
    }
  }

  selectTab(tab: TabComponent) {
    this.tabs?.forEach(tab => {
      tab.active = false;
    });
    tab.active = true;

    // by returning false angular will prevent the default behavior
    return false;
  }
}
