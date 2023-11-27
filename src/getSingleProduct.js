import 'server-only';
import { cache } from 'react';
import { getProductByIdFromDb } from './services/products.service';

const getSingleProduct = cache(getProductByIdFromDb);

export default getSingleProduct;
