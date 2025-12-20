import { Router } from 'express';
import { 
  getAllCategories, 
  createCategory, 
  getCategoryById,
  updateCategory,
  deleteCategory,
} from '../controllers/categoryController';
import { 
  createCategoryValidation,
  getCategoryByIdValidation, 
} from '../middlewares/category.validation';
import { validate } from '../utils/validate';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.get('/categories', getAllCategories);
router.get('/categories/:id', validate(getCategoryByIdValidation), getCategoryById);
router.post('/categories', authenticate, validate(createCategoryValidation), createCategory);
router.put('/categories/:id', authenticate, validate(createCategoryValidation), updateCategory);
router.delete('/categories/:id', authenticate, validate(getCategoryByIdValidation), deleteCategory);

export default router;