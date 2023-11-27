import 'server-only';
import { cache } from 'react';
import { getProductsFromDb } from './services/products.service';

const getProducts = cache(getProductsFromDb);

export default getProducts;
