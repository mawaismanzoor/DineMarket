import { defineField, defineType } from "sanity";
//import { defineField } from "sanity";

// export const product = {
//   name: 'product',
//   type: 'document',
//   title: 'Product',
//   fields: [
//       {
//           name: 'product',
//           type: 'string',
//           title: 'Product'
//       },
//        {
//           name: 'description',
//           type: 'string',
//           title: 'Product Description'
//       },
//       {
//         name: 'image',
//         type: 'image',
//         title: 'Product Image'
//     },
//     {
//       name: 'price',
//       type: 'number',
//       title: 'Product Price'
//   },
//   defineType({
//     name:"Category",
//     title:"Product Category",
//     type:"reference",
//     to:[{
//       type:"category"
//     }]
// }),

//   ]
// }


//  ***** USAMA CODE ******

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
      defineField({
          name: 'name',
          title: 'Product Name',
          type: 'string'
      }),
      defineField({
          name: 'slug',
          title: 'Product Slug',
          type: 'slug',
          options: { source: 'name' }
      }),
      defineField({
          name: 'url',
          title: 'URL',
          type: 'url'
      }),
      defineField({
          name: 'image',
          title: 'Image',
          type: 'image'
      }),
      defineField({
          name: 'price',
          title: 'Product Price',
          type: 'number',
          validation: Rule => Rule.required().positive().precision(2)
      }),
      defineField({
          name: 'category',
          title: 'Product Category',
          type: 'reference',
          to: [{type: 'category'}]
      }),
      defineField({
          name: 'wearType',
          title: 'Wear Type',
          type: 'reference',
          to: [{type: 'wearType'}]
      }),
      defineField({
          name: 'content',
          title: 'Content',
          type: 'array',
          of: [{'type': 'block'}]
      }),
      defineField({
          name: 'careInstructions',
          title: 'Care Instructions',
          type: 'array',
          of: [{type: 'reference', to: [{type: 'productCareInstruction'}]}]
      }),
      defineField({
          name: 'applicableSizes',
          title: 'Product Sizes',
          type: 'array',
          of: [{type: 'reference', to: [{type: 'productSize'}]}]
      })
  ]
})
