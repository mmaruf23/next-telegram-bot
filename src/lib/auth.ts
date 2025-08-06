import type { ApiResponse } from '@/types/response';
import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';

export const withAuth = (handler: NextApiHandler) => {
  return async (req: NextApiRequest, res: NextApiResponse<ApiResponse>) => {
    const token = req.headers['x-auth-token'];
    if (!token)
      return res.status(401).json({
        status: 'error',
        message: 'Authorization token not provided.',
      });
    if (token !== process.env.NEXT_API_TOKEN!)
      return res.status(401).json({
        status: 'error',
        message: 'invalid token.',
      });

    return handler(req, res);
  };
};
