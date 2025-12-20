import prisma from '../prisma';
import type { Prisma } from '../generated/client';

export const findAllAuthors = async (
  skip: number, 
  take: number, 
  where: Prisma.AuthorWhereInput, 
  orderBy: Record<string, 'asc' | 'desc'>  
) => {
  return await prisma.author.findMany({
    skip,
    take,
    where,
    orderBy,
    include: { products: true }
  });
};

export const countAuthors = async (where: Prisma.AuthorWhereInput) => {
  return await prisma.author.count({ where });
};

export const findAuthorById = async (id: string) => {
  return await prisma.author.findUnique({
    where: { id, deletedAt: null },
    include: { products: true }
  });
};

export const createAuthor = async (data: Prisma.AuthorCreateInput) => {
  return await prisma.author.create({ data });
};

export const updateAuthor = async (id: string, data: Prisma.AuthorUpdateInput) => {
  return await prisma.author.update({
    where: { id },
    data
  });
};

export const softDeleteAuthor = async (id: string) => {
  return await prisma.author.update({
    where: { id },
    data: { deletedAt: new Date() }
  });
};