import express from  'express';
import { userSignUp , userLogIn } from '../controller/user-controller.js';
import { getProducts,getProductById } from '../controller/product-controller.js';


const router = express.Router();

// This will handle all post request
router.post('/signup',userSignUp);
router.post('/login',userLogIn);


// This will handle all get Request
router.get('/products',getProducts);
router.get('/product/:id', getProductById);

export default router;