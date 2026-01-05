import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { toggleAnimation } from '../shared/animations';
import { AppService } from '../service/app.service';
import { IconCaretDownComponent } from '../shared/icon/icon-caret-down';
import { MenuModule } from 'headlessui-angular';
import { NgFor, NgClass } from '@angular/common';
import { IconMailComponent } from '../shared/icon/icon-mail';
import { IconLockDotsComponent } from '../shared/icon/icon-lock-dots';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { AuthService } from '../service/auth/auth-service';
import { ToastrService } from 'ngx-toastr';
// import { IconInstagramComponent } from '../shared/icon/icon-instagram';
// import { IconFacebookCircleComponent } from '../shared/icon/icon-facebook-circle';
// import { IconTwitterComponent } from '../shared/icon/icon-twitter';
// import { IconGoogleComponent } from '../shared/icon/icon-google';

@Component({
    templateUrl: './boxed-signin.html',
    animations: [toggleAnimation],
    imports: [
    NgFor,
    MenuModule,
    RouterModule,
    NgClass,
    IconCaretDownComponent,
    IconMailComponent,
    IconLockDotsComponent,
    TranslatePipe,
    ReactiveFormsModule
    // IconInstagramComponent,
    // IconFacebookCircleComponent,
    // IconTwitterComponent,
    // IconGoogleComponent,
    ,
    ɵInternalFormsSharedModule
],
})
export class BoxedSigninComponent {
    private readonly _AuthService = inject(AuthService)
    private readonly _FormBuilder = inject(FormBuilder)
    private readonly _ToastrService = inject(ToastrService)

    store: any;

    constructor( public translate: TranslateService, public storeData: Store<any>, public router: Router, private appSetting: AppService, ) {
        this.initStore();
    }

    async initStore() {
        this.storeData
            .select((d) => d.index)
            .subscribe((d) => {
                this.store = d;
            });
    }

    changeLanguage(item: any) {
        this.translate.use(item.code);
        this.appSetting.toggleLanguage(item);
        if (this.store.locale?.toLowerCase() === 'ae') {
            this.storeData.dispatch({ type: 'toggleRTL', payload: 'rtl' });
        } else {
            this.storeData.dispatch({ type: 'toggleRTL', payload: 'ltr' });
        }
        window.location.reload();
    }


    loginForm:FormGroup = this._FormBuilder.group({
        username:['', [Validators.required]],
        password:['', [Validators.required]],
    });

    submitLoginForm():void{
        if (this.loginForm.invalid) {
            this.loginForm.markAllAsTouched();
            return;
        }

        let data = this.loginForm.value
        this._AuthService.login(data).subscribe({
            next: (res:any) => {
                localStorage.setItem('token', res.data.accessToken);
                localStorage.setItem('refreshToken', res.data.refreshToken);
                localStorage.setItem('userId', res.data.userId);
                localStorage.setItem('fullName', res.data.fullName);
                localStorage.setItem('role', res.data.roles[0]);
                this.loginForm.reset()
                this._ToastrService.success(res.msg)
                this.router.navigate(['/index'])
            },
            error: (err:any) => {
                this._ToastrService.error(err.error.msg)
            }
        })
    }
}
