import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: EmployeeListComponent },
  { path: 'employee/:id', component: EmployeeDetailsComponent },
];



@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent
  ],
  imports:  [RouterModule.forRoot(routes),
  
  
    BrowserModule,
     
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

