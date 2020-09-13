import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Url } from '../shared/models/url-model';
import { UrlService } from '../shared/services/url.service';

@Component({
  selector: 'app-redirection',
  templateUrl: './redirection.component.html',
  styleUrls: ['./redirection.component.scss']
})
export class RedirectionComponent implements OnInit {

  constructor(private readonly urlService: UrlService,
    private readonly route: ActivatedRoute) { }

  ngOnInit(): void {
    this.urlService.getLongUrl(this.route.snapshot.params.id)
      .subscribe((resp:Url) => {
        window.location.href = resp.longurl;
      });
  }

}
