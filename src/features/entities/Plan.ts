import Locality from "./Locality";
import Schedule from "./Schedule";

class Plan {
  private _id: number;
  private _type: string;
  private _name: string;
  private _phonePrice: number;
  private _phonePriceOnPlan: number;
  private _installments: number;
  private _monthlyFee: number;
  private _schedule: Schedule;
  private _locality: Locality;

  constructor(
    id: number,
    type: string,
    name: string,
    phonePrice: number,
    phonePriceOnPlan: number,
    installments: number,
    monthlyFee: number,
    schedule: Schedule,
    locality: Locality
  ) {
    this._id = id;
    this._type = type;
    this._name = name;
    this._phonePrice = phonePrice;
    this._phonePriceOnPlan = phonePriceOnPlan;
    this._installments = installments;
    this._monthlyFee = monthlyFee;
    this._schedule = schedule;
    this._locality = locality;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get type(): string {
    return this._type;
  }

  set type(value: string) {
    this._type = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get phonePrice(): number {
    return this._phonePrice;
  }

  set phonePrice(value: number) {
    this._phonePrice = value;
  }

  get phonePriceOnPlan(): number {
    return this._phonePriceOnPlan;
  }

  set phonePriceOnPlan(value: number) {
    this._phonePriceOnPlan = value;
  }

  get installments(): number {
    return this._installments;
  }

  set installments(value: number) {
    this._installments = value;
  }

  get monthlyFee(): number {
    return this._monthlyFee;
  }

  set monthlyFee(value: number) {
    this._monthlyFee = value;
  }

  get schedule(): Schedule {
    return this._schedule;
  }

  set schedule(value: Schedule) {
    this._schedule = value;
  }

  get locality(): Locality {
    return this._locality;
  }

  set locality(value: Locality) {
    this._locality = value;
  }
}
export default Plan;
