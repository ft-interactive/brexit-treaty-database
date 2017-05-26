export default () => ({ // eslint-disable-line

  // link file UUID
  id: '47be7b84-3f18-11e7-9d56-25f963e998b2',

  // canonical URL of the published page
  // https://ig.ft.com/brexit-treaty-database get filled in by the ./configure script
  url: 'https://ig.ft.com/brexit-treaty-database',

  // To set an exact publish date do this:
  //       new Date('2016-05-17T17:11:22Z')
  publishedDate: new Date(),

  headline: 'The Brexit treaty renegotiation checklist',

  // summary === standfirst (Summary is what the content API calls it)
  summary: 'The complete list of 759 treaties and international agreements that Britain will lose after Brexit',

  topic: {
    name: 'Brexit',
    url: 'https://www.ft.com/brexit',
  },

  relatedArticle: {
    text: '',
    url: '',
  },

  mainImage: {
    title: '',
    description: '',
    credit: '',
    url: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A190b7498-4235-11e7-82b6-896b95f30f58?source=ig&width=700',
    width: 2048, // ensure correct width
    height: 1152, // ensure correct height
  },

  // Byline can by a plain string, markdown, or array of authors
  // if array of authors, url is optional
  byline: [
    { name: 'Paul McClean', url: 'https://www.ft.com/stream/authorsId/Q0ItUE01NDMyMQ==-QXV0aG9ycw==' },
    { name: 'Alex Barker', url: 'https://www.ft.com/stream/authorsId/Q0ItMDAwMDY3Mg==-QXV0aG9ycw==' },
    { name: 'Chris Campbell', url: 'https://www.ft.com/chris-campbell' },
    { name: 'Martin Stabe', url: 'https://www.ft.com/martin-stabe' },
  ],

  // Appears in the HTML <title>
  title: '',

  // meta data
  description: '',

  /*
  TODO: Select Twitter card type -
        summary or summary_large_image

        Twitter card docs:
        https://dev.twitter.com/cards/markup
  */
  twitterCard: 'summary_large_image cards',

  /*
  TODO: Do you want to tweak any of the
        optional social meta data?
  */
  // General social
  socialImage: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A190b7498-4235-11e7-82b6-896b95f30f58?source=ig&width=1440',
  socialHeadline: '759 treaties Britain will lose after Brexit',
   socialDescription: 'The Brexit treaty renegotiation checklist',
   twitterCreator: '@ft', // shows up in summary_large_image cards

  // TWEET BUTTON CUSTOM TEXT
  tweetText: '759 treaties and international agreements Britain will lose after Brexit',
  twitterRelatedAccounts: ['PSMcClean', 'alexebarker'], // Twitter lists these as suggested accounts to follow after a user tweets (do not include @)

  // Fill out the Facebook/Twitter metadata sections below if you want to
  // override the General social options above

  // TWITTER METADATA (for Twitter cards)
  twitterImage: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A190b7498-4235-11e7-82b6-896b95f30f58?source=ig&width=1440',
 twitterHeadline: '759 treaties  Britain will lose after Brexit',
  twitterDescription: 'The Brexit treaty renegotiation checklist',

  // FACEBOOK
  facebookImage: 'https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A190b7498-4235-11e7-82b6-896b95f30f58?source=ig&width=1440',
   facebookHeadline: '759 treaties Britain will lose after Brexit',
   facebookDescription: 'The Brexit treaty renegotiation checklist',

  //ADVERTISING
  ads: {
    // ad unit hierarchy makes ads more granular. Start with ft.com and /companies /markets /world as appropriate to your story
    gptAdunit: 'ft.com/world/europe',
    // granular targeting is optional and will be specified by the ads team
    dftTargeting: '',
  },

  tracking: {

    /*

    Microsite Name

    e.g. guffipedia, business-books, baseline.
    Used to query groups of pages, not intended for use with
    one off interactive pages. If you're building a microsite
    consider more custom tracking to allow better analysis.
    Also used for pages that do not have a UUID for whatever reason
    */
    // micrositeName: '',

    /*
    Product name

    This will usually default to IG
    however another value may be needed
    */
    // product: '',
  },
});
