import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-show-note',
  templateUrl: './show-note.page.html',
  styleUrls: ['./show-note.page.scss'],
})
export class ShowNotePage implements OnInit {

  id_note: any;
  judul: any;
  isi: any;
  tag: any;
  nama_tag: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
  ) {
    this.route.params.subscribe((param: any) => {
      this.id_note = param.id_note;
      this.ambilNote(this.id_note);
    })
   }

  ngOnInit() {
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

  deleteNote(id: any) {
    this.alertController.create({
      header: 'perhatian',
      subHeader: 'Yakin menghapus data ini?',
      buttons: [
        {
          text: 'Batal',
          handler: (data: any) => {
            console.log('dibatalkan', data);
          }
        },
        {
          text: 'Yakin',
          handler: (data: any) => {
            //jika tekan yakin
            this._apiService.hapus(id, '/hapusNote.php?id_note=').subscribe({
              next: (res: any) => {
                console.log('sukses', res);
                this.router.navigateByUrl('/notes');
              },
              error: (error: any) => {
                this._apiService.notif('gagal');
                console.log(error);
              }
            })
          }
        }
      ]
    }).then(res => {
      res.present();
    })
  }

}
