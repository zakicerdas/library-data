import type { Request, Response } from 'express';
import {
  createAuthorService,
  deleteAuthorService,
  getAllAuthorsService,
  getAuthorByIdService,
  updateAuthorService
} from '../services/author.service';
import { asyncHandler } from '../utils/async.handler';
import { successResponse } from '../utils/response';

export class AuthorController {
  constructor(
    private getAllAuthorsSvc: getAllAuthorsService,
    private getAuthorByIdSvc: getAuthorByIdService,
    private createAuthorSvc: createAuthorService,
    private updateAuthorSvc: updateAuthorService,
    private deleteAuthorSvc: deleteAuthorService
  ) { }

  getAllAuthors = asyncHandler(async (req: Request, res: Response) => {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const search = req.query.search as string;
    const sortBy = req.query.sortBy as string;
    const sortOrder = (req.query.sortOrder as 'asc' | 'desc') || 'desc';

    const result = await this.getAllAuthorsSvc.execute({
      page,
      limit,
      search,
      sortBy,
      sortOrder,
    });

    const pagination = {
      page: result.currentPage,
      limit: limit,
      total: result.totalItems,
      totalPages: result.totalPages
    };

    return successResponse(res, 'Daftar penulis', result.authors, pagination);
  });

  getAuthorById = asyncHandler(async (req: Request, res: Response) => {
    const id = req.params.id;
    const author = await this.getAuthorByIdSvc.execute(id as string);
    return successResponse(res, 'Penulis ditemukan', author);
  });


  createAuthor = asyncHandler(async (req: Request, res: Response) => {
    const authorData = {
      name: req.body.name,
      email: req.body.email,
      address: req.body.address,
      userId: req.body.userId
    };
    const author = await this.createAuthorSvc.execute(authorData);
    return successResponse(res, 'Penulis berhasil ditambahkan', author, null, 201);
  });

  updateAuthor = asyncHandler(async (req: Request, res: Response) => {
    const id = req.params.id;
    const authorData = {
      name: req.body.name,
      email: req.body.email,
      address: req.body.address
    };
    const author = await this.updateAuthorSvc.execute(id as string, authorData);
    return successResponse(res, 'Penulis berhasil diupdate', author);
  });

  deleteAuthor = asyncHandler(async (req: Request, res: Response) => {
    const id = req.params.id;
    const author = await this.deleteAuthorSvc.execute(id as string);
    return successResponse(res, 'Penulis berhasil dihapus', author);
  });
}