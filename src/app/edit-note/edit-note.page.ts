import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.page.html',
  styleUrls: ['./edit-note.page.scss'],
})
export class EditNotePage implements OnInit {
  id_note: any;
  judul: any;
  isi: any;
  tag: any;
  nama_tag: any;

  page = 0;
  perPage = 10;
  tags: any[] = [];
  lists: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
  ) { 
    this.route.params.subscribe((param: any) => {
      this.id_note = param.id_note;
      console.log(this.id_note);
      this.ambilNote(this.id_note);
    })
  }

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

  ambilNote(id: any) {
    this._apiService.lihat(id, '/lihatNote.php?id_note=').subscribe({
      next: (hasil: any) => {
        console.log('sukses', hasil);
        let note = hasil;
        this.id_note = note.id_note;
        this.judul = note.judul;
        this.isi = note.isi;
        this.tag = note.tag;
        this.nama_tag = note.nama_tag;
      },
      error: (error: any) => {
        console.log(error);
        this._apiService.notif('gagal ambil data');
      }
    })
  }

  editNote(){
    let data = {
      id_note: this.id_note,
      judul: this.judul,
      isi: this.isi,
      tag: this.tag,
    }
    this._apiService.edit(data, '/editNote.php')
      .subscribe({
        next: (hasil: any) => {
          console.log(hasil);
          this.id_note = '';
          this.judul = '';
          this.isi = '';
          this.tag = '';
          this._apiService.notif('berhasil edit Note');
          this.router.navigateByUrl('/notes');
        },
        error: (err: any) => {
          console.log(err);
          console.log(data);
          this._apiService.notif('gagal edit Note');
        }
      })
  }
}
