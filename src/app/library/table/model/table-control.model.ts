export class TableControl {
  page: number;
  limit: number;
  sort: Array<string>;
  order: Array<'asc' | 'desc'>;
}

export class TableControlFactory {

  public static getInstance(attributes: Array<string>): TableControl {
    const instance = new TableControl();
    instance.page = 1;
    instance.limit = 10;
    instance.sort = new Array<string>();
    instance.order = new Array<'asc' | 'desc'>();
    attributes.forEach((element: string) => {
      instance.sort.push(element);
      instance.order.push('desc');
    });
    return instance;
  }
}
