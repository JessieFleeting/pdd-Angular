import { Component, ViewChild } from '@angular/core';
import { Menus } from './components/scrollable-tabs/scrollable-tabs.type';
import { ImageSlider } from './components/image-slider/image-slider.type';
import { ImageSliderComponent } from './components';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  /**
   * 2.用angular组件在类中引用。
   * 可以不起别名
   */
  // 
  @ViewChild('imgaeSliderCom') imgSliderCom!: ImageSliderComponent;
  // 可以不起别名
  // @ViewChild(ImageSliderComponent) imgSliderCom!: ImageSliderComponent;


  // 以下均是传给子组件scrollble-tabs的属性
  topMenus :Menus[] = [
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
  topMenuBackgroundColor: string = '#fff';
  titleActiveColor: string = 'red';
  titleColor: string = 'black';
  indicatorColor: string = 'red';
  sliderHeight: string = '156px';

  imageSliders: ImageSlider[] = [
    {
      imgUrl: '../assets/1.png',
      link: '',
      caption: ''
    },
    {
      imgUrl: '../assets/2.png',
      link: '',
      caption: ''
    },
    {
      imgUrl: '../assets/3.png',
      link: '',
      caption: ''
    },
    {
      imgUrl: '../assets/4.png',
      link: '',
      caption: ''
    },
    {
      imgUrl: '../assets/5.png',
      link: '',
      caption: ''
    },
    {
      imgUrl: '../assets/6.png',
      link: '',
      caption: ''
    }
  ];

  handleMenuChange (topMenu: Menus) {
    // 父组件通过子组件 获取到menu数据
    console.log(topMenu);
    // 每次点击变化背景颜色，以便测试子组件中的ngOnchanges钩子函数
    // 同时可以配合ngIf试验ngDestory
    // const colors = ['red', 'skyblue', 'grey', '#fff'];
    // const colorsIndex = Math.floor(Math.random() * 4);
    // this.topMenuBackgroundColor = colors[colorsIndex];
  }

  ngAfterViewInit(): void {
    console.log(this.imgSliderCom);
  }
}
