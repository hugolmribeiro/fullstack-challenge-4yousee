import { Router } from "express";
import PlansController from "../controllers/PlansController";
import PlansService from "../../features/services/PlansService";

const plansRoutes = Router();

plansRoutes.get("/plans", (req, res) => {
  const planController = new PlansController(new PlansService());
  planController.plans(req, res);
});

export default plansRoutes;
