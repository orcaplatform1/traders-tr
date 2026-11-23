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
    titleEn: "The economics of building a digital brand",
    category: "Girişimcilik",
    excerpt:
      "Bağımsız bir dijital markayı büyütmek, geleneksel yatırım mantığından farklı bir sermaye ve zaman disiplini gerektirir.",
    excerptEn:
      "Growing an independent digital brand requires a different discipline of capital and time than traditional investment logic.",
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
    contentEn: [
      p(
        "Building a brand from scratch is usually a slower and more patient process than people expect. What is visible in the first months rarely represents the real value; the real value is the sum of the systems built before users ever see them, the small decisions made along the way and the assumptions tested again and again.",
      ),
      h2("Visible cost, invisible investment", "gorunur-maliyet"),
      p(
        "The cost of launching a brand's first version can usually be budgeted: design, development, hosting, the first marketing spend. But what truly makes a brand a \"brand\" is not that first version; it is the twelve to eighteen months that follow: reshaping the product based on user feedback, building trust, keeping the first customer base satisfied and turning all of this into a repeatable system. The cost of this period does not appear in the budget sheet; it is paid in time, attention and discipline.",
      ),
      p(
        "That is why one of the biggest advantages of working within a multi-brand structure is being able to share this invisible investment. A lesson we learn in one brand's user onboarding can be carried straight into the next brand's first version, without the cost of learning from scratch.",
      ),
      h2("Capital discipline: not speed, but the right speed", "sermaye-disiplini"),
      p(
        "In startup culture, \"grow fast\" is often presented as almost the only right strategy. Yet when a digital brand's growth rate does not match the maturity of its product, growth itself becomes the risk. Every unit of capital spent on aggressive user acquisition at an early stage is an irreversible expense if the product is not yet mature enough to retain those users.",
      ),
      quote(
        "The right speed is set not by the date the available capital runs out, but by the moment the product is truly ready.",
      ),
      p(
        "So when we evaluate a new venture, the first question we ask is not \"how fast can it grow\" but \"how much capital and patience will we have left when it is ready to grow\". The difference between the two often decides whether a brand survives.",
      ),
      h2("How brand value accumulates", "marka-degeri"),
      p(
        "The value of a digital brand accumulates not in its logo, colour palette or advertising budget, but in the recurring, trust-based relationship users build with it. That relationship either strengthens or weakens with every interaction; there is no third option. This is why brand building is the responsibility of every layer of the product, not just the marketing department: the clarity of the pricing page, the response time of the support team, even the way an error message is written all send a signal about the brand.",
      ),
      h2("What long-term thinking looks like in practice", "uzun-vade"),
      p(
        "Teams that think long term focus less on short-term growth metrics and more on the soundness of the structure beneath the brand. This does not mean ignoring growth; on the contrary, it means constantly questioning whether the ground growth is built on is solid. The true measure of economic success is not a brand's size today, but whether it still carries its users' trust five years from now.",
      ),
    ],
    author: "PRIZOMA",
    publishedAt: "2026-08-12",
    readTime: "7 dk",
  },
  {
    id: "2",
    slug: "yapay-zeka-is-operasyonlarini-nasil-degistiriyor",
    title: "Yapay zekâ iş operasyonlarını nerede değiştiriyor",
    titleEn: "Where AI is changing business operations",
    category: "Teknoloji",
    excerpt:
      "Yapay zekânın en büyük etkisi, göz alıcı ürün özelliklerinden çok, arka plandaki operasyonel süreçlerde ortaya çıkıyor.",
    excerptEn:
      "AI's biggest impact shows up less in eye-catching product features and more in the operational processes running in the background.",
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
    contentEn: [
      p(
        "Most discussions about AI focus on the product layer: chat interfaces, recommendation engines, automated content generation. Yet the real transformation is mostly happening in a layer that is hard to see: inside operations, in the speed of decisions, in the quality of data processing and in the disappearance of repetitive work.",
      ),
      h2("Product layer vs. operations layer", "urun-vs-operasyon"),
      p(
        "The \"AI feature\" a user sees is usually the tip of the iceberg. The real gain is hidden in a support request being routed to the right team automatically, a content moderation decision being made in seconds, or large data sets being scanned at a speed the human eye cannot match. This shift lets organisations manage more complex work with small teams, which in turn means new brands can come to life with less capital.",
      ),
      h2("Capacity grows as scale shrinks", "olcek-kapasite"),
      p(
        "The team size needed to manage a given level of operational complexity ten years ago has shrunk considerably today, but that does not mean the work has become simpler. On the contrary, the same team can now track far more variables at once. For startups this is both an opportunity and a new standard: since competitors have access to the same tools, using AI is no longer an advantage but one of the rules of the game.",
      ),
      quote(
        "The real value of AI lies not in replacing people, but in directing people's attention to the decisions that truly matter.",
      ),
      h2("The risk: the hidden cost of automation", "otomasyon-riski"),
      p(
        "Every layer of automation also adds a new layer of fragility. Removing a process from human oversight can let small errors in that process grow unnoticed. That is why operational AI should be designed not with a \"set it and forget it\" mindset, but as systems that are audited regularly and have a feedback loop.",
      ),
      h2("Shared infrastructure across the portfolio", "portfoy-altyapi"),
      p(
        "A structure developing several brands at once has a particular advantage here: the infrastructure, data processing logic and audit discipline built for operational AI in one brand can be carried directly into the next. This lets each new venture reach operational maturity not from scratch, but by building on previous experience.",
      ),
    ],
    author: "PRIZOMA",
    publishedAt: "2026-07-30",
    readTime: "6 dk",
  },
  {
    id: "3",
    slug: "dijital-ticaretin-donusumu",
    title: "Dijital ticaretin dönüşümü",
    titleEn: "The transformation of digital commerce",
    category: "Dijital Ekonomi",
    excerpt:
      "Tüketici davranışı değiştikçe, dijital ticaretin başarı kriterleri de değişiyor — hız ve fiyattan güven ve kişiselleştirmeye.",
    excerptEn:
      "As consumer behaviour changes, so do the criteria for success in digital commerce: from speed and price to trust and personalisation.",
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
    contentEn: [
      p(
        "For a long time, competition in digital commerce was about price and delivery speed. Today consumers care more and more about who a brand is, how it produces and who stands behind the product. This shift is a quiet but lasting transformation that is redefining digital commerce.",
      ),
      h2("The limits of price competition", "fiyat-rekabeti"),
      p(
        "Competing on price is a strategy that requires scale and has low sustainability, especially for small and mid-sized brands. Rather than trying to match the pricing power of large platforms, the real advantage of independent brands lies in the story they can tell, the trust they build and the authenticity they offer.",
      ),
      h2("The return of the custom production model", "ozel-uretim"),
      p(
        "Interestingly, one of the \"oldest\" models of digital commerce, production on demand and to custom order, is gaining value again. In a market standardised by mass production, a product being made truly for you, at your request, has become an important point of differentiation. The model also lets makers grow without carrying inventory risk.",
      ),
      quote(
        "Consumers no longer buy just a product; they also buy the process and the craft behind it.",
      ),
      h2("Trust as a new distribution channel", "guven-kanal"),
      p(
        "In traditional marketing, distribution channels were advertising, search engine rankings and affiliate networks. Today the most powerful distribution channel is trust in the brand itself, because a trusted brand is shared organically by its users. This means that product and service quality, rather than the marketing budget, turns directly into a growth metric.",
      ),
      h2("Personalisation does not conflict with scale", "kisisellestirme"),
      p(
        "For a long time, \"personalisation\" and \"scalability\" were seen as opposing ideas. Today technology makes both possible at once: a brand can have thousands of customers and still treat each one as if they were its only customer. This shift creates a new space of opportunity, especially for businesses built on handcraft and custom production.",
      ),
    ],
    author: "PRIZOMA",
    publishedAt: "2026-07-14",
    readTime: "6 dk",
  },
  {
    id: "4",
    slug: "yeni-nesil-finansal-urunlerde-guven-insa-etmek",
    title: "Yeni nesil finansal ürünlerde güven inşa etmek",
    titleEn: "Building trust in next-generation financial products",
    category: "Piyasalar",
    excerpt:
      "Finans alanında yeni bir ürün lansmanı, teknik yeterlilikten çok kullanıcı güveniyle ölçülür.",
    excerptEn:
      "In finance, a new product launch is measured more by user trust than by technical capability.",
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
    contentEn: [
      p(
        "In financial products, user trust is earned far more slowly than a feature list and lost far more quickly. This asymmetry is a basic fact that should directly shape the design and communication decisions of every team working in finance.",
      ),
      h2("Why finance is a different category", "finans-farkli"),
      p(
        "In other digital products, a bug spoils the user experience; in a financial product, the same bug can directly affect a user's money, future or legal obligations. That is why the \"good enough\" bar for financial products is much higher than in other categories, and that bar has to hold consistently across every layer of the product, from the interface to the calculation logic to the support process.",
      ),
      h2("Transparency is not a feature but a necessity", "seffaflik"),
      p(
        "Explaining clearly how a financial product calculates, which data it collects and why, and how a decision is made is a basic responsibility before it is a competitive advantage. Users do not entrust their financial decisions to a system they do not understand; they trust a system they understand, even a simplified one.",
      ),
      quote(
        "In finance, speed cannot come before trust, because lost trust cannot be won back with any speed advantage.",
      ),
      h2("Seeing regulation as a design input, not a constraint", "duzenleyici-cerceve"),
      p(
        "For teams working in finance, regulatory requirements are often seen as a constraint to be met after the fact. Yet treating these requirements as an input from the very start of product design, rather than adding compliance later, produces both a sturdier product and a brand users trust more.",
      ),
      h2("What long-term teams have in common", "uzun-vadeli-ekipler"),
      p(
        "Teams that think long term put transparency and consistency ahead of growth targets. In the short term this may mean a slower growth curve; but in finance, a brand that grows slowly and soundly lasts far longer than one that grows fast and loses trust.",
      ),
    ],
    author: "PRIZOMA",
    publishedAt: "2026-06-28",
    readTime: "6 dk",
  },
  {
    id: "5",
    slug: "yeni-bir-girisim-lansmanindan-dersler",
    title: "Yeni bir girişim lansmanından dersler",
    titleEn: "Lessons from launching a new venture",
    category: "Girişimcilik",
    excerpt:
      "Her yeni marka lansmanı, önceki varsayımların çoğunu yeniden sorgulamayı gerektiriyor.",
    excerptEn:
      "Every new brand launch requires us to question most of our previous assumptions again.",
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
    contentEn: [
      p(
        "Launching a brand always brings unforeseen surprises, no matter how good the plan looks on paper. The most valuable lessons usually emerge not in the first three months, but after the brand comes into contact with real users.",
      ),
      h2("A plan is an assumption until it meets reality", "plan-varsayim"),
      p(
        "Every plan prepared before a launch is really a collection of untested assumptions: that users will want this, pay that price and come through that channel. The actual launch reveals which of these assumptions were right, usually the hard way. That is why the healthiest approach is to invest not in the plan, but in how quickly and honestly you can challenge it.",
      ),
      h2("Early users are a different audience than planned", "ilk-kullanicilar"),
      p(
        "In almost every launch, the first users to adopt a brand turn out to be different from the audience originally targeted. This is not a failure but a valuable signal: it shows where the market sees a real need. Ignoring that signal and sticking to the original plan often means missing the real opportunity.",
      ),
      quote(
        "A launch is not an end point; it is the brand's first serious conversation with the real world.",
      ),
      h2("The balance between speed and patience", "hiz-sabir"),
      p(
        "After a launch you have to deal with two opposing urges: the urge to change everything quickly based on early feedback, and the urge to stay overly loyal to the original vision. Each is wrong on its own. The right approach is to build a discipline that can tell which feedback is noise and which is a real signal, a discipline that usually matures only after several launches.",
      ),
      h2("Knowledge carried into the next launch", "sonraki-lansman"),
      p(
        "This may be the most concrete benefit of working in a multi-brand structure: lessons learned in one brand's launch, which channel worked, which message resonated, which operational preparation fell short, can be carried directly into the next brand's launch. This lets every new venture start not from scratch, but on top of accumulated experience.",
      ),
    ],
    author: "PRIZOMA",
    publishedAt: "2026-06-05",
    readTime: "6 dk",
  },
  {
    id: "6",
    slug: "teknoloji-ile-degisen-tuketici-davranisi",
    title: "Teknoloji ile değişen tüketici davranışı",
    titleEn: "How technology is changing consumer behaviour",
    category: "Dijital Ekonomi",
    excerpt:
      "Tüketicilerin teknolojiyle kurduğu ilişki değiştikçe, markaların onlarla konuşma biçimi de değişmek zorunda kalıyor.",
    excerptEn:
      "As consumers' relationship with technology changes, the way brands talk to them has to change too.",
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
    contentEn: [
      p(
        "Consumers now expect not just a product from brands, but a consistent experience and understanding. This expectation is not limited to a single channel or touchpoint; it has to be felt with the same clarity everywhere the brand exists.",
      ),
      h2("Patience is falling, expectations are rising", "sabir-esigi"),
      p(
        "Faster digital experiences have permanently lowered consumers' tolerance for waiting. A slow page, a late answer to a question or an unnecessarily complex process now turns into lost users much faster than a few years ago. This forces brands to keep renewing themselves on simplicity and speed.",
      ),
      h2("Think one experience, not many channels", "tek-deneyim"),
      p(
        "For a long time, an \"omnichannel strategy\" was understood as being present on every channel separately. Today consumers do not care which channel they come from; they expect the brand to build a consistent, seamless relationship with them. This calls for a particular design and communication discipline, especially for structures managing several brands at once: each brand keeps its own identity, while the core quality of the user experience stays at the same level across all of them.",
      ),
      quote(
        "Consumers now judge a brand not as a product, but as a recurring relationship.",
      ),
      h2("Access to information has shifted the balance of power", "bilgiye-erisim"),
      p(
        "Today's consumers can access far more information than before making a purchase decision: price comparisons, user reviews, independent assessments. This requires brands to speak with verifiable facts rather than exaggerated claims. The balance of power has shifted towards the informed consumer.",
      ),
      h2("Structures that adapt to change win", "degisime-uyum"),
      p(
        "Given how fast consumer behaviour is changing, building a structure that keeps observing and adapting is far more valuable than setting a fixed, unchanging strategy. That is why we design our brands not as systems closed to change, but as structures that can evolve, without assuming that today's right answer will still be right tomorrow.",
      ),
    ],
    author: "PRIZOMA",
    publishedAt: "2026-05-22",
    readTime: "6 dk",
  },
];

export function getInsightBySlug(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug);
}
