import { Router } from 'express';
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/libraryController';
import { 
  createProductValidation, 
  getProductByIdValidation 
} from '../middlewares/library.validation';
import { validate } from '../utils/validate';
import { authenticate } from '../middlewares/auth.middleware';
import { upload } from '../middlewares/upload.middleware';


const router = Router();

router.get('/products', getAllProducts);
router.get('/products/:id',  validate(getProductByIdValidation), getProductById);
router.post('/products', authenticate,  upload.single('image'), validate(createProductValidation), createProduct);
router.put('/products/:id', authenticate, upload.single('image'), validate(createProductValidation), updateProduct);
router.delete('/products/:id', authenticate, validate(getProductByIdValidation), deleteProduct);

export default router;