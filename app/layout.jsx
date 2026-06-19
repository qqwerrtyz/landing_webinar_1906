import "./globals.css";

export const metadata = {
  title: {
    default: "Новая Планета | Вебинар по ABA для родителей",
    template: "%s | Новая Планета",
  },

  description:
    "Бесплатный вебинар для родителей детей с РАС и особенностями развития: как выбрать ABA-специалиста, когда начинать занятия и как получить помощь через благотворительные фонды.",

  keywords: [
    "ABA",
    "ABA-терапия",
    "АВА-терапия",
    "прикладной анализ поведения",
    "вебинар ABA",
    "вебинар для родителей",
    "дети с РАС",
    "аутизм у детей",
    "реабилитация детей с РАС",
    "как выбрать ABA специалиста",
    "раннее вмешательство",
    "благотворительные фонды для детей",
    "Новая Планета",
    "ABA центр Казань",
  ],

  authors: [{ name: "АВА-центр Новая Планета" }],
  creator: "АВА-центр Новая Планета",
  publisher: "АВА-центр Новая Планета",

  applicationName: "Новая Планета",
  generator: "Next.js",


  alternates: {
    canonical: "/",
  },

  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },

  openGraph: {
    title: "Новая Планета | Вебинар по ABA для родителей",
    description:
      "Разберем, как выбрать ABA-специалиста, не упустить время для занятий и получить помощь через благотворительные фонды.",
    url: "https://ВАШ-ДОМЕН.ru",
    siteName: "Новая Планета",
    locale: "ru_RU",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Вебинар по ABA для родителей от Новой Планеты",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Новая Планета | Вебинар по ABA для родителей",
    description:
      "Бесплатный вебинар о выборе ABA-специалиста, раннем начале занятий и помощи через фонды.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "education",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}