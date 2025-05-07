// Main Navigation with the links to pages
let mainNavigation = document.querySelector('.navigation');
// Toolbar elements
let toolbarParent = document.querySelector('.toolbar');
let searchBar = document.querySelector('.search-bar');
let toolbarLinksParent = document.querySelector('.links-toolbar')
let likesPageLink = document.querySelector('.link-saved.likes');
let favouritesPageLink = document.querySelector('.link-saved.favourites');
let dislikesPageLink = document.querySelector('.link-saved.dislikes');

// Home page
let contentRight = document.querySelector('.content-right');
let heroImage = document.querySelector('.hero-image');

function goToHomePage() {
    contentRight.style.display = 'none';
    heroImage.style.display = 'block';
}

// Voting page
let votingPage = document.querySelector('.voting-section');
let votingPageCard = document.querySelector('.nav-card.voting');

function goToVotingPage() {
    heroImage.style.display = 'none';
    contentRight.style.display = 'flex';
    votingPage.style.display = 'flex';
    votingPageCard.classList.add('current');
    // Make other cards and links default
    let cards = mainNavigation.querySelectorAll(':scope > a');
    cards.forEach(card => {
        if (card !== votingPageCard) {
            card.classList.remove('current');
        }
    });
    likesPageLink.classList.remove('current');
    favouritesPageLink.classList.remove('current');
    dislikesPageLink.classList.remove('current');
    // Hide other pages
    let pages = contentRight.querySelectorAll(':scope > div');
    pages.forEach(page => {
        if (page !== votingPagePage && page !== toolbarParent) {
            page.style.display = 'none';
        }
    });
}

// Breeds page
let breedsPage = document.querySelector('.breeds-section');
let breedsPageCard = document.querySelector('.nav-card.breeds');

function goToBreedsPage() {
    heroImage.style.display = 'none';
    contentRight.style.display = 'flex';
    breedsPage.style.display = 'flex';
    breedsPageCard.classList.add('current');
    // Make other cards and links default
    let cards = mainNavigation.querySelectorAll(':scope > a');
    cards.forEach(card => {
        if (card !== breedsPageCard) {
            card.classList.remove('current');
        }
    });
    likesPageLink.classList.remove('current');
    favouritesPageLink.classList.remove('current');
    dislikesPageLink.classList.remove('current');
    // Hide other pages
    let pages = contentRight.querySelectorAll(':scope > div');
    pages.forEach(page => {
        if (page !== breedsPage && page !== toolbarParent) {
            page.style.display = 'none';
        }
    });
}

// Gallery page
let galleryPage = document.querySelector('.gallery-section');
let galleryPageCard = document.querySelector('.nav-card.gallery');

function goToGalleryPage() {
    heroImage.style.display = 'none';
    contentRight.style.display = 'flex';
    galleryPage.style.display = 'flex';
    galleryPageCard.classList.add('current');
    // Make other cards and links default
    let cards = mainNavigation.querySelectorAll(':scope > a');
    cards.forEach(card => {
        if (card !== galleryPageCard) {
            card.classList.remove('current');
        }
    });
    likesPageLink.classList.remove('current');
    favouritesPageLink.classList.remove('current');
    dislikesPageLink.classList.remove('current');
    // Hide other pages
    let pages = contentRight.querySelectorAll(':scope > div');
    pages.forEach(page => {
        if (page !== galleryPage && page !== toolbarParent) {
            page.style.display = 'none';
        }
    });
}

// Main navigation cards functionality
votingPageCard.addEventListener('click', goToVotingPage);
breedsPageCard.addEventListener('click', goToBreedsPage);
galleryPageCard.addEventListener('click', goToGalleryPage);

// Likes page
let likesPage = document.querySelector('.likes-section');

function goToLikesPage() {
    heroImage.style.display = 'none';
    contentRight.style.display = 'flex';
    likesPage.style.display = 'flex';
    likesPageLink.classList.add('current');
    // Make other links default
    let link = toolbarLinksParent.querySelectorAll(':scope > a');
    link.forEach(link => {
        if (link !== likesPageLink) {
            link.classList.remove('current');
        }
    });
    votingPageCard.classList.remove('current');
    breedsPageCard.classList.remove('current');
    galleryPageCard.classList.remove('current');
    // Hide other pages
    let pages = contentRight.querySelectorAll(':scope > div');
    pages.forEach(page => {
        if (page !== likesPage && page !== toolbarParent) {
            page.style.display = 'none';
        }
    });
}

// Favourites page
let favouritesPage = document.querySelector('.favourites-section');

function goToFavouritesPage() {
    heroImage.style.display = 'none';
    contentRight.style.display = 'flex';
    favouritesPage.style.display = 'flex';
    favouritesPageLink.classList.add('current');
    // Make other links default
    let link = toolbarLinksParent.querySelectorAll(':scope > a');
    link.forEach(link => {
        if (link !== favouritesPageLink) {
            link.classList.remove('current');
        }
    });
    votingPageCard.classList.remove('current');
    breedsPageCard.classList.remove('current');
    galleryPageCard.classList.remove('current');
    // Hide other pages
    let pages = contentRight.querySelectorAll(':scope > div');
    pages.forEach(page => {
        if (page !== favouritesPage && page !== toolbarParent) {
            page.style.display = 'none';
        }
    });
}

// Dislikes page
let dislikesPage = document.querySelector('.dislikes-section');

function goToDislikesPage() {
    heroImage.style.display = 'none';
    contentRight.style.display = 'flex';
    dislikesPage.style.display = 'flex';
    dislikesPageLink.classList.add('current');
    // Make other links default
    let link = toolbarLinksParent.querySelectorAll(':scope > a');
    link.forEach(link => {
        if (link !== dislikesPageLink) {
            link.classList.remove('current');
        }
    });
    votingPageCard.classList.remove('current');
    breedsPageCard.classList.remove('current');
    galleryPageCard.classList.remove('current');
    // Hide other pages
    let pages = contentRight.querySelectorAll(':scope > div');
    pages.forEach(page => {
        if (page !== dislikesPage && page !== toolbarParent) {
            page.style.display = 'none';
        }
    });
}

// Toolbar links funkctionality
likesPageLink.addEventListener('click', goToLikesPage);
favouritesPageLink.addEventListener('click', goToFavouritesPage);
dislikesPageLink.addEventListener('click', goToDislikesPage);

// Breed info page
let breedInfoPage = document.querySelector('.breed-info-section');

let breedCards = document.querySelectorAll('.breed-card');
let breedsList = document.querySelector('.grid-wrapper');
let filtersAndSort = document.querySelector('.filters-and-sort');
let breadCrumbs = breedsPage.querySelector('.breadcrumbs');

let idItem = document.createElement('span');
idItem.className = 'breadcrumbs-item current';
idItem.textContent = '28';

function showBreedInfoPage(event) {
    breedsList.style.display = 'none';
    filtersAndSort.style.display = 'none';
    breedInfoPage.style.display = 'block';
    breadCrumbs.append(idItem);
    // Make other items default
    let breadcrumbItems = breadCrumbs.querySelectorAll(':scope > span');
    breadcrumbItems.forEach(item => {
        if (item !== idItem) {
            item.classList.remove('current');
        }
    });
}

breedsList.addEventListener('click', function(event) {
    let breedCard = event.target.closest('.breed-card');
    if (breedCard) {
        showBreedInfoPage(event);
    }
});
