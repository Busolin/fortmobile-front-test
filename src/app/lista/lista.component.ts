import { Component, OnInit } from "@angular/core";
import { User } from "../User";
import { LoginComponent } from "../login/login.component";

@Component({
  selector: "lista-users",
  templateUrl: "./lista.component.html",
  styleUrls: ["./lista.component.css"],
})
export class ListaUsers implements OnInit {
  users: User[];

  ngOnInit(): void {
    this.ExibirProdutos();
  }

  ExibirProdutos(): void {
    if (localStorage.getItem("BD")) {
      this.users = JSON.parse(localStorage.getItem("BD"));
    } else {
      this.users = [];
    }
  }

  deleteUser(user, i) {
    const index = this.users.indexOf(user);
    console.log(user, i);
  }
}
