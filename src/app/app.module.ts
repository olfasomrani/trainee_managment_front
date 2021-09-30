import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from './pages/main/main.component';
import {LoginComponent} from './pages/login/login.component';
import {HeaderComponent} from './pages/main/header/header.component';
import {FooterComponent} from './pages/main/footer/footer.component';
import {MenuSidebarComponent} from './pages/main/menu-sidebar/menu-sidebar.component';

import {ReactiveFormsModule} from '@angular/forms';
import {ProfileComponent} from './views/profile/profile.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {DashboardComponent} from './views/dashboard/dashboard.component';
import {ToastrModule} from 'ngx-toastr';
import {MessagesDropdownMenuComponent} from './pages/main/header/messages-dropdown-menu/messages-dropdown-menu.component';
import {NotificationsDropdownMenuComponent} from './pages/main/header/notifications-dropdown-menu/notifications-dropdown-menu.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AppButtonComponent} from './components/app-button/app-button.component';

import {registerLocaleData} from '@angular/common';
import localeEn from '@angular/common/locales/en';
import {UserDropdownMenuComponent} from './pages/main/header/user-dropdown-menu/user-dropdown-menu.component';
import {ForgotPasswordComponent} from './pages/forgot-password/forgot-password.component';
import {RecoverPasswordComponent} from './pages/recover-password/recover-password.component';
import {LanguageDropdownComponent} from './pages/main/header/language-dropdown/language-dropdown.component';

import {AddStagiaireComponent} from './views/addstagiaire/addstagiaire.component';
import {AdminComponent} from './views/admin/admin.component';
import {AddadminComponent} from './views/addadmin/addadmin.component';
import {UpdateadminComponent} from './views/updateadmin/updateadmin.component';
import {StagiaireComponent} from './views/stagiaire/stagiaire.component';

import {AddacceuilComponent} from './views/addacceuil/addacceuil.component';
import {UpdateacceuilComponent} from './views/updateacceuil/updateacceuil.component';
import{ AddEncadrantComponent } from'./views/addencadrant/addencadrant.component';
import { AdmindetailsComponent } from './views/admindetails/admindetails.component';
import { UpdatestagiaireComponent } from './views/updatestagiaire/updatestagiaire.component';
import { StagiairedetailsComponent } from './views/stagiairedetails/stagiairedetails.component';
import { EncadrantComponent } from './views/encadrant/encadrant.component';
import { UpdatencadrantComponent } from './views/updatencadrant/updatencadrant.component';
import { EncadrantdetailsComponent } from './views/encadrantdetails/encadrantdetails.component';
import { InformationsComponent } from './views/informations/informations.component';
import { AddinformationComponent } from './views/addinformation/addinformation.component';

import { WavesModule, TableModule } from 'ng-uikit-pro-standard';
import { AcceuilstagiaireComponent } from './views/acceuilstagiaire/acceuilstagiaire.component';
import { AcceuilencadrantComponent } from './views/acceuilencadrant/acceuilencadrant.component';





@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        LoginComponent,
        HeaderComponent,
        FooterComponent,
        MenuSidebarComponent,
        ProfileComponent,
        DashboardComponent,
        MessagesDropdownMenuComponent,
        NotificationsDropdownMenuComponent,
        AppButtonComponent,
        UserDropdownMenuComponent,
        ForgotPasswordComponent,
        EncadrantComponent,
        RecoverPasswordComponent,
        LanguageDropdownComponent,
        AddStagiaireComponent,
        AdminComponent,
        AddadminComponent,
        UpdateadminComponent,
        UpdatencadrantComponent,
        StagiaireComponent,
        StagiairedetailsComponent,
        EncadrantdetailsComponent,
        AddEncadrantComponent,
        AdmindetailsComponent,
        UpdatestagiaireComponent,
        AddacceuilComponent,
        UpdateacceuilComponent,

        AdmindetailsComponent,
        EncadrantComponent,
        UpdatencadrantComponent,
        EncadrantdetailsComponent,
        InformationsComponent,
        AddinformationComponent,
        AcceuilstagiaireComponent,
        AcceuilencadrantComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            timeOut: 3000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true
        }),
        NgbModule,
        WavesModule,
        TableModule ,
      
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
