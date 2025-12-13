import { Router } from 'express';
import { 
    getAllAuthor,
    getAuthorById,
    searchAuthor,
    createAuthor,
    updateAuthor,
    deleteAuthor 
}from '../controllers/authorController';

import { 
    createAuthorValidation,
    getAuthorByIdValidation
 } from '../middlewares/author.validation';

import { validate } from '../utils/validate';


const router = Router();

router.get('/author', getAllAuthor);
router.get('/author/search', searchAuthor);
router.get('/author/:id', validate(getAuthorByIdValidation), getAuthorById);
router.post('/author', validate(createAuthorValidation), createAuthor);
router.put('/author/:id', validate(createAuthorValidation), updateAuthor);
router.delete('/author/:id', validate(getAuthorByIdValidation), deleteAuthor);

export default router;