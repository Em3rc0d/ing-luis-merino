import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NewsService } from '../../../services/news.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule], // Importa HttpClientModule aquí
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  articles: any[] = [];

  constructor(private newsService: NewsService) { }

  ngOnInit(): void {
    this.fetchMarineNews();
  }

  fetchMarineNews() {
    this.newsService.getMarineNews().subscribe(
      (data) => {
        this.articles = data.results;
      },
      (error) => {
        console.error('Error fetching news', error);
      }
    );
  }
}
