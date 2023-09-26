class Schedule {
  private _startDate: Date;

  constructor(startDate: string) {
    this._startDate = new Date(startDate);
  }

  get startDate(): Date {
    return this._startDate;
  }

  set startDate(value: string) {
    this._startDate = new Date(value);
  }
}
export default Schedule;
