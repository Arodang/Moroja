export class Resource {
  private _amount: number;
  private _description: string;
  private _name: string;
  private _key: string;

  public constructor(amount: number, description: string, name: string, key: string) {
    this._amount = amount;
    this._description = description;
    this._name = name;
    this._key = key;
  }

  get amount(): number {
    return this._amount;
  }

  get description(): string {
    return this._description;
  }

  get name(): string {
    return this._name;
  }

  get key(): string {
    return this._key;
  }


  set amount(value: number) {
    this._amount = value;
  }
}
