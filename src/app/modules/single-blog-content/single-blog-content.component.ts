import { Component, OnDestroy, OnInit } from '@angular/core';
import { exposureVisit } from 'src/app/data/sample.data';
import { AppServiceService } from 'src/app/services/app-service.service';

@Component({
  selector: 'app-single-blog-content',
  templateUrl: './single-blog-content.component.html',
  styleUrls: ['./single-blog-content.component.css']
})
export class SingleBlogContentComponent implements OnInit, OnDestroy {
  constructor(public _as: AppServiceService,) { }
  exp = this._as.selectedCardBlogData;
  currentIdx = 0;
  blogData: any[] = []
  ngOnInit() {

    this._as.blogSelected.subscribe((data: { content: any, index: number }) => {
      const { content, index } = data
      console.log(content, index, data, "index")
      this.currentIdx = index
      this.blogData = content

      this.exp = this.blogData[this.currentIdx]

      localStorage.setItem('blogData', JSON.stringify(this.blogData));

    })


    this._as.onPrevNextClick.subscribe((eventType: string) => {
      if (eventType == 'next') {
        this.nextClickHandler()
      } else {
        this.prevClickHandler()
      }
    })

     const storedBlogData = localStorage.getItem('blogData');
      if (storedBlogData) {
        this.blogData = JSON.parse(storedBlogData);
        this.exp = this.blogData[this.currentIdx];
      }
  }

  prevClickHandler() {
    if (this.currentIdx > 0) {
      this.currentIdx -= 1

      this.exp = this.blogData[this.currentIdx]
    }
  }

  nextClickHandler() {
    if (this.currentIdx < this.blogData.length - 1) {
      this.currentIdx += 1
      this.exp = this.blogData[this.currentIdx]
    }
  }



  ngOnDestroy() {
    // this._as.blogSelected.unsubscribe()
  }


}
