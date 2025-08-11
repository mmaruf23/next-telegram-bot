import { withAuth } from "@/lib/auth";
import type { ErrorResponse } from "@/types/response";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse<ErrorResponse>) => {
  res.status(404).json({
    status: "error",
    message: "endpoint tidak valid",
  });
};

export default withAuth(handler);
