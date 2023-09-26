import Device from "../entities/Device";
import Plan from "../entities/Plan";

class PlanResponse {
  private _device: Device;
  private _plans: Plan[];

  constructor(device: Device, plans: Plan[]) {
    this._device = device;
    this._plans = plans;
  }

  get device(): Device {
    return this._device;
  }
  set device(device: Device) {
    this._device = device;
  }

  get plans(): Plan[] {
    return this._plans;
  }

  set plans(plans: Plan[]) {
    this._plans = plans;
  }
}
export default PlanResponse;
