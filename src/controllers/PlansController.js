const fs = require("fs");
const Plan = require("../entities/Plan");
const Schedule = require("../entities/Schedule");
const Locality = require("../entities/Locality");

exports.plans = (req, res) => {
  fs.readFile("data.json", "utf8", (err, data) => {
    if (err) {
      console.error("Erro ao ler o arquivo JSON:", err);
      return;
    }
    try {
      const jsonData = JSON.parse(data);
      let plans = [];
      jsonData.plans.forEach((plan) => {
        const entity = mount(plan);
        plans.push(entity);
      });
      plans = verifyStartDate(plans);
      plans = verifyLocalityPriority(plans);
      res.status(200).json(plans);
    } catch (error) {
      console.error("Erro ao analisar o JSON:", error);
    }
  });
};

mount = (plan) => {
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
};

verifyStartDate = (plans) => {
  return plans.filter((plan) => {
    return new Date(plan.schedule.startDate) <= new Date();
  });
};

verifyLocalityPriority = (plans) => {
  const uniquePlans = {};
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
};
