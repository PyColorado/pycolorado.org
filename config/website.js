const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/',

  siteTitle: 'PyColorado 2019',
  siteTitleAlt: 'PyColorado',
  siteTitleShort: 'PyColorado',
  siteHeadline: 'PyColorado -- a regional Python Conference happening in Denver September 6-8!',
  siteUrl: 'https://pycolorado.org',
  siteLanguage: 'en',
  siteLogo: '/logo.png',
  socialCard: '/social_card.png',
  siteDescription: 'PyColorado -- a regional Python Conference happening in Denver September 6-8!',
  author: 'PyColorado',
  userTwitter: '@pycolorado',
  ogSiteName: 'pycolorado',
  ogLanguage: 'en_US',
  googleAnalyticsID: 'UA-142670998-1',
  titoBaseURL: 'https://ti.to/pycolorado/pycolorado-2019',

  // Manifest and Progress color
  themeColor: tailwind.theme.colors.primary,
  backgroundColor: tailwind.theme.colors.primary,
}
