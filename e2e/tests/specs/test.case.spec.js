import assert from 'assert';
import HomePage from '../pages/home.page';
import GamesPage from '../pages/games.page';
import GamePage from '../pages/game.page';
import PageHeader from '../pages/page.header';

describe('King Webpage tests', function () {
  it('Enter to a game in King webpage', function () {
    HomePage.open();
    HomePage.waitForPageToBeLoaded();
    PageHeader.clickOnGamesButton();

    GamesPage.waitForPageToBeLoaded();
    GamesPage.printGamesTitlesSort();
    GamesPage.clickOnGameByIndex(2);

    GamePage.waitForPageToBeLoaded();

    assert.ok(
      GamePage.descriptionGame.isDisplayed(),
      'Game description is not displayed.'
    );
    assert.ok(
      GamePage.figuresGame.length > 0,
      'There are no images for the game.'
    );

    assert.ok(
      GamePage.playNowButton.isDisplayed(),
      'Play now button is not displayed.'
    );
    assert.ok(
      GamePage.playNowButton.isClickable(),
      'Play now button is not clickable.'
    );

    assert.ok(
      GamePage.downloadOnAppStoreButton.isDisplayed(),
      'Download on App Store button is not displayed.'
    );
    assert.ok(
      GamePage.downloadOnAppStoreButton.isClickable(),
      'Download on App Store button is not clickable.'
    );

    assert.ok(
      GamePage.getItOnGooglePlayButton.isDisplayed(),
      'Get it on Google Play button is not displayed.'
    );
    assert.ok(
      GamePage.getItOnGooglePlayButton.isClickable(),
      'Get it on Google Play button is not clickable.'
    );

    assert.ok(
      GamePage.availableAtAmazonButton.isDisplayed(),
      'Available at Amazon button is not displayed.'
    );
    assert.ok(
      GamePage.availableAtAmazonButton.isClickable(),
      'Available at Amazon  is not clickable.'
    );

    assert.ok(
      GamePage.playOnFacebookButton.isDisplayed(),
      'Play on Facebook button is not displayed.'
    );
    assert.ok(
      GamePage.playOnFacebookButton.isClickable(),
      'Play on Facebook button is not clickable.'
    );

    assert.ok(
      GamePage.playOnKingComButton.isDisplayed(),
      'Play on King button is not displayed.'
    );
    assert.ok(
      GamePage.playOnKingComButton.isClickable(),
      'Play on King button is not clickable.'
    );

    assert.ok(
      GamePage.faqSection.isDisplayed(),
      'FAQ section is not displayed.'
    );

    assert.ok(
      GamePage.communitySection.isDisplayed(),
      'Community section is not displayed.'
    );

    assert.ok(
      GamePage.streamingVideo.isDisplayed(),
      'Streaming Video is not displayed.'
    );

    assert.ok(
      GamePage.screenshotsGame.length > 0,
      'There are no screenshots for the game.'
    );
  });
});
