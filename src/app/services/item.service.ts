import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  public url = 'https:api.spaceXdata.com/v3/launches?limit=100';
  private filterURL;

  constructor(private http: HttpClient) {}

  getItems(): Observable<any> {
    return this.http.get(this.url);
  }

  getFilterItems(year, launchStatus, landStatus): Observable<any> {
    this.filterURL = this.url;
    this.filterURL = this.filterURL + '&launch_year=' + year;

    switch (launchStatus) {
      case true:
        launchStatus = true;
        break;
      case false:
        launchStatus = false;
        break;
      default:
        launchStatus = '';
    }

    switch (landStatus) {
      case true:
        landStatus = true;
        break;
      case false:
        landStatus = false;
        break;
      default:
        landStatus = '';
    }

    this.filterURL = this.filterURL + '&launch_success=' + launchStatus;

    this.filterURL =
      this.filterURL + '&land_success=' + (landStatus === true ? 'true' : '') ||
      (landStatus === false ? 'false' : '');

    return this.http.get(this.filterURL);
  }
}
