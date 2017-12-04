import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ParentsComponent } from './components/parents/parents.component';
import { ChildrenComponent } from './components/children/children.component';
import { RelationshipsComponent } from './components/relationships/relationships.component';
import { EntitiesComponent } from './components/entities/entities.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Router } from '@angular/router/src/router';


import { DataService } from './services/data.service';
import { Http } from '@angular/http/src/http';


//create routes
const appRoutes: Routes = [
  {path:'', component:DashboardComponent, pathMatch: 'full'},
  {path:'children/:id', component:ChildrenComponent, pathMatch: 'full'},
  {path:'parents', component:ParentsComponent, pathMatch: 'full'}

]

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ParentsComponent,
    ChildrenComponent,
    RelationshipsComponent,
    EntitiesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
