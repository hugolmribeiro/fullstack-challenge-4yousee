class Locality {
  private _name: string;
  private _priority: number;

  constructor(name: string, priority: number) {
    this._name = name;
    this._priority = priority;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get priority(): number {
    return this._priority;
  }

  set priority(value: number) {
    this._priority = value;
  }
}
export default Locality;
