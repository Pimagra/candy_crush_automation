import Page from './page';

/**
 * @class PageObject for the Candy Crush Header (Options).
 */
class PageHeader extends Page {
  get headerComponentLinks() {
    return $('.HeaderComponent_Links');
  }

  get homeButton() {
    return this.headerComponentLinks.$("a[data-test='headerHomeLink']");
  }

  get gamesButton() {
    return this.headerComponentLinks.$("a[data-test='headerGamesLink']");
  }

  get jobsButton() {
    return this.headerComponentLinks.$("a[data-test='headerJobsLink']");
  }

  get headerLogo() {
    return $(".HeaderComponent_titleContainer a[data-test='headerLogo']");
  }

  get communityButton() {
    return this.headerComponentLinks.$("a[data-test='headerCommunityLink']");
  }

  waitForPageToBeLoaded() {
    this.homeButton.waitForDisplayed();
    this.gamesButton.waitForDisplayed();
    this.jobsButton.waitForDisplayed();
    this.headerLogo.waitForDisplayed();
  }

  clickOnHomeButton() {
    super.clickElement(this.homeButton);
  }

  clickOnGamesButton() {
    super.clickElement(this.gamesButton);
  }

  clickOnJobsButton() {
    super.clickElement(this.jobsButton);
  }

  clickOnCommunityButton() {
    super.clickElement(this.communityButton);
  }
}

export default new PageHeader();
