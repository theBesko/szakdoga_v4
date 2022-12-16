import express from "express";
import employeeRouter from "./employees.js";

const rootRouter = (server) => {
  const router = express.Router();

  router.use("/employees", employeeRouter);

  return router;
};

export default rootRouter;
