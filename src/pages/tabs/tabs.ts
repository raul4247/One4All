import { Component } from '@angular/core';

import { AgendamentoPage } from '../agendamento/agendamento';
import { HomePage } from '../home/home';
import { PerfilPage } from '../perfil/perfil';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root = HomePage;
  tab2Root = AgendamentoPage;
  tab3Root = PerfilPage;

  constructor() {
  }
}