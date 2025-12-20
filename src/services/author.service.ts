import * as authorRepo from "../repositories/author.repository";
import type { Author } from "../generated/client";

interface FindAllParams {
  page: number;
  limit: number;
  search?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

interface AuthorListResponse {
    data: Author[];
  total: number;
  pages: number;
  page: number;  
  limit: number;
}

export const getAllAuthors = async (params: FindAllParams): Promise<AuthorListResponse> => {
  const { page, limit, search, sortBy, sortOrder } = params;

  const skip = (page - 1) * limit;

  const whereClause: any = {
    deletedAt: null 
  };

  if (search) {
    whereClause.name = { contains: search, mode: 'insensitive' };
  }

   const orderBy = sortBy ? { [sortBy]: sortOrder || 'desc' } : { createdAt: 'desc' } as const;

    const authors = await authorRepo.findAllAuthors(skip, limit, whereClause, orderBy);
    const totalItems = await authorRepo.countAuthors(whereClause);

    return {
      data: authors,
      total: totalItems,
      pages: Math.ceil(totalItems / limit),
      page: page, 
      limit: limit 
    };
};

export const getAuthorById = async (id: string): Promise<Author> => {
    const author = await authorRepo.findAuthorById(id);
    
    if (!author) {
        throw new Error('Author not found');
    }

    return author;
};

export const createAuthor = async (data: { name: string; email: string; address: string; userId: string }): Promise<Author> => {
    const authorData = { 
        name: data.name,
        email: data.email,
        address: data.address,
        user: { connect: { id: data.userId } }
    };
    return await authorRepo.createAuthor(authorData);
};

export const updateAuthor = async (id: string, data: Partial<Author>): Promise<Author> => {
    await getAuthorById(id);
    return await authorRepo.updateAuthor(id, data);
};

export const deleteAuthor = async (id: string): Promise<Author> => {
    await getAuthorById(id);

    return await authorRepo.softDeleteAuthor(id);
};
