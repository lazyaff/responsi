import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {

  page = 0;
  perPage = 10;
  notes: any[] = [];
  lists: any[] = [];
  constructor(
    public _apiService: ApiService,
    private router: Router,
    private alertController: AlertController,
  ) {

  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    console.log('jika selesai loading');
    this.page = 0;
    this.perPage = 10;
    this.getNotes();
  }

  paginateArray() {
    this.page++;
    return this.notes.filter(
      x => x.urutan_list > (this.page * this.perPage - this.perPage) && x.urutan_list <= (this.page * this.perPage)
    );
  }

  getNotes() {
    this._apiService.tampil('tampilNotes.php').subscribe({
      next: (res: any) => {
        console.log('sukses', res);
        this.notes = res;
        this.lists = this.paginateArray();
      },
      error: (err:any) => {
        console.log(err);
      },
    })
  }

  doRefresh(event:any) {
    console.log('Mulai Refresh Konten');
    setTimeout(() => {
      console.log('Selesai Refresh Konten');
      event.target.complete();
      this.page = 0;
      this.perPage = 10;
      this.getNotes();
    }, 2000);
  }

  loadMore(event:any) {
    console.log(event);
    setTimeout(() => {
      const array = this.paginateArray();
      console.log('new data: ', array);
      this.lists = this.lists.concat(array);
      console.log('list data: ', this.lists);
      event.target.complete();
      if (array?.length < this.perPage) {
        event.target.disabled = true;
      };
    }, 1000);
  }
}
