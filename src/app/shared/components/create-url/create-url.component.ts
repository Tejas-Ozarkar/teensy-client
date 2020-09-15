import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Url } from '../../models/url-model';
import { UrlService } from '../../services/url.service';

@Component({
  selector: 'app-create-url',
  templateUrl: './create-url.component.html',
  styleUrls: ['./create-url.component.scss']
})
export class CreateUrlComponent implements OnInit {

  public closeBtnName: string;
  public url: Url;
  public isResultReceived: boolean;

  constructor(
    public modalRef: BsModalRef,
    private readonly urlService: UrlService) {
    this.url = new Url();
  }

  ngOnInit() {
  }

  public createUrl() {
    if (this.url.longurl.startsWith('http://') || this.url.longurl.startsWith('https://')) {
      this.urlService.createTinyUrl(this.url)
        .subscribe(resp => {
          this.url = resp;
          this.isResultReceived = true;
        });
    }else{
      console.log('invalid url');
    }

  }

  public onCopyLink(url: string) {
    navigator.clipboard.writeText(url);
  }

}

