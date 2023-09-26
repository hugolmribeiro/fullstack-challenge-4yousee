import { Router } from "express";
import PlansController from "../controllers/PlansController";

const plansRoutes = Router();

plansRoutes.get("/plans", (req, res) => {
  const planController = new PlansController();
  planController.plans(req, res);
});

export default plansRoutes;
