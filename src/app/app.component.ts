import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  phone_number = '';

  @ViewChild('tar') tar: ElementRef;

  ngAfterViewInit(){

  }

  telInputObject(e){
    console.log(e, 'tel inp e');


  }

  getNumber(e){
    console.log(e, 'get number')
  }

  onCountryChange(e){
    console.log(e, 'onCountryChange')
    console.log(this.tar.nativeElement.placeholder, 'tar');
    // this.tar.nativeElement.placeholder = ''
  }

  hasError(e){
    console.log(e, 'hasError')
  }
}
