import { ApplicationConfig, isDevMode } from '@angular/core';
import {
  provideRouter,
  TitleStrategy,
  withComponentInputBinding,
  withRouterConfig,
  withViewTransitions
} from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, Title } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideServiceWorker } from '@angular/service-worker';
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { TemplatePageTitleStrategy } from "./core/providers/title-strategy.provider";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding(),
      withViewTransitions(),
      withRouterConfig({
        onSameUrlNavigation: "reload",
        paramsInheritanceStrategy: 'always'
      })
    ),
    provideClientHydration(),
    provideAnimations(),
    provideHttpClient(
      withInterceptorsFromDi()
    ),
    Title,
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy},
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    })]
};
