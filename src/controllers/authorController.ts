import type { Request, Response } from 'express';
import * as authorService from '../services/author.service';
import { asyncHandler } from '../utils/async.handler';
import { successResponse } from '../utils/response';

export const getAllAuthors = asyncHandler(async (req: Request, res: Response) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const search = req.query.search as string;
  const sortBy = req.query.sortBy as string;
  const sortOrder = (req.query.sortOrder as 'asc' | 'desc') || 'desc';

  const result = await authorService.getAllAuthors({
    page,
    limit,
    search,
    sortBy,
    sortOrder
  });

  const totalPages = Math.ceil(result.total / limit);

  return successResponse(res, 'Daftar penulis berhasil diambil', result.data, {
    page: result.page,
    limit: result.limit,
    total: result.total,
    pages: totalPages 
  });
});

export const getAuthorById = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id;
  const author = await authorService.getAuthorById(id as string);
  return successResponse(res, 'penulis ditemukan', author);
});

export const createAuthor = asyncHandler(async (req: Request, res: Response) => {
  const author = await authorService.createAuthor(req.body);
  return successResponse(res, 'penulis berhasil ditambahkan', author, null, 201);
});

export const updateAuthor = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id;
  const author = await authorService.updateAuthor(id as string, req.body);
  return successResponse(res, 'penulis berhasil diupdate', author);
});

export const deleteAuthor = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id;
  const author = await authorService.deleteAuthor(id as string);
  return successResponse(res, 'penulis berhasil dihapus', author);
});
