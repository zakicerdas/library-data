import { Router } from 'express';
import { 
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from '../controllers/userController';
import { authenticate } from '../middlewares/auth.middleware';


const router = Router();
       
router.put('/profile', authenticate, updateUser);     
router.get('/users', getAllUsers);        
router.get('/users/:id', getUserById);    
router.delete('/users/:id', authenticate, deleteUser);

export default router;