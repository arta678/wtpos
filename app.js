// Dropdown level 1
document.querySelectorAll(".dropdown > a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation(); // jangan biarkan bubble ke dokumen yang lain

    const parent = this.parentElement;
    parent.classList.toggle("show");

    // tutup semua dropdown lain (kecuali parent)
    document.querySelectorAll(".dropdown").forEach(d => {
      if (d !== parent) d.classList.remove("show");
    });
  });
});

// Dropdown level 2 (submenu Harga)
document.querySelectorAll(".dropdown-sub > a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation(); // penting supaya tidak bubble ke parent dan menutup
    const parent = this.parentElement;
    parent.classList.toggle("show");
  });
});

// Klik di mana saja dalam navbar (mis. klik pada item lain) — jangan tutup bila klik di dalam navbar,
// tapi bila klik elemen non-menu yang ingin menutup, kita biarkan handler di atas menangani.
document.addEventListener("click", function (e) {
  if (!e.target.closest(".navbar")) {
    document.querySelectorAll(".dropdown, .dropdown-sub")
      .forEach(d => d.classList.remove("show"));
  }
});

// optional: tutup semua saat resize (mencegah stuck open)
window.addEventListener('resize', () => {
  document.querySelectorAll(".dropdown, .dropdown-sub")
    .forEach(d => d.classList.remove("show"));
});
