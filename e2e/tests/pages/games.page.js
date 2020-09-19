import Page from './page';

/**
 * @class PageObject for the King Games Page.
 */
class GamesPage extends Page {
  get playFunText() {
    return $(
      "//div[@data-test='recommendedGames']//div[@class='TextContentBlock']"
    );
  }

  get gamesTitles() {
    return $$('.row.GameList_container h3');
  }

  get gamesCards() {
    return $$('.row.GameList_container>div');
  }

  open() {
    super.open('/games');
  }

  waitForPageToBeLoaded() {
    this.playFunText.waitForDisplayed();
  }

  clickOnGameByIndex(index) {
    super.clickElement(this.gamesCards[index - 1]);
  }

  printGamesTitlesSort() {
    const gamesTitlesText = [];

    this.gamesTitles.forEach(function (element) {
      gamesTitlesText.push(element.getText());
    });

    console.log(gamesTitlesText.sort());
  }
}

export default new GamesPage();
