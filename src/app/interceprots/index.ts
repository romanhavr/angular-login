import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AddTokenInterceptor } from './add-token.interceptor';

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AddTokenInterceptor, multi: true },
  ];
