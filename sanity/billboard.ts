import { defineField, defineType } from "sanity";



export const billboard = defineType({
    name: 'billboard',
    title: 'Billboard',
    type: 'document',
    fields: [
        defineField({
            name: 'label',
            title: 'Billboard Label',
            type: 'string' 
        }),
        defineField({
            name: 'image',
            title: 'Billboard Image',
            type: 'image',
            fields: [
                {
                    name: 'alt',
                    title: 'Alt',
                    type: 'string'
                }
            ]
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'reference',
            to: [{'type': 'category'}]
        })
    ]
})