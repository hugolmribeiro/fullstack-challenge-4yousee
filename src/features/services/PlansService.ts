import fs from "fs";
import Locality from "../entities/Locality";
import Plan from "../entities/Plan";
import Schedule from "../entities/Schedule";

class PlansService {
  async getPlans() {
    const data = await this.readFileAsync("data.json", "utf8");
    const jsonData = JSON.parse(data);
    let plans = jsonData.plans.map((plan: any) => this.mount(plan));
    plans = this.verifyStartDate(plans);
    plans = this.verifyLocalityPriority(plans);
    return plans;
  }

  private mount(plan: any): Plan {
    const entity = new Plan(
      plan.id,
      plan.type,
      plan.name,
      plan.phonePrice,
      plan.phonePriceOnPlan,
      plan.installments,
      plan.monthly_fee,
      new Schedule(plan.schedule.startDate),
      new Locality(plan.localidade.nome, plan.localidade.prioridade)
    );
    return entity;
  }

  private verifyStartDate(plans: Plan[]): Plan[] {
    return plans.filter((plan: Plan) => {
      return new Date(plan.schedule.startDate) <= new Date();
    });
  }

  private verifyLocalityPriority(plans: Plan[]): Plan[] {
    const uniquePlans: any = {};
    plans.forEach((plan) => {
      if (uniquePlans.hasOwnProperty(plan.name)) {
        if (plan.locality.priority > uniquePlans[plan.name].locality.priority) {
          uniquePlans[plan.name] = plan;
        }
        if (
          plan.locality.priority === uniquePlans[plan.name].locality.priority &&
          plan.schedule.startDate > uniquePlans[plan.name].schedule.startDate
        ) {
          uniquePlans[plan.name] = plan;
        }
        return;
      }
      uniquePlans[plan.name] = plan;
    });
    return Object.values(uniquePlans);
  }

  private readFileAsync(path: string, encoding: any): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      fs.readFile(path, encoding, (err: any, data: string) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
}
export default PlansService;
