import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainComponent} from './pages/main/main.component';
import {LoginComponent} from './pages/login/login.component';
import {ProfileComponent} from './views/profile/profile.component';

import {DashboardComponent} from './views/dashboard/dashboard.component';
import {AuthGuard} from './utils/guards/auth.guard';
import {NonAuthGuard} from './utils/guards/non-auth.guard';
import {AddStagiaireComponent} from './views/addstagiaire/addstagiaire.component';
import {AdminComponent} from './views/admin/admin.component';
import {AddEncadrantComponent} from './views/addencadrant/addencadrant.component';
import {AddadminComponent} from './views/addadmin/addadmin.component';
import {UpdateadminComponent} from './views/updateadmin/updateadmin.component';

import {StagiaireComponent} from './views/stagiaire/stagiaire.component';



import{ UpdatestagiaireComponent} from'./views/updatestagiaire/updatestagiaire.component';


import{ AdmindetailsComponent} from'./views/admindetails/admindetails.component';
import{  AcceuilencadrantComponent} from './views/acceuilencadrant/acceuilencadrant.component'

import{ StagiairedetailsComponent} from'./views/stagiairedetails/stagiairedetails.component';
import{EncadrantComponent} from'./views/encadrant/encadrant.component';
import { UpdatencadrantComponent } from './views/updatencadrant/updatencadrant.component';
import { EncadrantdetailsComponent } from './views/encadrantdetails/encadrantdetails.component';
import{InformationsComponent} from './views/informations/informations.component';
import{AddinformationComponent} from './views/addinformation/addinformation.component';
import{AcceuilstagiaireComponent} from './views/acceuilstagiaire/acceuilstagiaire.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,

        children: [
            {
                path: 'profile',
                component: ProfileComponent
            },
           
           
            {
                path: 'acceuilstagiaire',
                component: AcceuilstagiaireComponent
            },
            
           
            {
                path: 'addstagiaire',
                component: AddStagiaireComponent
            },
            
            {
                path: 'admin',
                component: AdminComponent
            },
            {
                path: 'addadmin',
                component: AddadminComponent
            },
            {
                path: 'updateadmin/:id',
                component: UpdateadminComponent
            },
            {
                path: 'admindetails/:id',
                component:  AdmindetailsComponent
            },
            {
                path: 'stagiairedetails/:id_stagiaire',
                component:  StagiairedetailsComponent
            },
            {
                path: 'stagiaires',
                component: StagiaireComponent
            },
            {
                path: 'updatestagiaire/:id',
                component: UpdatestagiaireComponent
            },
            {
                path: 'informations',
                component: InformationsComponent,
            },
            {
                path: 'addinformations',
                component: AddinformationComponent,
            },
            {
                path: 'encadrants',
                component:EncadrantComponent
            },
            {
                path: 'acceuilEncadrant',
                component:  AcceuilencadrantComponent
            },
             {
                path: 'updatencadrant/:id',
                component: UpdatencadrantComponent
            },
            {
                path: 'encadrantdetails/:id',
                component: EncadrantdetailsComponent
            },
           
           
          
            

            {
                path: 'addencadrant',
                component:AddEncadrantComponent
            },
           
        
    
           
            {
                path: '',
                component: DashboardComponent
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [NonAuthGuard]
    },
   
    
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
