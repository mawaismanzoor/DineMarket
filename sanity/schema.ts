import { type SchemaTypeDefinition } from 'sanity'
import { defineType } from "sanity";
import {product} from './product'
import  {category } from './category';
import { billboard } from './billboard';
import { productCareInstruction } from './productCareInstruction';
import { productSize } from './productSize';
import { wearType } from './wearType';


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
export const schema: { types: SchemaTypeDefinition[] } = {
    types: [ product, category, billboard, productCareInstruction, productSize, wearType ],
  }
// Usama Bhai 


// const store = {
//     name: 'store',
//     title: 'Store',
//     type: 'document',
//     fields: [
//         {
//             name: 'name',
//             title: 'Store Name',
//             type: 'string'
//         }
//     ]
// }
        
// const category = defineType( {
//   name: 'category',
//   title: 'Category',
//   type: 'document',
//   fields: [
//       {
//           name: 'name',
//           title: 'Category Name',
//           type: 'string'
//       },
//       {
//           name: 'slug',
//           title: 'Category Slug',
//           type: 'slug',
//           options: { source: 'name' }
//       },
//       {
//           name: 'url',
//           title: 'URL',
//           type: 'url'
//       },
//       {
//           name: 'content',
//           title: 'Content',
//           type: 'array',
//           of: [{'type': 'block'}]
//       }
//   ]
// })

// const wearType = defineType({
//   name: 'wearType',
//   title: 'Wear Type',
//   type: 'document',
//   fields: [
//       {
//           name: 'name',
//           title: 'Wear Type Name',
//           type: 'string'
//       },
//       {
//           name: 'content',
//           title: 'Content',
//           type: 'array',
//           of: [{'type': 'block'}]
//       }
//   ]
// })

// const billboard = defineType({
//   name: 'billboard',
//   title: 'Billboard',
//   type: 'document',
//   fields: [
//       {
//           name: 'label',
//           title: 'Billboard Label',
//           type: 'string' 
//       },
//       {
//           name: 'image',
//           title: 'Billboard Image',
//           type: 'image',
//           fields: [
//               {
//                   name: 'alt',
//                   title: 'Alt',
//                   type: 'string'
//               }
//           ]
//       },
//       {
//           name: 'category',
//           title: 'Category',
//           type: 'reference',
//           to: [{'type': 'category'}]
//       }
//   ]
// })

// const productCareInstruction = defineType({
//   name: 'productCareInstruction',
//   title: 'Product Care Instruction',
//   type: 'document',
//   fields: [
//       {
//           name: 'name',
//           title: 'Title',
//           type: 'string'
//       },
//       {
//           name: 'content',
//           title: 'Content',
//           type: 'array',
//           of: [{'type': 'block'}]
//       }
//   ]
// })

// const productSize = defineType({
//   name: 'productSize',
//   title: 'Product Size',
//   type: 'document',
//   fields: [
//       {
//           name: 'sizeAbbreviation',
//           title: 'Size Abbreviation',
//           type: 'string'
//       },
//       {
//           name: 'name',
//           title: 'Size Name',
//           type: 'string'
//       },
//   ]
// })

// const product = {
//   name: 'product',
//   title: 'Product',
//   type: 'document',
//   fields: [
//       {
//           name: 'name',
//           title: 'Product Name',
//           type: 'string'
//       },
//       {
//           name: 'slug',
//           title: 'Product Slug',
//           type: 'slug',
//           options: { source: 'name' }
//       },
//       {
//           name: 'url',
//           title: 'URL',
//           type: 'url'
//       },
//       {
//           name: 'image',
//           title: 'Image',
//           type: 'image'
//       },
//       {
//           name: 'price',
//           title: 'Product Price',
//           type: 'number',
//           validation: Rule => Rule.required().positive().precision(2)
//       },
//       {
//           name: 'category',
//           title: 'Product Category',
//           type: 'reference',
//           to: [{type: 'category'}]
//       },
//       {
//           name: 'wearType',
//           title: 'Wear Type',
//           type: 'reference',
//           to: [{type: 'wearType'}]
//       },
//       {
//           name: 'content',
//           title: 'Content',
//           type: 'array',
//           of: [{'type': 'block'}]
//       },
//       {
//           name: 'careInstructions',
//           title: 'Care Instructions',
//           type: 'array',
//           of: [{type: 'reference', to: [{type: 'productCareInstruction'}]}]
//       },
//       {
//           name: 'applicableSizes',
//           title: 'Product Sizes',
//           type: 'array',
//           of: [{type: 'reference', to: [{type: 'productSize'}]}]
//       }
//   ]
// }

// export const schemaTypes = [ category, wearType, billboard, productCareInstruction, productSize, product ];