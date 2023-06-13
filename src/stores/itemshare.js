import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useItemShareStore = defineStore("itemshare", {
  state: () => ({
    temp: 1,
    sampleItems: [
      {
        id: 1,
        name: "Lampshade",
        location: "Baybay City",
        price: "150.00",
        rate: "per week",
        img: "https://www.ikea.com/ph/en/images/products/ringsta-lamp-shade-white__0784061_pe761617_s5.jpg",
      },
      {
        id: 2,
        name: "Outdoor Bench",
        location: "Tacloban City",
        price: "150.00",
        rate: "per day",
        img: "https://www.ikea.com/ph/en/images/products/naemmaroe-bench-with-backrest-outdoor-light-brown-stained__1185522_pe898423_s5.jpg",
      },
      {
        id: 3,
        name: "Cushion set A",
        location: "Maasin City",
        price: "50.00",
        rate: "per week",
        img: "https://www.ikea.com/ph/en/images/products/gurli-cushion-cover-golden-yellow__0889329_pe655204_s5.jpg",
      },
      {
        id: 4,
        name: "Table",
        location: "Ormoc City",
        price: "100.00",
        rate: "per day",
        img: "https://www.ikea.com/ph/en/images/products/ekedalen-extendable-table-dark-brown__0719960_pe732334_s5.jpg",
      },
      {
        id: 5,
        name: "Chair",
        location: "Sogod, Southern Leyte",
        price: "75.00",
        rate: "per day",
        img: "https://www.ikea.com/ph/en/images/products/pello-armchair-holmby-natural__0841137_pe600889_s5.jpg",
      },
      {
        id: 6,
        name: "Bookshelf",
        location: "Biliran",
        price: "200.00",
        rate: "per week",
        img: "https://www.ikea.com/ph/en/images/products/baggebo-shelf-unit-metal-white__0981563_pe815398_s5.jpg",
      },
      {
        id: 7,
        name: "Sofa",
        location: "Ormoc City",
        price: "250.00",
        rate: "per day",
        img: "https://www.ikea.com/ph/en/images/products/friheten-sleeper-sofa-bomstad-black__0620065_pe689376_s5.jpg",
      },
      {
        id: 8,
        name: "Dining Table",
        location: "Baybay City",
        price: "180.00",
        rate: "per day",
        img: "https://www.ikea.com/ph/en/images/products/jokkmokk-table-and-4-chairs-antique-stain__0870916_pe716638_s5.jpg",
      },
      {
        id: 9,
        name: "Kitchen Cabinet",
        location: "Maasin, Southern Leyte",
        price: "220.00",
        rate: "per week",
        img: "https://www.ikea.com/ph/en/images/products/metod-maximera-base-cab-w-wire-basket-drawer-door__0260116_pe403633_s5.jpg",
      },
      {
        id: 10,
        name: "Desk",
        location: "Tacloban City",
        price: "120.00",
        rate: "per day",
        img: "https://www.ikea.com/ph/en/images/products/torald-desk-white__1073186_pe855653_s5.jpg",
      },
      {
        id: 11,
        name: "Bed Frame",
        location: "Ormoc City",
        price: "200.00",
        rate: "per week",
        img: "https://www.ikea.com/ph/en/images/products/songesand-bed-frame-with-2-storage-boxes-white-luroey__1101546_pe866675_s5.jpg",
      },
      {
        id: 12,
        name: "Mattress",
        location: "Baybay City",
        price: "100.00",
        rate: "per day",
        img: "https://www.ikea.com/ph/en/images/products/raholt-guest-mattress-gray__1079894_pe857765_s5.jpg",
      },
      {
        id: 13,
        name: "Wardrobe",
        location: "Tacloban City",
        price: "180.00",
        rate: "per week",
        img: "https://www.ikea.com/ph/en/images/products/kleppstad-wardrobe-with-2-doors-white__0733323_pe748780_s5.jpg",
      },
      {
        id: 14,
        name: "Television",
        location: "Maasin, Southern Leyte",
        price: "150.00",
        rate: "per day",
        img: "https://www.ikea.com/ph/en/images/products/lack-tv-unit-white__0984219_pe816163_s5.jpg",
      },
      {
        id: 15,
        name: "Coffee Table",
        location: "Ormoc City",
        price: "90.00",
        rate: "per day",
        img: "https://www.ikea.com/ph/en/images/products/lack-coffee-table-white__0702217_pe724349_s5.jpg",
      },
      {
        id: 16,
        name: "Side Table",
        location: "Baybay City",
        price: "60.00",
        rate: "per week",
        img: "https://www.ikea.com/ph/en/images/products/knarrevik-nightstand-black__0858302_pe669481_s5.jpg",
      },
      {
        id: 17,
        name: "Dresser",
        location: "Tacloban City",
        price: "180.00",
        rate: "per day",
        img: "https://www.ikea.com/ph/en/images/products/kullen-6-drawer-dresser-black-brown__0778046_pe758818_s5.jpg",
      },
      {
        id: 18,
        name: "Armchair",
        location: "Maasin, Southern Leyte",
        price: "120.00",
        rate: "per week",
        img: "https://www.ikea.com/ph/en/images/products/poaeng-armchair-frame-birch-veneer__65988_pe177918_s5.jpg",
      },
    ],
    sampleConvos: [
      {
        username: "John Doe",
        lastMessage: "Sample message",
      },
    ],
  }),
  getters: {
    tempGetter(state) {
      return state.temp;
    },
    // sample getter that accepts argument
    productsCheaperThan(state) {
      return (price) =>
        state.products.filter((product) => product.price < price);
    },
    itemsInRange(state) {
      return (start, end) => state.sampleItems.slice(start, end);
    },
    itemById(state) {
      return (id) => state.sampleItems.find((item) => item.id == id);
    },
  },
  actions: {
    login() {
      // some login processing
      return true; //login successful
    },
    searchItem() {
      // some search processing
      return true;
    },
  },
});

// possibly split this pinia into several files when too many lines
