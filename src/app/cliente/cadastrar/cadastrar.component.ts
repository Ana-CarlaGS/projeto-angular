import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent {
  categorias: string[] = ['Coceira', 'Dor', 'Problema dentário', 'Febre', 'Outros'];
  categoriasSelecionadas: string[] = [];  

  salvar() {
    console.log('Categorias selecionadas:', this.categoriasSelecionadas);
  }
}




