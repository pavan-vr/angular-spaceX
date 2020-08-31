import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ItemsComponent } from './items/items.component';
import { RocketCardComponent } from './rocket-card/rocket-card.component';

@NgModule({
  declarations: [FilterComponent, LandingPageComponent, ItemsComponent, RocketCardComponent],
  imports: [CommonModule],
  exports: [LandingPageComponent],
})
export class HomepageModule {}
