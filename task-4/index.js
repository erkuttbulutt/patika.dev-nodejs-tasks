const fs = require("fs");

// 1 employees.json dosyası oluşturalım ve içerisine {"name": "Employee 1 Name", "salary": 2000} verisini ekleyelim. (CREATE)
fs.writeFile(
  "employees.json",
  '{"name":"Employee 1 Name", "salary": 2000}',
  "utf8",
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Dosya yazıldı");
    }
  }
);

// 2 Bu veriyi okuyalım. (READ)
fs.readFile("employees.json", "utf8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
    console.log("Dosya okundu");
  }
});

// 3 Bu veriyi güncelleyelim.
fs.appendFile(
  "employees.json",
  '{"name":"Employee 2 Name", "salary": 2000}',
  "utf8",
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Veri eklendi");
    }
  }
);

// 4 Dosyayı silelim.
fs.unlink("employees.json", (err)=>{
    if(err) console.log(err);
    console.log("Dosya silindi")
})
