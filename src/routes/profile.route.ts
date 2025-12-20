import { Router } from 'express';
import {
  getProfile,
  createProfile,
  updateProfile,
  deleteProfile
} from '../controllers/profileController';
import {
  createProfileValidation,
  updateProfileValidation,
  getProfileValidation,
  validate
} from '../middlewares/profile.validation';
import { authenticate } from '../middlewares/auth.middleware';

const router = Router();

router.get('/profile/:userId', validate(getProfileValidation), getProfile);
router.post('/profile', authenticate, validate(createProfileValidation), createProfile);
router.put('/profile/:userId', authenticate, validate(updateProfileValidation), updateProfile);
router.delete('/profile/:userId', authenticate, validate(getProfileValidation), deleteProfile);

export default router;