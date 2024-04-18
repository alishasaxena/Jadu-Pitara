import { Component } from '@angular/core';
import domToImage from 'dom-to-image';
import jsPDF from 'jspdf';
// import moment from 'moment';
import { OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public dataToExport!: ElementRef;
 pdfName: any;

  public downloadAsPdf(): void {
    debugger
    if (!this.dataToExport) {
      return; 
    }

    const width = this.dataToExport.nativeElement.clientWidth;
    const height = this.dataToExport.nativeElement.clientHeight + 40;
    let orientation = '';
    let imageUnit = 'pt';
    if (width > height) {
      orientation = 'l';
    } else {
      orientation = 'p';
    }
    domToImage
      .toPng(this.dataToExport.nativeElement, {
        width: width,
        height: height
      })
      .then(result  => {
        let jsPdfOptions: any = {
          orientation: orientation,
          unit: imageUnit,
          format: [width + 50, height + 220]
        };
        const pdf = new jsPDF(jsPdfOptions);
        pdf.setFontSize(48);
        pdf.setTextColor('#2585fe');
        pdf.text(this.pdfName.value ? this.pdfName.value.toUpperCase() : 'Untitled dashboard'.toUpperCase(), 25, 75);
        pdf.setFontSize(24);
        pdf.setTextColor('#131523');
        // pdf.text('Report date: ' + moment().format('ll'), 25, 115);
        pdf.addImage(result, 'PNG', 25, 185, width, height);
        pdf.save('file_name' + '.pdf');
      })
      .catch(error => {
        console.error('Error generating PDF:', error);
      });
  }

}
