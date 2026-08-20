// @ts-check
import { module } from "@prisma/composer";
import elysiaApiService from "./service.mjs";

export default module("elysia-api", ({ provision }) => {
  provision(elysiaApiService, { id: "elysiaapi" });
});
