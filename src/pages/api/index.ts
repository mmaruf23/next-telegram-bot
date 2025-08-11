import { withAuth } from "@/lib/auth";
// import { sendMessage } from "@/services/telegram";
import type { ApiResponse } from "@/types/response";
import type { TelegramBody } from "@/types/telegram";
import type { NextApiHandler, NextApiResponse } from "next";

const commands = ["activate", "update"];

const handler: NextApiHandler = async (req, res: NextApiResponse<ApiResponse>) => {
  const body: TelegramBody = JSON.parse(req.body);
  const command = body.message.text.split(" ");
  if (command.length === 3 && commands.includes(command[0])) {
    // do the things
    switch (command[0]) {
      case "activate":
        console.log("doing the activate request");
        break;
      case "update":
        console.log("doing the update request");
        break;
    }
  }
  return res.status(200).json({ status: "success" });
};

export default withAuth(handler);
