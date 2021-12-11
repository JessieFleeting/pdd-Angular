import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Confirmable, Emoji } from '../../decorators';

@Component({
  selector: 'app-horizotion-grid',
  templateUrl: './horizotion-grid.component.html',
  styleUrls: ['./horizotion-grid.component.scss']
})
export class HorizotionGridComponent implements OnInit {
  // 自定义注解(应用于属性)
  @Emoji() result = 'Hello';

  // 注解应用于函数（可以传参）
  @Confirmable('您确定执行此操作吗?') 
  handleClick() {
    console.log('操作已执行');
  }

  // username: any = '';
  @Output() usernameChange = new EventEmitter();

  // 把此属性定义成私有的，再分别公共读写
  private _username = '';

  @Input()
  // 读
  public get username () : string {
    return this._username;
  }
  // 写
  public set username (value: string) {
     this._username = value;
    // 写入之后把事件发射出去，告诉父组件username改变了
     this.usernameChange.emit(value);
  }

  constructor() { }

  ngOnInit() {
  }

  // 1.简单的双向绑定
  inputChange (event: any) {
    // console.log(event.target.value)
    this.username = event.target.value;
  }

}
