import { Component, OnInit } from '@angular/core';
import { Projeto } from '../entities/projeto.entity';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css'],
})
export class ProjetosComponent implements OnInit {
  projetos: Projeto[] = [
    {
      data: '2022-03-23',
      nome: 'Pokedex',
      descricao: 'Uma Pokedex em API',
      github: 'www.github.com',
      tags: ['Angular', 'Flutter', 'MongoDb'],
    },
    {
      data: '2022-03-23',
      nome: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      descricao: 'Uma Pokedex em API',
      github: 'www.github.com',
      tags: ['Angular', 'Flutter', 'MongoDb'],
    },
    {
      data: '2022-03-23',
      nome: 'Pokedex',
      descricao: 'Uma Pokedex em API',
      github: 'www.github.com',
      tags: ['Angular', 'Flutter', 'MongoDb'],
    },
    {
      data: '2022-03-23',
      nome: 'Pokedex',
      descricao: 'Uma Pokedex em API',
      github: 'www.github.com',
      tags: ['Angular', 'Flutter', 'MongoDb'],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
