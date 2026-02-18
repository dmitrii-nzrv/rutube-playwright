import test from '@playwright/test';
import { MainPage } from '../../pages/mainPage';

test('Проверка доступности элементов хедера', async ({ page }) => {
  const mainPage = new MainPage(page);
  mainPage.open();
  await mainPage.closeCookiesAlert();
  mainPage.headerHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов табов категорий', async ({ page }) => {
  const mainPage = new MainPage(page);
  mainPage.open();
  await mainPage.closeCookiesAlert();
  mainPage.categoriesTabsHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов бокового меню', async ({ page }) => {
  const mainPage = new MainPage(page);
  mainPage.open();
  await mainPage.closeCookiesAlert();
  mainPage.menuHasCorrectAriaSnapshot();
});
