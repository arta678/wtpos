// ========== EDIT PRODUK ==========
function editProduk(id) {
  window.location.href = "h_produk_edit.html?id=" + id;
}

// ========== HAPUS PRODUK ==========
async function hapusProduk(id) {
  const yakin = confirm("Yakin ingin menghapus produk ini?");

  if (!yakin) return;

  const { error } = await db
    .from("tb_produk")
    .update({ aktif: false })
    .eq("id_produk", id);

  if (error) {
    alert("Gagal menghapus!");
    console.error(error);
    return;
  }

  alert("Produk berhasil dihapus.");
  loadProduk();
}
