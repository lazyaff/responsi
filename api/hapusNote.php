<?php
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input, true);
$pesan = [];
$id_note = $_GET['id_note'];
$query = mysqli_query($koneksi, "delete from notes where id_note='$id_note'");

if ($query) {
	http_response_code(201);
	$pesan['status'] = 'sukses';
} else {
	http_response_code(422);
	$pesan['status'] = 'gagal';
}

echo json_encode($pesan);
echo mysqli_error($koneksi);




/* End of file  */

/* Created at 2022-11-22 23:58:23 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */