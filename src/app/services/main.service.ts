// angular
import { Injectable } from '@angular/core';
import { All } from './all.service';
import { One } from './one.service';

export interface IRest {
  url: string;

  // route
  one?: IOne,
  all?: IAll,

  // methods for getting data
  getList?: IGetList,
  get?: IGet
  abstractMethod?: IAbstractMethod
}

export interface IOne {
  (entity: string, id?: string | number): IRest
}

export interface IAll {
  (entity: string): IRest
}

export interface IGetList {
  (): any[]
}

export interface IGet {
  (): any
}

export interface IAbstractMethod {
  (str: string, num?: number): string
}

// @Injectable()
export class Main implements IRest {
  url: string = '';
  // i: number = -2;
  // arr = [];
  // prevIndex;

  constructor(
      // i = -2,
      // arr = [],
      // keys = []
  ) {
    // this.i = i;
    // this.arr = arr;
    // this.keys = keys;
  }

  // updateUrl(str) {
  //   this.url += '/' + str;
  //   return this.url;
  // }

  all(str: string) {
    // const qqq = new All(this);
    const qqq = new All(this.url);
    return qqq.all(str);
  }

  one(str: string, id:string = null) {
    // this.updateUrl(str);
    // if (id) {
    //   this.updateUrl(id);
    // }
    const qqq = new One(this.url);
    return qqq.one(str, id);
  }
}
