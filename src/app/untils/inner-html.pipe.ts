import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'innerHtml'
})
export class InnerHtmlPipe implements PipeTransform {
  constructor(private sanitizer:DomSanitizer){}

  transform(style: string="") {
    return this.sanitizer.bypassSecurityTrustHtml(style);
  }

}
