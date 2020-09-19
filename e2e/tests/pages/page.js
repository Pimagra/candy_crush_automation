export default class Page {
  get loaderLabel() {
    return $('mat-dialog-content mat-spinner');
  }

  open(url) {
    browser.url(url);
  }

  clickElement(element) {
    try {
      element.waitForExist();
      element.waitForDisplayed();
      element.waitForClickable();
      element.click();
    } catch (err) {
      browser.pause(4000);
      element.click();
    }
  }

  setValueInElement(element, value) {
    element.waitForDisplayed();
    element.clearValue();
    element.setValue(value);
  }

  waitForLoaderToBeDisplayed() {
    try {
      this.loaderLabel.waitForDisplayed({ timeout: 60000 });
    } catch (exception) {
      console.log('Spinner was not displayed');
    }
  }

  waitForLoaderToHide() {
    browser.pause(1000);
    this.loaderLabel.waitForDisplayed({ timeout: 60000, reverse: true });
  }

  clickOnOptionFromList(listElements, option) {
    for (let i = 0; i < listElements.length; i++) {
      console.log(listElements[i].getText());
      const text = listElements[i].getText();
      if (text === option) {
        listElements[i].click();
        browser.pause(1000);
        break;
      }
    }
  }

  waitForText(element, text) {
    let textChanged = false;
    let timeout = 0;

    while (!textChanged && timeout <= 60) {
      if (element.getText().includes(text)) {
        textChanged = true;
      }
      browser.pause(1000);
      timeout += 1;
    }
  }

  waitForListToHaveElements(listElement) {
    let elementsDisplayed = false;
    while (!elementsDisplayed) {
      if (listElement.length > 0) {
        elementsDisplayed = true;
      }
      browser.pause(1000);
    }
  }
}
