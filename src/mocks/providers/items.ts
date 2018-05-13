import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Issue",
    "icon": "warning",
    "about": "There is an issue!",
  };


  constructor() {
    let items = [
      {
        "name": "Litter",
        "icon": "trash",
        "about": "Report litter or improperly diposed trash."
      },
      {
        "name": "Pothole",
        "icon": "car",
        "about": "A pothole or any sort of road disruption."
      },
      {
        "name": "Crime",
        "icon": "warning",
        "about": "Gunshots, vandalism, etc."
      },
      {
        "name": "Low Lighting",
        "icon": "flash",
        "about": "Unlit roads, non-functioning lights, or poorly."
      },
      {
        "name": "Illegal Substances",
        "icon": "medical",
        "about": "Unlit roads, non-functioning lights, or poorly."
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
