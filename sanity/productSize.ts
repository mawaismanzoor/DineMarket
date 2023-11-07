import { defineField, defineType } from "sanity";


export const productSize = defineType({
    name: 'productSize',
    title: 'Product Size',
    type: 'document',
    fields: [
        defineField({
            name: 'sizeAbbreviation',
            title: 'Size Abbreviation',
            type: 'string'
        }),
        defineField({
            name: 'name',
            title: 'Size Name',
            type: 'string'
        }),
    ]
})