import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ChannelComponent } from './channel/channel.component';
import {
  redirectLoggedInTo,
  canActivate,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
import { OutputComponent } from './output/output.component';

const routes: Routes = [
  { path: 'channel', component: ChannelComponent },
  { path: 'output', component: OutputComponent },

  //for sign-in
  { path: '', redirectTo: 'chat', pathMatch: 'full' },
  {
    path: 'signin',
    component: SignInComponent,
    ...canActivate(() => redirectLoggedInTo(['channel'])),
  },
  {
    path: 'signup',
    component: SignUpComponent,
    ...canActivate(() => redirectLoggedInTo(['channel'])),
  },
  //only to check how to implement the redirect
  //{ path: 'chat',
  //  ...canActivate(() => redirectUnauthorizedTo(['signin'])),
  //  loadChildren: () => import('./features/chat/chat.module').then(m => m.ChatModule)
  //},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
