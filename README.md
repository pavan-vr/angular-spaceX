# AngularSpacex

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## project details

In this SpaceX app using Angular I have created a module called 'homepage' in which all components are present.In this module we have four components namely filter,items,landing-page,rocket-card. landing-page is our component where all the content gets displayed. this landing-page components makes a call to two components namely items and filter. landing-page component from items.service.ts gets the data using http.get() method. this data is passed to items component which in turn passes this data to rocket-card which displays data in form of cards. All the filters i.e year, launch success and land success will be applied through button from filter component and the new url is constructed from base url and from that url the data is loaded

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
