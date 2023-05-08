const searchForm = document.querySelector("[data-search]");
const searchData = document.querySelector("[data-searchInput]");
const searchButton = document.querySelector("[data-searchButton]");
const searchMobile = document.querySelector("[data-searchMobile]");

const sectionFilter = document.querySelector("[data-filter]");

const sectionVideos = document.querySelector("[data-list]");

const form = document.querySelector("[data-form]");
const img = document.querySelector("[data-img]");
const url = document.querySelector("[data-url]");
const title = document.querySelector("[data-title]");
const description = Math.floor(Math.random() * 10).toString();

export { searchForm, searchData, searchButton, searchMobile, sectionFilter, sectionVideos, form, img, url, title, description }