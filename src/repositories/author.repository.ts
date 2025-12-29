import prisma from '../database';
import type { Prisma } from '../generated/client';

export class AuthorRepository {
  async findAll(skip: number, take: number, where: Prisma.AuthorWhereInput, orderBy: Prisma.AuthorOrderByWithRelationInput) {
    return await prisma.author.findMany({
      skip,
      take,
      where,
      orderBy,
      include: { products: true, user: true }
    });
  }

  async countAll(where: Prisma.AuthorWhereInput) {
    return await prisma.author.count({ where });
  }

  async findById(id: string) {
    return await prisma.author.findUnique({
      where: { id, deletedAt: null },
      include: { products: true, user: true }
    });
  }

  async create(data: Prisma.AuthorCreateInput) {
    return await prisma.author.create({ data });
  }

  async update(id: string, data: Prisma.AuthorUpdateInput) {
    return await prisma.author.update({
      where: { id },
      data
    });
  }

  async softDelete(id: string) {
    return await prisma.author.update({
      where: { id },
      data: { deletedAt: new Date() }
    });
  }
}