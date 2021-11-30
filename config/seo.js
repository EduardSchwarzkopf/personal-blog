export const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://eduard.schwarzkopf.center"
    : "";
export const baseEmail = "eduard@schwarzkopf.center";

export const defaultSEO = {
  title: "Eduard Schwarzkopf",
  description: "Join my journey and solve problems together",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    site_name: "Eduard Schwarzkopf",
    images: [
      {
        url: `${baseUrl}/static/og/default.png`,
        alt: "Eduard Schwarzkopf",
      },
    ],
  },
  twitter: {
    handle: "@EduSchwarzkopf",
    site: "@EduSchwarzkopf",
    cardType: "summary_large_image",
  },
};

export function extendSEO(options) {
  const images = options.image
    ? [{ url: `${baseUrl}/static/${options.image}` }]
    : defaultSEO.openGraph.images;

  return {
    ...defaultSEO,
    ...options,
    url: `${baseUrl}/${options.url}`,
    openGraph: {
      ...defaultSEO.openGraph,
      images,
      url: `${baseUrl}/${options.url}`,
    },
  };
}
