import { create } from "zustand";
import axios from "../libs/axiosConfig";

const useContact = create((set, get) => ({
  isContacting: false,
  messages: {},

  contactNow: async (data) => {
    try {
      set({ isContacting: true });
      const response = await axios.post("/mail/contact.php", data);
      if(response?.data?.status){
        set({
        messages: {
          type: true,
          text: response?.data?.message || "Thanks for sending message",
        },
      });
      }else {
        set({
        messages: {
          type: false,
          text: response?.data?.message || "Failed to send message",
        },
      });
      }
    } catch (error) {
      set({
        messages: {
          type: false,
          text: "Failed to send message",
        },
      });
    } finally {
      set({ isContacting: false });
    }
  },
  closePop: () => {
    set({ messages: {} });
  },
}));

export default useContact;
