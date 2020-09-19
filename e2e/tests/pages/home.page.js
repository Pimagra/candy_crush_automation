import Page from './page';

/**
 * @class PageObject for the Candy Crush Home Page.
 */
class HomePage extends Page {
  get playNowNewsButton() {
    return $(
      "//div[@class='CrashAnnounce']//div[@class='FeaturedNews_playBtn']"
    );
  }

  get footerAllGamesIcons() {
    return $$(
      "//section[@class='GamePickerSmall']//a[contains(@href, 'game/')]"
    );
  }

  get acceptCookiesButton() {
    return $(
      '#onetrust-banner-sdk #onetrust-button-group .accept-btn-container'
    );
  }

  open() {
    super.open('/');
  }

  waitForPageToBeLoaded() {
    this.playNowNewsButton.waitForDisplayed();
    this.acceptCookiesButton.waitForDisplayed();
    super.clickElement(this.acceptCookiesButton);
  }
}

export default new HomePage();
