// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const BaseUrlApi = "http://localhost:3001";
export const environment = {
  production: false,
  GOOGLE_CLIENT_ID: "442140625921-2f3r7qj6i050m8khhp8u53a3ncc4hpj7.apps.googleusercontent.com",
  student_api: `${BaseUrlApi}/users`,
  subjects_api:`${BaseUrlApi}/subjects`,
  questions_api: `${BaseUrlApi}`,
  startquiz_api: `${BaseUrlApi}/startquiz` 
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
