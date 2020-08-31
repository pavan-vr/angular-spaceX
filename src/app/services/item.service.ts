import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  public url = 'https:api.spaceXdata.com/v3/launches?limit=100';
  private filterURL;
  // public filterValues = {
  //   year: '2013',
  //   launch: true,
  //   landing: false,
  // };
  // public year = '&launch_year=';
  // public launch = '&launch_success=';
  // public land = '&land_success=';
  constructor(private http: HttpClient) {
    // this.newurl =
    //   this.url +
    //   this.year +
    //   this.filterValues.year +
    //   this.launch +
    //   this.filterValues.launch +
    //   this.land +
    //   this.filterValues.landing;
    // console.log(this.newurl);
  }
  // tslint:disable-next-line:typedef
  // setUrl() {
  //   this.newurl =
  //     this.url +
  //     this.year +
  //     this.filterValues.year +
  //     this.launch +
  //     this.filterValues.launch +
  //     this.land +
  //     this.filterValues.landing;
  //   console.log(this.newurl);
  // }

  getItems(): Observable<any> {
    return this.http.get(this.url);
  }

  getFilterItems(year, launchStatus, landStatus): Observable<any> {
    this.filterURL = this.url;
    this.filterURL = this.filterURL + '&launch_year=' + year;

    this.filterURL =
      this.filterURL +
      '&launch_success=' +
      (launchStatus === true ? 'true' : 'false');

    this.filterURL =
      this.filterURL +
      '&land_success=' +
      (landStatus === true ? 'true' : 'false');
    console.log(this.filterURL);

    return this.http.get(this.filterURL);
  }
}
