import { test, expect } from '../../fixtures/fixtures';
import { MainPage } from '../../pages/mainPage';

test('Проверка доступности элементов хедера', async ({ mainPage }) => {
  mainPage.headerHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов табов категорий', async ({ mainPage }) => {
  mainPage.categoriesTabsHasCorrectAriaSnapshot();
});

test('Проверка доступности элементов бокового меню', async ({ mainPage }) => {
  mainPage.menuHasCorrectAriaSnapshot();
});
