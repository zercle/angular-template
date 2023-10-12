import { CanActivateFn, Router } from '@angular/router';
import { inject } from "@angular/core";
import { AuthService } from "./auth.service";
import { LocalStorage } from "../../shared/services/storage/local-storage.service";


export const authGuard: CanActivateFn = (route, state) => {
    const auth = inject(AuthService);
    const localStorage = inject(LocalStorage);
    const router = inject(Router);
    if (auth.user()) {
        return true;
    } else {
        localStorage.setItem('redirect_url', state.url);
        return router.createUrlTree(['/login']);
    }
};

export const systemGuard: CanActivateFn = (route, state) => {
    const auth = inject(AuthService);
    const localStorage = inject(LocalStorage);
    const router = inject(Router);
    if (auth.hasSystemAccess()) {
        return true;
    } else {
        return router.createUrlTree(['/unauthorized']);
    }
};
