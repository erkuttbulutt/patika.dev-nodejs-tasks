// Ödev 1
// Node.JS Komut Satırı Kullanımı
// Hepimizin Matematik derslerinden bildiği üzere Dairenin Alanı = π x r2 şeklinde hesaplanır. Node.JS Javascript çalışma ortamında yarıçap değerini konsoldan parametre olarak girerek alanı bulmaya çalışacağız. Konsol çıktısı: Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olmalıdır.

let value = process.argv.slice(2);

const odev1 = (r) => {
  console.log(`Yarıçapı ${r} olan dairenin alanı: ${Math.PI * r * r}.`);
};

odev1(value);