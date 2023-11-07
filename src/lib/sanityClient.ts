import { createClient } from 'next-sanity'
import { defineCliConfig } from 'sanity/cli'
import { projectId } from 'sanity/env'


export const client = createClient({
    apiVersion:"2023-08-27",
    projectId :process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    token: process.env.SANITY_ACCESS_TOKEN,
    dataset:process.env.NEXT_PUBLIC_SANITY_DATASET,
    useCdn: true,
})
