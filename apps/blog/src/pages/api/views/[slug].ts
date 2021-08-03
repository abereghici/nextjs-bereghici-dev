import type { NextApiRequest, NextApiResponse } from 'next';
import { db } from 'shared/database';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const [rows]: Array<Array<{ count: number }>> = await db.query(
      `
      SELECT * FROM views
      WHERE slug = ?;
    `,
      [request.query.slug]
    );

    if (request.method === 'POST') {
      if (rows.length == 0) {
        await db.query(
          `
          INSERT INTO views (slug)
          VALUES (?);
        `,
          [request.query.slug]
        );

        return response.status(200).json({
          total: 1,
        });
      } else {
        await db.query(
          `
          UPDATE views
          SET count = count + 1
          WHERE slug = ?;
        `,
          [request.query.slug]
        );

        return response.status(200).json({
          total: rows[0].count + 1,
        });
      }
    }

    if (request.method === 'GET') {
      return response.status(200).json({ total: rows[0].count });
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      return response.status(500).json({ message: e.message });
    }
    return response.status(500).json({ message: 'An error has occured.' });
  }
}
