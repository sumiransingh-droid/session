import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalComponent } from './session/local/local.component';
import { SessionStorageComponent } from './session/session-storage/session-storage.component';

const routes: Routes = [
  {
    component:LocalComponent,
    path:"local"
  },
  {
    component:SessionStorageComponent,
    path:"session"
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
