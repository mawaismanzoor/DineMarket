import { defineField, defineType } from "sanity";



export const wearType = defineType({
    name: 'wearType',
    title: 'Wear Type',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Wear Type Name',
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