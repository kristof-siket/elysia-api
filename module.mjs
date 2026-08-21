// @ts-check
import { module } from "@prisma/composer";
import elysiaService from "./service.mjs";

export default module("elysia-api", ({ provision }) => {
  provision(elysiaService);
});
