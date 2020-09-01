import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  years = [
    '2006',
    '2007',
    '2008',
    '2009',
    '2010',
    '2011',
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
  ];
  @Output() year = new EventEmitter();
  @Output() launching = new EventEmitter();
  @Output() landing = new EventEmitter();
  selectedYear;
  selectedLaunch;
  selectedLand;
  setYear(year: string): void {
    this.year.emit(year);
    this.selectedYear = year;
  }

  setLaunch(value: boolean): void {
    this.launching.emit(value);
    this.selectedLaunch = value;
  }

  setLanding(value: boolean): void {
    this.landing.emit(value);
    this.selectedLand = value;
  }

  constructor() {}

  ngOnInit(): void {}
}
