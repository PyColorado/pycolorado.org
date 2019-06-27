const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/',

  siteTitle: 'PyColorado 2019',
  siteTitleAlt: 'PyColorado',
  siteTitleShort: 'PyColorado',
  siteHeadline: 'PyColorado is a regional PyCon happening in Denver this September!',
  siteUrl: 'https://pycolorado.org',
  siteLanguage: 'en',
  siteLogo: '/logo.png',
  siteDescription: 'PyColorado is a regional PyCon happening in Denver this September!',
  author: 'PyColorado',
  userTwitter: '@pycolorado',
  ogSiteName: 'pycolorado',
  ogLanguage: 'en_US',
  googleAnalyticsID: 'UA-142670998-1',

  // Manifest and Progress color
  themeColor: tailwind.theme.colors.primary,
  backgroundColor: tailwind.theme.colors.primary,
}
