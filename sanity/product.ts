import { defineType } from "sanity";

export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
      {
          name: 'product',
          type: 'string',
          title: 'Product'
      },
       {
          name: 'description',
          type: 'string',
          title: 'Product Description'
      },
      {
        name: 'image',
        type: 'image',
        title: 'Product Image'
    },
    {
      name: 'price',
      type: 'number',
      title: 'Product Price'
  },
  defineType({
    name:"category",
    title:"Product Category",
    type:"reference",
    to:[{
      type:"category"
    }]
}),

  ]
}
