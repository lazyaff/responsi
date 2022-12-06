
<?php
require 'koneksi.php';
$data = [];
$id_note = $_GET['id_note'];
$query = mysqli_query($koneksi, "select * from notes join tags on notes.tag = tags.id_tag where id_note = '$id_note'");
$jumlah = mysqli_num_rows($query);
if ($jumlah == 1) {
	$row = mysqli_fetch_object($query);
	$data = $row;
}

echo json_encode($data);
echo mysqli_error($koneksi);





/* End of file  */

/* Created at 2022-11-22 23:58:23 */
/* Mohammad Irham Akbar CRUD IONIC 6 Angular */
