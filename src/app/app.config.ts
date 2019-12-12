import {InjectionToken} from '@angular/core';

export let APP_CONFIG = new InjectionToken('app.config');

export interface IAppConfig {
  apiEndpoint: string;
  endpointToken: string;
  IMDBPath: string;
}

export const AppConfig: IAppConfig = {
  apiEndpoint: 'https://www.myapifilms.com/',
  endpointToken: '1a829fc2-bb62-4e96-b6cb-ddf49ebc6039',
  IMDBPath: 'https://www.imdb.com/name/'
};
