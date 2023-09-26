import PlansService from "../../features/services/PlansService";

class PlanController {
  constructor(private plansService: PlansService) {
    this.plansService = plansService;
  }
  async plans(req: any, res: any): Promise<void> {
    try {
      const response = await this.plansService.getPlans();
      res.status(200).json(response);
    } catch (error) {
      console.error("Erro ao analisar o JSON:", error);
      res.status(500).json({ error: "Erro ao processar os planos" });
    }
  }
}
export default PlanController;
