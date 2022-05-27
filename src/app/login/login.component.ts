import { Component, OnInit } from "@angular/core";
import { User } from "../User";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Guid } from "guid-typescript";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  users: User[];
  formulario!: FormGroup;

  ngOnInit(): void {
    const regExCPF =
      "([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})";
    const regExCelular = "^([0|+[0-9]{1,5})?([0-9]{10})$";

    this.ExibirProdutos();
    this.formulario = new FormGroup({
      userId: new FormControl(),
      nomeCompleto: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
      email: new FormControl("", [Validators.required, Validators.email]),
      cpf: new FormControl("", [
        Validators.required,
        Validators.pattern(regExCPF),
      ]),
      telefone: new FormControl("", [
        Validators.required,
        Validators.pattern(regExCelular),
      ]),
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
