import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  menus: any[] =[
    {"mnu":"Colaborador","link":"/colaborador"},
    {"mnu":"Area","link":"/area"},
    {"mnu":"Usuario","link":"/usuario"},
    {"mnu":"Documentos"},
    {"mnu":"Tramite"},
    {"mnu":"Seguimiento"},
    {"mnu":"tomastos"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
