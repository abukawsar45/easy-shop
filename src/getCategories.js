import 'server-only';
import { getCategoriesFromDb } from "./services/category.service";
import { cache } from 'react';

const getCategories = cache(() => {
  return getCategoriesFromDb();
});

export default getCategories;