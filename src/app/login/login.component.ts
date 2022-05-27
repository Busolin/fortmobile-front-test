import { Component, OnInit } from "@angular/core";
import { User } from "../User";
import { FormGroup, FormControl } from "@angular/forms";
import { Guid } from "guid-typescript";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  users: User[];
  formulario: any;

  ngOnInit(): void {
    this.ExibirProdutos();
    this.formulario = new FormGroup({
      userId: new FormControl(),
      nomeCompleto: new FormControl(),
      email: new FormControl(),
      cpf: new FormControl(),
      telefone: new FormControl(),
    });
  }

  CadastrarUser(): void {
    //Gera IDs
    this.formulario.value.userId = Guid.create().toString();

    const user: User = this.formulario.value;
    this.users.push(user);

    localStorage.setItem("BD", JSON.stringify(this.users));
    this.formulario.reset();
  }

  ExibirProdutos(): void {
    if (localStorage.getItem("BD")) {
      this.users = JSON.parse(localStorage.getItem("BD"));
    } else {
      this.users = [];
    }
  }
}
