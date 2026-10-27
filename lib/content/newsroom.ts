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
    id: "6",
    slug: "ahenk-tanitimi",
    title: "TRADERS.TR'ın beşinci markası: Ahenk geliştirme sürecinde",
    titleEn: "TRADERS.TR's Fifth Brand: Ahenk Is in Development",
    excerpt:
      "TRADERS.TR, sosyal buluşma alanında OCEAN Big Five kişilik uyumluluğuna dayalı haftalık masa organizasyonu sunan Ahenk'i portföyüne ekledi. Platform aktif geliştirme sürecinde.",
    excerptEn:
      "TRADERS.TR has added Ahenk to its portfolio — a social meeting platform offering weekly table organisation based on OCEAN Big Five personality compatibility. The platform is in active development.",
    content: [
      p(
        "TRADERS.TR, beşinci markasını duyuruyor: Ahenk. Sosyal buluşma alanında çalışan Ahenk, yabancılarla tanışmanın rastlantıya bırakılamayacak kadar önemli olduğu fikrinden yola çıkarak OCEAN (Big Five) kişilik uyumluluğuna dayalı haftalık masa organizasyonu sunan bir platform olarak aktif geliştirme sürecine girdi. Orca Labs, KriptoBeyan, Zesta Art&Design ve Mettlo'nun ardından portföye katılan bu marka, TRADERS.TR'ın teknoloji ile insan deneyimini buluşturma vizyonunun sosyal bağlantı alanındaki en cesur adımı.",
      ),
      h2("Neden bu alan, neden şimdi", "neden-bu-alan"),
      p(
        "Türkiye'de ve dünyada insanlar giderek daha fazla dijital platformda vakit geçiriyor; ancak bu dijital yoğunluğun gerçek hayatta gerçek bağlantılar kurma kapasitesini zayıflattığı görülüyor. Mevcut sosyal buluşma alternatifleri ya tamamen rastlantıya dayalı ya da yüzeysel eşleştirme kriterleriyle çalışıyor — yaş, konum, ilgi alanı listesi. Oysa bilim, insanların birbiriyle gerçekten bağlantı kurabilmesinin temelinde kişilik uyumluluğunun yattığını uzun süredir gösteriyor.",
      ),
      p(
        "Ahenk bu boşluğu doldurmak için kuruldu: kaliteli bir çevre şans değil, seçimdir. Rastgele eşleştirme yerine, bilimsel bir temel üzerine inşa edilmiş algoritmik uyumluluk. Ve her şeyden önemlisi — gerçek hayatta, gerçek mekânlarda, gerçek insanlarla buluşmak.",
      ),
      h2("OCEAN Big Five: bilimi masaya taşımak", "ocean-modeli"),
      p(
        "Ahenk'in eşleştirme altyapısının temelinde OCEAN (Big Five) kişilik modeli yer alıyor. Bu model, kişilik psikolojisindeki en kapsamlı ve en geniş araştırma zeminine sahip çerçevelerden biri; Açıklık (Openness), Özenlilik (Conscientiousness), Dışadönüklük (Extraversion), Uyumluluk (Agreeableness) ve Denge (Emotional Stability) olmak üzere beş boyuttan oluşuyor.",
      ),
      p(
        "Kullanıcılar platforma katıldıklarında kısa ama anlamlı bir kişilik profil testi dolduruyorlar. Bu test bir kez değil, 180 günde bir yenileniyor — çünkü insanlar değişir ve profil bu değişimi yansıtmalı. Algoritma, her hafta bu profilleri karşılaştırarak kullanıcıları birbirleriyle gerçekten uyumlu olma ihtimali en yüksek kişilerle eşleştiriyor; sonra mekan, saat ve rezervasyonu kendisi ayarlıyor.",
      ),
      h2("Üç masa formatı, bir ekosistem", "masa-formatlari"),
      p(
        "Ahenk üç farklı buluşma formatı sunuyor ve her biri farklı bir sosyal ihtiyaca yanıt veriyor:",
      ),
      p(
        "Grup Masası: Uyumlu 6 kişiyi (3 kadın, 3 erkek) bir araya getiren haftalık akşam yemeği. Hiç tanımadığın insanlarla kahve soğurken fark etmediğin o sohbetleri yaratmak için tasarlandı. Algoritma, her katılımcının profil uyumluluğunu diğerleriyle en üst düzeyde tutacak şekilde masayı kuruyor.",
      ),
      p(
        "Baş Başa Masa: Bire bir tanışma formatı. Tek bir kişiyle, gerçek anlamda birebir bir buluşma. Hem yeni bir arkadaşlık hem de derinlikli bir sohbet için uygun bir format.",
      ),
      p(
        "Kankamla Masası: Bir arkadaşınla birlikte katıldığın, karşınıza da benzer bir çiftin oturduğu 4 kişilik masa. Sosyal kaygı düzeyi daha yüksek olan kullanıcılar için — ya da sadece bir arkadaşla yeni insanlarla tanışmak isteyenler için.",
      ),
      quote(
        "Bazı akşamlar takvimde kalır, bazıları hafızanda. Ahenk, hafızada kalanları tasarlıyor.",
      ),
      h2("Organizasyonun tamamı Ahenk'te", "organizasyon"),
      p(
        "Ahenk'i rakiplerinden ayıran en kritik özelliklerden biri, lojistiği tamamen üstlenmesi. Kullanıcının yapması gereken tek şey gitmek. Eşleştirme, mekan seçimi, rezervasyon, hatırlatıcı bildirim, masa kompozisyonu — bunların hepsi Ahenk tarafından haftalık olarak yönetiliyor. Kullanıcı platformda bir paket seçtikten sonra, sisteme güveniyor ve o perşembe gecesi için hazırlanıyor.",
      ),
      p(
        "Mekanlar dikkatli bir kürasyon süreciyle belirleniyor: Sade, Orta ve Premium kategorilerinde, şehrin sosyal atmosferine uygun, ulaşımı kolay, özel alan sağlayan mekânlar. İstanbul'dan başlayarak Ankara, İzmir, Antalya, Muğla, Aydın ve Balıkesir'de her hafta masalar kuruluyor.",
      ),
      h2("Güvenlik ve doğrulama", "guvenlik"),
      p(
        "Sosyal bir platformda en kritik sorulardan biri güven. Ahenk, güveni tasarımın merkezine aldı. Platforma katılmak için WhatsApp OTP ile telefon doğrulaması zorunlu; abonelik için kimlik doğrulama (KYC) süreci işletiliyor. Yani masada karşılaşacağın insanların kimliklerinin doğrulanmış olduğunu biliyorsun.",
      ),
      p(
        "Bunun yanı sıra katılımcılar birbirini masa öncesinde baş harfleriyle (M.A., S.T. gibi) görebiliyor — tam isim yalnızca masa onaylandıktan sonra bildirimle paylaşılıyor. Rehber engelleme sistemi, tanıdığın biriyle aynı masaya düşmeni de önlüyor.",
      ),
      h2("Şu anki durum: aktif geliştirme", "gelistirme-durumu"),
      p(
        "Ahenk, TRADERS.TR bünyesinde aktif geliştirme sürecindedir. Teknik altyapı — NestJS backend, Next.js web ve React Native mobil uygulama — inşa ediliyor; eşleştirme algoritması, ödeme sistemi, bildirim servisleri ve admin paneli dahil olmak üzere tüm modüller çalışıyor durumda. Şu sıralar platform ilk kullanıcılara açılmaya hazırlanıyor.",
      ),
      p(
        "Bu süreçte altyapı kararlılığı, ilk masa deneyimlerinin kalitesi ve kullanıcı geri bildirimi önceliğimiz. Büyüme metrikleri değil, doğru insanların doğru insanlarla buluştuğuna dair ilk kanıtlar peşindeyiz.",
      ),
      h2("TRADERS.TR portföyündeki yeri", "portfoy"),
      p(
        "Ahenk, TRADERS.TR'ın beşinci bağımsız markası. Her marka kendi alanında özerk çalışıyor: Orca Labs finans eğitiminde, KriptoBeyan dijital vergide, Zesta el yapımı ticarette, Mettlo sağlıklı yaşam koçluğunda. Ahenk ise sosyal bağlantı ve buluşma alanında bu ekosisteme katılıyor.",
      ),
      p(
        "Portföydeki her marka, farklı bir sektördeki yapısal boşluğu doldurmak için kuruldu. Ahenk de aynı mantıkla hareket ediyor: teknoloji bir araç, asıl ürün iki insanın gerçek hayatta kurduğu bağlantı.",
      ),
      h2("Sırada ne var", "sirada-ne-var"),
      p(
        "Ahenk'in beta lansman süreci yaklaşıyor. Gelişmeleri ahenk.co adresinden ve bu sayfadan takip edebilirsiniz. Erken kullanıcılar için Öncü programı kapsamında özel avantajlar sunulacak — detaylar yakında.",
      ),
    ],
    contentEn: [
      p(
        "TRADERS.TR is announcing its fifth brand: Ahenk. Operating in the social meeting space, Ahenk has entered active development as a platform offering weekly table organisation based on OCEAN (Big Five) personality compatibility — built on the belief that meeting the right people is too important to leave to chance. Following Orca Labs, KriptoBeyan, Zesta Art&Design, and Mettlo, this brand marks TRADERS.TR's boldest step into the intersection of technology and human experience.",
      ),
      h2("Why this space, why now", "neden-bu-alan"),
      p(
        "People in Turkey and worldwide spend more and more time on digital platforms — yet this digital intensity appears to erode the capacity to form real connections in real life. Existing social meeting alternatives are either entirely random or based on shallow matching criteria: age, location, a list of interests. Yet science has long shown that genuine human connection is grounded in personality compatibility.",
      ),
      p(
        "Ahenk was built to fill this gap: a quality social circle is not luck — it is a choice. Algorithmic compatibility built on scientific foundations rather than random matching. And most importantly — meeting real people in real venues in real life.",
      ),
      h2("OCEAN Big Five: bringing science to the table", "ocean-modeli"),
      p(
        "At the heart of Ahenk's matching infrastructure is the OCEAN (Big Five) personality model — one of the most comprehensive and extensively researched frameworks in personality psychology, comprising five dimensions: Openness, Conscientiousness, Extraversion, Agreeableness, and Emotional Stability (Neuroticism).",
      ),
      p(
        "When users join the platform, they complete a concise but meaningful personality profile test. This test is renewed every 180 days — because people change and the profile should reflect that change. The algorithm compares these profiles each week and matches users with those they have the highest probability of genuinely connecting with, then arranges the venue, time, and reservation itself.",
      ),
      h2("Three table formats, one ecosystem", "masa-formatlari"),
      p(
        "Ahenk offers three different meeting formats, each addressing a distinct social need:",
      ),
      p(
        "Group Table: A weekly dinner bringing together 6 compatible people (3 women, 3 men). Designed to create those conversations where you don't notice your coffee going cold. The algorithm builds the table to maximise profile compatibility across all participants.",
      ),
      p(
        "One-on-One Table: A one-to-one meeting format. A genuinely one-on-one encounter with a single person — suitable for both a new friendship and a deep conversation.",
      ),
      p(
        "Kankamla (With My Friend) Table: A 4-person table where you join with a friend and two similarly-paired people sit across from you. For users with higher social anxiety — or simply those who want to meet new people alongside a friend.",
      ),
      quote(
        "Some evenings stay in your calendar, some stay in your memory. Ahenk designs the ones that stay in your memory.",
      ),
      h2("The entire organisation is handled by Ahenk", "organizasyon"),
      p(
        "One of the most critical features that sets Ahenk apart is that it takes complete responsibility for the logistics. The only thing a user needs to do is show up. Matching, venue selection, reservation, reminder notifications, table composition — all of this is managed weekly by Ahenk. Once a user selects a package on the platform, they trust the system and get ready for Thursday evening.",
      ),
      p(
        "Venues are selected through a careful curation process: Casual, Mid-range, and Premium categories — venues suitable for the city's social atmosphere, easy to reach, offering private space. Starting from Istanbul, tables are set up each week in Ankara, İzmir, Antalya, Muğla, Aydın, and Balıkesir.",
      ),
      h2("Safety and verification", "guvenlik"),
      p(
        "One of the most critical questions in a social platform is trust. Ahenk placed trust at the centre of its design. Joining the platform requires phone verification via WhatsApp OTP; subscribing requires an identity verification (KYC) process. So you know that the people you'll meet at the table have had their identities verified.",
      ),
      p(
        "Additionally, participants can see each other's initials (M.A., S.T. etc.) before the table — full names are only shared via notification after the table is confirmed. A contact blocking system also prevents you from being matched with someone you already know.",
      ),
      h2("Current status: active development", "gelistirme-durumu"),
      p(
        "Ahenk is in active development within TRADERS.TR. The technical infrastructure — NestJS backend, Next.js web, and React Native mobile application — is being built; all modules including the matching algorithm, payment system, notification services, and admin panel are operational. The platform is currently preparing to open to its first users.",
      ),
      p(
        "During this period, infrastructure stability, the quality of the first table experiences, and user feedback are our priorities. We are not chasing growth metrics — we are looking for the first evidence that the right people are meeting the right people.",
      ),
      h2("Its place in the TRADERS.TR portfolio", "portfoy"),
      p(
        "Ahenk is the fifth independent brand in the TRADERS.TR portfolio. Each brand operates autonomously in its own domain: Orca Labs in financial education, KriptoBeyan in digital tax, Zesta in handmade commerce, Mettlo in healthy living coaching. Ahenk joins this ecosystem in the domain of social connection and meetings.",
      ),
      p(
        "Each brand in the portfolio was founded to fill a structural gap in a different sector. Ahenk operates on the same logic: technology is a tool — the real product is the connection two people form in real life.",
      ),
      h2("What's next", "sirada-ne-var"),
      p(
        "Ahenk's beta launch process is approaching. Follow developments at ahenk.co and on this page. Special advantages will be offered to early users under the Pioneer programme — details coming soon.",
      ),
    ],
    category: "Şirket Duyurusu",
    publishedAt: "2026-10-27",
    readTime: "7 dk",
  },
  {
    id: "5",
    slug: "mettlo-tanitimi",
    title: "TRADERS.TR portföyüne yeni markasını ekliyor: Mettlo",
    titleEn: "TRADERS.TR Adds Its New Brand: Mettlo",
    excerpt:
      "TRADERS.TR'ın dördüncü markası Mettlo, sağlıklı yaşam ve koçluk alanında koçlarla üyeleri tek platformda buluşturmak üzere geliştirme aşamasına geçti.",
    excerptEn:
      "TRADERS.TR's fourth brand, Mettlo, focused on healthy living and coaching, has entered development to bring coaches and members together on a single platform.",
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
        "Mettlo, TRADERS.TR'ın Orca Labs (finans eğitimi), KriptoBeyan (dijital vergi) ve Zesta (el yapımı ticaret) markalarının ardından portföye katılan dördüncü bağımsız marka. Her marka kendi alanında bağımsız olarak konumlanıyor; ancak hepsini birleştiren ortak bir yaklaşım var: teknoloji ile insan deneyimini, sektörün gerçek ihtiyaçları etrafında buluşturmak.",
      ),
      h2("Sırada ne var", "sirada-ne-var"),
      p(
        "Mettlo şu anda aktif geliştirme sürecinde. Platforma ilk koçların dahil edilmesi ve beta lansmanının gerçekleştirilmesi planlanıyor. Gelişmeleri mettlo.tr adresinden ve bu sayfadan takip edebilirsiniz.",
      ),
    ],
    contentEn: [
      p(
        "TRADERS.TR is adding its fourth brand to its portfolio: Mettlo. Focused on healthy living and coaching, Mettlo is a platform under development to bring the coach–member experience in the fitness and wellness world to a more professional, personal, and sustainable structure.",
      ),
      h2("Why this space, why now", "neden-bu-alan"),
      p(
        "Personal coaching services in Turkey are a rapidly growing space that has yet to mature in terms of infrastructure. Coaches are often forced to work with fragmented tools, manage their clients across different channels, and generate income through unstable methods. Meanwhile, members struggle to find the right coach, track their progress, and experience a reliable service.",
      ),
      p(
        "Mettlo was built precisely to fill this gap: to provide expert coaches with a professional infrastructure, and to give members a reliable and sustainable coaching experience suited to their needs.",
      ),
      h2("What the platform covers", "platform-kapsami"),
      p(
        "On the coach side, Mettlo includes branch and specialty definition, subscription model, program sales, member tracking, messaging, and revenue management. On the member side, it offers coach discovery and matching, progress tracking, activity and measurement logging, and community and content access.",
      ),
      quote(
        "Coaching is work that truly touches someone's life. Mettlo makes that touch more accessible, more measurable, and more sustainable.",
      ),
      h2("Its place in the TRADERS.TR portfolio", "portfoy"),
      p(
        "Mettlo is the fourth independent brand to join the TRADERS.TR portfolio after Orca Labs (financial education), KriptoBeyan (digital tax), and Zesta (handmade commerce). Each brand is independently positioned in its own domain; but there is a shared approach that connects them all: bringing technology and human experience together around the genuine needs of the industry.",
      ),
      h2("What's next", "sirada-ne-var"),
      p(
        "Mettlo is currently in active development. The plan is to onboard the first coaches to the platform and execute a beta launch. Follow developments at mettlo.tr and on this page.",
      ),
    ],
    category: "Marka Lansmanı",
    publishedAt: "2026-09-25",
    readTime: "4 dk",
  },
  {
    id: "1",
    slug: "traders-yeni-bir-girisim-icin-calismalara-basladi",
    title: "TRADERS.TR yeni bir girişim için çalışmalara başladı",
    titleEn: "TRADERS.TR Has Begun Work on a New Venture",
    excerpt:
      "TRADERS.TR, portföyündeki markalardan bağımsız olarak teknoloji ve ticaretin kesişiminde yeni bir fırsat alanını değerlendirmeye başladı.",
    excerptEn:
      "TRADERS.TR has begun early-stage research and design on a new opportunity area at the intersection of technology and commerce, independent of its existing brands.",
    content: [
      p(
        "TRADERS.TR, mevcut portföyündeki Orca Labs, KriptoBeyan ve Zesta Art&Design markalarından bağımsız olarak, teknoloji ve ticaretin kesişiminde yeni bir fırsat alanı üzerinde erken aşama araştırma ve tasarım çalışmalarına başladığını duyurdu.",
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
    contentEn: [
      p(
        "TRADERS.TR announces that it has begun early-stage research and design work on a new opportunity area at the intersection of technology and commerce, independent of its existing portfolio brands Orca Labs, KriptoBeyan, and Zesta Art&Design.",
      ),
      h2("Why a new venture", "neden-yeni-girisim"),
      p(
        "Each of our current three brands operates in a different sector: financial education, digital tax compliance, and handmade commerce. This diversity has given our team a broad perspective on how different markets operate. Our internal evaluation processes point to a new area that can be built on this accumulated knowledge.",
      ),
      h2("How the process is going", "surec"),
      p(
        "At TRADERS.TR, a new venture doesn't begin with product development — it begins with deeply understanding the problem and the opportunity. We are currently in this early discovery phase, working on market research, potential business model scenarios, and technical feasibility.",
      ),
      quote("Before announcing a venture, we make sure it's truly worth building."),
      h2("What's next", "sirada-ne-var"),
      p(
        "Details will be shared on this page when the venture reaches a more mature stage. Until then, we continue to focus on the development and growth of our existing brands.",
      ),
    ],
    category: "Şirket Duyurusu",
    publishedAt: "2026-09-01",
    readTime: "3 dk",
  },
  {
    id: "2",
    slug: "orca-platformunu-genisletiyor",
    title: "Orca Labs platformunu genişletiyor",
    titleEn: "Orca Labs Expands Its Platform",
    excerpt:
      "Orca Labs, eğitim müfredatına ve piyasa araçları setine önemli yeni eklemeler yaptı — AI destekli mentorluktan gerçek zamanlı piyasa tarayıcılarına kadar.",
    excerptEn:
      "Orca Labs has made significant additions to its educational curriculum and market tools suite — from AI-powered mentorship to real-time market scanners.",
    content: [
      p(
        "Orca Labs, kullanıcılarına sunduğu eğitim içeriğini ve piyasa araçları setini genişletmeye devam ediyor. Bu dönemdeki gelişmeler, platformun iki temel eksenini — yapılandırılmış eğitim ve gerçek zamanlı piyasa pratiği — güçlendirmeye odaklandı.",
      ),
      h2("Genişleyen araç seti", "genisleyen-arac-seti"),
      p(
        "Orca Labs'ın araç paneli; yapay zekâ destekli piyasa tarayıcısı, backtest simülatörü, ileri seviye piyasa simülasyonu ve bir terminal haber-ticaret modülünü bir araya getiriyor. Bunlara ek olarak kripto varlık takvimi, haber duyarlılık analizi, büyük cüzdan hareketlerini izleyen whale tracker ve çok zincirli cüzdan analiz aracı da platforma dahil edildi.",
      ),
      p(
        "BIST100, forex ve kripto piyasalarını tek panelde toplayan genel araçlar da bu genişlemenin bir parçası; kullanıcılar artık farklı sekmeler arasında geçiş yapmadan piyasaları takip edebiliyor.",
      ),
      h2("AI Mentor ve kişiselleştirilmiş öğrenme", "ai-mentor"),
      p(
        "Orca Labs AI Mentor, 7/24 erişilebilir yapay zekâ destekli bir eğitim asistanı olarak, kullanıcıların takıldığı konularda anlık destek sağlıyor. Bu özellik, yapılandırılmış müfredatın (başlangıçtan uzman seviyeye) statik içerik olmaktan çıkıp, her kullanıcının kendi hızına uyum sağlayan dinamik bir deneyime dönüşmesini hedefliyor.",
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
        "Orca Labs ekibi, mevcut araçların kalitesini artırmaya ve kullanıcı geri bildirimlerine göre yeni modüller eklemeye devam ediyor. Platformun uzun vadeli hedefi, finansal eğitimi teoriden pratiğe taşıyan tek bir bütünleşik deneyim sunmak.",
      ),
    ],
    contentEn: [
      p(
        "Orca Labs continues to expand the educational content and market tools suite it offers to users. The developments in this period focused on strengthening the platform's two core axes — structured education and real-time market practice.",
      ),
      h2("An expanding toolkit", "genisleyen-arac-seti"),
      p(
        "Orca Labs' tool panel brings together an AI-powered market scanner, a backtest simulator, advanced market simulation, and a terminal news-trading module. In addition, a crypto asset calendar, news sentiment analysis, a whale tracker monitoring large wallet movements, and a multi-chain wallet analytics tool have been added to the platform.",
      ),
      p(
        "General tools aggregating BIST100, forex, and crypto markets in a single panel are also part of this expansion; users can now track markets without switching between different tabs.",
      ),
      h2("AI Mentor and personalized learning", "ai-mentor"),
      p(
        "The Orca Labs AI Mentor, a 24/7 accessible AI-powered educational assistant, provides instant support to users on topics where they get stuck. This feature aims to transform the structured curriculum (from beginner to expert level) from static content into a dynamic experience that adapts to each user's own pace.",
      ),
      quote("Our goal is not to reduce understanding the markets to a certificate — but to turn it into a measurable, practice-grounded competency."),
      h2("Community and gamification", "topluluk-gamification"),
      p(
        "The platform also hosts a TradingView-style live community experience: users can share their analyses, message each other directly, and join live classes. Points, badges, and streak systems are offered to encourage progress; verifiable certificates are awarded at the end of completed modules.",
      ),
      h2("Crypto ecosystem-specific tools", "kripto-ekosistemi"),
      p(
        "For users interested in crypto assets, an ICO tracking tool, a token unlock calendar, and an airdrop tracking module have been added to the platform. These tools, as an extension of ORCA's 'learn by doing' philosophy, make it possible to interact directly with real market data.",
      ),
      h2("What's next", "orca-sirada-ne-var"),
      p(
        "The Orca Labs team continues to improve the quality of existing tools and add new modules based on user feedback. The platform's long-term goal is to offer a single integrated experience that takes financial education from theory to practice.",
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
    titleEn: "KriptoBeyan Enters a New Phase",
    excerpt:
      "KriptoBeyan, mali müşavirlere yönelik yeni bir profesyonel panel ve DeFi gelir kategorileri desteğini kullanıma sundu.",
    excerptEn:
      "KriptoBeyan has launched a new professional panel for financial advisors and support for DeFi income categories.",
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
    contentEn: [
      p(
        "KriptoBeyan announces it has entered a new phase of making crypto asset declaration processes easier for both individual users and financial advisors. This update was the platform's first comprehensive step targeting the professional user segment.",
      ),
      h2("Financial advisor panel", "musavir-paneli"),
      p(
        "The new advisor panel allows financial advisors to manage the accounts of clients they have invited from a single place. Together with the advisor invitation flow, an advisor can view the crypto asset transactions of multiple clients, verify calculations, and track the declaration process.",
      ),
      h2("Separate categories for DeFi income", "defi-gelirleri"),
      p(
        "A growing portion of users are earning income from DeFi protocols through activities like staking, liquidity provision, and yield farming. KriptoBeyan separated these income types from standard buy-sell transactions and introduced a separate reporting category for each — making the declaration process more accurately reflect the true complexity of transactions.",
      ),
      quote("Tax compliance is achieved not by hiding complexity from users, but by making it understandable."),
      h2("Payment and coupon infrastructure", "odeme-kupon"),
      p(
        "The subscription-based access model now works with coupon code support, enabling corporate partnerships and campaign processes to be managed more flexibly. The payment infrastructure was reviewed to maintain the platform's scalability as transaction volume increases.",
      ),
      h2("Operational improvements", "operasyonel-iyilestirmeler"),
      p(
        "CSV template support was added to accelerate the process of importing user transaction history; the status of large-volume transaction queues can now be monitored more effectively. These changes, while invisible to users, are part of the infrastructure that enables the platform to reliably process thousands of transactions daily.",
      ),
      h2("What's next", "kb-sirada-ne-var"),
      p(
        "The KriptoBeyan team continues to deepen collaboration with the financial advisor ecosystem and further expand DeFi categories.",
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
    titleEn: "Zesta Art&Design Launches Custom Order Marketplace",
    excerpt:
      "Zesta Art&Design, el yapımı ürün tasarımcılarını küratörlü bir başvuru süreciyle alıcılarla buluşturan özel sipariş pazaryeri modelini duyurdu.",
    excerptEn:
      "Zesta Art&Design has announced its custom order marketplace model, connecting handmade product designers with buyers through a curated application process.",
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
    contentEn: [
      p(
        "Zesta Art&Design has launched its new marketplace model where handmade product makers can manage their own shops and buyers can place custom orders. This launch was the first concrete step of Zesta Art&Design's vision of 'meaningful, careful production over mass production.'",
      ),
      h2("A curated designer community", "kuratorlu-topluluk"),
      p(
        "Producers who want to join the platform are evaluated through an application process; approved designers gain access to a dedicated panel where they can manage their own product catalogs. This curated approach aims for Zesta Art&Design to be a community that prioritizes quality and authenticity rather than a mass marketplace.",
      ),
      h2("The custom order model", "ozel-siparis-modeli"),
      p(
        "Most of the products on Zesta are produced on demand, not from stock. This model allows producers to grow without carrying inventory risk, while giving buyers a product experience truly prepared for them.",
      ),
      quote("Behind every product is a name, a process, and a labor of love — Zesta Art&Design aims to make this visible."),
      h2("Transparent earnings tracking for designers", "seffaf-kazanc"),
      p(
        "The designer panel includes real sales statistics and a payout request flow; producers can track their earnings in real time and create payment requests directly from the panel. Requests are processed through an approval workflow.",
      ),
      h2("Buyer experience", "alici-deneyimi"),
      p(
        "On the store side, standard e-commerce flows such as category-based discovery, cart, and order tracking have been redesigned to fit the custom order model. Legal content such as terms of use and privacy text is presented via a 'read and accept' flow integrated into registration and application forms.",
      ),
      h2("What's next", "zesta-sirada-ne-var"),
      p(
        "The Zesta Art&Design team continues to further streamline the designer application process and improve the buyer experience.",
      ),
    ],
    category: "Marka Lansmanı",
    publishedAt: "2026-07-18",
    readTime: "5 dk",
  },
];

export function getNewsroomPostBySlug(slug: string): NewsroomPost | undefined {
  return newsroomPosts.find((p) => p.slug === slug);
}
