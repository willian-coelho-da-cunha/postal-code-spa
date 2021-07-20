export class TableColumn {
  allowSort: boolean;
  columnName: string;
  attributeName: string;
}

export class TableColumnFactory {

  public static getInstance(allowSort: boolean, columnName: string, attributeName: string): TableColumn {
    const instance: TableColumn = new TableColumn();

    instance.allowSort = allowSort;
    instance.columnName = columnName;
    instance.attributeName = attributeName;
    return instance;
  }
}
