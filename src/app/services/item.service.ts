import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IrocketCard } from '../rocketCard';
@Injectable({
  providedIn: 'root',
})
export class ItemService {
  public url = 'https:api.spaceXdata.com/v3/launches?limit=100';
  private filterURL;

  constructor(private http: HttpClient) {}

  getItems(): Observable<IrocketCard[]> {
    return this.http.get<IrocketCard[]>(this.url);
  }

  getFilterItems(year, launchStatus, landStatus): Observable<IrocketCard[]> {
    this.filterURL = this.url;
    if (year !== ' ') {
      this.filterURL = this.filterURL + '&launch_year=' + year;
    }

    switch (launchStatus) {
      case true:
        launchStatus = true;
        break;
      case false:
        launchStatus = false;
        break;
      default:
        launchStatus = ' ';
    }

    switch (landStatus) {
      case true:
        landStatus = true;
        break;
      case false:
        landStatus = false;
        break;
      default:
        landStatus = ' ';
    }
    if (launchStatus !== ' ') {
      this.filterURL = this.filterURL + '&launch_success=' + launchStatus;
    }
    if (landStatus !== ' ') {
      this.filterURL = this.filterURL + '&land_success=' + landStatus;
    }
    console.log(this.filterURL);

    return this.http.get<IrocketCard[]>(this.filterURL);
  }
}
