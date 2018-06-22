import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Usuario } from '../../model/usuario';
@Component({
    selector:'cadastrar-usuario',
    styleUrls:['cadastrarUsuario.scss'],
    templateUrl:'cadastrarUsuario.html'
})
export class CadastrarUsuario implements OnInit {

    public formGroup:FormGroup;
    public usuario:Usuario = new Usuario();
    public programador:string='Fernando Santian';

    constructor(private fb:FormBuilder){

    }

    ngOnInit(){
        /**
         * Criando as validações para os campos da tela (Campo Obrigatório)
         */

        
        this.formGroup = this.fb.group({
            nome: [null, Validators.required],
            email: [null, Validators.required],
            login: [null, Validators.required],
            senha: [null, Validators.required],
            confirmeSenha: [null, Validators.required],
            cpf: [null, Validators.required],
            apelido: [null, Validators.required],
            telefone: [null, Validators.required],
            celular: [null, Validators.required],
            grupoDeUsuario: [null, Validators.required],
            


        });

        
        }

        public salvar(){
            if(this.formGroup.invalid){
                return;
            }
            alert('Salvo com sucesso!');
        }
        public cancelar(){
            alert('Foi cancelado!');
        }
       
}
