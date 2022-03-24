import { Component, Input, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Projeto } from 'src/app/entities/projeto.entity';

@Component({
  selector: 'projeto-list-tile',
  templateUrl: './list-tile.component.html',
  styleUrls: ['./list-tile.component.css'],
})
export class ListTileComponent implements OnInit {
  @Input() projeto: Projeto;

  faGithub = faGithub;

  constructor() {}

  ngOnInit(): void {}
}
