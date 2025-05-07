// This script handles the click event on navigation cards to hide the hero image and makes it active
let navigationCards = document.querySelectorAll('.nav-card');
let heroImage = document.querySelector('.hero-image');

function handleNavCardClick(event) {
    heroImage.style.display = 'none';
    event.currentTarget.classList.add('active');
    // Remove 'active' class from all other cards
    navigationCards.forEach(card => {
        if (card !== event.currentTarget) {
            card.classList.remove('active');
        }
    });
}

navigationCards.forEach(card => {
    card.addEventListener('click', handleNavCardClick);
});

// This function shows the content
// Voting section
let contentRight = document.querySelector('.content-right');
let toolbarElement = document.querySelector('.toolbar');
let votingSection = document.querySelector('.voting-section');
let votingNavCard = document.querySelector('.nav-card.voting');

function showVotingSection() {
    contentRight.style.display = 'flex';
    votingSection.style.display = 'flex';
    // Hide other sections
    let sections = contentRight.querySelectorAll(':scope > div');
    sections.forEach(section => {
        if (section !== votingSection && section !== toolbarElement) {
            section.style.display = 'none';
        }
    });
}

votingNavCard.addEventListener('click', showVotingSection);

// Breeds section
let breedsSection = document.querySelector('.breeds-section');
let breedsNavCard = document.querySelector('.nav-card.breeds');

function showBreedsSection() {
    contentRight.style.display = 'flex';
    breedsSection.style.display = 'flex';
    // Hide other sections
    let sections = contentRight.querySelectorAll(':scope > div');
    sections.forEach(section => {
        if (section !== breedsSection && section !== toolbarElement) {
            section.style.display = 'none';
        }
    });
}

breedsNavCard.addEventListener('click', showBreedsSection);

// Gallery section
let gallerySection = document.querySelector('.gallery-section');
let galleryNavCard = document.querySelector('.nav-card.gallery');

function showGallerySection() {
    contentRight.style.display = 'flex';
    gallerySection.style.display = 'flex';
    // Hide other sections
    let sections = contentRight.querySelectorAll(':scope > div');
    sections.forEach(section => {
        if (section !== gallerySection && section !== toolbarElement) {
            section.style.display = 'none';
        }
    });
}

galleryNavCard.addEventListener('click', showGallerySection);

// Toolbar functionality
// Links to the sections
let toolbarLinks = document.querySelectorAll('.link-saved');

function handleToolbarLinkClick(event) {
    event.currentTarget.classList.add('current');
    // Remove 'active' class from all other links
    toolbarLinks.forEach(link => {
        if (link !== event.currentTarget) {
        link.classList.remove('current');
        }
    });
}

toolbarLinks.forEach(link => {
    link.addEventListener('click', handleToolbarLinkClick);
})

// Likes link
let likesLink = document.querySelector('.link-saved.likes');
let likesSection = document.querySelector('.likes-section');

function showLikesSection() {
    contentRight.style.display = 'flex';
    likesSection.style.display = 'flex';
    // Hide all other sections inside .content-right
    let sections = contentRight.querySelectorAll(':scope > div');
    sections.forEach(section => {
        if (section !== likesSection && section !== toolbarElement) {
            section.style.display = 'none';
        }
    });
}

likesLink.addEventListener('click', showLikesSection);

// Favourites link
let favouritesLink = document.querySelector('.link-saved.favourites');
let favouritesSection = document.querySelector('.favourites-section');

function showFavouritesSection() {
    contentRight.style.display = 'flex';
    favouritesSection.style.display = 'flex';
    // Hide all other sections inside .content-right
    let sections = contentRight.querySelectorAll(':scope > div');
    sections.forEach(section => {
        if (section !== favouritesSection && section !== toolbarElement) {
            section.style.display = 'none';
        }
    });
}

favouritesLink.addEventListener('click', showFavouritesSection);

// Dislikes link
let dislikesLink = document.querySelector('.link-saved.dislikes');
let dislikesSection = document.querySelector('.dislikes-section');

function showDislikesSection() {
    contentRight.style.display = 'flex';
    dislikesSection.style.display = 'flex';
    // Hide all other sections inside .content-right
    let sections = contentRight.querySelectorAll(':scope > div');
    sections.forEach(section => {
        if (section !== dislikesSection && section !== toolbarElement) {
            section.style.display = 'none';
        }
    });
}

dislikesLink.addEventListener('click', showDislikesSection);

// Back button functionality
let backButtons = document.querySelectorAll('.btn-back');

backButtons.forEach(backButton => {
    backButton.addEventListener('click', function(event) {
        contentRight.style.display = 'none';
        heroImage.style.display = 'block';
        navigationCards.forEach(card => {
            card.classList.remove('active');
        });
    });
});

// Breeds section functionality 
// Breed card functionality
let breedCardElements = document.querySelectorAll('.breed-card');
let breedsList = document.querySelector('.grid-wrapper');
let filtersAndSort = document.querySelector('.filters-and-sort');
let breadCrumbs = breedsSection.querySelector('.breadcrumbs');
let breedInfoSection = document.querySelector('.breed-info-section');
let idLink = document.createElement('span');
idLink.className = 'breadcrumbs-item current';
idLink.textContent = 'ID';

// Append idLink to breadcrumbs during initialization
if (!breadCrumbs.contains(idLink)) {
    breadCrumbs.append(idLink);
}

function showBreedInfoSection(event) {
    breedsList.style.display = 'none';
    filtersAndSort.style.display = 'none';
    breedInfoSection.style.display = 'flex';
    let breadcrumbItems = breadCrumbs.querySelectorAll(':scope > span');
    breadcrumbItems.forEach(item => {
        if (item !== idLink) {
            item.classList.remove('current');
        }
    });
}

breedsList.addEventListener('click', function(event) {
    if (event.target.classList.contains('breed-card')) {
        showBreedInfoSection(event);
    }
});


