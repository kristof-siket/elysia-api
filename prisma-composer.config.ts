import { defineConfig } from "@prisma/composer/config";
import { nodeBuild } from "@prisma/composer/node/control";
import { prismaCloud, prismaState } from "@prisma/composer-prisma-cloud/control";

export default defineConfig({
  extensions: [prismaCloud(), nodeBuild()],
  // 0.6.0 wants the descriptor value; the documented thunk form `() => prismaState()` is a newer API.
  state: prismaState(),
});
