import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from 'shared/database';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const [rows]: Array<Array<{ total: number }>> = await db.query(
      `
      SELECT SUM(count) as total
      FROM views;
    `,
      []
    );

    const total = rows[0].total;
    return response.status(200).json({ total });
  } catch (e: unknown) {
    if (e instanceof Error) {
      return response.status(500).json({ message: e.message });
    }
    return response.status(500).json({ message: 'An error has occured.' });
  }
}
