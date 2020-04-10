import { Selector } from 'testcafe';

const label = Selector('label');

export class Feature {
  constructor(text) {
    this.label = label.withText(text);
    this.checkbox = this.label.find('input[type=checkbox]');
  }
}


export class ExamplePage {
  constructor() {
    this.nameInput = Selector('#developer-name');
    this.featureList = [
      new Feature('Support for testing on remote devices'),
      new Feature('Re-using existing JavaScript code for testing'),
      new Feature('Easy embedding into a Continuous integration system'),
      new Feature('Running tests in background and/or in parallel in multiple browsers'),
      new Feature('Advanced traffic and markup analysis'),
    ];
    this.submitButton = Selector('#submit-button');
    this.textMessage = Selector('#article-header');
  }
}
