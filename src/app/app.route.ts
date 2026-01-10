import { Routes } from '@angular/router';

// layouts
import { AppLayout } from './layouts/app-layout';
import { AuthLayout } from './layouts/auth-layout';

import { NotFoundComponent } from './not-found';
import { logedGuard } from './core/guards/loged/loged-guard';
import { authGuard } from './core/guards/auth/auth-guard';

export const routes: Routes = [
    {
        path: '',
        component: AuthLayout,
        canActivate:[logedGuard],
        children: [
            // auth
            { path: '', redirectTo:'auth', pathMatch:'full'},

            { path: 'auth', loadChildren: () => import('./auth/auth.routes').then((d) => d.AUTH_ROUTES) },

            // pages
            { path: 'pages', loadChildren: () => import('./pages/pages.routes').then((d) => d.PAGES_ROUTES) },

        ],
    },

    {
        path: '',
        component: AppLayout,
        canActivate:[authGuard],
        children: [
            { path: 'add-equpiment', loadComponent: () => import('./components/equipments/add-equipment/add-equipment').then((d) => d.AddEquipment), data: { title: 'Add Equipment' } },
            { path: 'update-equpiment/:id', loadComponent: () => import('./components/equipments/add-equipment/add-equipment').then((d) => d.AddEquipment), data: { title: 'Add Equipment' } },
            { path: 'view-equipment', loadComponent: () => import('./components/equipments/view-equpiments/view-equpiments').then((d) => d.ViewEqupiments), data: { title: 'Add Equipment' } },


            // dashboard
            { path: '', redirectTo: 'index', pathMatch:'full'},
            { path: 'index', loadComponent: () => import('./index').then((d) => d.IndexComponent), data: { title: 'Sales Admin' } },
            { path: 'analytics', loadComponent: () => import('./analytics').then((d) => d.AnalyticsComponent), data: { title: 'Analytics Admin' } },
            { path: 'finance', loadComponent: () => import('./finance').then((d) => d.FinanceComponent), data: { title: 'Finance Admin' } },
            { path: 'crypto', loadComponent: () => import('./crypto').then((d) => d.CryptoComponent), data: { title: 'Crypto Admin' } },

            // widgets
            { path: 'widgets', loadComponent: () => import('./widgets').then((d) => d.WidgetsComponent), data: { title: 'Widgets' } },

            // font-icons
            { path: 'font-icons', loadComponent: () => import('./font-icons').then((d) => d.FontIconsComponent), data: { title: 'Font Icons' } },

            // charts
            { path: 'charts', loadComponent: () => import('./charts').then((d) => d.ChartsComponent), data: { title: 'Charts' } },

            // dragndrop
            { path: 'dragndrop', loadComponent: () => import('./dragndrop').then((d) => d.DragndropComponent), data: { title: 'Drag & Drop' } },

            // pages
            {
                path: 'pages/knowledge-base',
                loadComponent: () => import('./pages/knowledge-base').then((d) => d.KnowledgeBaseComponent),
                data: { title: 'Knowledge Base' },
            },
            { path: 'pages/faq', loadComponent: () => import('./pages/faq').then((d) => d.FaqComponent), data: { title: 'FAQ' } },

            //apps
            { path: 'apps', loadChildren: () => import('./apps/apps.routes').then((d) => d.APPS_ROUTES) },

            // components
            { path: 'components', loadChildren: () => import('./components/components.routes').then((d) => d.COMPONENTS_ROUTES) },

            // elements
            { path: 'elements', loadChildren: () => import('./elements/elements.routes').then((d) => d.ELEMENTS_ROUTES) },

            // forms
            { path: 'forms', loadChildren: () => import('./forms/form.routes').then((d) => d.FORMS_ROUTES) },

            // users
            { path: 'users', loadChildren: () => import('./users/user.routes').then((d) => d.USERS_ROUTES) },

            // tables
            { path: 'tables', loadComponent: () => import('./tables').then((d) => d.TablesComponent), data: { title: 'Tables' } },
            { path: 'datatables', loadChildren: () => import('./datatables/datatables.routes').then((d) => d.DATATABLES_ROUTES) },
        ],
    },

    { path: '', loadComponent: () => import('./not-found').then((d) => d.NotFoundComponent) },
];
