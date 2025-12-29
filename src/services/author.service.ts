import { AuthorRepository } from '../repositories/author.repository';

interface findAllParams {
  page: number;
  limit: number;
  search?: string;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export class getAllAuthorsService {
  constructor(private authorRepo: AuthorRepository) { }

  async execute(params: findAllParams) {
    const { page, limit, search, sortBy, sortOrder } = params;
    const skip = (page - 1) * limit;

    const whereClause: any = {
      deletedAt: null,
    };

    if (search) {
      whereClause.name = { contains: search, mode: 'insensitive' };
    }

    const sortCriteria: any = sortBy ? { [sortBy]: sortOrder || 'desc' } : { createdAt: 'desc' };

    const authors = await this.authorRepo.findAll(skip, limit, whereClause, sortCriteria);
    const totalItems = await this.authorRepo.countAll(whereClause);

    return {
      authors,
      totalItems,
      totalPages: Math.ceil(totalItems / limit),
      currentPage: page
    };
  }
}

export class getAuthorByIdService {
  constructor(private authorRepo: AuthorRepository) { }

  async execute(id: string) {
    const author = await this.authorRepo.findById(id);
    if (!author) {
      throw new Error('Author not found');
    }
    return author;
  }
}

export class createAuthorService {
  constructor(private authorRepo: AuthorRepository) { }

  async execute(data: {
    name: string;
    email?: string;
    address?: string;
    userId: string;
  }) {
    const createData: any = {
      name: data.name,
      email: data.email || undefined,
      address: data.address || undefined,
      userId: data.userId,
    };
    return await this.authorRepo.create(createData);
  }
}

export class updateAuthorService {
  constructor(private authorRepo: AuthorRepository) { }
  async execute(id: string, data: any) {
    const author = await this.authorRepo.findById(id);
    if (!author) {
      throw new Error('Author not found');
    }
    
    const updateData: any = {
      name: data.name || undefined,
      email: data.email || undefined,
      address: data.address || undefined,
    };
    
    return await this.authorRepo.update(id, updateData);
  }
}

export class deleteAuthorService {
  constructor(private authorRepo: AuthorRepository) { }

  async execute(id: string) {
    const author = await this.authorRepo.findById(id);
    if (!author) {
      throw new Error('Author not found');
    }
    return await this.authorRepo.softDelete(id);
  }
}