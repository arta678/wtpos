let SETTING_AKUN = {};
let settingReady = false;

async function loadSettingAkun() {
  const { data, error } = await db
    .from("tb_setting_akun")
    .select("key,kode_akun");

  if (error) {
    alert("Gagal load setting akun");
    return;
  }

  data.forEach(r => {
    SETTING_AKUN[r.key] = r.kode_akun;
  });

  settingReady = true;
}
