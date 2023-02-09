import { expect, describe, it } from "vitest";
import { Item, items, updateQuality, AgedItem, Tickets, ConjuredItem, Generic } from "./gilded-rose.js";

describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => { //this function works
    const testItem = new Generic("basic", 5, 3);   //name, sellIn, quality
    items.push(testItem);

    testItem.uniqueUpdate()

    //updateQuality();

    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(4);
  });
});

describe("sellInless Zero", () => {  //Once the `sellIn` days is less then zero, `quality` degrades twice as fast
  it("Once the `sellIn` days is less then zero, `quality` degrades twice as fast ", () => {
    const tests = new Item("basic2", 0, 4);
    items.push(tests)

    updateQuality()

    expect(tests.quality).toBe(2);
    expect(tests.sellIn).toBe(-1);
  })
})   

describe("Aged Brie", () => { // "Aged Brie" actually increases in quality the older it gets.
  it("Aged Brie actually increases in quality the older it gets", () => {
    const test2 = new AgedItem("Aged Brie", 4, 6)
    //test2.transform
    items.push(test2)

    //updateQuality()
    test2.uniqueUpdate()
    expect(test2.quality).toBe(7);
    expect(test2.sellIn).toBe(3);
  })
})

describe("Quality of Item", () => {   //the quality of an item is never more than 50
  it("The quality of a item is never more than 50", () => {
    const test3 = new Item("Aged Brie", 1, 50)
    items.push(test3)

    updateQuality()

    expect(test3.quality).toBe(50)
    expect(test3.sellIn).toBe(0);
  })
})

describe ("Backstage passes 10 days or less", () => {
    it("quality increases by 2 when there are 10 days or less left before the concert", () => {
      const test4 = new Tickets("Backstage passes to a TAFKAL80ETC concert", 10, 12)
      items.push(test4)

      //updateQuality()
      test4.uniqueUpdate()
      expect(test4.quality).toBe(14)
      expect(test4.sellIn).toBe(9)
    })
})

describe ("Backstage passes 5 days or less", () => {
  it("quality increases by 3 when there are 5 days or less left before the concert", () => {
    const test8 = new Tickets("Backstage passes to a TAFKAL80ETC concert", 5, 12)
    items.push(test8)

    //updateQuality()
    test8.uniqueUpdate()

    expect(test8.quality).toBe(15)
    expect(test8.sellIn).toBe(4)
  })
})

describe ("After the Concert", () => {
  it("quality drops to 0 after the concert", () => {
    const test4 = new Item("Backstage passes to a TAFKAL80ETC concert", 0, 12)
    items.push(test4)

    updateQuality()

    expect(test4.quality).toBe(0)
    expect(test4.sellIn).toBe(-1)
  })
})

describe ("Qality greater than zero", () => {
  it("The quality of a item is never negative", () => {
    const test6 = new Item("basic6", 5, 0)
    items.push(test6)

    updateQuality()

    expect(test6.quality).toBe(0)
    expect(test6.sellIn).toBe(4)
  })
})

describe("Sulfuras, Hand of Ragnaros does not decrease in quality", () =>{
  it("'Sulfuras, Hand of Ragnaros,' being a legendary item, never has to be sold nor does it decrease in quality", () => {
    const testItem = new Item("Sulfuras, Hand of Ragnaros", 1, 80);
    items.push(testItem);
    
    updateQuality();

    expect(testItem.quality).toBeGreaterThanOrEqual(80)
  })
})
describe("'Conjured' items degrade twice as fast", () =>{
  it("'Conjured' items degrade in quality twice as fast as normal items.", () => {
    let testItem = new ConjuredItem("Conjured Mana Cake", 3, 6);
    items.push(testItem);
    
    //updateQuality();
    testItem.uniqueUpdate()
    expect(testItem.quality).toBe(4) //receiving 2 
    expect(testItem.sellIn).toBe(2)

    // let testItem2 = new ConjuredItem("Conjured Mana Cake", -1, 4);
    // items.push(testItem2);

    // //updateQuality();
    // testItem2.uniqueUpdate()

    // expect(testItem2.quality).toBe(0)    
    // expect(testItem2.sellIn).toBe(-2)
  })
})

// describe ("", () => {
//   it("", () => {
//     const test4 = new Item()
//     items.push(test4)

//     updateQuality()

//     expect(test4.quality).toBe()
//     expect(test4.sellIn).toBe()
//   })
// })