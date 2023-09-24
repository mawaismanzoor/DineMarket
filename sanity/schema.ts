import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import  {category } from './category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,category],
}
// const product= {
//   name: 'product_name',
//   type: 'document',
// 	title: 'Product Name',
//   fields: [
//     {
//       name: 'Product Name',
//       type: 'string',
//       title: 'Product Name'
//     }
//   ]
// }

