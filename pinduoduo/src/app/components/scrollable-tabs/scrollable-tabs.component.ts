import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
interface menus {
  title: string,
  link: string
}
@Component({
  selector: 'app-scrollable-tabs',
  templateUrl: './scrollable-tabs.component.html',
  styleUrls: ['./scrollable-tabs.component.scss']
})
/**
 * implements OnInit这个接口是可选的，但是还是建议加上，因为会有提醒
 * 1. 构造函数永远第一个被调用
 * 2. ngOnChanges
 * 3. ngOnInit组件初始化完成，在这个函数中，可以完全使用组件的属性和方法 
 * 
 */
export class ScrollableTabsComponent implements OnInit, OnChanges {
  title :string = '拼多多';
  tabs :menus[] = [
    {
      title: '推荐',
      link: ''
    },
    { 
      title:  '美妆',
      link: ''
    },
    { 
      title: '饰品',
      link: ''
    },
    { 
      title: '百货',
      link: ''
    },
    { 
      title: '内衣',
      link: ''
    },
    { 
      title: '家纺',
      link: ''
    },
    { 
      title: '鞋包',
      link: ''
    },
    { 
      title: '手机',
      link: ''
    },
    { 
      title: '运动',
      link: ''
    },
    { 
      title: '家具',
      link: ''
    },
    { 
      title: '女装',
      link: ''
    },
    { 
      title: '电脑',
      link: ''
    },
    { 
      title: '水果',
      link: ''
    },
    { 
      title: '食品',
      link: ''
    },
    { 
      title: '母婴',
      link: ''
    },
    { 
      title: '男装',
      link: ''
    },
    { 
      title: '电器',
      link: ''
    },
    { 
      title: '家装',
      link: ''
    },
    { 
      title: '医疗',
      link: ''
    },
    { 
      title: '车品',
      link: ''
    },
    { 
      title: '海淘',
      link: ''
    },
    { 
      title: '玩乐',
      link: ''
    }
    
  ];
  selectedIndex :number = 0;

  handleSelection (index: number) {
    this.selectedIndex = index;
  }

  constructor() {
    console.log('组件构造调用');
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('组件输入属性改变', changes);
  }
  
  ngOnInit(): void {
    console.log('组件初始化');
    
  }

}
