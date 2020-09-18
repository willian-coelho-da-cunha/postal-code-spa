export class TableActionColumn {
  code: string;
  columnName: string;
  showEditButton: boolean;
  showCloneButton: boolean;
  showDeleteButton: boolean;
}

export class TableActionColumnFactory {

  public static getInstance(code: string, columnName: string, showEditButton: boolean, showCloneButton: boolean, showDeleteButton: boolean): TableActionColumn {
    const instance = new TableActionColumn();
    instance.code = code;
    instance.columnName = columnName;
    instance.showEditButton = showEditButton;
    instance.showCloneButton = showCloneButton;
    instance.showDeleteButton = showDeleteButton;
    return instance;
  }
}
