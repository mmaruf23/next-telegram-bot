import type { NextApiHandler, NextApiResponse } from 'next';

const handler: NextApiHandler = (req, res: NextApiResponse) => {
  return res.status(200).json({ status: 'OK' });
};

export default handler;
