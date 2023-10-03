const quotes = [
  {
    id: 1,
    quote:
      'Odağını, dış koşul ve olaylara tepki vermek üzerinden çektiğinde, yeni açılımlara da fırsat vermiş olacaksın...',
    author: 'AUSEY',
  },
  {
    id: 2,
    quote: 'Yaşamdaki en güçlü rehberin kendi gerçekliğindir. Ona sahip çık...',
    author: 'AUSEY',
  },
  {
    id: 3,
    quote: 'Hala zaman gibi eşsiz bir hazinen var. O zaman şimdi başla!..',
    author: 'AUSEY',
  },
  {
    id: 4,
    quote: 'Yaşamını kişiselleştir. Olayları, durumları değil...',
    author: 'AUSEY',
  },
  {
    id: 5,
    quote:
      'Yaşamı ve yaşayanları zerafetle karşılamak insan ruhuna iyi gelir...',
    author: 'AUSEY',
  },
  {
    id: 6,
    quote: 'Yolun süresine değil sürecine odaklan...',
    author: 'AUSEY',
  },
  {
    id: 7,
    quote: 'Kendini keşfetmenin önemli bir yolu hayatı daha çok yaşamaktır...',
    author: 'AUSEY',
  },
  {
    id: 8,
    quote: 'Ego ile idrak ters orantılı gelişir...',
    author: 'AUSEY',
  },
  {
    id: 9,
    quote: 'Ego iyi niyeti bozar...',
    author: 'AUSEY',
  },
  {
    id: 10,
    quote:
      'Kendi gerçekliğini yaratmanın en önemli aracı, güdülerinin üzerindeki özgür iradendir...',
    author: 'AUSEY',
  },
  {
    id: 11,
    quote:
      'Yarın almayı beklediğin bugün alabileceğinden daha büyük olmayabilir...',
    author: 'AUSEY',
  },
];

const randomIndex = Math.floor(Math.random() * quotes.length);

const randomObject = quotes[randomIndex];

document.getElementById('quote-text').textContent = randomObject.quote;
document.getElementById('author').textContent = randomObject.author;
// console.log(randomObject.quote);
