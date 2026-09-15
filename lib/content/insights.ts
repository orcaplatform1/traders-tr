import type { ContentBlock, Insight } from "./types";

function p(text: string): ContentBlock {
  return { type: "p", text };
}
function h2(text: string, id: string): ContentBlock {
  return { type: "h2", text, id };
}
function quote(text: string): ContentBlock {
  return { type: "quote", text };
}

export const insights: Insight[] = [
  {
    id: "1",
    slug: "dijital-marka-insa-etmenin-ekonomisi",
    title: "Dijital marka inşa etmenin ekonomisi",
    category: "Girişimcilik",
    excerpt:
      "Bağımsız bir dijital markayı büyütmek, geleneksel yatırım mantığından farklı bir sermaye ve zaman disiplini gerektirir.",
    content: [
      p(
        "Bir markayı sıfırdan inşa etmek, çoğu zaman sanıldığından daha yavaş ve daha sabır isteyen bir süreçtir. İlk aylarda görünür olan şey nadiren asıl değeri temsil eder; asıl değer, kullanıcı görmeden önce kurulan sistemlerin, alınan küçük kararların ve tekrar tekrar test edilen varsayımların toplamıdır.",
      ),
      h2("Görünür maliyet, görünmez yatırım", "gorunur-maliyet"),
      p(
        "Bir markanın ilk sürümünü piyasaya sürmenin maliyeti genellikle bütçelenebilir: tasarım, geliştirme, barındırma, ilk pazarlama harcaması. Ancak bir markayı gerçekten \"marka\" yapan şey bu ilk sürüm değil, ondan sonraki on iki-on sekiz aydır — kullanıcı geri bildirimine göre ürünü yeniden şekillendirmek, güven inşa etmek, ilk müşteri tabanını memnun etmek ve bunu tekrarlanabilir bir sisteme dönüştürmek. Bu dönemin maliyeti bütçe tablosunda görünmez; zaman, dikkat ve disiplin olarak ödenir.",
      ),
      p(
        "Bu yüzden çok markalı bir yapıda çalışmanın en büyük avantajlarından biri, bu görünmez yatırımı paylaşabilmektir. Bir markanın kullanıcı onboarding sürecinde öğrendiğimiz bir ders, bir sonraki markanın ilk sürümüne doğrudan taşınabilir — sıfırdan öğrenme maliyeti olmadan.",
      ),
      h2("Sermaye disiplini: hız değil, doğru hız", "sermaye-disiplini"),
      p(
        "Girişimcilik kültüründe \"hızlı büyü\" neredeyse tek doğru strateji gibi anlatılır. Oysa dijital bir markanın büyüme hızı, ürünün olgunluk seviyesiyle uyumlu olmadığında, büyüme bizzat riskin kendisi hâline gelir. Erken aşamada agresif kullanıcı kazanımına harcanan her birim sermaye, ürün henüz o kullanıcıları elde tutacak olgunlukta değilse, geri dönüşü olmayan bir harcamadır.",
      ),
      quote(
        "Doğru hız, mevcut sermayenin sona ereceği tarihe göre değil; ürünün gerçekten hazır olduğu ana göre belirlenir.",
      ),
      p(
        "Bu nedenle yeni bir girişimi değerlendirirken önce sorduğumuz soru \"ne kadar hızlı büyüyebilir\" değil, \"büyümeye hazır olduğunda elimizde ne kadar sermaye ve sabır kalmış olacak\" sorusudur. İkisi arasındaki fark, çoğu zaman bir markanın hayatta kalıp kalmayacağını belirler.",
      ),
      h2("Marka değeri nasıl birikir", "marka-degeri"),
      p(
        "Dijital bir markanın değeri; logosunda, renk paletinde ya da reklam bütçesinde değil, kullanıcıların o markayla kurduğu tekrar eden, güvene dayalı ilişkide birikir. Bu ilişki her etkileşimde ya güçlenir ya da zayıflar — üçüncü bir seçenek yoktur. Bu yüzden marka inşası, pazarlama departmanının değil, ürünün her katmanının sorumluluğundadır: fiyatlandırma sayfasının netliği, destek ekibinin yanıt süresi, hatta bir hata mesajının nasıl yazıldığı bile markaya dair bir sinyal taşır.",
      ),
      h2("Uzun vadeli bakışın somut karşılığı", "uzun-vade"),
      p(
        "Uzun vadeli düşünen ekipler, kısa vadeli büyüme metriklerinden çok, markanın altında yatan yapının sağlamlığına odaklanır. Bu, büyümeyi görmezden gelmek anlamına gelmez; tam tersine, büyümenin üzerine inşa edildiği zeminin sağlam olup olmadığını sürekli sorgulamak anlamına gelir. Bir markanın bugünkü büyüklüğü değil, beş yıl sonra hâlâ kullanıcılarının güvenini taşıyıp taşımadığı, asıl ekonomik başarının ölçüsüdür.",
      ),
    ],
    author: "TRADERS.TR",
    publishedAt: "2026-08-12",
    readTime: "7 dk",
  },
  {
    id: "2",
    slug: "yapay-zeka-is-operasyonlarini-nasil-degistiriyor",
    title: "Yapay zekâ iş operasyonlarını nerede değiştiriyor",
    category: "Teknoloji",
    excerpt:
      "Yapay zekânın en büyük etkisi, göz alıcı ürün özelliklerinden çok, arka plandaki operasyonel süreçlerde ortaya çıkıyor.",
    content: [
      p(
        "Yapay zekâ etrafındaki tartışmaların çoğu ürün katmanına odaklanıyor: sohbet arayüzleri, öneri motorları, otomatik içerik üretimi. Oysa asıl dönüşüm, çoğunlukla görünmeyen bir katmanda — operasyonların içinde, karar hızında, veri işleme kalitesinde ve tekrarlayan işlerin ortadan kalkmasında yaşanıyor.",
      ),
      h2("Ürün katmanı vs. operasyon katmanı", "urun-vs-operasyon"),
      p(
        "Bir kullanıcının gördüğü \"yapay zekâ özelliği\" genellikle buzdağının görünen ucudur. Asıl büyük kazanım, bir destek talebinin doğru ekibe otomatik yönlendirilmesinde, bir içerik moderasyon kararının saniyeler içinde alınmasında ya da büyük veri kümelerinin insan gözünün fark edemeyeceği hızda taranmasında gizlidir. Bu değişim, kurumların küçük ekiplerle daha karmaşık işleri yönetebilmesini sağlıyor; bu da yeni markaların daha az sermayeyle hayata geçebilmesi anlamına geliyor.",
      ),
      h2("Ölçek küçülürken kapasite büyüyor", "olcek-kapasite"),
      p(
        "On yıl önce belirli bir operasyonel karmaşıklığı yönetmek için gereken ekip büyüklüğü, bugün önemli ölçüde küçüldü — ama bu, işlerin daha basit hâle geldiği anlamına gelmiyor. Tam tersine, aynı ekip artık çok daha fazla değişkeni aynı anda takip edebiliyor. Bu, girişimler için hem bir fırsat hem de yeni bir standart demek: rakiplerin de aynı araçlara erişimi olduğu için, yapay zekâyı kullanmak artık bir avantaj değil, oyunun kurallarından biri.",
      ),
      quote(
        "Yapay zekânın gerçek değeri, insanların yerini almasında değil; insanların dikkatini gerçekten önemli olan kararlara yönlendirmesinde ortaya çıkıyor.",
      ),
      h2("Risk: otomasyonun görünmez maliyeti", "otomasyon-riski"),
      p(
        "Her otomasyon katmanı, aynı zamanda yeni bir kırılganlık katmanı ekler. Bir sürecin insan gözetiminden çıkması, o süreçte oluşabilecek küçük hataların fark edilmeden büyümesine yol açabilir. Bu yüzden operasyonel yapay zekâ uygulamalarını, \"otomatikleştir ve unut\" mantığıyla değil, düzenli olarak denetlenen, geri bildirim döngüsü olan sistemler olarak tasarlamak gerekiyor.",
      ),
      h2("Portföy genelinde ortak altyapı", "portfoy-altyapi"),
      p(
        "Birden fazla markayı aynı anda geliştiren bir yapının burada özel bir avantajı var: bir markada operasyonel yapay zekâ için kurulan altyapı, veri işleme mantığı ve denetim disiplini, doğrudan bir sonraki markaya taşınabiliyor. Bu, her yeni girişimin operasyonel olgunluğa sıfırdan değil, önceki deneyimin üzerine kurularak ulaşmasını sağlıyor.",
      ),
    ],
    author: "TRADERS.TR",
    publishedAt: "2026-07-30",
    readTime: "6 dk",
  },
  {
    id: "3",
    slug: "dijital-ticaretin-donusumu",
    title: "Dijital ticaretin dönüşümü",
    category: "Dijital Ekonomi",
    excerpt:
      "Tüketici davranışı değiştikçe, dijital ticaretin başarı kriterleri de değişiyor — hız ve fiyattan güven ve kişiselleştirmeye.",
    content: [
      p(
        "Dijital ticarette rekabet uzun süre fiyat ve teslimat hızı üzerinden yürüdü. Bugün tüketiciler, markanın kim olduğuna, nasıl ürettiğine ve o ürünün arkasında kimin durduğuna giderek daha fazla önem veriyor. Bu değişim, dijital ticareti yeniden tanımlayan sessiz ama kalıcı bir dönüşüm.",
      ),
      h2("Fiyat rekabetinin sınırları", "fiyat-rekabeti"),
      p(
        "Fiyat üzerinden rekabet etmek, ölçek gerektiren ve sürdürülebilirliği düşük bir stratejidir — özellikle küçük ve orta ölçekli markalar için. Büyük platformların fiyat gücüyle rekabet etmeye çalışmak yerine, bağımsız markaların asıl avantajı; anlatabildikleri hikâyede, kurdukları güvende ve sundukları özgünlükte yatıyor.",
      ),
      h2("Özel üretim modelinin geri dönüşü", "ozel-uretim"),
      p(
        "İlginç bir şekilde, dijital ticaretin en \"eski\" modellerinden biri — talep üzerine, özel sipariş üzerine üretim — yeniden değer kazanıyor. Kitlesel üretimin standartlaştırdığı bir pazarda, bir ürünün gerçekten sizin için, sizin talebinizle üretilmiş olması, önemli bir farklılaşma noktası hâline geldi. Bu model, üreticiye de stok riski taşımadan büyüme imkânı tanıyor.",
      ),
      quote(
        "Tüketiciler artık sadece bir ürün değil, o ürünün arkasındaki süreci ve emeği de satın alıyor.",
      ),
      h2("Güven, yeni bir dağıtım kanalı", "guven-kanal"),
      p(
        "Geleneksel pazarlamada dağıtım kanalları; reklam, arama motoru sıralaması ve ortaklık ağlarıydı. Bugün en güçlü dağıtım kanalı, markaya duyulan güvenin kendisidir — çünkü güvenilen bir marka, kullanıcılar tarafından organik olarak paylaşılır. Bu da pazarlama bütçesinin değil, ürün ve hizmet kalitesinin doğrudan büyüme metriğine dönüştüğü anlamına geliyor.",
      ),
      h2("Kişiselleştirme, ölçekle çelişmiyor", "kisisellestirme"),
      p(
        "Uzun süre \"kişiselleştirme\" ile \"ölçeklenebilirlik\" birbirine karşıt kavramlar gibi görüldü. Bugün teknoloji, bu ikisini bir arada mümkün kılıyor: bir markanın binlerce müşterisi olabilir ve yine de her birine, sanki tek müşterisiymiş gibi davranabilir. Bu değişim, özellikle el emeği ve özel üretim modellerine dayanan işletmeler için yeni bir fırsat alanı yaratıyor.",
      ),
    ],
    author: "TRADERS.TR",
    publishedAt: "2026-07-14",
    readTime: "6 dk",
  },
  {
    id: "4",
    slug: "yeni-nesil-finansal-urunlerde-guven-insa-etmek",
    title: "Yeni nesil finansal ürünlerde güven inşa etmek",
    category: "Piyasalar",
    excerpt:
      "Finans alanında yeni bir ürün lansmanı, teknik yeterlilikten çok kullanıcı güveniyle ölçülür.",
    content: [
      p(
        "Finansal ürünlerde kullanıcı güveni, özellik listesinden çok daha yavaş kazanılır ve çok daha hızlı kaybedilir. Bu asimetri, finans alanında çalışan her ekibin tasarım ve iletişim kararlarını doğrudan şekillendirmesi gereken temel bir gerçek.",
      ),
      h2("Neden finans farklı bir kategori", "finans-farkli"),
      p(
        "Diğer dijital ürünlerde bir hata, kullanıcı deneyimini bozar; finansal bir üründe aynı hata, kullanıcının parasını, geleceğini ya da yasal yükümlülüğünü doğrudan etkileyebilir. Bu yüzden finans alanındaki ürünler için \"yeterince iyi\" standardı, diğer kategorilere göre çok daha yüksektir — ve bu standart, ürünün her katmanında (arayüzden, hesaplama mantığına, destek sürecine kadar) tutarlı olmalıdır.",
      ),
      h2("Şeffaflık, bir özellik değil bir zorunluluk", "seffaflik"),
      p(
        "Bir finansal ürünün nasıl hesap yaptığını, hangi verileri neden topladığını ve bir kararın nasıl alındığını açıkça anlatması, rekabet avantajından önce temel bir sorumluluktur. Kullanıcılar, anlamadıkları bir sisteme parasal kararlarını emanet etmez; anladıkları ama basitleştirilmiş bir sisteme güvenirler.",
      ),
      quote(
        "Finansta hız, güvenden önce gelemez — çünkü kaybedilen güven, hiçbir hız avantajıyla geri kazanılamaz.",
      ),
      h2("Düzenleyici çerçeveyi bir kısıt değil, tasarım girdisi olarak görmek", "duzenleyici-cerceve"),
      p(
        "Finans alanında çalışan ekipler için düzenleyici gereklilikler genellikle sonradan uyulması gereken bir kısıt olarak görülür. Oysa bu gereklilikleri ürün tasarımının en başından itibaren bir girdi olarak ele almak — uyumu sonradan eklemek yerine — hem daha sağlam bir ürün hem de kullanıcı nezdinde daha güvenilir bir marka ortaya çıkarır.",
      ),
      h2("Uzun vadeli düşünen ekiplerin ortak özelliği", "uzun-vadeli-ekipler"),
      p(
        "Uzun vadeli düşünen ekipler, büyüme hedeflerinden önce şeffaflığı ve tutarlılığı önceliklendirir. Bu, kısa vadede daha yavaş bir büyüme eğrisi anlamına gelebilir; ama finans alanında yavaş ve sağlam büyüyen bir marka, hızlı büyüyüp güven kaybeden bir markadan çok daha uzun ömürlü olur.",
      ),
    ],
    author: "TRADERS.TR",
    publishedAt: "2026-06-28",
    readTime: "6 dk",
  },
  {
    id: "5",
    slug: "yeni-bir-girisim-lansmanindan-dersler",
    title: "Yeni bir girişim lansmanından dersler",
    category: "Girişimcilik",
    excerpt:
      "Her yeni marka lansmanı, önceki varsayımların çoğunu yeniden sorgulamayı gerektiriyor.",
    content: [
      p(
        "Bir markayı piyasaya sürmek, planın kâğıt üzerinde ne kadar iyi göründüğünden bağımsız olarak, her zaman öngörülemeyen sürprizler barındırır. En değerli dersler genellikle ilk üç ayda değil, markanın gerçek kullanıcılarla temas ettiği andan sonra ortaya çıkar.",
      ),
      h2("Plan, gerçekle karşılaşana kadar bir varsayımdır", "plan-varsayim"),
      p(
        "Lansman öncesi hazırlanan her plan, aslında bir dizi test edilmemiş varsayımın bir araya gelmesidir: kullanıcıların şunu isteyeceği, şu fiyatı ödeyeceği, şu kanaldan geleceği varsayılır. Gerçek lansman, bu varsayımların hangisinin doğru olduğunu — genellikle acı bir şekilde — ortaya koyar. Bu yüzden en sağlıklı yaklaşım, plana değil, plana ne kadar hızlı ve dürüst şekilde itiraz edebileceğinize yatırım yapmaktır.",
      ),
      h2("İlk kullanıcılar, planlanandan farklı bir kitledir", "ilk-kullanicilar"),
      p(
        "Hemen her lansmanda, markayı ilk benimseyen kullanıcı kitlesi, başlangıçta hedeflenen kitleden farklı çıkar. Bu bir başarısızlık değil, değerli bir sinyaldir: pazarın nerede gerçek bir ihtiyaç gördüğünü gösterir. Bu sinyali görmezden gelip orijinal plana sadık kalmak, çoğu zaman gerçek fırsatı kaçırmak anlamına gelir.",
      ),
      quote(
        "Lansman, bir son nokta değil; markanın gerçek dünyayla ilk ciddi diyaloğudur.",
      ),
      h2("Hız ile sabır arasındaki denge", "hiz-sabir"),
      p(
        "Lansman sonrası dönemde iki karşıt dürtü ile baş etmek gerekir: erken geri bildirime göre her şeyi hızla değiştirme dürtüsü ve orijinal vizyona aşırı sadık kalma dürtüsü. İkisi de tek başına yanlıştır. Doğru yaklaşım, hangi geri bildirimin gürültü, hangisinin gerçek bir sinyal olduğunu ayırt edebilecek bir disiplin kurmaktır — ki bu disiplin, genellikle birden fazla lansman deneyiminden sonra olgunlaşır.",
      ),
      h2("Bir sonraki lansmana taşınan bilgi", "sonraki-lansman"),
      p(
        "Çok markalı bir yapıda çalışmanın belki de en somut faydası budur: bir markanın lansmanında öğrenilen dersler — hangi kanalın işe yaradığı, hangi mesajın yankı bulduğu, hangi operasyonel hazırlığın eksik kaldığı — bir sonraki markanın lansman sürecine doğrudan aktarılabilir. Bu, her yeni girişimin sıfırdan değil, birikmiş bir deneyimin üzerine başlamasını sağlar.",
      ),
    ],
    author: "TRADERS.TR",
    publishedAt: "2026-06-05",
    readTime: "6 dk",
  },
  {
    id: "6",
    slug: "teknoloji-ile-degisen-tuketici-davranisi",
    title: "Teknoloji ile değişen tüketici davranışı",
    category: "Dijital Ekonomi",
    excerpt:
      "Tüketicilerin teknolojiyle kurduğu ilişki değiştikçe, markaların onlarla konuşma biçimi de değişmek zorunda kalıyor.",
    content: [
      p(
        "Tüketiciler artık markalardan yalnızca ürün değil, tutarlı bir deneyim ve anlayış bekliyor. Bu beklenti, tek bir kanal veya tek bir temas noktasıyla sınırlı değil; markanın var olduğu her yerde aynı netlikte hissedilmesi gerekiyor.",
      ),
      h2("Sabır eşiği düşüyor, beklenti yükseliyor", "sabir-esigi"),
      p(
        "Dijital deneyimlerin hızlanması, tüketicilerin bekleme toleransını da geri dönüşü olmayan biçimde düşürdü. Bir sayfanın geç açılması, bir sorunun geç yanıtlanması ya da bir sürecin gereksiz yere karmaşık olması, birkaç yıl öncesine göre çok daha hızlı bir şekilde kullanıcı kaybına dönüşüyor. Bu, markaların sadelik ve hız konusunda sürekli kendini yenilemesini zorunlu kılıyor.",
      ),
      h2("Çok kanallı değil, tek deneyimli düşünmek", "tek-deneyim"),
      p(
        "Uzun süre \"çok kanallı strateji\" hedefi, her kanalda ayrı ayrı var olmak olarak anlaşıldı. Bugün tüketici, hangi kanaldan geldiğini önemsemiyor; markanın kendisiyle tutarlı, kesintisiz bir ilişki kurmasını bekliyor. Bu, özellikle birden fazla markayı aynı anda yöneten yapılar için önemli bir tasarım ve iletişim disiplini gerektiriyor: her marka kendi kimliğini korurken, kullanıcı deneyiminin temel kalitesi hepsinde aynı seviyede olmalı.",
      ),
      quote(
        "Tüketici artık markayı bir ürün olarak değil, tekrar eden bir ilişki olarak değerlendiriyor.",
      ),
      h2("Bilgiye erişim, güç dengesini değiştirdi", "bilgiye-erisim"),
      p(
        "Bugünün tüketicisi, bir satın alma kararı vermeden önce eskisinden çok daha fazla bilgiye erişebiliyor — fiyat karşılaştırması, kullanıcı yorumları, bağımsız incelemeler. Bu, markalar için abartılı iddialarla değil, doğrulanabilir gerçeklerle konuşmayı zorunlu kılıyor. Güç dengesi, bilgiye erişimi olan tüketiciye doğru kaymış durumda.",
      ),
      h2("Değişime uyum sağlayan yapılar kazanıyor", "degisime-uyum"),
      p(
        "Tüketici davranışındaki bu değişim hızı göz önüne alındığında, sabit ve değişmez bir strateji kurmak yerine, sürekli gözlemleyen ve uyum sağlayabilen bir yapı kurmak çok daha değerli. Bu nedenle markalarımızı değişime kapalı sistemler olarak değil, gelişebilen yapılar olarak tasarlıyoruz — bugünün doğru cevabının yarın da doğru kalacağını varsaymadan.",
      ),
    ],
    author: "TRADERS.TR",
    publishedAt: "2026-05-22",
    readTime: "6 dk",
  },
];

export function getInsightBySlug(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug);
}
