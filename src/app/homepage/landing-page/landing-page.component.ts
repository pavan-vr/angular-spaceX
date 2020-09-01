import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { IrocketCard } from '../../rocketCard';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent implements OnInit {
  constructor(private itemService: ItemService, private router: Router) {}
  public rocketData: IrocketCard[];
  public year: string;
  public launchStatus: boolean;
  public landStatus: boolean;
  public filterURL;
  setYear(year): void {
    this.year = year;
    this.getFilteredCards();
  }
  setLaunch(value): void {
    this.launchStatus = value;
    this.getFilteredCards();
  }
  setLanding(value): void {
    this.landStatus = value;
    this.getFilteredCards();
  }

  getFilteredCards(): void {
    this.itemService
      .getFilterItems(this.year, this.launchStatus, this.landStatus)
      .subscribe((data) => (this.rocketData = data));
  }

  ngOnInit(): void {
    this.itemService.getItems().subscribe((data) => (this.rocketData = data));
  }
}
