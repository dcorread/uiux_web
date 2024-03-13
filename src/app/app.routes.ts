import { Routes } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { HomeComponent } from './home/home.component';
import { ReportsComponent } from './reports/reports.component';
import { TimesComponent } from './times/times.component';
import { AddTimeComponent } from './add-time/add-time.component';

export const routes: Routes = [
    { path: '', component: LogInComponent },
    { path: 'home', component: HomeComponent },
    { path: 'reports', component: ReportsComponent },
    { path: 'times', component: TimesComponent },
    { path: 'add', component: AddTimeComponent },
];
