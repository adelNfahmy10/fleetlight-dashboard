import { Component } from '@angular/core';
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
        TranslatePipe
        // IconInstagramComponent,
        // IconFacebookCircleComponent,
        // IconTwitterComponent,
        // IconGoogleComponent,
    ],
})
export class BoxedSigninComponent {
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


    submitLoginForm():void{
        console.log('Done');

        this.router.navigate(['/index'])
    }
}
