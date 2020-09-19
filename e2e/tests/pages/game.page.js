import Page from './page';

/**
 * @class PageObject for the King Games Page.
 */
class GamesPage extends Page {
  get descriptionGame() {
    return $('.GameMicrositeHeroBlock_content');
  }

  get figuresGame() {
    return this.descriptionGame.$$('figure');
  }

  get playNowButton() {
    return this.descriptionGame.$('.GameMicrositeTextBlock-playBtn');
  }

  get downloadOnAppStoreButton() {
    return this.descriptionGame.$('.Carousel .BaseButton-store-ios');
  }

  get getItOnGooglePlayButton() {
    return this.descriptionGame.$('.Carousel .BaseButton-store-android');
  }

  get availableAtAmazonButton() {
    return this.descriptionGame.$('.Carousel .BaseButton-store-amazon');
  }

  get playOnFacebookButton() {
    return this.descriptionGame.$('.Carousel .BaseButton-store-facebook');
  }

  get playOnKingComButton() {
    return this.descriptionGame.$('.Carousel .BaseButton-store-king');
  }

  get faqSection() {
    return $("//a[@class='SubNavCard_link'][contains(@href, 'support-fhss')]");
  }

  get communitySection() {
    return $(
      "//a[@class='SubNavCard_link'][contains(@href, 'microsite_community')]"
    );
  }

  get streamingVideo() {
    return $('.PageSection.GameMicrositeVideo .StreamingVideo');
  }

  get screenshotsGame() {
    return $$('.GameMicrositeScreenshots figure');
  }

  waitForPageToBeLoaded() {
    this.descriptionGame.waitForDisplayed();
    this.playNowButton.waitForDisplayed();
    this.downloadOnAppStoreButton.waitForDisplayed();
    this.streamingVideo.waitForDisplayed();
  }
}

export default new GamesPage();
