import { ExamplePage, Feature } from "../pages/example-page";
import UserData from "../data/dummydata";

const page = new ExamplePage();
const data = new UserData();
let features;

fixture`type on name input`.page(`${process.env.URL}`);

test("SendText to name input box", async (t) => {
  const test = data.userData.map(
    async (user) =>
      await t // eslint-disable-line no-return-await
        .pressKey("ctrl+a delete")
        .typeText(page.nameInput, user.name)
        .expect(page.nameInput.value)
        .eql(user.name)
  );
  await Promise.all(test);
});

fixture`select all checkboxes`.page(`${process.env.URL}`);

test("Click check boxes and then verify their state", async (t) => {
  const featurePromises = page.featureList.map(
    async (feature) =>
      await t // eslint-disable-line no-return-await
        .click(feature.label)
        .expect(feature.checkbox.checked)
        .ok()
  );
  await Promise.all(featurePromises);
});

fixture`form fill up`.page(`${process.env.URL}`);
data.userData.map(
  async (
    user // eslint-disable-line no-return-assign
  ) => (
    (features = new Feature(user.featureLabel)), // eslint-disable-line no-sequences
    test(`fill with name ${user.name}`, async (t) => {
      await t
        .pressKey("ctrl+a delete")
        .typeText(page.nameInput, user.name)
        .click(features.label)
        .click(page.submitButton)
        .expect(page.textMessage.innerText)
        .eql(`Thank you, ${user.name}!`);
    })
  )
);
