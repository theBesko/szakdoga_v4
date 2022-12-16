import express from "express";

const employeeRouter = express.Router();

employeeRouter.get("/", async (req, res) => {
  const response = await fetch(`https://dummyjson.com/users`, {
    method: "GET",
  });

  const employees = await response.json();

  res.json(employees);
});

employeeRouter.get("/:id", async (req, res) => {
  const response = await fetch(`https://dummyjson.com/users/${req.params.id}`, {
    method: "GET",
  });

  const employees = await response.json();

  res.json(employees);
});

export default employeeRouter;
