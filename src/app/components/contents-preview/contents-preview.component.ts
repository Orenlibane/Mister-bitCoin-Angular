import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-contents-preview',
  templateUrl: './contents-preview.component.html',
  styleUrls: ['./contents-preview.component.scss']
})
export class ContentsPreviewComponent implements OnInit {
  @Input() contact: any = null;

  constructor() {}

  ngOnInit() {}
}
