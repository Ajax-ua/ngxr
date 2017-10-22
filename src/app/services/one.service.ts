import { IRest, Main } from './main.service';
import * as _ from 'lodash';

export class One implements IRest {
  url;
  // arr;
  // i;

  constructor(
      // public main: any,
      private urlInherited: string
  ) {
    // this.arr = _.cloneDeep(this.main.arr);
    // this.i = this.main.i + 1;
    this.url = this.urlInherited;
    // this.url = this.main.url;
    const mainClass = new Main();
    const proto = Object.assign({}, (<any>mainClass).__proto__, (<any>this).__proto__);
    (<any>this).__proto__ = proto;

    // super();
    // for (let field in main) {
    //   if (typeof this[field] !== "undefined") {
    //     this[field] = main && main[field];
    //   }
    // }
  }

  one(str, id = null) {
    // this.arr.push(this.main.updateUrl(str));
    // this.arr.push(str);
    // if (id) {
    //   this.i++;
    //   this.arr.push(id);
    // }
    const one: IRest = new One(_.cloneDeep(this.url));

    // let url = '';
    // for (let i = 0; i <= this.i; i++) {
    //   url += '/' + this.arr[i];
    // }
    one.url += '/' + str;
    if (id) {
      // this.i++;
      one.url += '/' + id;
    }


    return one;
    // return new One(this);
  }

  get(){
    // let url = '';
    // for (let i = 0; i <= this.i; i++) {
    //   url += '/' + this.arr[i];
    // }
    console.log(this.url);
    return {q: 1};
  }

  abstractMethod(str, num) {
    return num + ' of ' + str;
  }
}
