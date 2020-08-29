import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ItemsComponent } from './items/items.component';

@NgModule({
  declarations: [FilterComponent, LandingPageComponent, ItemsComponent],
  imports: [CommonModule],
  exports: [LandingPageComponent],
})
export class HomepageModule {}
