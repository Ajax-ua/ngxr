import { IRest, Main } from './main.service';
import * as _ from 'lodash';

export class All implements IRest {
  url = '';
  // i: number = 0;
  // arr;
  // keys = [];

  constructor(
      // public main: any,
      private urlInherited: string
      // public index: number
  ) {
    // this.arr = _.cloneDeep(this.main.arr);
    // this.i = this.main.i + 1;
    this.url = this.urlInherited;
    // this.url = this.main.url;
    const mainClass = new Main();
    (<any>this).__proto__ = Object.assign({}, (<any>mainClass).__proto__, (<any>this).__proto__);
  }

  all(str) {
    // this.arr.push(this.main.updateUrl(str));
    // this.arr.push(str);
    const all: IRest = new All(_.cloneDeep(this.url));

    // let url = '';
    // for (let i = 0; i <= this.i; i++) {
    //   url += '/' + this.arr[i];
    // }
    // qqq.url = url + '/' + str;
    all.url += '/' + str;


    return all;
    // return new All(this); //new Main(this.i, this.arr);
  }

  getList() {
    // let url = '';
    // for (let i = 0; i <= this.i; i++) {
    //   url += '/' + this.arr[i];
    // }
    console.log(this.url);
    return [1,2,3];
  }

  abstractMethod(str, num = null) {
    const res = num || str;
    return res + ' succeed';
  }
}
