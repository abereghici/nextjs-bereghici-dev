/* eslint-disable no-extend-native */
import { PrismaClient } from '@prisma/client';
import { config } from 'config';
/**
 * https://github.com/prisma/studio/issues/614
 *
 */
// @ts-expect-error ts(2339)
BigInt.prototype.toJSON = function toJSON() {
  return Number(this);
};

export const prisma =
  global.prisma ??
  new PrismaClient({
    log: ['query'],
  });

if (!config.isProduction) {
  global.prisma = prisma;
}
