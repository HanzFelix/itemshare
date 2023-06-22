import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useItemShareStore = defineStore("itemshare", {
  state: () => ({
    temp: 1,
    sampleProfiles: [
      {
        id: 0,
        firstname: "Isaac",
        lastname: "Einstein",
        image: "https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",
        location: "Baybay City",
      },
      {
        id: 1,
        firstname: "John",
        lastname: "Smith",
        image: "https://img.getimg.ai/generated/img-NBSWR192z1P7HQLAUP4hR.jpeg",
        location: "Baybay City",
      },
      {
        id: 2,
        firstname: "Emily",
        lastname: "Johnson",
        image: "https://img.getimg.ai/generated/img-BiRtUIr1MBupBILYwExbV.jpeg",
        location: "Tacloban City",
      },
      {
        id: 3,
        firstname: "David",
        lastname: "Brown",
        image: "https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",
        location: "Calbayog City",
      },
      {
        id: 4,
        firstname: "Sarah",
        lastname: "Davis",
        image: "https://img.getimg.ai/generated/img-A1VWmtSrpbnz3IaAZoRGd.jpeg",
        location: "Tacloban City",
      },
      {
        id: 5,
        firstname: "Michael",
        lastname: "Wilson",
        image: "https://img.getimg.ai/generated/img-LGspJ7ZY9oQAd8wXCvllL.jpeg",
        location: "Ormoc City",
      },
      {
        id: 6,
        firstname: "Jessica",
        lastname: "Thompson",
        image: "https://th.bing.com/th/id/OIG.8wsk4S4V4bwjD_ptJt.d?pid=ImgGn",
        location: "Maasin City",
      },
      {
        id: 7,
        firstname: "Christopher",
        lastname: "Martinez",
        image: "https://th.bing.com/th/id/OIG.cK203xdTu6lyf1bhWnDk?pid=ImgGn",
        location: "Tacloban City",
      },
      {
        id: 8,
        firstname: "Megan",
        lastname: "Taylor",
        image: "https://th.bing.com/th/id/OIG.IseiFm0qbzVS.fUqNwqS?pid=ImgGn",
        location: "Calbayog City",
      },
    ],
    /*loadedProfile: {
      firstname: "Isaac",
      lastname: "Einstein",
      image: "https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",
      location: "Baybay City",
    },*/
    rentedItems: [],
    sampleItems: [
      {
        id: 1,
        name: "Lampshade",
        location: "Baybay City",
        price: "150.00",
        rate: "per week",
        img: "https://www.ikea.com/ph/en/images/products/ringsta-lamp-shade-white__0784061_pe761617_s5.jpg",
        userid: 0,
      },
      {
        id: 2,
        name: "Outdoor Bench",
        location: "Tacloban City",
        price: "150.00",
        rate: "per day",
        img: "https://www.ikea.com/ph/en/images/products/naemmaroe-bench-with-backrest-outdoor-light-brown-stained__1185522_pe898423_s5.jpg",
        userid: 1,
      },
      {
        id: 3,
        name: "Cushion set A",
        location: "Maasin City",
        price: "50.00",
        rate: "per week",
        img: "https://www.ikea.com/ph/en/images/products/gurli-cushion-cover-golden-yellow__0889329_pe655204_s5.jpg",
        userid: 2,
      },
      {
        id: 4,
        name: "Table",
        location: "Ormoc City",
        price: "100.00",
        rate: "per day",
        img: "https://www.ikea.com/ph/en/images/products/ekedalen-extendable-table-dark-brown__0719960_pe732334_s5.jpg",
        userid: 3,
      },
      {
        id: 5,
        name: "Chair",
        location: "Sogod, Southern Leyte",
        price: "75.00",
        rate: "per day",
        img: "https://www.ikea.com/ph/en/images/products/pello-armchair-holmby-natural__0841137_pe600889_s5.jpg",
        userid: 4,
      },
      {
        id: 6,
        name: "Bookshelf",
        location: "Biliran",
        price: "200.00",
        rate: "per week",
        img: "https://www.ikea.com/ph/en/images/products/baggebo-shelf-unit-metal-white__0981563_pe815398_s5.jpg",
        userid: 5,
      },
      {
        id: 7,
        name: "Sofa",
        location: "Ormoc City",
        price: "250.00",
        rate: "per day",
        img: "https://www.ikea.com/ph/en/images/products/friheten-sleeper-sofa-bomstad-black__0620065_pe689376_s5.jpg",
        userid: 6,
      },
      {
        id: 8,
        name: "Dining Table",
        location: "Baybay City",
        price: "180.00",
        rate: "per day",
        img: "https://www.ikea.com/ph/en/images/products/jokkmokk-table-and-4-chairs-antique-stain__0870916_pe716638_s5.jpg",
        userid: 7,
      },
      {
        id: 9,
        name: "Kitchen Cabinet",
        location: "Maasin, Southern Leyte",
        price: "220.00",
        rate: "per week",
        img: "https://www.ikea.com/ph/en/images/products/metod-maximera-base-cab-w-wire-basket-drawer-door__0260116_pe403633_s5.jpg",
        userid: 8,
      },
      {
        id: 10,
        name: "Desk",
        location: "Tacloban City",
        price: "120.00",
        rate: "per day",
        img: "https://www.ikea.com/ph/en/images/products/torald-desk-white__1073186_pe855653_s5.jpg",
        userid: 0,
      },
      {
        id: 11,
        name: "Bed Frame",
        location: "Ormoc City",
        price: "200.00",
        rate: "per week",
        img: "https://www.ikea.com/ph/en/images/products/songesand-bed-frame-with-2-storage-boxes-white-luroey__1101546_pe866675_s5.jpg",
        userid: 1,
      },
      {
        id: 12,
        name: "Mattress",
        location: "Baybay City",
        price: "100.00",
        rate: "per day",
        img: "https://www.ikea.com/ph/en/images/products/raholt-guest-mattress-gray__1079894_pe857765_s5.jpg",
        userid: 2,
      },
      {
        id: 13,
        name: "Wardrobe",
        location: "Tacloban City",
        price: "180.00",
        rate: "per week",
        img: "https://www.ikea.com/ph/en/images/products/kleppstad-wardrobe-with-2-doors-white__0733323_pe748780_s5.jpg",
        userid: 3,
      },
      {
        id: 14,
        name: "Television",
        location: "Maasin, Southern Leyte",
        price: "150.00",
        rate: "per day",
        img: "https://www.ikea.com/ph/en/images/products/lack-tv-unit-white__0984219_pe816163_s5.jpg",
        userid: 4,
      },
      {
        id: 15,
        name: "Coffee Table",
        location: "Ormoc City",
        price: "90.00",
        rate: "per day",
        img: "https://www.ikea.com/ph/en/images/products/lack-coffee-table-white__0702217_pe724349_s5.jpg",
        userid: 5,
      },
      {
        id: 16,
        name: "Side Table",
        location: "Baybay City",
        price: "60.00",
        rate: "per week",
        img: "https://www.ikea.com/ph/en/images/products/knarrevik-nightstand-black__0858302_pe669481_s5.jpg",
        userid: 6,
      },
      {
        id: 17,
        name: "Dresser",
        location: "Tacloban City",
        price: "180.00",
        rate: "per day",
        img: "https://www.ikea.com/ph/en/images/products/kullen-6-drawer-dresser-black-brown__0778046_pe758818_s5.jpg",
        userid: 7,
      },
      {
        id: 18,
        name: "Armchair",
        location: "Maasin, Southern Leyte",
        price: "120.00",
        rate: "per week",
        img: "https://www.ikea.com/ph/en/images/products/poaeng-armchair-frame-birch-veneer__65988_pe177918_s5.jpg",
        userid: 8,
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
    myProfile(state) {
      return state.sampleProfiles[0];
    },
    loadedProfile(state) {
      return (index) => state.sampleProfiles[index];
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
