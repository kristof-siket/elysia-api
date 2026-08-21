// @ts-check
import { defineConfig } from "@prisma/composer/config";
import { nodeBuild } from "@prisma/composer/node/control";
import { prismaCloud, prismaState } from "@prisma/composer-prisma-cloud/control";

export default defineConfig({
  extensions: [prismaCloud(), nodeBuild()],
  // The pinned Composer takes the descriptor value here, not the documented thunk form `() => prismaState()`.
  state: prismaState(),
});
