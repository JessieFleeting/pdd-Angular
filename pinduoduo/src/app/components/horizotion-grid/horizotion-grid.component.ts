import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-horizotion-grid',
  templateUrl: './horizotion-grid.component.html',
  styleUrls: ['./horizotion-grid.component.scss']
})
export class HorizotionGridComponent implements OnInit {
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
