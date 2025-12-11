import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageComponent } from './manage/manage.component';
import { UploadComponent } from './upload/upload.component';
import { AngularFireAuthGuard, redirectUnauthorizedTo } from '@angular/fire/compat/auth-guard';

// When we have this pipe to our guard, we must pass in the function that returns the pipe.
// This pipe function has one argument, which is the path to redirect the user to the home page.
const redirectUnauthorizedToHome = () => redirectUnauthorizedTo('/');

const routes: Routes = [
  {
    path: 'manage',
    component: ManageComponent,
    data: { //specify if this route requires auth inside
      authOnly: true,
      authGuardPipe: redirectUnauthorizedToHome //apply this pipe to the guard by adding it as a data property in the data object for the managed route.
    },
    canActivate: [AngularFireAuthGuard]
  },
  {
    path: 'upload',
    component: UploadComponent,
    data: {
      authOnly: true,
      authGuardPipe: redirectUnauthorizedToHome //apply this pipe to the guard by adding it as a data property in the data object for the managed route.
    },
    canActivate: [AngularFireAuthGuard]
  },
  {
    path: 'manage-clips',
    redirectTo: 'manage' //redirect an user to a correct path from the old one
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoRoutingModule { }
