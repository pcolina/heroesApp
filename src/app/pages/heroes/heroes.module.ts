import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './heroes.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    HeroesRoutingModule,

  ],
  declarations: [HeroesComponent]
})
export class HeroesModule { }
