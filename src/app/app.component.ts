import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit, OnInit {
  phone_number = '';

  @ViewChild('tar') tar: ElementRef;

  masksTemplates = {
    // RU: ['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/],
    UA: ['+', '3', '8', ' ', '(', /[0-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/]
  };

  phone = '';
  mask;

  ngOnInit() {
    this.masksTemplates['RU'] = ['+', '7', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/, /\d/];

    // this.mask = this.masksTemplates['RU'];

  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.parseTel(this.tar.nativeElement.placeholder);
    }, 0)


  }

  telInputObject(e) {
    console.log(e, 'tel inp e');
  }

  getNumber(e) {
    console.log(e, 'get number');
  }

  parseTel(tel) {
    console.log(tel, 'tel');
    let arr = [];
    for (let i = 0; i < tel.length; i++) {

      if (parseInt(tel[i], 10)) {

        arr.push(/\d/);

      } else {
        arr.push(tel[i]);
      }
    }

    console.log(arr, 'arr');

    this.mask = arr;
  }


  private phoneStrip(phone: string) {
    return phone
      .replace('(', '')
      .replace(')', '')
      .replace(new RegExp('-', 'g'), '')
      .replace(new RegExp('_', 'g'), '')
      .replace(new RegExp(' ', 'g'), '');
  }

  onCountryChange(e) {
    this.parseTel(this.tar.nativeElement.placeholder);
    this.phone = '';
  }

  change(phone) {
    console.log(phone, 'phone***');
    console.log(this.phoneStrip(this.phone), 'stripped');
  }

  hasError(e) {
    console.log(e, 'hasError');
  }
}
