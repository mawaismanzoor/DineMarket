import { StaticImageData } from 'next/image'
import React from 'react'

export type Product = {
id:number,
Name:string,
Price:number,
Category:string,
img: string|StaticImageData,
};


