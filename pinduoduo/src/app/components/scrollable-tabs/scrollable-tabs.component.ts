import { Component, EventEmitter, Input, Output, SimpleChanges,  
  OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked
  } from '@angular/core';
import { Menus } from './scrollable-tabs.type';

@Component({
  selector: 'app-scrollable-tabs',
  templateUrl: './scrollable-tabs.component.html',
  styleUrls: ['./scrollable-tabs.component.scss']
})
/**
 * implements OnInit这个接口是可选的，但是还是建议加上，因为会有提醒
 * 1. 构造函数永远第一个被调用
 * 2. ngOnChanges （多次：有触发）组件输入属性变化，监听组件本身变化，自己本身关心变化。
 * 3. ngOnInit 组件初始化完成，在这个函数中，可以完全使用组件的属性和方法 
 * 4. ngDoCheck 与ngOnChanges达到的目的几乎类似。ngDoCheck是angular框架做的脏值检测。
 * 5. ngAfterContentInit 组件内容初始化
 * 6. ngAfterContentChecked （多次）组件内容脏值检测
 * 7. ngAfterViewInit 组件视图初始化 （组件与其子组件都初始化完成）
 * 8. ngAfterViewChecked （多次）视图脏值检测 
 * 9. ngOnDestroy 比如ngIf条件变化或路由切换时，组件销毁，做一些清理工作，防止内存泄漏

 */
export class ScrollableTabsComponent implements
  OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  // menus应该是由父组件输入
  @Input() topMenus : Menus[] = [];
  // tab背景颜色应该是由父组件输入，默认是粉色
  @Input() topMenuBackgroundColor: string = 'pink';
  // tab的title激活颜色应该是由父组件输入，默认是蓝色
  @Input() titleActiveColor: string = 'blue';
  // tab的title未激活颜色应该是由父组件输入，默认是浅蓝色
  @Input() titleColor: string = 'skyblue';
  // tab的激活z指示颜色应该是由父组件输入，默认是绿色
  @Input() indicatorColor :string = 'green';


  // 点击哪个menu应该让父组件知道（以便切换路由）
  @Output() menuChange = new EventEmitter();

  selectedIndex :number = 0;

  handleSelection (index: number) {
    this.selectedIndex = index;
    // 告诉父组件那个menu被选中了
    this.menuChange.emit(this.topMenus[this.selectedIndex]);
  }

  constructor() {
    // console.log('1.组件构造调用');
  }


  ngOnChanges(changes: SimpleChanges): void {
    // console.log('2.组件输入属性改变(可多次)', changes);
  }
  
  ngOnInit(): void {
    // console.log('3.组件初始化');
  }

  ngDoCheck(): void {
    // console.log('4.框架本身脏值检测DoCheck(与ngOnChanges冲突)');
  }

  ngAfterContentInit(): void {
    // console.log('5.组件内容初始化(ng-content中的内容)');
  }

  ngAfterContentChecked(): void {
    // console.log('6.组件内容的脏值检测(可多次)');
    
  }
  ngAfterViewInit() :void {
    // console.log('7.组件视图初始化完成(自己+子组件都)');
    
  }
  ngAfterViewChecked() :void {
    // console.log('8.视图脏值检测(可多次)');
  }

  ngOnDestroy(): void {
    // console.log('9.组件销毁，可以用ngIf试验');
    
  }
}
