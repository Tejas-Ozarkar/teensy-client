import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Url } from '../../models/url-model';
import { UrlService } from '../../services/url.service';
import { SnackbarService } from '../snackbar/snackbar.service';

@Component({
  selector: 'app-create-url',
  templateUrl: './create-url.component.html',
  styleUrls: ['./create-url.component.scss'],
  providers: [DatePipe]
})
export class CreateUrlComponent implements OnInit {

  public closeBtnName: string;
  public url: Url;
  public loader: boolean;
  public isResultReceived: boolean;

  constructor(
    private readonly snackbar: SnackbarService,
    private datePipe: DatePipe,
    public modalRef: BsModalRef,
    private readonly urlService: UrlService) {
    this.url = new Url();
  }

  ngOnInit() {
  }

  public createUrl() {
    if (!this.url.longurl.startsWith('http://') && !this.url.longurl.startsWith('https://')) {
      this.snackbar.show('Invalid url', 'danger');
      return;
    }
    try {
      this.url.expirydate = this.datePipe.transform(this.url.expirydate, 'dd-MMM-yyyy HH:mm:ss');
    } catch (e) {
      this.snackbar.show('Invalid expiry date', 'danger');
      return;
    }
    this.loader = true;
    this.urlService.createTinyUrl(this.url)
      .subscribe(resp => {
        this.loader = false;
        this.url = resp;
        this.isResultReceived = true;
      });
  }


  public onCopyLink(url: string) {
    navigator.clipboard.writeText(url);
    this.snackbar.show('Link copied to clipboard');
  }

}

