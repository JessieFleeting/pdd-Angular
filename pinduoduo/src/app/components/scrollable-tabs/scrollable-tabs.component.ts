import { Component, OnInit } from '@angular/core';
interface menus {
  title: string,
  link: string
}
@Component({
  selector: 'app-scrollable-tabs',
  templateUrl: './scrollable-tabs.component.html',
  styleUrls: ['./scrollable-tabs.component.scss']
})
export class ScrollableTabsComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
  }

}
