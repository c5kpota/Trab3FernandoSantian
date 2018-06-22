import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, RequiredValidator } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Cliente } from '../../model/cliente';
@Component({
    selector:'cadastrar-cliente',
    styleUrls:['cadastrarCliente.scss'],
    templateUrl:'cadastrarCliente.html'
})
export class CadastrarCliente implements OnInit {

    public formGroup:FormGroup;
    public cliente:Cliente = new Cliente();
    public programador:string='Fernando Santian';

    constructor(private fb:FormBuilder){

    }

    ngOnInit(){
        /**
         * Criando as validações para os campos da tela (Campo Obrigatório)
         */

        
        this.formGroup = this.fb.group({
            razaoSocial: [null, Validators.required],
            fantasia: [null ,Validators.required],
            cpf: [null ,Validators.required],
            rg: [null, Validators.required],
            cep: [null, Validators.required],
            celular: [null ,Validators.required],
            telefone: [null, Validators.required],
            dataDeNascimento: [null, Validators.required],
            email: [null, Validators.required],
            estado: [null, Validators.required],
            cidade: [null, Validators.required],
            bairro: [null, Validators.required],
            rua: [null, Validators.required],
            numero: [null, Validators.required],
            complemento: [null, Validators.required]


        });
        /**
         * Vai ser carregado o storage do navegador os dados do usuário
         */
        let user = localStorage.getItem('cliente');
        if (user != null){
            /**
             *  Caso já tenha um usuário no storage vai ser convertido 
             * de obj para Usuario
             */
            this.cliente = JSON.parse(user);
        }
    }

    public salvar(){
        console.log(this.cliente);
        let user = JSON.stringify(this.cliente);
        localStorage.setItem('cliente', user);
        alert('Cliente cadastrado.');
    }

    public cancelar(){
        console.log('Operação cancelada.');
    }
}
