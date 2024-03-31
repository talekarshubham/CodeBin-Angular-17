import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbService } from '../../services/db.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewsnippet',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './viewsnippet.component.html',
  styleUrl: './viewsnippet.component.scss',
})
export class ViewsnippetComponent implements OnInit {
  codeSnippet: any;
  constructor(
    private roter: Router,
    private route: ActivatedRoute,
    private dbService: DbService
  ) {}
  ngOnInit(): void {
    this.getSnippet();
  }
  async getSnippet() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    await this.dbService.getSnippetById(id).then((data) => {
      console.log(data);
      this.codeSnippet = data;
    });
  }
}
