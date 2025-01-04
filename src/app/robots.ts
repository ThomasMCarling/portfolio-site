import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  return {
    rules: [
      {
        userAgent: listOfAiBotsIDontWantScrapingMySite,
        disallow: "*",
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: "/about/", //page not yet finished
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

//see https://github.com/ai-robots-txt/ai.robots.txt
const listOfAiBotsIDontWantScrapingMySite = [
  "AI2Bot",
  "Ai2Bot-Dolma",
  "Amazonbot",
  "anthropic-ai",
  "Applebot",
  "Applebot-Extended",
  "Bytespider",
  "CCBot",
  "ChatGPT-User",
  "Claude-Web",
  "ClaudeBot",
  "cohere-ai",
  "Diffbot",
  "DuckAssistBot",
  "FacebookBot",
  "FriendlyCrawler",
  "Google-Extended",
  "GoogleOther",
  "GoogleOther-Image",
  "GoogleOther-Video",
  "GPTBot",
  "iaskspider/2.0",
  "ICC-Crawler",
  "ImagesiftBot",
  "img2dataset",
  "ISSCyberRiskCrawler",
  "Kangaroo Bot",
  "Meta-ExternalAgent",
  "Meta-ExternalFetcher",
  "OAI-SearchBot",
  "omgili",
  "omgilibot",
  "PanguBot",
  "PerplexityBot",
  "PetalBot",
  "Scrapy",
  "Sidetrade indexer bot",
  "Timpibot",
  "VelenPublicWebCrawler",
  "Webzio-Extended",
  "YouBot",
];
