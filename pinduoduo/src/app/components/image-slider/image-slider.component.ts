import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, ElementRef, Input, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { ImageSlider } from './image-slider.type'

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {
  @Input() sliders: ImageSlider[] = [];
  @Input() sliderHeight = '155px'
  /**
   * 1.html模板（通过引用名）在组件类中的引用。
   * static表示是否是静态的，静态指比如：非ngFor动态渲染的。
   * 用viewChild。类型为ElementRef。
   */
  @ViewChild('imageSilder', { static: true }) imgSlider!: ElementRef;

  /**
   * 2.angular组件（通过其组件类型）在组件类中的引用
   * 用viewChild。类型为组件自己的类型。
   * 例子在app.component中
   */
  // 

  /**
   * 3.多个html模板（通过引用名）在组件类中的引用。
   * 用viewChildren。类型为QueryList<ElementRef>。一种泛型。
   */

  @ViewChildren('img') imgs!: QueryList<ElementRef>;

  intervalBySeconds: number = 2;
  // 滚动事件时，选中的图片的index
  selectedIndex: number = 0;
  // 声明成员变量，以便用于清理定时器带来的内存泄露
  intervalId: any;

  constructor(
    // 依赖注入。使用这个更好操作DOM
    private rd2: Renderer2
  ) { }

  ngOnInit() {
    // // 1.可以指向原生的html节点
    // console.log('ngOnInit', this.imgSlider);
    // // 就可以做一些操作，比如重新赋值innerHTML
    // 但是这种操作angular不推荐，推荐更加安全的直接操作DOM
    // this.imgSlider.nativeElement.innerHTML = `<span>hello</span>`;
  }

  ngAfterViewInit(): void {
    // // 3. 多个（视图中的元素渲染时间）
    // console.log('ngAfterViewInit',this.imgs);
    // this.imgs.forEach(val => {
    //   // 直接操作DOM，angular不推荐，不会做检查
    //   // val.nativeElement.style.height = '150px';

    //   // 更推荐如下rd2：防止注入攻击XXR
    //     this.rd2.setStyle(val.nativeElement, 'height', '150px');
    // })


    // 轮播图自动滚动
    this.intervalId = setInterval(() => {
      // setProperty 设置属性
      this.rd2.setProperty(
        this.imgSlider.nativeElement,
        'scrollLeft',
        (this.getIndex(++this.selectedIndex) * this.imgSlider.nativeElement.scrollWidth) / this.sliders.length)
    }, this.intervalBySeconds * 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }
  // 自动轮播++this.selectedIndex时防止越界
  getIndex(idx: number) :number {
    return idx >= 0
          ? idx % this.sliders.length
          : this.sliders.length - Math.abs(idx) % this.sliders.length ;
  }


  // 滚动事件，防往前滚动后直接跳到第3张（应该跳到第2张）
  handleScroll (ev: any) {
    // ev 浏览器对事件的响应
    // 滑动比例(每张图的宽度，超过)
    const ratio = ev.target.scrollLeft * this.sliders.length / ev.target.scrollWidth;
    // 选择的轮播图在图数组中的下标
    this.selectedIndex = Math.round(ratio);
  }
}
