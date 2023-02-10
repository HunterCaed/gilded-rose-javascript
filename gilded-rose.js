export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  uniqueUpdate() {
   

  }
}

export class AgedItem extends Item {

  uniqueUpdate() {
    this.sellIn --
    
    if (this.quality < 50) {
      this.quality ++
    }
     

  }
}

export class Legond extends Item {

  uniqueUpdate(){
    this.quality = 80
    this.sellIn = 0
  }
}

export class Tickets extends Item {

  uniqueUpdate() {
    this.sellIn --
    if (this.sellIn < 1) {
      this.quality = 0
    } else if (this.quality < 50) {
      if(this.sellIn <= 5) {
        this.quality += 3
      } else if ( this.sellIn <= 10) {
        this.quality += 2
      } else {
        this.quality++
      }
    }

  }
}
export class ConjuredItem extends Item {
  
  uniqueUpdate(){
    this.sellIn--
      if (this.quality > 0){
         if(this.sellIn >= 0) {
          this.quality -= 2
          if (this.quality < 0) {this.quality = 0}
      }else{
      this.quality -= 4
      }
    }
  }
}
export class Generic extends Item {

  uniqueUpdate() {
    this.sellIn--
    this.quality--
  }


}

export class Basic extends Item {
  constructor(name, sellIn, quality){
    super(name,sellIn,quality)
  }
  uniqueUpdate(){
    this.sellIn --
    if(this.quality < 1){
      this.quality = 0
    }else{
      if (this.sellIn >= 0){
        this.quality -- 
      }else{
        this.quality -= 2
      }
    }
  }
}


export let items = [];

items.push(new Item("+5 Dexterity Vest", 10, 20));
items.push(new Item("Aged Brie", 2, 0));
items.push(new Item("Elixir of the Mongoose", 5, 7));
items.push(new Item("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new Item("Conjured Mana Cake", 3, 6));


export const updateQuality = () => {
  for (let item of items) {
    console.log(item)
    item.uniqueUpdate()
    console.log(item)
  }
};

// updateQuality()


// export const updateQuality = () => {
//   for (let item of items) {
//     if (
//       item.name != "Aged Brie" &&
//       item.name != "Backstage passes to a TAFKAL80ETC concert"
//     ) {
//       if (item.quality > 0) {
//         if (item.name != "Sulfuras, Hand of Ragnaros") {
//           item.quality = item.quality - 1;
//         }
//       }
//     } else {
//       if (item.quality < 50) {
//         item.quality = item.quality + 1;
//         if (item.name == "Backstage passes to a TAFKAL80ETC concert") {
//           if (item.sellIn < 11) {
//             if (item.quality < 50) {
//               item.quality = item.quality + 1;
//             }
//           }
//           if (item.sellIn < 6) {
//             if (item.quality < 50) {
//               item.quality = item.quality + 1;
//             }
//           }
//         }
//       }
//     }
//     if (item.name != "Sulfuras, Hand of Ragnaros") {
//       item.sellIn = item.sellIn - 1;
//     }
//     if (item.sellIn < 0) {
//       if (item.name != "Aged Brie") {
//         if (item.name != "Backstage passes to a TAFKAL80ETC concert") {
//           if (item.quality > 0) {
//             if (item.name != "Sulfuras, Hand of Ragnaros") {
//               item.quality = item.quality - 1;
//             }
//           }
//         } else {
//           item.quality = item.quality - item.quality;
//         }
//       } else {
//         if (item.quality < 50) {
//           item.quality = item.quality + 1;
//         }
//       }
//     }
//   }
// };
