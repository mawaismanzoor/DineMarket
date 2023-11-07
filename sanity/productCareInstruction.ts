import { defineField, defineType } from "sanity";



export const productCareInstruction = defineType({
    name: 'productCareInstruction',
    title: 'Product Care Instruction',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Title',
            type: 'string'
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [{'type': 'block'}]
        })
    ]
})