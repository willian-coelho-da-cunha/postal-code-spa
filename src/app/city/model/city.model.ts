/**@description Models.*/
import { Table } from '../../library/table/model/table.model';

export class City extends Table {
  id: string;
  name: string;
  zipCode: number;
}
