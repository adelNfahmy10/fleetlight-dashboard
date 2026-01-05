import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { toggleAnimation } from '../shared/animations';
import { AppService } from '../service/app.service';
import { IconCaretDownComponent } from '../shared/icon/icon-caret-down';
import { NgFor, NgClass } from '@angular/common';
import { MenuModule } from 'headlessui-angular';
import { IconUserComponent } from '../shared/icon/icon-user';
import { IconMailComponent } from '../shared/icon/icon-mail';
import { IconLockDotsComponent } from '../shared/icon/icon-lock-dots';
import { IconInstagramComponent } from '../shared/icon/icon-instagram';
import { IconFacebookCircleComponent } from '../shared/icon/icon-facebook-circle';
import { IconTwitterComponent } from '../shared/icon/icon-twitter';
import { IconGoogleComponent } from '../shared/icon/icon-google';
import { IconPhoneComponent } from "../shared/icon/icon-phone";
import { IconPhoneCallComponent } from "../shared/icon/icon-phone-call";
import { AuthService } from '../service/auth/auth-service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { NgSelectComponent, NgSelectModule } from "@ng-select/ng-select";
import { RoleService } from '../service/role/role-service';
import { ToastrService } from 'ngx-toastr';

@Component({
    templateUrl: './boxed-signup.html',
    animations: [toggleAnimation],
    imports: [
    RouterModule,
    NgFor,
    IconCaretDownComponent,
    MenuModule,
    NgClass,
    IconUserComponent,
    IconMailComponent,
    IconLockDotsComponent,
    IconInstagramComponent,
    IconFacebookCircleComponent,
    IconTwitterComponent,
    IconGoogleComponent,
    TranslatePipe,
    IconPhoneComponent,
    IconPhoneCallComponent,
    NgSelectModule,
    ɵInternalFormsSharedModule,
    ReactiveFormsModule
    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class BoxedSignupComponent implements OnInit{
    private readonly _AuthService = inject(AuthService)
    private readonly _RoleService = inject(RoleService)
    private readonly _FormBuilder = inject(FormBuilder)
    private readonly _ToastrService = inject(ToastrService)


    store: any;
    constructor(
        public translate: TranslateService,
        public storeData: Store<any>,
        public router: Router,
        private appSetting: AppService,
    ) {
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

    ngOnInit(): void {
        this.getAllRoles()
    }

    allRoles:any[] = []

    getAllRoles():void{
        this._RoleService.getAllRoles().subscribe({
            next:(res)=>{
                this.allRoles = res.data
            }
        })
    }

    registerForm:FormGroup = this._FormBuilder.group({
        fullName:[null, [Validators.required]],
        email:[null, [Validators.required]],
        mobile:[null, [Validators.required]],
        username:[null, [Validators.required]],
        password:[null, [Validators.required]],
        roleIds:[null, [Validators.required]],
    })

    submitRegisterForm():void{
        if (this.registerForm.invalid) {
            this.registerForm.markAllAsTouched();
            return;
        }

        let data = this.registerForm.value
        let roles = [data.roleIds]
        data.roleIds = roles

        this._AuthService.register(data).subscribe({
            next: (res:any) => {
                this._ToastrService.success(res.msg)
                this.registerForm.reset()
                this.router.navigate(['/auth/boxed-signin'])
            },
            error: (err:any) => {
                // this._ToastrService.success(err.error.msg)
            }
        })
    }

}
