import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { alterarSenha } from '../../model/alterarSenha';
@Component({
    selector:'alterar-senha',
    styleUrls:['alterarSenha.scss'],
    templateUrl:'alterarSenha.html'
})
export class AlterarSenha implements OnInit {

    public formGroup:FormGroup;
    public usuario:alterarSenha = new alterarSenha();
    public programador:string='Fernando Santian';
    public confirmeSenha:string;

    constructor(private fb:FormBuilder){

    }

    ngOnInit(){
        /**
         * Criando as validações para os campos da tela (Campo Obrigatório)
         */
        const novaSenha = new FormControl('',Validators.required);
        const confirmeSenha = new FormControl('', Validators.required);
        
        this.formGroup = this.fb.group({
            usuario: ['', Validators.required],
            senhaAtual: ['', Validators.required],
            novaSenha: novaSenha,
            confirmeSenha: confirmeSenha
        });
        /**
         * Vai ser carregado o storage do navegador os dados do usuário
         */
        let user = localStorage.getItem('usuario');
        if (user != null){
            /**
             *  Caso já tenha um usuário no storage vai ser convertido 
             * de obj para Usuario
             */
            this.usuario = JSON.parse(user);
        }
    }

    public onChangeNewSenha(){
        if (this.confirmeSenha != null && this.usuario.novaSenha != null){
            if (this.confirmeSenha != this.usuario.novaSenha) {
                this.formGroup.controls.confirmeSenha.setErrors({senhaNaoConfere: true});
            } else {
                this.formGroup.controls.confirmeSenha.setErrors(null);
            }
        }
    }

    public salvar(){
        console.log(this.usuario);
        let user = JSON.stringify(this.usuario);
        localStorage.setItem('usuario', user);
        alert('Senha alterada com sucesso.');
    }

    public cancelar(){
        console.log('Alteração de senha foi cancelada.');
    }
}
