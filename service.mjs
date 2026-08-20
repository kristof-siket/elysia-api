// @ts-check
import node from "@prisma/composer/node";
import { compute } from "@prisma/composer-prisma-cloud";

export default compute({
  name: "elysia-api",
  // Required on 0.6.0 even when empty: omitting deps crashes the reserved-param check.
  deps: {},
  build: node({ module: import.meta.url, dir: "src", entry: "index.ts" }),
});
