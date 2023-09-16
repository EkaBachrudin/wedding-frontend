import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: ':uid',
    loadChildren: () =>
      import('./specific/specific.module').then((m) => m.SpecificModule),
  },
  {
    path: 'invitation/general',
    loadChildren: () =>
      import('./general/general.module').then((m) => m.GeneralModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeddingRoutingModule {}
