import { All } from './all.service';
import { One } from './one.service';

export interface IRest {
  url: string;

  // route
  one?: IOne;
  all?: IAll;

  // methods for getting data
  getList?: IGetList;
  get?: IGet;
  abstractMethod?: IAbstractMethod;
}

type IOne = (entity: string, id?: string | number) => IRest;
type IAll = (entity: string) => IRest;
type IGetList = () => any[];
type IGet = () => any;
type IAbstractMethod = (str: string, num?: number) => string;

export class Main implements IRest {
  url = '';

  constructor(
  ) {
  }

  all(str: string) {
    const qqq = new All(this.url);
    return qqq.all(str);
  }

  one(str: string, id: string = null) {
    const qqq = new One(this.url);
    return qqq.one(str, id);
  }
}
