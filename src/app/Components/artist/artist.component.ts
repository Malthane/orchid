import { Component, OnInit } from '@angular/core';
import { ListService } from 'src/app/Services/list.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {
  roy: any

  constructor(private listData: ListService) { }

  ngOnInit(): void {
    this.productList()
  }

  productList() {
    this.listData.listData().subscribe((res) => {
      this.roy = res
      console.log(this.roy)
    })
  }
}
