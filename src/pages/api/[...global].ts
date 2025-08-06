import type { ErrorResponse } from '@/types/response';
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponse>
) {
  // Semua request yang masuk ke sini berarti tidak ada di API routes lainnya
  res.status(404).json({
    status: 'error',
    message: 'endpoint tidak valid',
  });
}
