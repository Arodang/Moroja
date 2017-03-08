export class ResourceSchema {
  private _name: string;
  private _baseAmount: number;
  private _increaseAmounts: Array<[string, number]>;
  private _decreaseAmounts: Array<[string, number]>;
  private _timeToGather: number;
  private _key: string;
  private _gatherDescription: string;

  constructor(name: string, baseAmount: number, increaseAmounts: Array<[string, number]>, decreaseAmounts: Array<[string, number]>, timeToGather: number, key: string, gatherDescription: string) {
    this._name = name;
    this._baseAmount = baseAmount;
    this._increaseAmounts = increaseAmounts;
    this._decreaseAmounts = decreaseAmounts;
    this._timeToGather = timeToGather;
    this._key = key;
    this._gatherDescription = gatherDescription;
  }

  get name(): string {
    return this._name;
  }

  get baseAmount(): number {
    return this._baseAmount;
  }

  get increaseAmounts(): Array<[string, number]> {
    return this._increaseAmounts;
  }

  get decreaseAmounts(): Array<[string, number]> {
    return this._decreaseAmounts;
  }

  get timeToGather(): number {
    return this._timeToGather;
  }

  get key(): string {
    return this._key;
  }

  get gatherDescription(): string {
    return this._gatherDescription;
  }
}
