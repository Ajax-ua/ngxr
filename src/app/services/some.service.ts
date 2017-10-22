// angular
import { Injectable } from '@angular/core';
import { Rest } from './rest.service';
import { IRest, Main } from './main.service';

@Injectable()
export class Some {
  constructor(
      private rest: Rest
  ) {
  }

  onInit(){
    const qqq: IRest = this.rest.all('qqq');
    const bbb: IRest = qqq.all('bbb');
    const eee: IRest = bbb.one('eee');
    console.log('Get eee: ', eee.get());
    console.log('AbstractMethod for All | bbb: ', bbb.abstractMethod('apples'));
    console.log('AbstractMethod for One | eee: ', eee.abstractMethod('apples', 6));
    console.log('-------------------');

    const aaa: IRest = this.rest.all('ccc').one('aaa');
    const ddd: IRest = aaa.one('ddd', '123');
    const fff: IRest = ddd.all('fff');
    console.log('Get aaa:', aaa.get());
    console.log('GetList fff: ', fff.getList());
    debugger
  }
}
