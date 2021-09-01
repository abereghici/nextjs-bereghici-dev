import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from 'shared/database';

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    const slug = request.query.slug as string;
    const postViews = await prisma.views.findFirst({
      where: {
        slug: {
          equals: slug,
        },
      },
    });

    const total = Number(postViews?.count ?? 0);

    if (request.method === 'POST') {
      if (postViews) {
        await prisma.views.updateMany({
          where: {
            slug: {
              equals: slug,
            },
          },
          data: {
            count: total + 1,
          },
        });

        return response.status(200).json({
          total: total + 1,
        });
      } else {
        await prisma.views.create({
          data: {
            slug,
            count: 1,
          },
        });
        return response.status(200).json({
          total: 1,
        });
      }
    }

    if (request.method === 'GET') {
      return response.status(200).json({ total });
    }
  } catch (e: unknown) {
    if (e instanceof Error) {
      return response.status(500).json({ message: e.message });
    }
    return response.status(500).json({ message: 'An error has occured.' });
  }
}
