import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {MatFormFieldModule,MatButtonModule,MatMenuModule,MatCheckboxModule,MatSidenavModule,MatIconModule,MatListModule,MatTableModule,MatCardModule} from '@angular/material';
import {BrowserAnimationsModule,NoopAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ResourceComponent } from './resource/resource.component';
import { ProjectdetsComponent } from './projectdets/projectdets.component';
import { SidenavComponent } from './sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResourceComponent,
    ProjectdetsComponent,
    SidenavComponent
  ],
  imports: [
    MatCheckboxModule,
    MatFormFieldModule,
    MatCardModule,
    MatTableModule,
    MatListModule,
    MatIconModule,
    MatSidenavModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
