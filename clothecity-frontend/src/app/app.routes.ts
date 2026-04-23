import { Routes } from '@angular/router';
import { AiPageComponent } from './pages/ai-page/ai-page';
import { ClothesStoreComponent } from './pages/clothes-store/clothes-store';
import { RegisterComponent } from './pages/register/register.pages';

export const routes: Routes = [
  { path: '', redirectTo: 'ai-style', pathMatch: 'full' },
  { path: 'ai-style', component: AiPageComponent },
  { path: 'clothes-store', component: ClothesStoreComponent },
  { path: 'register', component: RegisterComponent }
];
