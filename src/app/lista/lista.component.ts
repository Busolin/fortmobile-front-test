import { Component, OnInit } from "@angular/core";
import { User } from "../User";

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

  deleteUsers(user, i) {
    const choice = confirm("Deseja deletar todods?");

    if (choice) {
      localStorage.removeItem("BD");
      document.location.reload();
    }
  }
}
