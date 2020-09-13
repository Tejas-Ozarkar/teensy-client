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
  closeBtnName: string;
  public url: Url;
 
  constructor(public modalRef: BsModalRef,
    private readonly urlService: UrlService) {
      this.url = new Url();
    }
 
  ngOnInit() {
  }

  public createUrl(){
    this.urlService.createTinyUrl(this.url)
    .subscribe(resp=>{
      console.log(resp)
      this.urlService.getLongUrl(this.url.shorturl).subscribe(resp=>{
        console.log(resp);
      });
    });
    this.modalRef.hide();
    
  }
}

