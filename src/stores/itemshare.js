import { ref, computed } from "vue";
import { defineStore } from "pinia";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import {
  collection,
  getDoc,
  getDocs,
  doc,
  limit,
  query,
  where,
} from "firebase/firestore";
import db from "../firebase/firebaseInit.js";

export const useItemShareStore = defineStore("itemshare", {
  state: () => ({
    temp: 1,
    myUserUid: localStorage.getItem("useruid") || null,
    myProfile: {
      firstName: "",
      lastName: "",
      image: "",
      location: "",
    },
    editProfile: {
      id: 9,
      firstName: "Isaac",
      lastName: "Einstein",
      image: "https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",
      location: "Baybay City",
    },
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
        itemId: 1,
        itemName: "Lampshade",
        location: "Baybay City",
        rentAmount: "150.00",
        rentRate: "per week",
        image:
          "https://www.ikea.com/ph/en/images/products/ringsta-lamp-shade-white__0784061_pe761617_s5.jpg",
        userid: 0,
      },
      {
        itemId: 2,
        itemName: "Outdoor Bench",
        location: "Tacloban City",
        rentAmount: "150.00",
        rentRate: "per day",
        image:
          "https://www.ikea.com/ph/en/images/products/naemmaroe-bench-with-backrest-outdoor-light-brown-stained__1185522_pe898423_s5.jpg",
        userid: 1,
      },
      {
        itemId: 3,
        itemName: "Cushion set A",
        location: "Maasin City",
        rentAmount: "50.00",
        rentRate: "per week",
        image:
          "https://www.ikea.com/ph/en/images/products/gurli-cushion-cover-golden-yellow__0889329_pe655204_s5.jpg",
        userid: 2,
      },
      {
        itemId: 4,
        name: "Table",
        location: "Ormoc City",
        rentAmount: "100.00",
        rentRate: "per day",
        image:
          "https://www.ikea.com/ph/en/images/products/ekedalen-extendable-table-dark-brown__0719960_pe732334_s5.jpg",
        userid: 3,
      },
      {
        itemId: 5,
        itemName: "Chair",
        location: "Sogod, Southern Leyte",
        rentAmount: "75.00",
        rentRate: "per day",
        image:
          "https://www.ikea.com/ph/en/images/products/pello-armchair-holmby-natural__0841137_pe600889_s5.jpg",
        userid: 4,
      },
      {
        itemId: 6,
        itemName: "Bookshelf",
        location: "Biliran",
        rentAmount: "200.00",
        rentRate: "per week",
        image:
          "https://www.ikea.com/ph/en/images/products/baggebo-shelf-unit-metal-white__0981563_pe815398_s5.jpg",
        userid: 5,
      },
      {
        itemId: 7,
        itemName: "Sofa",
        location: "Ormoc City",
        rentAmount: "250.00",
        rentRate: "per day",
        image:
          "https://www.ikea.com/ph/en/images/products/friheten-sleeper-sofa-bomstad-black__0620065_pe689376_s5.jpg",
        userid: 6,
      },
      {
        itemId: 8,
        itemName: "Dining Table",
        location: "Baybay City",
        rentAmount: "180.00",
        rentRate: "per day",
        image:
          "https://www.ikea.com/ph/en/images/products/jokkmokk-table-and-4-chairs-antique-stain__0870916_pe716638_s5.jpg",
        userid: 7,
      },
      {
        itemId: 9,
        itemName: "Kitchen Cabinet",
        location: "Maasin, Southern Leyte",
        rentAmount: "220.00",
        rentRate: "per week",
        image:
          "https://www.ikea.com/ph/en/images/products/metod-maximera-base-cab-w-wire-basket-drawer-door__0260116_pe403633_s5.jpg",
        userid: 8,
      },
      {
        itemId: 10,
        itemName: "Desk",
        location: "Tacloban City",
        rentAmount: "120.00",
        rentRate: "per day",
        image:
          "https://www.ikea.com/ph/en/images/products/torald-desk-white__1073186_pe855653_s5.jpg",
        userid: 0,
      },
      {
        itemId: 11,
        itemName: "Bed Frame",
        location: "Ormoc City",
        rentAmount: "200.00",
        rentRate: "per week",
        image:
          "https://www.ikea.com/ph/en/images/products/songesand-bed-frame-with-2-storage-boxes-white-luroey__1101546_pe866675_s5.jpg",
        userid: 1,
      },
      {
        itemId: 12,
        itemName: "Mattress",
        location: "Baybay City",
        rentAmount: "100.00",
        rentRate: "per day",
        image:
          "https://www.ikea.com/ph/en/images/products/raholt-guest-mattress-gray__1079894_pe857765_s5.jpg",
        userid: 2,
      },
      {
        itemId: 13,
        itemName: "Wardrobe",
        location: "Tacloban City",
        rentAmount: "180.00",
        rentRate: "per week",
        image:
          "https://www.ikea.com/ph/en/images/products/kleppstad-wardrobe-with-2-doors-white__0733323_pe748780_s5.jpg",
        userid: 3,
      },
      {
        itemId: 14,
        itemName: "Television",
        location: "Maasin, Southern Leyte",
        rentAmount: "150.00",
        rentRate: "per day",
        image:
          "https://www.ikea.com/ph/en/images/products/lack-tv-unit-white__0984219_pe816163_s5.jpg",
        userid: 4,
      },
      {
        itemId: 15,
        itemName: "Coffee Table",
        location: "Ormoc City",
        rentAmount: "90.00",
        rentRate: "per day",
        image:
          "https://www.ikea.com/ph/en/images/products/lack-coffee-table-white__0702217_pe724349_s5.jpg",
        userid: 5,
      },
      {
        itemId: 16,
        itemName: "Side Table",
        location: "Baybay City",
        rentAmount: "60.00",
        rentRate: "per week",
        image:
          "https://www.ikea.com/ph/en/images/products/knarrevik-nightstand-black__0858302_pe669481_s5.jpg",
        userid: 6,
      },
      {
        itemId: 17,
        itemName: "Dresser",
        location: "Tacloban City",
        rentAmount: "180.00",
        rentRate: "per day",
        image:
          "https://www.ikea.com/ph/en/images/products/kullen-6-drawer-dresser-black-brown__0778046_pe758818_s5.jpg",
        userid: 7,
      },
      {
        itemId: 18,
        itemName: "Armchair",
        location: "Maasin, Southern Leyte",
        rentAmount: "120.00",
        rentRate: "per week",
        image:
          "https://www.ikea.com/ph/en/images/products/poaeng-armchair-frame-birch-veneer__65988_pe177918_s5.jpg",
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
    loadedProfile(state) {
      return (index) => state.sampleProfiles[index];
    },
    loggedInUser(state) {
      return state.myUserUid;
    },
  },
  actions: {
    async initMyProfile() {
      firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
          this.myUserUid = user.uid;
          this.myProfile = await this.loadProfile(user.uid);
        } else {
          this.useruid = null;
          return {};
        }
      });
    },

    async loadProfile(useruid) {
      const profileSnap = await getDoc(doc(db, "users", useruid));
      if (profileSnap.exists()) {
        return {
          firstName: profileSnap.data().firstName,
          lastName: profileSnap.data().lastName,
          location: profileSnap.data().location,
          image: profileSnap.data().image,
        };
      }
    },

    async login(email, password) {
      if (email !== "" && password !== "") {
        try {
          return firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
              this.useruid = userCredential.user.uid;
              localStorage.setItem("useruid", this.myUserUid);
              return true; // returned and returned to LoginView to redirect to home
            });
        } catch (error) {
          switch (error.code) {
            case "auth/invalid-email":
              throw "Invalid email";
            case "auth/user-not-found":
              throw "No account with that email was found";
            case "auth/wrong-password":
              throw "Incorrect password";
            default:
              throw error.code;
          }
        }
      } else {
        throw "Please fill out all the fields!";
      }
    },

    async loadItems(maxlimit = 12, ownerId = "") {
      let q = query(collection(db, "items"));
      if (ownerId) {
        q = query(q, where("ownerId", "==", ownerId));
      }
      q = query(q, limit(maxlimit));
      const querySnapshot = await getDocs(q);
      const fItems = [];
      querySnapshot.forEach((doc) => {
        const item = {
          itemId: doc.id,
          //ownerID: doc.data().ownerId,
          //ownerName: doc.data().ownerFName + " " + doc.data().ownerLName,
          itemName: doc.data().itemName,
          location: doc.data().location,
          rentAmount: doc.data().rentAmount,
          rentRate: doc.data().rentRate,
          image:
            "https://www.ikea.com/ph/en/images/products/ringsta-lamp-shade-white__0784061_pe761617_s5.jpg",
          //tags: doc.data().tags,
          //description: doc.data().description,
        };
        fItems.push(item);
      });
      return fItems;
    },
    searchItem() {
      // some search processing
      return true;
    },
  },
});

// possibly split this pinia into several files when too many lines
