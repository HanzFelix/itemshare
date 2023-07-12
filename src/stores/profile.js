import { defineStore } from "pinia";
import { useItemShareStore } from "@/stores/itemshare";

// todo: migrate myuseruid related stuff here
export const useProfileStore = defineStore("profile", {
  state: () => ({
    lastLoadedProfileId: "",
    loadedProfile: {
      firstName: "",
      lastName: "",
      image:
        "https://firebasestorage.googleapis.com/v0/b/itemshare-68ae3.appspot.com/o/defaultAvatars%2Fis_avatar_non.png?alt=media&token=3ad18afa-9e86-486c-8b03-184678722366",
      location: "",
    },
  }),
  getters: {},
  actions: {
    async loadProfile(profileId) {
      // reuse stored profile if attempting to load same profile
      if (profileId == this.lastLoadedProfileId && !this.loadProfile.firstName)
        return;

      const itemShareStore = useItemShareStore();
      if (profileId == itemShareStore.myUserUid) {
        this.loadedProfile = itemShareStore.myProfile;
      } else {
        this.loadedProfile = await itemShareStore.loadProfile(profileId);
      }
      this.lastLoadedProfileId = profileId;
    },
  },
});
