import { Router, Routes, RouterModule, NavigationStart, NavigationError } from '@angular/router';
import { CadastrarCliente } from './pages/cadastrar-cliente/cadastrarCliente';
import { NgModule } from '@angular/core';
import { AlterarSenha } from './pages/alterar-senha/alterarSenha';
import { CadastrarUsuario } from './pages/cadastrar-usuario/cadastrarUsuario';
export const appRoutes: Routes = [
    /**
     * Definição das rotas que o sistema vai ter
     * para cada rota precisa de um componente
     */
    {
        path: 'cadastrar-cliente',
        component: CadastrarCliente
    }, {
        path: 'alterar-senha',
        component: AlterarSenha
    }, {
        path: 'cadastrar-usuario',
        component: CadastrarUsuario
    }

]
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    exports: [RouterModule]
})
export class AppRoute {

    constructor(router: Router) {
    }
}