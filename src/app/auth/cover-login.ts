import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { toggleAnimation } from '../shared/animations';
import { AppService } from '../service/app.service';
import { MenuModule } from 'headlessui-angular';
import { IconCaretDownComponent } from '../shared/icon/icon-caret-down';
import { NgClass, NgFor } from '@angular/common';
import { IconMailComponent } from '../shared/icon/icon-mail';
import { IconLockDotsComponent } from '../shared/icon/icon-lock-dots';
import { IconInstagramComponent } from '../shared/icon/icon-instagram';
import { IconFacebookComponent } from '../shared/icon/icon-facebook';
import { IconTwitterComponent } from '../shared/icon/icon-twitter';
import { IconGoogleComponent } from '../shared/icon/icon-google';

@Component({
    templateUrl: './cover-login.html',
    animations: [toggleAnimation],
    imports: [
        RouterModule,
        NgFor,
        NgClass,
        MenuModule,
        IconCaretDownComponent,
        IconMailComponent,
        IconLockDotsComponent,
        IconInstagramComponent,
        IconFacebookComponent,
        IconTwitterComponent,
        IconGoogleComponent,
    ],
})
export class CoverLoginComponent {
    store: any;
    currYear: number = new Date().getFullYear();
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
}
