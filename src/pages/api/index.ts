import { withAuth } from '@/lib/auth';
import type { ApiResponse } from '@/types/response';
import type { NextApiHandler, NextApiResponse } from 'next';

const handler: NextApiHandler = (req, res: NextApiResponse<ApiResponse>) => {
  return res.status(200).json({ status: 'success' });
};

export default withAuth(handler);
