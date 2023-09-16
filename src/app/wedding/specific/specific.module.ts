import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecificComponent } from './specific.component';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from '../components/hero/hero.component';

const routes: Routes = [{ path: '', component: SpecificComponent }];

@NgModule({
  declarations: [SpecificComponent],
  imports: [CommonModule, RouterModule.forChild(routes), HeroComponent],
})
export class SpecificModule {}
