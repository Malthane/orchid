import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtistComponent } from './Components/artist/artist.component';
import { FooterComponent } from './core/footer/footer.component';
import { LoginComponent } from './core/login/login.component';
import { SignUpComponent } from './core/sign-up/sign-up.component';
import { AuthGuard } from './Services/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'sign-ui', component: SignUpComponent},
  { path: 'artist', component: ArtistComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
