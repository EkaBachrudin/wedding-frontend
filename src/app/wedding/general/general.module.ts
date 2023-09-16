import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralComponent } from './general.component';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from '../components/hero/hero.component';

const routes: Routes = [{ path: '', component: GeneralComponent }];

@NgModule({
  declarations: [GeneralComponent],
  imports: [CommonModule, RouterModule.forChild(routes), HeroComponent],
})
export class GeneralModule {}
