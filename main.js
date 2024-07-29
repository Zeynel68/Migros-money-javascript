let mesaj =
`
Migros'a Hoşgeldiniz.
Money kartınız varsa lütfen "Tamam"'a
yoksa "İptal"a basınız.

`  

const urunler = [
    {
        urunIsmi: "Süt",
        fiyat: 15
    },
    {
        urunIsmi: "Bebek Bezi",
        fiyat: 100
    },
    {
        urunIsmi: "Kuşbaşı",
        fiyat: 220
    }
]


yeniSatir= "\r\n";
let sonuc = confirm(mesaj);
let odenecekTutar;

if (sonuc){
    let isim = prompt("Adınızı giriniz:");
    let soyIsim = prompt("Soyisminizi giriniz:")
   
    const musteri = new Musteri(isim,soyIsim,sonuc,urunler)
    odenecekTutar = musteri.hesapla();

alert(
    "Müşteri Bilgileri: " + " " + isim + "" + soyIsim + yeniSatir
   + "Ödenecek Tutar:" + " " + odenecekTutar
)

}else{
    const musteri = new Musteri(null,null,sonuc,urunler);
    odenecekTutar = musteri.hesapla();
    alert("Ödenecek Tutar :" + " " + odenecekTutar)
}