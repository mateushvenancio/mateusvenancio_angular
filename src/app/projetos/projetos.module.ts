import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjetosRoutingModule } from './projetos-routing.module';
import { ProjetosComponent } from './projetos.component';
import { ListTileComponent } from './list-tile/list-tile.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ProjetosComponent, ListTileComponent],
  imports: [CommonModule, ProjetosRoutingModule, FontAwesomeModule],
  bootstrap: [ProjetosComponent],
})
export class ProjetosModule {}
