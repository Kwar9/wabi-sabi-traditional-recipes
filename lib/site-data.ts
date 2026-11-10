export const brand = {
  name: "WABI SABI TRADITIONAL RECIPES",
  email: "recipes@wabisabifoods.com",
  phoneDisplay: "+233 59 304 0586",
  phoneDigits: "233593040586",
  instagram: "https://instagram.com/wabisabi_foods",
  facebook: "https://facebook.com/wabisabifoods",
  whatsapp:
    "https://wa.me/233593040586?text=Hello%20Wabisabi%20Traditional%20Recipes%2C%20I%27d%20love%20to%20know%20more.",
};

export const dishes = [
  {
    title: "Fufu & Light Soup",
    image:
      "https://res.cloudinary.com/jbbzejqi/image/upload/v1794268977/IMG_8958.jpg",
    alt: "Fufu served with traditional Ghanaian light soup",
    note: "A Ghanaian classic, prepared with care.",
  },
  {
    title: "Konkonte & Groundnut Soup",
    image:
      "https://res.cloudinary.com/jbbzejqi/image/upload/v1794268977/IMG_8952.jpg",
    alt: "Konkonte served with rich Ghanaian groundnut soup",
    note: "Deep, comforting flavour and heritage.",
  },
  {
    title: "Fufu & Ɛbunuɛbunu Soup",
    image:
      "https://res.cloudinary.com/jbbzejqi/image/upload/v1794268978/IMG_8948.jpg",
    alt: "Fufu paired with traditional Ghanaian Ɛbunuɛbunu soup",
    note: "A celebration of local ingredients.",
  },
  {
    title: "Pot of Ɛbunuɛbunu",
    image:
      "https://res.cloudinary.com/jbbzejqi/image/upload/v1794268978/IMG_8949.jpg",
    alt: "A pot of traditional Ghanaian Ɛbunuɛbunu soup",
    note: "Slow-cooked, generous and full of character.",
  },
  {
    title: "Gobɛ",
    image:
      "https://res.cloudinary.com/jbbzejqi/image/upload/v1794268978/IMG_8951.jpg",
    alt: "Gobɛ, a traditional Ghanaian beans and gari dish",
    note: "Everyday Ghanaian food, beautifully familiar.",
  },
  {
    title: "Gobɛ Alternative",
    image:
      "https://res.cloudinary.com/jbbzejqi/image/upload/v1794268979/IMG_8950.jpg",
    alt: "An alternative serving of the traditional Ghanaian Gobɛ dish",
    note: "A familiar favourite with another point of view.",
  },
  {
    title: "Okro Soup with Palm Oil",
    image:
      "https://res.cloudinary.com/jbbzejqi/image/upload/v1794268979/IMG_8953.jpg",
    alt: "Traditional Ghanaian okro soup prepared with palm oil",
    note: "A rich expression of regional cooking.",
  },
  {
    title: "Oilless Okro Soup",
    image:
      "https://res.cloudinary.com/jbbzejqi/image/upload/v1794268979/IMG_8986.jpg",
    alt: "Traditional Ghanaian oilless okro soup",
    note: "A lighter take on a much-loved staple.",
  },
  {
    title: "Angwamo & Grilled Fish",
    image:
      "https://res.cloudinary.com/jbbzejqi/image/upload/v1794268980/IMG_8954.jpg",
    alt: "Ghanaian angwamo served with grilled fish",
    note: "Simple ingredients, memorable flavour.",
  },
  {
    title: "Ɔmotuo & Groundnut Soup",
    image:
      "https://res.cloudinary.com/jbbzejqi/image/upload/v1794268980/IMG_8976.jpg",
    alt: "Ghanaian Ɔmotuo rice balls served with groundnut soup",
    note: "A Sunday-table favourite with a story.",
  },
  {
    title: "Banku & Oilless Okro",
    image:
      "https://res.cloudinary.com/jbbzejqi/image/upload/v1794268981/IMG_8985.jpg",
    alt: "Banku served with traditional oilless okro soup",
    note: "A beloved pairing from Ghana's food culture.",
  },
];

const campImageIds = [
  ["1794268981", "IMG_8977"],
  ["1794268982", "IMG_8978"],
  ["1794268983", "IMG_8979"],
  ["1794268983", "IMG_8963"],
  ["1794268984", "IMG_8967"],
  ["1794268985", "IMG_8961"],
  ["1794268986", "IMG_8983"],
  ["1794268986", "IMG_8982"],
  ["1794268986", "IMG_8965"],
  ["1794268987", "IMG_8966"],
  ["1794268988", "IMG_8990"],
  ["1794268988", "IMG_8995"],
  ["1794268989", "IMG_8994"],
  ["1794268989", "IMG_8989"],
  ["1794268990", "IMG_8992"],
  ["1794268990", "IMG_8988"],
  ["1794268990", "IMG_8991"],
  ["1794268991", "IMG_8993"],
  ["1794268992", "IMG_8957"],
  ["1794268992", "IMG_8959"],
  ["1794268993", "IMG_8956"],
  ["1794268993", "IMG_8960"],
  ["1794268994", "IMG_8955"],
  ["1794268994", "IMG_8964"],
  ["1794268995", "IMG_8996"],
  ["1794268995", "IMG_8997"],
  ["1794268996", "IMG_8999"],
  ["1794268997", "IMG_8998"],
] as const;

export const campImages = campImageIds.map(([version, filename], index) => ({
  src: `https://res.cloudinary.com/jbbzejqi/image/upload/v${version}/${filename}.jpg`,
  alt: `A moment from the Wabisabi Lokato Food Camp in Ghana, gallery photograph ${String(index + 1).padStart(2, "0")}`,
  index,
}));

export const faqs = [
  {
    question: "Where are you based?",
    answer: "Our base is in Medina, Accra, Ghana. Please contact us before visiting so we can confirm the best directions.",
  },
  {
    question: "Do you cater private events?",
    answer: "Yes. Contact us with your event date, location and the kind of experience you have in mind, and our team will guide you through the options.",
  },
  {
    question: "How do I order spices?",
    answer: "Place an enquiry through WhatsApp. We will share the available blends, ordering details and delivery information.",
  },
];
