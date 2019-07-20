const webdriver = require('selenium-webdriver');
const browser = new webdriver.Builder().usingServer().withCapabilities({'browserName': 'chrome' }).build();

const userEmail = "ivanovivan159263@gmail.com";
const userPassword = "ivanovivan";

browser.get('https://www.lamoda.ru/').then(() => {
  browser.manage().window().maximize();
}).then(() => {
  return browser.findElement(webdriver.By.css('.gender-menu.menu_und a.link.menu_und__link[data-genders="children"]')).click();
}).then(() => {
  return browser.wait(browser.findElement(webdriver.By.css('#menu .search.js-search input.js-search-field')), 5000).then(input => {
    input.sendKeys("футболки");
  });
}).then(() => {
  return browser.findElement(webdriver.By.css('#menu .search.js-search .js-search-button')).click();
}).then(() =>{
  return browser.findElement(webdriver.By.css('.search-gender a.search-gender__item[data-gender="girls"]')).click();
}).then(() => {
  return browser.findElement(webdriver.By.css('.user-nav .link.user-nav__link.js-auth-button')).click();
}).then(() =>{
    return browser.wait(browser.findElement(webdriver.By.css('.popup.auth-popup.popup_visible .form.login-form')), 10000).then(form => {
      form.findElement(webdriver.By.css('input[type="email"]')).sendKeys(userEmail);
      form.findElement(webdriver.By.css('input[type="password"]')).sendKeys(userPassword);
     form.findElement(webdriver.By.css('button[type="submit"]')).click();

    });
});
