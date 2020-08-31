export class CityList {
  page: number;
  limit: number;
  sort: Array<string>;
  order: Array<'asc' | 'desc'>;
  constructor() {
    this.page = 1;
    this.limit = 10;
    this.sort = [ 'zipCode', 'name' ];
    this.order = [ 'asc', 'asc' ]
  }
}
