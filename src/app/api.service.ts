
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient,
    public alert:AlertController
  ) {

  }

  //link API
  apiURL() {
    return 'http://localhost:8012/responsi/api';
  }

  tambah(data: any, endpoint: string) {
    return this.http.post(this.apiURL() + '/' + endpoint, data);
  }

  edit(data: any, endpoint: string) {
    return this.http.put(this.apiURL() + '/' + endpoint, data);
  }

  tampil(endpoint: string): Observable<any> {
    return this.http.get(this.apiURL() + '/' + endpoint);
  }

  kembalikan(id: any, endpoint: string) {
    console.log(id);
    return this.http.get(this.apiURL() + '/' + endpoint + '' + id);
  }

  bayarDenda(id: any, endpoint: string) {
    console.log(id);
    return this.http.get(this.apiURL() + '/' + endpoint + '' + id);
  }

  hapus(id: any, endpoint: string) {
    console.log(id);
    return this.http.delete(this.apiURL() + '/' + endpoint + '' + id);
  }

  lihat(id: any, endpoint: string) {
    return this.http.get(this.apiURL() + '/' + endpoint + '' + id);
  }

  notif(pesan: string) {
    this.alert.create({
      header: 'Notifikasi',
      message: pesan,
      buttons: ['OK'],
    }).then(res => {
      res.present();
    });
  }

}






/* End of file  */

/* Created at 2022-11-22 23:58:34 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */
