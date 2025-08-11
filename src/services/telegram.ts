import axios from "axios";

export const sendMessage = async (text: string, chatId: number) => {
  try {
    await axios.post(`https://api.telegram.org/bot${process.env.BOT_TOKEN_HACHIMAN!}/sendMessage`, {
      chat_id: chatId,
      text,
    });
  } catch (error) {
    console.log("ERROR : ", error);
  }

  return;
};
