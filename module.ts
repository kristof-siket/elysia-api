import { module } from "@prisma/composer";
import elysiaService from "./service.js";

export default module("elysia-api", ({ provision }) => {
  provision(elysiaService);
});
