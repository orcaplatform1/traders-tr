import type { ContentBlock, NewsroomPost } from "./types";

function p(text: string): ContentBlock {
  return { type: "p", text };
}
function h2(text: string, id: string): ContentBlock {
  return { type: "h2", text, id };
}
function quote(text: string): ContentBlock {
  return { type: "quote", text };
}

export const newsroomPosts: NewsroomPost[] = [
  {
    id: "1",
    slug: "traders-yeni-bir-girisim-icin-calismalara-basladi",
    title: "TRADERS.TR yeni bir girişim için çalışmalara başladı",
    excerpt:
      "TRADERS.TR, portföyündeki markalardan bağımsız olarak teknoloji ve ticaretin kesişiminde yeni bir fırsat alanını değerlendirmeye başladı.",
    content: [
      p(
        "TRADERS.TR, mevcut portföyündeki Orca Akademi, KriptoBeyan ve Zesta Art&Design markalarından bağımsız olarak, teknoloji ve ticaretin kesişiminde yeni bir fırsat alanı üzerinde erken aşama araştırma ve tasarım çalışmalarına başladığını duyurdu.",
      ),
      h2("Neden yeni bir girişim", "neden-yeni-girisim"),
      p(
        "Mevcut üç markamızın her biri farklı bir sektörde faaliyet gösteriyor: finans eğitimi, dijital vergi uyumu ve el yapımı ticaret. Bu çeşitlilik, ekibimize farklı pazarların nasıl çalıştığına dair geniş bir bakış açısı kazandırdı. Şirket içindeki değerlendirme süreçlerimiz, bu birikimin üzerine inşa edilebilecek yeni bir alanı işaret ediyor.",
      ),
      h2("Süreç nasıl ilerliyor", "surec"),
      p(
        "TRADERS.TR'da yeni bir girişim, doğrudan ürün geliştirmeyle değil; problemi ve fırsatı derinlemesine anlamakla başlar. Şu anda bu erken keşif aşamasındayız — pazar araştırması, olası iş modeli senaryoları ve teknik fizibilite üzerinde çalışıyoruz.",
      ),
      quote("Bir girişimi duyurmadan önce, onun gerçekten inşa edilmeye değer olduğundan emin oluyoruz."),
      h2("Sırada ne var", "sirada-ne-var"),
      p(
        "Detaylar, girişim daha olgun bir aşamaya geldiğinde bu sayfadan paylaşılacak. O zamana kadar, mevcut markalarımızın gelişimine ve büyümesine odaklanmaya devam ediyoruz.",
      ),
    ],
    category: "Şirket Duyurusu",
    publishedAt: "2026-09-01",
    readTime: "3 dk",
  },
  {
    id: "2",
    slug: "orca-platformunu-genisletiyor",
    title: "Orca Akademi platformunu genişletiyor",
    excerpt:
      "Orca Akademi, eğitim müfredatına ve piyasa araçları setine önemli yeni eklemeler yaptı — AI destekli mentorluktan gerçek zamanlı piyasa tarayıcılarına kadar.",
    content: [
      p(
        "Orca Akademi, kullanıcılarına sunduğu eğitim içeriğini ve piyasa araçları setini genişletmeye devam ediyor. Bu dönemdeki gelişmeler, platformun iki temel eksenini — yapılandırılmış eğitim ve gerçek zamanlı piyasa pratiği — güçlendirmeye odaklandı.",
      ),
      h2("Genişleyen araç seti", "genisleyen-arac-seti"),
      p(
        "Orca Akademi'nin araç paneli; yapay zekâ destekli piyasa tarayıcısı, backtest simülatörü, ileri seviye piyasa simülasyonu ve bir terminal haber-ticaret modülünü bir araya getiriyor. Bunlara ek olarak kripto varlık takvimi, haber duyarlılık analizi, büyük cüzdan hareketlerini izleyen whale tracker ve çok zincirli cüzdan analiz aracı da platforma dahil edildi.",
      ),
      p(
        "BIST100, forex ve kripto piyasalarını tek panelde toplayan genel araçlar da bu genişlemenin bir parçası; kullanıcılar artık farklı sekmeler arasında geçiş yapmadan piyasaları takip edebiliyor.",
      ),
      h2("AI Mentor ve kişiselleştirilmiş öğrenme", "ai-mentor"),
      p(
        "Orca Akademi AI Mentor, 7/24 erişilebilir yapay zekâ destekli bir eğitim asistanı olarak, kullanıcıların takıldığı konularda anlık destek sağlıyor. Bu özellik, yapılandırılmış müfredatın (başlangıçtan uzman seviyeye) statik içerik olmaktan çıkıp, her kullanıcının kendi hızına uyum sağlayan dinamik bir deneyime dönüşmesini hedefliyor.",
      ),
      quote("Amacımız, piyasaları anlamayı bir sertifikadan ibaret bırakmamak; ölçülebilir, pratiğe dökülmüş bir yetkinliğe dönüştürmek."),
      h2("Topluluk ve gamification", "topluluk-gamification"),
      p(
        "Platform, TradingView tarzı bir canlı topluluk deneyimini de barındırıyor: kullanıcılar analizlerini paylaşabiliyor, birbirleriyle doğrudan mesajlaşabiliyor ve canlı derslere katılabiliyor. İlerlemeyi teşvik etmek için puan, rozet ve seri (streak) sistemleri; tamamlanan modüllerin sonunda ise doğrulanabilir sertifikalar sunuluyor.",
      ),
      h2("Kripto ekosistemine özel araçlar", "kripto-ekosistemi"),
      p(
        "Kripto varlıklarla ilgilenen kullanıcılar için ICO takip aracı, token kilidi açılma (unlock) takvimi ve airdrop takip modülü platforma eklendi. Bu araçlar, ORCA'nın \"öğrenirken uygulama\" felsefesinin bir uzantısı olarak, gerçek piyasa verisiyle doğrudan etkileşim kurmayı mümkün kılıyor.",
      ),
      h2("Sırada ne var", "orca-sirada-ne-var"),
      p(
        "Orca Akademi ekibi, mevcut araçların kalitesini artırmaya ve kullanıcı geri bildirimlerine göre yeni modüller eklemeye devam ediyor. Platformun uzun vadeli hedefi, finansal eğitimi teoriden pratiğe taşıyan tek bir bütünleşik deneyim sunmak.",
      ),
    ],
    category: "Ürün Duyurusu",
    publishedAt: "2026-08-20",
    readTime: "5 dk",
  },
  {
    id: "3",
    slug: "kriptobeyan-yeni-bir-faza-giriyor",
    title: "KriptoBeyan yeni bir faza giriyor",
    excerpt:
      "KriptoBeyan, mali müşavirlere yönelik yeni bir profesyonel panel ve DeFi gelir kategorileri desteğini kullanıma sundu.",
    content: [
      p(
        "KriptoBeyan, kripto varlık beyan süreçlerini hem bireysel kullanıcılar hem de mali müşavirler için kolaylaştıran yeni bir aşamaya geçtiğini duyurdu. Bu güncelleme, platformun profesyonel kullanıcı segmentine yönelik ilk kapsamlı adımı oldu.",
      ),
      h2("Mali müşavir paneli", "musavir-paneli"),
      p(
        "Yeni müşavir paneli, mali müşavirlerin kendilerine davet ettikleri müvekkillerin hesaplarını tek bir yerden yönetebilmesini sağlıyor. Müşavir daveti akışıyla birlikte, bir müşavir birden fazla müvekkilin kripto varlık işlemlerini görüntüleyebiliyor, hesaplamaları doğrulayabiliyor ve beyan sürecini takip edebiliyor.",
      ),
      h2("DeFi gelirleri için ayrı kategoriler", "defi-gelirleri"),
      p(
        "Kullanıcıların artan bir kısmı, DeFi protokolleri üzerinden stake, likidite sağlama ve verim çiftçiliği (yield farming) gibi işlemlerden gelir elde ediyor. KriptoBeyan, bu gelir türlerini standart alım-satım işlemlerinden ayrıştırarak, her biri için ayrı bir raporlama kategorisi sundu — böylece beyan süreci gerçek işlem karmaşıklığını daha doğru yansıtıyor.",
      ),
      quote("Vergi uyumu, karmaşıklığı kullanıcıdan gizlemekle değil; onu anlaşılır hale getirmekle sağlanır."),
      h2("Ödeme ve kupon altyapısı", "odeme-kupon"),
      p(
        "Abonelik tabanlı erişim modeli, artık kupon kodu desteğiyle birlikte çalışıyor; bu sayede kurumsal ortaklıklar ve kampanya süreçleri daha esnek şekilde yönetilebiliyor. Ödeme altyapısı, işlem hacmi arttıkça platformun ölçeklenebilirliğini korumak üzere yeniden gözden geçirildi.",
      ),
      h2("Operasyonel iyileştirmeler", "operasyonel-iyilestirmeler"),
      p(
        "Kullanıcı işlem geçmişini içe aktarma sürecini hızlandırmak için CSV şablon desteği eklendi; büyük hacimli işlem kuyruklarının durumu artık daha iyi izlenebiliyor. Bu değişiklikler, kullanıcıya görünmese de, platformun günlük binlerce işlemi güvenilir şekilde işlemesini sağlayan altyapının bir parçası.",
      ),
      h2("Sırada ne var", "kb-sirada-ne-var"),
      p(
        "KriptoBeyan ekibi, mali müşavir ekosistemiyle iş birliğini derinleştirmeye ve DeFi kategorilerini daha da genişletmeye devam ediyor.",
      ),
    ],
    category: "Ürün Duyurusu",
    publishedAt: "2026-08-05",
    readTime: "5 dk",
  },
  {
    id: "4",
    slug: "zesta-ozel-siparis-pazaryerini-baslatti",
    title: "Zesta Art&Design özel sipariş pazaryerini başlattı",
    excerpt:
      "Zesta Art&Design, el yapımı ürün tasarımcılarını küratörlü bir başvuru süreciyle alıcılarla buluşturan özel sipariş pazaryeri modelini duyurdu.",
    content: [
      p(
        "Zesta Art&Design, el yapımı ürün üreticilerinin kendi mağazalarını yönetebildiği, alıcıların özel sipariş verebildiği yeni pazaryeri modelini kullanıma açtı. Bu lansman, Zesta Art&Design'ın 'kitlesel üretim yerine anlamlı, özenli üretim' vizyonunun somut ilk adımı oldu.",
      ),
      h2("Küratörlü tasarımcı topluluğu", "kuratorlu-topluluk"),
      p(
        "Platforma katılmak isteyen üreticiler bir başvuru süreci üzerinden değerlendiriliyor; onaylanan tasarımcılar kendi ürün kataloglarını yönetebildikleri özel bir panele erişim kazanıyor. Bu küratörlü yaklaşım, Zesta Art&Design'ın kitlesel bir pazaryerinden çok, kalite ve özgünlüğü önceliklendiren bir topluluk olmasını hedefliyor.",
      ),
      h2("Özel sipariş modeli", "ozel-siparis-modeli"),
      p(
        "Zesta'daki ürünlerin büyük kısmı stoktan değil, talep üzerine üretiliyor. Bu model, üreticilere stok riski taşımadan büyüme imkânı tanırken, alıcılara da gerçekten kendileri için hazırlanmış bir ürün deneyimi sunuyor.",
      ),
      quote("Her ürünün arkasında bir isim, bir süreç ve bir emek var — Zesta Art&Design bunu görünür kılmayı hedefliyor."),
      h2("Tasarımcılar için şeffaf kazanç takibi", "seffaf-kazanc"),
      p(
        "Tasarımcı paneli, gerçek satış istatistiklerini ve ödeme (payout) talep akışını içeriyor; bu sayede üreticiler kazançlarını anlık olarak takip edebiliyor ve ödeme taleplerini doğrudan panel üzerinden oluşturabiliyor. Talepler bir onay sürecinden geçerek işleme alınıyor.",
      ),
      h2("Alıcı deneyimi", "alici-deneyimi"),
      p(
        "Mağaza tarafında; kategori bazlı keşif, sepet ve sipariş takibi gibi standart e-ticaret akışları, özel sipariş modeline uyacak şekilde yeniden tasarlandı. Kullanım koşulları ve gizlilik metinleri gibi yasal içerikler, kayıt ve başvuru formlarına entegre \"okuyarak onaylama\" akışıyla sunuluyor.",
      ),
      h2("Sırada ne var", "zesta-sirada-ne-var"),
      p(
        "Zesta Art&Design ekibi, tasarımcı başvuru sürecini daha da kolaylaştırmaya ve alıcı deneyimini geliştirmeye devam ediyor.",
      ),
    ],
    category: "Marka Lansmanı",
    publishedAt: "2026-07-18",
    readTime: "5 dk",
  },
  {
    id: "4",
    slug: "mettlo-tanitimi",
    title: "TRADERS.TR portföyüne yeni markasını ekliyor: Mettlo",
    excerpt:
      "TRADERS.TR'ın dördüncü markası Mettlo, sağlıklı yaşam ve koçluk alanında koçlarla üyeleri tek platformda buluşturmak üzere geliştirme aşamasına geçti.",
    content: [
      p(
        "TRADERS.TR, portföyüne dördüncü markasını ekliyor: Mettlo. Sağlıklı yaşam ve koçluk alanına odaklanan Mettlo, fitness ve wellness dünyasındaki koç–üye deneyimini daha profesyonel, kişisel ve sürdürülebilir bir yapıya taşımak amacıyla geliştirilmekte olan bir platform.",
      ),
      h2("Neden bu alan, neden şimdi", "neden-bu-alan"),
      p(
        "Türkiye'de kişisel koçluk hizmetleri hızla büyüyen, ancak altyapı açısından henüz olgunlaşmamış bir alan. Koçlar çoğunlukla dağınık araçlarla çalışmak, müşterilerini farklı kanallar üzerinden yönetmek ve gelirlerini istikrarsız yöntemlerle elde etmek zorunda kalıyor. Öte yandan üyeler de kendilerine uygun koçu bulmakta, ilerleme süreçlerini takip etmekte ve güvenilir bir deneyim yaşamakta güçlük çekiyor.",
      ),
      p(
        "Mettlo, tam olarak bu boşluğu doldurmak için kuruldu. Uzman koçlara profesyonel bir altyapı sunmak; üyelere ise ihtiyaçlarına uygun, güvenilir ve sürdürülebilir bir koçluk deneyimi sağlamak.",
      ),
      h2("Platform neyi kapsıyor", "platform-kapsami"),
      p(
        "Mettlo'nun koç tarafında; branş ve uzmanlık alanı tanımı, abonelik modeli, program satışı, üye takibi, mesajlaşma ve gelir yönetimi yer alıyor. Üye tarafında ise koç keşfi ve eşleştirme, ilerleme takibi, aktivite ve ölçüm günlüğü, topluluk ve içerik erişimi sunuluyor.",
      ),
      quote(
        "Koçluk, birinin hayatına gerçekten dokunan bir iş. Mettlo, bu dokunuşun daha erişilebilir, daha ölçülebilir ve daha sürdürülebilir olmasını sağlıyor.",
      ),
      h2("TRADERS.TR portföyündeki yeri", "portfoy"),
      p(
        "Mettlo, TRADERS.TR'ın ORCA (finans eğitimi), KriptoBeyan (dijital vergi) ve Zesta (el yapımı ticaret) markalarının ardından portföye katılan dördüncü bağımsız marka. Her marka kendi alanında bağımsız olarak konumlanıyor; ancak hepsini birleştiren ortak bir yaklaşım var: teknoloji ile insan deneyimini, sektörün gerçek ihtiyaçları etrafında buluşturmak.",
      ),
      h2("Sırada ne var", "sirada-ne-var"),
      p(
        "Mettlo şu anda aktif geliştirme sürecinde. Platforma ilk koçların dahil edilmesi ve beta lansmanının gerçekleştirilmesi planlanıyor. Gelişmeleri mettlo.tr adresinden ve bu sayfadan takip edebilirsiniz.",
      ),
    ],
    category: "Marka Lansmanı",
    publishedAt: "2026-09-25",
    readTime: "4 dk",
  },
];

export function getNewsroomPostBySlug(slug: string): NewsroomPost | undefined {
  return newsroomPosts.find((p) => p.slug === slug);
}
