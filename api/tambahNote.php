<?php
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input,true);

$pesan = [];

$judul=trim($data['judul']);
$isi=trim($data['isi']);
$tag=trim($data['tag']);

if($judul!='' and $isi!='' and $tag!='' ){
$query = mysqli_query($koneksi,"insert into notes(judul, isi, tag) values('$judul','$isi','$tag')");

}

echo json_encode($pesan);
echo mysqli_error($koneksi);




/* End of file  */

/* Created at 2022-11-22 23:58:23 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */
