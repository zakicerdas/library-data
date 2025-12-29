import { Router } from 'express';
import { AuthorController } from '../controllers/authorController';
import { authenticate } from '../middlewares/auth.middleware';
import { validate } from '../utils/validate';
import { AuthorRepository } from '../repositories/author.repository';
import {
  createAuthorService,
  deleteAuthorService,
  getAllAuthorsService,
  getAuthorByIdService,
  updateAuthorService
} from '../services/author.service';
import {
  createAuthorValidation,
  getAuthorByIdValidation
} from '../middlewares/author.validation';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Authors
 *   description: Author management endpoints
 */

/**
 * @swagger
 * /authors:
 *   get:
 *     summary: Get all authors with pagination, search, and sorting
 *     tags: [Authors]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number for pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of items per page
 *       - in: query
 *         name: search
 *         schema:
 *           type: string
 *         description: Search term for author name
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *           enum: [name, createdAt, updatedAt]
 *         description: Field to sort by
 *       - in: query
 *         name: sortOrder
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *           default: desc
 *         description: Sort order
 *     responses:
 *       200:
 *         description: List of authors retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Author'
 *                 pagination:
 *                   type: object
 *                   properties:
 *                     page:
 *                       type: integer
 *                     limit:
 *                       type: integer
 *                     total:
 *                       type: integer
 *                     totalPages:
 *                       type: integer
 *       401:
 *         description: Unauthorized - Authentication required
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /authors/{id}:
 *   get:
 *     summary: Get author by ID
 *     tags: [Authors]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Author ID
 *     responses:
 *       200:
 *         description: Author retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Author'
 *       400:
 *         description: Invalid author ID format
 *       401:
 *         description: Unauthorized - Authentication required
 *       404:
 *         description: Author not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /authors:
 *   post:
 *     summary: Create a new author
 *     tags: [Authors]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - userId
 *             properties:
 *               name:
 *                 type: string
 *                 description: Author's full name
 *                 example: Jane Doe
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Author's email address
 *                 example: jane.doe@example.com
 *               address:
 *                 type: string
 *                 description: Author's physical address
 *                 example: 123 Main St, Anytown
 *               userId:
 *                 type: string
 *                 description: ID of the user creating the author
 *                 example: 507f1f77bcf86cd799439011
 *     responses:
 *       201:
 *         description: Author created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Author'
 *       400:
 *         description: Bad request - Invalid input data
 *       401:
 *         description: Unauthorized - Authentication required
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /authors/{id}:
 *   put:
 *     summary: Update an existing author
 *     tags: [Authors]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Author ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Author's full name
 *                 example: Jane Smith
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Author's email address
 *                 example: jane.smith@example.com
 *               address:
 *                 type: string
 *                 description: Author's physical address
 *                 example: 456 Oak Ave, Somewhere
 *     responses:
 *       200:
 *         description: Author updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Author'
 *       400:
 *         description: Bad request - Invalid input data
 *       401:
 *         description: Unauthorized - Authentication required
 *       404:
 *         description: Author not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /authors/{id}:
 *   delete:
 *     summary: Delete an author by ID (soft delete)
 *     tags: [Authors]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Author ID
 *     responses:
 *       200:
 *         description: Author deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   $ref: '#/components/schemas/Author'
 *       401:
 *         description: Unauthorized - Authentication required
 *       404:
 *         description: Author not found
 *       500:
 *         description: Internal server error
 */

const authorRepository = new AuthorRepository();
const getAllAuthorsSvc = new getAllAuthorsService(authorRepository);
const getAuthorByIdSvc = new getAuthorByIdService(authorRepository);
const createAuthorSvc = new createAuthorService(authorRepository);
const updateAuthorSvc = new updateAuthorService(authorRepository);
const deleteAuthorSvc = new deleteAuthorService(authorRepository);
const authorController = new AuthorController(
  getAllAuthorsSvc,
  getAuthorByIdSvc,
  createAuthorSvc,
  updateAuthorSvc,
  deleteAuthorSvc
);

router.get('/authors', authenticate, authorController.getAllAuthors);
router.get('/authors/:id', authenticate, validate(getAuthorByIdValidation), authorController.getAuthorById);
router.post('/authors', authenticate, validate(createAuthorValidation), authorController.createAuthor);
router.put('/authors/:id', authenticate, validate(createAuthorValidation), authorController.updateAuthor);
router.delete('/authors/:id', authenticate, validate(getAuthorByIdValidation), authorController.deleteAuthor);

export default router;