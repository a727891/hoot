import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { HootpwaAppComponent } from '../app/hootpwa.component';

beforeEachProviders(() => [HootpwaAppComponent]);

describe('App: Hootpwa', () => {
  it('should create the app',
      inject([HootpwaAppComponent], (app: HootpwaAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'hootpwa works!\'',
      inject([HootpwaAppComponent], (app: HootpwaAppComponent) => {
    expect(app.title).toEqual('hootpwa works!');
  }));
});
