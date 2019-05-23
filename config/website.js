const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Haak Bros. Pizza', // Navigation and Site Title
  siteTitleAlt: 'Haak Bros Pizza', // Alternative Site title for SEO
  siteTitleShort: 'HBP 🍕', // short_name for manifest
  siteHeadline: 'All you need to know about frozen pizza', // Headline for schema.org JSONLD
  siteUrl: 'https://haakbrospizza.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteDescription: '2 brothers talking about pizza',

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
