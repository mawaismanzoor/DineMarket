import { createClient, type ClientConfig } from "@sanity/client";

import { apiVersion, dataset, projectId, useCdn } from '../env'

// export const client = createClient({
//   apiVersion,
//   dataset,
//   projectId,
//   useCdn,
// })

const config: ClientConfig = {
  projectId: "78xjfc2q",
  dataset: "production",
  apiVersion: "2023-08-27",
  useCdn: true,
};

const client = createClient(config);

export default client;