import { Routes } from '@angular/router';
import { AiPageComponent } from './pages/ai-page/ai-page'; // ai-page.ts eke thiyena class eke nama (check karanna)
import { RegisterComponent } from './pages/register/register.pages'

export const routes: Routes = [
  // Default load wena page eka AI Page eka widihata demu
  { path: '', redirectTo: 'ai-style', pathMatch: 'full' }, 
  
  // URL eka /ai-style unama load wenna oone component eka
  { path: 'ai-style', component: AiPageComponent },
  
  // URL eka /register unama load wenna oone component eka
  { path: 'register', component: RegisterComponent }
];