import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HorizotionGridComponent, ImageSliderComponent, ScrollableTabsComponent } from './components';



@NgModule({
  declarations: [
    ScrollableTabsComponent,
    ImageSliderComponent,
    HorizotionGridComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  // 集合导入导出
  exports: [
    CommonModule,
    FormsModule,
    ScrollableTabsComponent,
    ImageSliderComponent,
    HorizotionGridComponent
  ]
})
export class SharedModule { }
