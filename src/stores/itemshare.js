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
  addDoc,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import db from "../firebase/firebaseInit.js";
import {
  ref as stRef,
  getStorage,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const storage = getStorage();

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
        firstName: "Isaac",
        lastName: "Einstein",
        image: "https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",
        location: "Baybay City",
      },
      {
        id: 1,
        firstName: "John",
        lastName: "Smith",
        image: "https://img.getimg.ai/generated/img-NBSWR192z1P7HQLAUP4hR.jpeg",
        location: "Baybay City",
      },
      {
        id: 2,
        firstName: "Emily",
        lastName: "Johnson",
        image: "https://img.getimg.ai/generated/img-BiRtUIr1MBupBILYwExbV.jpeg",
        location: "Tacloban City",
      },
      {
        id: 3,
        firstName: "David",
        lastName: "Brown",
        image: "https://img.getimg.ai/generated/img-4Ld0iBhed56PELjUqhwEO.jpeg",
        location: "Calbayog City",
      },
      {
        id: 4,
        firstName: "Sarah",
        lastName: "Davis",
        image: "https://img.getimg.ai/generated/img-A1VWmtSrpbnz3IaAZoRGd.jpeg",
        location: "Tacloban City",
      },
      {
        id: 5,
        firstName: "Michael",
        lastName: "Wilson",
        image: "https://img.getimg.ai/generated/img-LGspJ7ZY9oQAd8wXCvllL.jpeg",
        location: "Ormoc City",
      },
      {
        id: 6,
        firstName: "Jessica",
        lastName: "Thompson",
        image: "https://th.bing.com/th/id/OIG.8wsk4S4V4bwjD_ptJt.d?pid=ImgGn",
        location: "Maasin City",
      },
      {
        id: 7,
        firstName: "Christopher",
        lastName: "Martinez",
        image: "https://th.bing.com/th/id/OIG.cK203xdTu6lyf1bhWnDk?pid=ImgGn",
        location: "Tacloban City",
      },
      {
        id: 8,
        firstName: "Megan",
        lastName: "Taylor",
        image: "https://th.bing.com/th/id/OIG.IseiFm0qbzVS.fUqNwqS?pid=ImgGn",
        location: "Calbayog City",
      },
    ],
    /*loadedProfile: {
      firstName: "Isaac",
      lastName: "Einstein",
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
        ownerId: 0,
      },
      {
        itemId: 2,
        itemName: "Outdoor Bench",
        location: "Tacloban City",
        rentAmount: "150.00",
        rentRate: "per day",
        image:
          "https://www.ikea.com/ph/en/images/products/naemmaroe-bench-with-backrest-outdoor-light-brown-stained__1185522_pe898423_s5.jpg",
        ownerId: 1,
      },
      {
        itemId: 3,
        itemName: "Cushion set A",
        location: "Maasin City",
        rentAmount: "50.00",
        rentRate: "per week",
        image:
          "https://www.ikea.com/ph/en/images/products/gurli-cushion-cover-golden-yellow__0889329_pe655204_s5.jpg",
        ownerId: 2,
      },
      {
        itemId: 4,
        name: "Table",
        location: "Ormoc City",
        rentAmount: "100.00",
        rentRate: "per day",
        image:
          "https://www.ikea.com/ph/en/images/products/ekedalen-extendable-table-dark-brown__0719960_pe732334_s5.jpg",
        ownerId: 3,
      },
      {
        itemId: 5,
        itemName: "Chair",
        location: "Sogod, Southern Leyte",
        rentAmount: "75.00",
        rentRate: "per day",
        image:
          "https://www.ikea.com/ph/en/images/products/pello-armchair-holmby-natural__0841137_pe600889_s5.jpg",
        ownerId: 4,
      },
      {
        itemId: 6,
        itemName: "Bookshelf",
        location: "Biliran",
        rentAmount: "200.00",
        rentRate: "per week",
        image:
          "https://www.ikea.com/ph/en/images/products/baggebo-shelf-unit-metal-white__0981563_pe815398_s5.jpg",
        ownerId: 5,
      },
      {
        itemId: 7,
        itemName: "Sofa",
        location: "Ormoc City",
        rentAmount: "250.00",
        rentRate: "per day",
        image:
          "https://www.ikea.com/ph/en/images/products/friheten-sleeper-sofa-bomstad-black__0620065_pe689376_s5.jpg",
        ownerId: 6,
      },
      {
        itemId: 8,
        itemName: "Dining Table",
        location: "Baybay City",
        rentAmount: "180.00",
        rentRate: "per day",
        image:
          "https://www.ikea.com/ph/en/images/products/jokkmokk-table-and-4-chairs-antique-stain__0870916_pe716638_s5.jpg",
        ownerId: 7,
      },
      {
        itemId: 9,
        itemName: "Kitchen Cabinet",
        location: "Maasin, Southern Leyte",
        rentAmount: "220.00",
        rentRate: "per week",
        image:
          "https://www.ikea.com/ph/en/images/products/metod-maximera-base-cab-w-wire-basket-drawer-door__0260116_pe403633_s5.jpg",
        ownerId: 8,
      },
      {
        itemId: 10,
        itemName: "Desk",
        location: "Tacloban City",
        rentAmount: "120.00",
        rentRate: "per day",
        image:
          "https://www.ikea.com/ph/en/images/products/torald-desk-white__1073186_pe855653_s5.jpg",
        ownerId: 0,
      },
      {
        itemId: 11,
        itemName: "Bed Frame",
        location: "Ormoc City",
        rentAmount: "200.00",
        rentRate: "per week",
        image:
          "https://www.ikea.com/ph/en/images/products/songesand-bed-frame-with-2-storage-boxes-white-luroey__1101546_pe866675_s5.jpg",
        ownerId: 1,
      },
      {
        itemId: 12,
        itemName: "Mattress",
        location: "Baybay City",
        rentAmount: "100.00",
        rentRate: "per day",
        image:
          "https://www.ikea.com/ph/en/images/products/raholt-guest-mattress-gray__1079894_pe857765_s5.jpg",
        ownerId: 2,
      },
      {
        itemId: 13,
        itemName: "Wardrobe",
        location: "Tacloban City",
        rentAmount: "180.00",
        rentRate: "per week",
        image:
          "https://www.ikea.com/ph/en/images/products/kleppstad-wardrobe-with-2-doors-white__0733323_pe748780_s5.jpg",
        ownerId: 3,
      },
      {
        itemId: 14,
        itemName: "Television",
        location: "Maasin, Southern Leyte",
        rentAmount: "150.00",
        rentRate: "per day",
        image:
          "https://www.ikea.com/ph/en/images/products/lack-tv-unit-white__0984219_pe816163_s5.jpg",
        ownerId: 4,
      },
      {
        itemId: 15,
        itemName: "Coffee Table",
        location: "Ormoc City",
        rentAmount: "90.00",
        rentRate: "per day",
        image:
          "https://www.ikea.com/ph/en/images/products/lack-coffee-table-white__0702217_pe724349_s5.jpg",
        ownerId: 5,
      },
      {
        itemId: 16,
        itemName: "Side Table",
        location: "Baybay City",
        rentAmount: "60.00",
        rentRate: "per week",
        image:
          "https://www.ikea.com/ph/en/images/products/knarrevik-nightstand-black__0858302_pe669481_s5.jpg",
        ownerId: 6,
      },
      {
        itemId: 17,
        itemName: "Dresser",
        location: "Tacloban City",
        rentAmount: "180.00",
        rentRate: "per day",
        image:
          "https://www.ikea.com/ph/en/images/products/kullen-6-drawer-dresser-black-brown__0778046_pe758818_s5.jpg",
        ownerId: 7,
      },
      {
        itemId: 18,
        itemName: "Armchair",
        location: "Maasin, Southern Leyte",
        rentAmount: "120.00",
        rentRate: "per week",
        image:
          "https://www.ikea.com/ph/en/images/products/poaeng-armchair-frame-birch-veneer__65988_pe177918_s5.jpg",
        ownerId: 8,
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
    // verifies if user is already logged in
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

    // loads a profile based on user's uid
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

    // returns true if login is successful
    async login(email, password) {
      if (email !== "" && password !== "") {
        try {
          const userCredential = await firebase
            .auth()
            .signInWithEmailAndPassword(email, password);
          this.myUserUid = userCredential.user.uid;
          localStorage.setItem("useruid", this.myUserUid);
          return true; // returned and returned to LoginView to redirect to home
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

    // returns an array of items, paramters are: max number to retrieve, or just user's uid
    async loadItems(maxlimit = 12, ownerId = "") {
      let q = query(collection(db, "items"));
      if (ownerId) {
        q = query(q, where("ownerId", "==", ownerId));
      }
      // q = query(q, orderBy("dateCreated", "desc")); // temp, please uncomment this later
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
          image: doc.data().images
            ? doc.data().images[0]
            : "https://www.ikea.com/ph/en/images/products/ringsta-lamp-shade-white__0784061_pe761617_s5.jpg",
          //tags: doc.data().tags,
          //description: doc.data().description,
        };
        fItems.push(item);
      });
      return fItems;
    },

    // returns one item based on item's id
    async loadItem(itemid) {
      const itemSnap = await getDoc(doc(db, "items", itemid));
      if (itemSnap.exists()) {
        return {
          itemName: itemSnap.data().itemName,
          location: itemSnap.data().location,
          rentAmount: itemSnap.data().rentAmount,
          rentRate: itemSnap.data().rentRate,
          description: itemSnap.data().description,
          tags: itemSnap.data().tags,
          images: itemSnap.data().images || [
            "https://www.ikea.com/ph/en/images/products/ringsta-lamp-shade-white__0784061_pe761617_s5.jpg",
          ],
          ownerId: itemSnap.data().ownerId,
        };
      }
    },

    // returns an the imageURL
    async uploadImage(image) {
      // set the filename to timestamp.jpg or something in itemImages folder
      const storageRef = stRef(
        storage,
        "itemImages/" + Date.now() + "." + image.name.split(".").pop()
      );
      await uploadBytesResumable(storageRef, image);
      return await getDownloadURL(storageRef);
    },

    // returns true if operation is successful
    async createItem(item) {
      if (
        item.imageFiles.length == 0 ||
        item.itemName == "" ||
        item.location == "" ||
        item.rentAmount == "" ||
        item.rentRate == "" ||
        item.tags.length == 0 ||
        item.description == ""
      ) {
        throw "Please fill out all the fields!";
      }

      try {
        const uploadedImageURLs = [];
        for (var image of item.imageFiles) {
          uploadedImageURLs.push(await this.uploadImage(image));
        }

        await addDoc(collection(db, "items"), {
          ownerId: this.myUserUid,
          images: uploadedImageURLs,
          itemName: item.itemName,
          location: item.location,
          rentAmount: item.rentAmount,
          rentRate: item.rentRate,
          tags: item.tags,
          description: item.description,
          dateCreated: Date.now(),
        });

        return true;
      } catch (err) {
        throw err.message;
      }
    },

    // returns a list of items based on search queries of tags
    searchItem() {
      // some search processing
      return [];
    },

    async register(details) {
      if (
        details.phoneNumber == "" ||
        details.email == "" ||
        details.firstName == "" ||
        details.lastName == "" ||
        details.gender == "Select" ||
        details.location == "" ||
        details.birthday == "" ||
        details.password == "" ||
        details.confirmPassword == ""
      ) {
        throw "Please fill out all the fields!";
      }

      if (details.password != details.confirmPassword) {
        throw "Password does not match!";
      }

      if (!details.terms) {
        throw "Please agree to the terms and conditions.";
      }

      switch (details.gender) {
        case "Male":
          details.image =
            "https://firebasestorage.googleapis.com/v0/b/itemshare-68ae3.appspot.com/o/defaultAvatars%2Fis_avatar_male.png?alt=media&token=b239dcf0-a57f-43a1-a0bd-34898f5a9714";
          break;
        case "Female":
          details.image =
            "https://firebasestorage.googleapis.com/v0/b/itemshare-68ae3.appspot.com/o/defaultAvatars%2Fis_avatar_female.png?alt=media&token=6bca62c3-150b-46f7-ad60-6128217e24bd";
          break;
        default:
          details.image =
            "https://firebasestorage.googleapis.com/v0/b/itemshare-68ae3.appspot.com/o/defaultAvatars%2Fis_avatar_non.png?alt=media&token=3ad18afa-9e86-486c-8b03-184678722366";
          break;
      }

      try {
        const createdUser = await firebase
          .auth()
          .createUserWithEmailAndPassword(details.email, details.password);
        const dataBase = db.collection("users").doc(createdUser.user.uid);
        await dataBase.set({
          firstName: details.firstName,
          lastName: details.lastName,
          email: details.email,
          phoneNumber: details.phoneNumber,
          gender: details.gender,
          birthday: details.birthday,
          location: details.location,
          image: details.image,
          verified: false,
          admin: false,
        });

        this.myUserUid = createdUser.user.uid;
        localStorage.setItem("useruid", this.myUserUid);
      } catch (error) {
        throw error.message;
      }

      // if all is a success
      return true;
    },

    // returns true if successful?
    async logout() {
      try {
        await firebase.auth().signOut();

        this.myUserUid = null;
        localStorage.removeItem("useruid");
        return true;
      } catch (error) {
        throw error;
      }
    },
  },
});

// possibly split this pinia into several files when too many lines
