import { defineType } from "sanity";

export const category=defineType({
name:"category",
title:"category",
type: "document",
fields:[
    {
name:"name",
title: "Product Category",
type:"string",
}
]

})