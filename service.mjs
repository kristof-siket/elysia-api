// @ts-check
import node from "@prisma/composer/node";
import { compute } from "@prisma/composer-prisma-cloud";

export default compute({
  name: "elysia",
  // Required even when empty: omitting deps crashes Composer's reserved-param check.
  deps: {},
  build: node({ module: import.meta.url, dir: "src", entry: "index.ts" }),
});
