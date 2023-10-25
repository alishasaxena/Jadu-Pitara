import {
  Injectable, EventEmitter,
  Output
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor() { }

  @Output('onBlogSelection') blogSelected: EventEmitter<any> =
    new EventEmitter<any>();

  shareBlogData(index: number) {
    this.blogSelected.emit(index)
  }
}
