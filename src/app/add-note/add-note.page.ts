import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.page.html',
  styleUrls: ['./add-note.page.scss'],
})
export class AddNotePage implements OnInit {

  judul: any;
  isi: any;
  tag: any;

  page = 0;
  perPage = 10;
  tags: any[] = [];
  lists: any[] = [];

  constructor(
    private router: Router,
    public _apiService: ApiService,
  ) { }

  ngOnInit() {
  }


  ionViewDidEnter() {
    console.log('jika selesai loading');
    this.page = 0;
    this.perPage = 10;
    this.getTags();
  }

  paginateArray() {
    this.page++;
    return this.tags.filter(
      x => x.urutan_list > (this.page * this.perPage - this.perPage) && x.urutan_list <= (this.page * this.perPage)
    );
  }

  getTags() {
    this._apiService.tampil('tampilTags.php').subscribe({
      next: (res: any) => {
        console.log('sukses', res);
        this.tags = res;
        this.lists = this.paginateArray();
      },
      error: (err:any) => {
        console.log(err);
      },
    })
  }

  addNote() {
    let data = {
      judul: this.judul,
      isi: this.isi,
      tag: this.tag,
    }
    this._apiService.tambah(data, 'tambahNote.php')
      .subscribe({
        next: (hasil: any) => {
          console.log(hasil);
          this.judul = '';
          this.isi = '';
          this.tag = '';
          this._apiService.notif('Catatan baru ditambahkan!');
          this.router.navigateByUrl('/notes');
        },
        error: (err: any) => {
          console.log(err);
          this._apiService.notif('gagal input catatan');
        }
      })
  }

}
