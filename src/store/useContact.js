import { create } from "zustand";
import axios from "../libs/axiosConfig";

const useContact = create((set, get) => ({
  isContacting: false,
  messages: {},

  contactNow: async (data) => {
    try {
      set({ isContacting: true });
      const response = await axios.post("/mail/contact.php", data);
      console.log(response.data);
      set({
        messages: {
          type: true,
          text: "Thanks for sending message",
        },
      });
    } catch (error) {
      console.log(error);
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
