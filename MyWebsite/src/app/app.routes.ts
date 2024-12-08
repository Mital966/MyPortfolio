import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { homedir } from 'os';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'home',
        component:HomeComponent
    }
];
