let adventurerName = prompt("İsmini yaz!");

let adventurerPower = Math.floor(Math.random() * (10 - 6 + 1)) + 6;

let bandits = "Haydutlar";

let banditPower = Math.floor(Math.random()* 6);

let monster =  "Galdûrûn";

let monsterPower = Math.floor(Math.random() * (14 - 10 + 1)) + 10;

let companion = prompt("Part 3' de sana eslik edecek yoldasinin ismini yaz!");

let companionPower = Math.floor(Math.random() * (8 - 4 + 1)) + 4;



let path1 = prompt("Tüm gün boyunca at sürdüğün için kendini yorgun hissediyorsun. Uzaklarda bir köyden dumanlar çiktigini gördün. Bu senin için dinlenme firsati olabilir. Köye dogru atini sürmek istiyor musun? ")

if (path1 === "evet") {
    console.log("köye dogru ilerlemeye karar verdin. Köye yaklastikca bir seylerin ters gittiğini anliyorsun. Atin huysuzlanmaya basladi. Köye girdiginde harsilastigin manzara korkunc. Yikilmis evler, üst üste yigilmis ceset yiginlari bu köyün ne hale geldiğini sana gösteriyor. Köyün meydaninda asilmis yasli bir adam var. Bu adam köyün lideri olmali. Ölmeden önce iskence görmüs. Vücudunda bicak yaralari var. Bu yaralar canavarlar tarafindan yapilmisa benzemiyor. Köyün icinde canli belirtisi var mi diye inceliyorsun. Köyün arkalarinda bagirisma sesleri duyuyorsun. Silahini yanina alip seslerin oldugu bölgeye gitme karari aldin!")

    path1_2 = prompt("Seslerin geldigi yöne geldiginde bu köyün neden bu hale geldigini anliyorsun. Haydutlar! Haydutlar önünde genc bir kiza saldiriyor. 'Bir tanesi seni farkediyor: Sayimiz fazla. Bela istemiyorsan buradan uzaklas!' Genc kiz yardim istercesine sana bakiyor, ne yapacaksin?`");

    if (path1_2 === "saldir") {
        if (adventurerPower > banditPower) {
                console.log("Son haydutu katlettiginde ölmeden önce sana bakiyor." + `Seni hatirladim, sen ${adventurerName} 'sin. Haydutun göz bebekleri yavas yavas büyürken sen de genc kizin iyi oldugunu düsünüp atina dogru ilerliyorsun. Köyden ayrilip sehre dogru yola cikiyorsun. Umarim yolda yiyecek bulabilirsin`);
        }else if (banditPower >= adventurerPower) {
                console.log("Ne kadar güclü olsan da haydurlarin sayisi karsisinda bir sansin kalmiyor.");
        }else 
            alert("gecersiz hamle");

    } else if (path1_2 === "saldirma") {
        console.log ("Kendini düsünmek zorundasin. Dünya acimasiz. Genc kizi kaderiyle başbaşa birakiyorsun Köyden ayriliyorsun" );
    } else 
        alert("Lütfen gecerli bir hamle yap!")

} else if (path1 === "hayir") {

    console.log("Atini kuzeye ceviriyorsun. Şehre ulasmana az kalmis olabilir. Şu an dinlenmenin sirasi değil!");

    path2_2 = prompt("sehre geldin. Çok aç ve yorgun hissediyorsun. Tam bir han bulmuşken kapida bir adam sana mektup uzatiyor. Mektupta Horadrim kardesliginin seni cagirdigi yaziyor. Biraz dinlenmek mi yoksa Horadrim'in davetini kabul etmek mi istersin? ")
    
    if(path2_2 === "dinlen") {
        console.log("Dinlenmenin iyi bir fikir oldugunu düsünüp en yakin han'a giriyorsun. Sonraki gün icin oyun kaydediliyor :D ");
    }else if (path2_2 === "git") {
        console.log ("Mektupta yazili olan yere gidiyorsun. Seni karsilayan içlerindeki en yasli kişi oluyor." + `hosgeldin ${adventurerName} burada neden oldugunu anlamis olmalisin. Öncelikle kendimi tanitayim. Ben Methem, Horadrim üyelerindenim. Uzun süredir diğer üyelerden bazi seylerin ters gittiği hakkinda rapor aliyoruz. Kücük bir sehrin ansizin kayboldugu bilgisine ulastik. Üyelerimizden iki kisi göndermemize rağmen geri dönmediler. Korktugumuz senaryo basimiza gelmiş olabilir. Gök haritasi felaketi gösteriyor` );
        path3 = prompt ("Senin bizim icin bir ekip üyemiz ile bu kaybolan sehre gitmeni istiyoruz. Bunun karsiliginda cömertce ödüllendirileceksin. Kabul etmezsen ve korktugumuz senaryo basimiza gelirse bu durumdan pismanlik duyacagina eminim. İçindeki merak ve Methem'in bu sözlerinden sonra kaybolmus sehre gitme karari aliyorsun")
        if(path3 === "yola cik") {
            console.log("yola cikmak icin atini ve silahlarini hazirliyorsun, biraz dinlenip horadrim üyesi ile birlikte yola cikiyorsun")
        } else (alert("hikaye ilerlemesi icin tek secenek 'yola cik' "))

        console.log("Şehrin cikisinda genc bir savasci görüyorsun. Sarisin uzun saclari gün batiminda altin renginde parildiyor. Yasi genc olmasina karsin ne kadar bilgiye sahip oldugunu tahmin edebiliyorsun Seni görüyor ve yanina gelip kendini tanitiyor:" +  `Seninle tanismayi sabirsizlikla bekliyordum. Ben ${companion}. Horadrim'in en genc üyesiyim. Dünyada cok garip seyler olmaya basladi. Gidip su sehirde neler oluyor bir bakalim. ` )

        path3_1 = prompt ("Kaybolmus sehre geldiginizde gercekten de sehrin yerinde olmadigini görüyorsun. Sanki tüm sehirdeki binalar yok olmuscasina yerlerinde yoklar. Sanki karanlik burada daha güclü gibi görünüyor. Meşale bile korkudan sönecekmişcesine yaniyor. Ama burada eskiden bir sehrin olduguna dair izler görüyorsun. Cesetler ve burada yasayan halkin yaptigi bir meydan. Ne oldugunu anlamadan karanliktan üstünüze dogru bir yaratik saldiriyor. Son anda yana cekilerek bu atagi savusturuyorsunuz. Karsinda devasa büyüklükte, yarasa ve at karisimi, metrelerce büyüklükte kanatlari olan bir yaratik var! Sen ne olup bittigini anlamaya calisirken" + `${companion} saskinlikla:'Bu olamaz! Galdûrûn!! Bu yaratik sadece eski efsanelerde var. Karanlikla birlikte hepsi yok edilmisti. Bu nasil olur' diyor. Bu esnada yaratik kana susamiscasina tekrar saldiriya geciyor. Çabuk karar vermeniz gerekiyor. Ne yapacaksiniz? `)

        if (path3_1 === "saldir") {
            if ( (adventurerPower + companionPower) >= monsterPower) {
                console.log ("Saatler süren savasin ardindan canavari alt ediyorsunuz. Canavar son bir hamleyle ucmayi basariyor ama agir yaralarla uzaklasmasi imkansiz. Sizin de yaralarinizdan dolayi hareket edecek gücünüz kalmadigi icin Galdûrûn'u takip etmemeye karar veriyorsunuz. Yasadiklarin sana bir rüya gibi geliyor. Cocuk masallarindaki canavarlardan biriyle savastigina inanamiyorsun.")
            } else if ( (adventurerPower + companionPower) < monsterPower ) {
                console.log (`Kiliclariniz ve diger silahlariniz Galdûrûn'e karsi etkisiz kaliyor. Önce ${companion} cansiz sekilde topraga düserken senin icin de niahi son geliyor. Efsanelerde anlatilan karanligin dönüsüne ilk sahitlik edenler oluyorsunuz. Ama bunu anlatacak kadar hayatta kalamiyorsunuz...`)
                alert("Basarisiz oldun! Tekrar Dene!")
            }
        
        } else if (path3_1 === "kac") {
            console.log ("Bu canavari tek basiniza alt etmenin mümkün olmadigini düsünüyorsunuz. Bulabildiginiz kadar savasci toplayip dönmek üzere sehri terk edip geri dönüyorsunuz")
        }
            
    }

} else {
    alert ("Lütfen gecerli bir hamle yap!")
} 


