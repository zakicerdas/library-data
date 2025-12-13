import type { Request, Response } from 'express';
import * as authorService from '../services/author.service';
import { asyncHandler } from '../utils/async.handler';
import { successResponse } from '../utils/response';

export const getAllAuthor = asyncHandler(async (_req: Request, res: Response) => {
  const stores = await authorService.getAllAuthor();
  return successResponse(res, 'Daftar author', stores);
});

export const getAuthorById = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id;
  const author = await authorService.getAuthorById(id as string);
  return successResponse(res, 'author ditemukan', author);
});

export const createAuthor = asyncHandler(async (req: Request, res: Response) => {
  const store = await authorService.createAuthor(req.body);
  return successResponse(res, 'author berhasil ditambahkan', store, null, 201);
});

export const updateAuthor = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id;
  const author = await authorService.updateAuthor(id as string, req.body);
  return successResponse(res, 'author berhasil diupdate', author);
});

export const deleteAuthor = asyncHandler(async (req: Request, res: Response) => {
  const id = req.params.id;
  const author = await authorService.deleteAuthor(id as string);
  return successResponse(res, 'author berhasil dihapus', author);
});

export const searchAuthor = asyncHandler(async (req: Request, res: Response) => {
  const { name } = req.query;
  const author = await authorService.searchAuthor(
    name as string, 
  );
  return successResponse(res, 'Hasil pencarian', author);
});