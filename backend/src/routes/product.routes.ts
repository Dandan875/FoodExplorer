import { Router, Request, Response } from "express";
import * as ProductController from "../controllers/ProductController";
import multer from "multer";
import {Auth} from "../middleware/auth"

const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './tmp')
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname+'.jpg');
  }    
  
});

const upload = multer({
  storage: storageConfig,
  fileFilter: (req, file, cb) => {
  const allowed: string[] = ['image/jpg', 'image/jpeg', 'image/png']
  cb(null, allowed.includes( file.mimetype ));
  },
  limits: { fieldSize: 2000000 }
})

const ProductRoute = Router();

ProductRoute.post('/product', Auth.private, ProductController.create);
ProductRoute.get('/product', Auth.private, ProductController.list);
ProductRoute.get('/product/:id', Auth.private, ProductController.getProduct);
ProductRoute.put('/product/:id', Auth.private, ProductController.update);
ProductRoute.delete('/product/:id', Auth.private, ProductController.deleteProduct);
ProductRoute.post('/upload', Auth.private, upload.single('avatar'), ProductController.uploadFile);

export default ProductRoute;