// userController.ts (versi rapi)
import type { Request, Response } from 'express';
import * as UserService from '../services/user.service';
import type { User } from '../generated/client';
import { asyncHandler } from '../utils/async.handler';
import { successResponse, errorResponse } from '../utils/response'; // ⬅️ tambah errorResponse

export const getAllUsers = asyncHandler(async (req: Request, res: Response) => {
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const search = req.query.search as string;
  const sortBy = req.query.sortBy as string;
  const sortOrder = (req.query.sortOrder as 'asc' | 'desc') || 'desc';

  const result = await UserService.getAllUsers({
    page,
    limit,
    search,
    sortBy,
    sortOrder
  });

  return successResponse(res, 'Daftar user berhasil diambil', result.data, {
    page: result.page,
    limit: result.limit,
    total: result.total,
    pages: result.pages 
  });
});



export const getUserById = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  
  const user = await UserService.getUserById(id as string);
  return successResponse(res, 'User retrieved successfully', user);
});

export const updateUser = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  const updateData: Partial<User> = req.body;
  
  if (Object.keys(updateData).length === 0) {
    return errorResponse(res, 'No data provided for update', 400);
  }

  const updatedUser = await UserService.updateUser(id as string, updateData);
  return successResponse(res, 'User updated successfully', updatedUser);
});

export const deleteUser = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.params;
  
  const deletedUser = await UserService.deleteUser(id as string);
  return successResponse(res, 'User soft deleted successfully', deletedUser);
});