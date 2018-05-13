import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html'
})
export class SearchPage {

  currentItems: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public items: Items) { }

  ngOnInit() {
    this.currentItems = this.items.items.concat([{
      "name": "Other?",
      "icon": "more",
      "about": "Other issues or concerns you feel need to be addressed."
    }]);
  }

  /**
   * Perform a service for the proper items.
   */
  getItems(ev) {
    let val = ev.target.value;
    if (!val) {
      this.currentItems = this.items.items;
    }
    this.currentItems = !this.items.query({
      name: val
    }) ? this.items.items[5] : 
    this.items.query({
      name: val
    }).concat(this.items.query({
      about: val
    }).filter(item => this.items.query({
      name: val
    }).indexOf(item) == -1)).filter(item => item.name != '').concat([{
      "name": "Other?",
      "icon": "more",
      "about": "Other issues or concerns you feel need to be addressed."
    }]);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Item) {
    this.navCtrl.push('ItemCreatePage', {
      item: item
    });
  }

}
