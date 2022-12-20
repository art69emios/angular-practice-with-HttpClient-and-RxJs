import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Album } from '../album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit{
    albumData:any[] = []
    constructor(private albumService: AlbumService){}


  ngOnInit(): void {
    this.albumService.getAlbumData().pipe(
      map((dt: any)=>{
        console.log(dt);
        return dt.map((item: any) => new Album(item.id, item.title))
      })
    ).subscribe(list =>{
      this.albumData.push(list)
      console.log(list);
    })
  }

}
