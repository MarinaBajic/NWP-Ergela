import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { UserStoreService } from "../services/user-store.service";

export const authGuard: CanActivateFn = () => {
    const userStore = inject(UserStoreService);
    const router = inject(Router);

    if (userStore.isLoggedIn()) {
        return true;
    }
    console.log('AuthGuard#canActivate not authorized to access page');
    // Redirect to the login page
    return router.parseUrl('ergela/login');
};