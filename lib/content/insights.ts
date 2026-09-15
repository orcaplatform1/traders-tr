import type { Insight } from "./types";

export const insights: Insight[] = [
  {
    id: "1",
    slug: "dijital-marka-insa-etmenin-ekonomisi",
    title: "Dijital marka inşa etmenin ekonomisi",
    category: "Girişimcilik",
    excerpt:
      "Bağımsız bir dijital markayı büyütmek, geleneksel yatırım mantığından farklı bir sermaye ve zaman disiplini gerektirir.",
    content: [
      "Bir markayı sıfırdan inşa etmek, çoğu zaman sanıldığından daha yavaş ve daha sabır isteyen bir süreçtir. İlk aylarda görünür olan şey nadiren asıl değeri temsil eder.",
      "Gerçek ilerleme genellikle sessizdir: doğru sistemlerin kurulması, doğru insanların bir araya gelmesi ve ürünün pazarla uyumunun kademeli olarak netleşmesi.",
      "Uzun vadeli düşünen ekipler, kısa vadeli büyüme metriklerinden çok, markanın altında yatan yapının sağlamlığına odaklanır.",
    ],
    author: "TRADERS",
    publishedAt: "2026-08-12",
    readTime: "4 dk",
  },
  {
    id: "2",
    slug: "yapay-zeka-is-operasyonlarini-nasil-degistiriyor",
    title: "Yapay zekâ iş operasyonlarını nerede değiştiriyor",
    category: "Teknoloji",
    excerpt:
      "Yapay zekânın en büyük etkisi, göz alıcı ürün özelliklerinden çok, arka plandaki operasyonel süreçlerde ortaya çıkıyor.",
    content: [
      "Yapay zekâ etrafındaki tartışmaların çoğu ürün katmanına odaklanıyor. Oysa asıl dönüşüm, operasyonların içinde — karar hızında, veri işleme kalitesinde ve tekrarlayan işlerin ortadan kalkmasında yaşanıyor.",
      "Bu değişim, kurumların küçük ekiplerle daha karmaşık işleri yönetebilmesini sağlıyor; bu da yeni markaların daha az sermayeyle hayata geçebilmesi anlamına geliyor.",
    ],
    author: "TRADERS",
    publishedAt: "2026-07-30",
    readTime: "5 dk",
  },
  {
    id: "3",
    slug: "dijital-ticaretin-donusumu",
    title: "Dijital ticaretin dönüşümü",
    category: "Dijital Ekonomi",
    excerpt:
      "Tüketici davranışı değiştikçe, dijital ticaretin başarı kriterleri de değişiyor — hız ve fiyattan güven ve kişiselleştirmeye.",
    content: [
      "Dijital ticarette rekabet uzun süre fiyat ve teslimat hızı üzerinden yürüdü. Bugün tüketiciler, markanın kim olduğuna ve nasıl ürettiğine giderek daha fazla önem veriyor.",
      "Bu değişim, özellikle el emeği ve özel üretim modellerine dayanan işletmeler için yeni bir fırsat alanı yaratıyor.",
    ],
    author: "TRADERS",
    publishedAt: "2026-07-14",
    readTime: "3 dk",
  },
  {
    id: "4",
    slug: "yeni-nesil-finansal-urunlerde-guven-insa-etmek",
    title: "Yeni nesil finansal ürünlerde güven inşa etmek",
    category: "Piyasalar",
    excerpt:
      "Finans alanında yeni bir ürün lansmanı, teknik yeterlilikten çok kullanıcı güveniyle ölçülür.",
    content: [
      "Finansal ürünlerde kullanıcı güveni, özellik listesinden çok daha yavaş kazanılır ve çok daha hızlı kaybedilir.",
      "Uzun vadeli düşünen ekipler, büyüme hedeflerinden önce şeffaflığı ve tutarlılığı önceliklendirir.",
    ],
    author: "TRADERS",
    publishedAt: "2026-06-28",
    readTime: "4 dk",
  },
  {
    id: "5",
    slug: "yeni-bir-girisim-lansmanindan-dersler",
    title: "Yeni bir girişim lansmanından dersler",
    category: "Girişimcilik",
    excerpt:
      "Her yeni marka lansmanı, önceki varsayımların çoğunu yeniden sorgulamayı gerektiriyor.",
    content: [
      "Bir markayı piyasaya sürmek, planın kâğıt üzerinde ne kadar iyi göründüğünden bağımsız olarak, her zaman öngörülemeyen sürprizler barındırır.",
      "En değerli dersler genellikle ilk üç ayda değil, markanın gerçek kullanıcılarla temas ettiği andan sonra ortaya çıkar.",
    ],
    author: "TRADERS",
    publishedAt: "2026-06-05",
    readTime: "3 dk",
  },
  {
    id: "6",
    slug: "teknoloji-ile-degisen-tuketici-davranisi",
    title: "Teknoloji ile değişen tüketici davranışı",
    category: "Dijital Ekonomi",
    excerpt:
      "Tüketicilerin teknolojiyle kurduğu ilişki değiştikçe, markaların onlarla konuşma biçimi de değişmek zorunda kalıyor.",
    content: [
      "Tüketiciler artık markalardan yalnızca ürün değil, tutarlı bir deneyim ve anlayış bekliyor.",
      "Bu, özellikle birden fazla markayı aynı anda yöneten şirketler için önemli bir tasarım ve iletişim disiplini gerektiriyor.",
    ],
    author: "TRADERS",
    publishedAt: "2026-05-22",
    readTime: "4 dk",
  },
];

export function getInsightBySlug(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug);
}
