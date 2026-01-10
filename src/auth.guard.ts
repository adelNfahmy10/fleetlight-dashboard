// import { AuthService } from 'src/app/shared/auth.service';
import { Injectable } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';
import { AppService } from './app/service/app.service';
import { AuthService } from './app/service/auth/auth-service';

@Injectable({ providedIn: 'root' })
export class AuthGuard {
    constructor(
        private router: Router,
        private service: AppService,
        private authService: AuthService,
    ) {}

    async canActivate(state: RouterStateSnapshot) {
        return true;
        // const bearerToken = this.service.get_localstorage('auth_token');

        // if (!bearerToken) {
        //     this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        //     return false;
        // }

        // if (bearerToken) {
        //     let user = this.service.storeData?.user;

        //     if (!user) {
        //         user = await this.authService.getUser();
        //     }
        //     if (user) {
        //         if (!user.email_verified_at) {
        //             this.router.navigate(['/verify-email']);
        //             return false;
        //         }

        //         return true; // User is logged in, allow access to the route
        //     }
        // }

        // // not logged in so redirect to login (or landing) page with the return url
        // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        // return false;
    }
}
