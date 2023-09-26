class Plan {
  constructor(
    id,
    type,
    name,
    phonePrice,
    phonePriceOnPlan,
    installments,
    monthlyFee,
    schedule,
    locality
  ) {
    this.id = id;
    this.type = type;
    this.name = name;
    this.phonePrice = phonePrice;
    this.phonePriceOnPlan = phonePriceOnPlan;
    this.installments = installments;
    this.monthlyFee = monthlyFee;
    this.schedule = schedule;
    this.locality = locality;
  }
}
module.exports = Plan;
