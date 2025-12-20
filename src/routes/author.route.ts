import { Router } from 'express';
import { 
    getAllAuthors,
    getAuthorById,
    createAuthor,
    updateAuthor,
    deleteAuthor 
}from '../controllers/authorController';

import { 
    createAuthorValidation,
    getAuthorByIdValidation
 } from '../middlewares/author.validation';

import { validate } from '../utils/validate';
import { authenticate } from '../middlewares/auth.middleware';


const router = Router();

router.get('/author', getAllAuthors);
router.get('/author/:id', validate(getAuthorByIdValidation), getAuthorById);
router.post('/author', authenticate, validate(createAuthorValidation), createAuthor);
router.put('/author/:id', authenticate, validate(createAuthorValidation), updateAuthor);
router.delete('/author/:id', authenticate, validate(getAuthorByIdValidation), deleteAuthor);

export default router;