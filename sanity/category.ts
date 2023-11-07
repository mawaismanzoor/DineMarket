import { defineType } from "sanity";

// export const category=defineType({
// name:"category",
// title:"Category",
// type: "document",
// fields:[
//     {
// name:"name",
// title: "Product Category",
// type:"string",
// }
// ]

// })


export const category = defineType({
    name: 'category',
    title: 'Category',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Category Name',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Category Slug',
            type: 'slug',
            options: { source: 'name' }
        },
        {
            name: 'url',
            title: 'URL',
            type: 'url'
        },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{'type': 'block'}]
        }
    ]
})