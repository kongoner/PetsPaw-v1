////////////////////////////////////////////////////////////////////

// Navigation

// Main Navigation with the links to pages
const mainNavigation = document.querySelector('.navigation');

// Toolbar elements
const toolbarParent = document.querySelector('.toolbar');
const searchBar = document.querySelector('.search-bar');
const toolbarLinksParent = document.querySelector('.links-toolbar')
const likesPageLink = document.querySelector('.link-saved.likes');
const favouritesPageLink = document.querySelector('.link-saved.favourites');
const dislikesPageLink = document.querySelector('.link-saved.dislikes');

// Breadcrumbs
const breadcrumbs = document.querySelectorAll('.breadcrumbs');
const pageItem = document.querySelector('.page-item');
const idItem = document.querySelector('.id-item');

// Home page elements
const contentLeft = document.querySelector('.content-left');
const contentRight = document.querySelector('.content-right');
const heroImage = document.querySelector('.hero-image');

function goToHomePage() {
    contentLeft.style.display = "flex";
    contentRight.style.display = 'none';
    heroImage.style.display = 'block';
    // Make all links default
    const allCards = mainNavigation.querySelectorAll(':scope > a');
    allCards.forEach(card => card.classList.remove('current'));
    const allLinks = toolbarLinksParent.querySelectorAll(':scope > a');
    allLinks.forEach(link => link.classList.remove('current'));
}

// Voting page
const votingPage = document.querySelector('.voting-page');
const votingPageCard = document.querySelector('.nav-card.voting');

function goToVotingPage() {
    heroImage.style.display = 'none';
    contentRight.style.display = 'flex';
    votingPage.style.display = 'flex';
    votingPageCard.classList.add('current');
    // Make other cards and links default
    const cards = mainNavigation.querySelectorAll(':scope > a');
    cards.forEach(card => {
        if (card !== votingPageCard) {
            card.classList.remove('current');
        }
    });
    const allLinks = toolbarLinksParent.querySelectorAll(':scope > a');
    allLinks.forEach(link => link.classList.remove('current'));

    // Hide other pages
    const allPages = contentRight.querySelectorAll(':scope > *:not(.toolbar)');
    allPages.forEach(page => {
        if (page !== votingPage) {
            page.style.display = 'none';
        }
    });
}

// Breeds page
const breedsPage = document.querySelector('.breeds-page');
const breedsPageCard = document.querySelector('.nav-card.breeds');
const breedInfoPage = document.querySelector('.breed-info-page');
const filtersAndSortContainer = document.querySelector('.filters-and-sort');
const gridWrapper = document.querySelector('.grid-wrapper');

function goToBreedsPage() {
    contentRight.style.display = 'flex';
    breedsPage.style.display = "flex";
    breedInfoPage.style.display = "none";
    gridWrapper.style.display = 'flex';
    pageItem.classList.add('current');
    idItem.style.display = 'none';
    filtersAndSortContainer.style.display = 'flex';
    heroImage.style.display = 'none';
    breedsPageCard.classList.add('current');
    // Make other cards and links default
    const cards = mainNavigation.querySelectorAll(':scope > a');
    cards.forEach(card => {
        if (card !== breedsPageCard) {
            card.classList.remove('current');
        }
    });
    const allLinks = toolbarLinksParent.querySelectorAll(':scope > a');
    allLinks.forEach(link => link.classList.remove('current'));
    // Hide other pages
    const allPages = contentRight.querySelectorAll(':scope > *:not(.toolbar)');
    allPages.forEach(page => {
        if (page !== breedsPage) {
            page.style.display = 'none';
        }
    });
}

// Gallery page
const galleryPage = document.querySelector('.gallery-page');
const galleryPageCard = document.querySelector('.nav-card.gallery');

function goToGalleryPage() {
    heroImage.style.display = 'none';
    contentRight.style.display = 'flex';
    galleryPage.style.display = 'flex';
    galleryPageCard.classList.add('current');
    // Make other cards and links default
    const cards = mainNavigation.querySelectorAll(':scope > a');
    cards.forEach(card => {
        if (card !== galleryPageCard) {
            card.classList.remove('current');
        }
    });
    const allLinks = toolbarLinksParent.querySelectorAll(':scope > a');
    allLinks.forEach(link => link.classList.remove('current'));

    // Hide other pages
    const allPages = contentRight.querySelectorAll(':scope > *:not(.toolbar)');
    allPages.forEach(page => {
        if (page !== galleryPage) {
            page.style.display = 'none';
        }
    });
}

// Likes page
const likesPage = document.querySelector('.likes-page');

function goToLikesPage() {
    heroImage.style.display = 'none';
    contentRight.style.display = 'flex';
    likesPage.style.display = 'flex';
    likesPageLink.classList.add('current');
    const links = toolbarLinksParent.querySelectorAll(':scope > a');
    links.forEach(link => {
        if (link !== likesPageLink) {
            link.classList.remove('current');
        }
    });
    const allCards = mainNavigation.querySelectorAll(':scope > a');
    allCards.forEach(card => card.classList.remove('current'));
    // Hide other pages
    const allPages = contentRight.querySelectorAll(':scope > *:not(.toolbar)');
    allPages.forEach(page => {
        if (page !== likesPage) {
            page.style.display = 'none';
        }
    });
}

// Favourites page
const favouritesPage = document.querySelector('.favourites-page');

function goToFavouritesPage() {
    heroImage.style.display = 'none';
    contentRight.style.display = 'flex';
    favouritesPage.style.display = 'flex';
    favouritesPageLink.classList.add('current');
    const links = toolbarLinksParent.querySelectorAll(':scope > a');
    links.forEach(link => {
        if (link !== favouritesPageLink) {
            link.classList.remove('current');
        }
    });
    const allCards = mainNavigation.querySelectorAll(':scope > a');
    allCards.forEach(card => card.classList.remove('current'));
    // Hide other pages
    const allPages = contentRight.querySelectorAll(':scope > *:not(.toolbar)');
    allPages.forEach(page => {
        if (page !== favouritesPage) {
            page.style.display = 'none';
        }
    });
}

// Dislikes page
const dislikesPage = document.querySelector('.dislikes-page');

function goToDislikesPage() {
    heroImage.style.display = 'none';
    contentRight.style.display = 'flex';
    dislikesPage.style.display = 'flex';
    dislikesPageLink.classList.add('current');
    const links = toolbarLinksParent.querySelectorAll(':scope > a');
    links.forEach(link => {
        if (link !== dislikesPageLink) {
            link.classList.remove('current');
        }
    });
    const allCards = mainNavigation.querySelectorAll(':scope > a');
    allCards.forEach(card => card.classList.remove('current'));
    // Hide other pages
    const allPages = contentRight.querySelectorAll(':scope > *:not(.toolbar)');
    allPages.forEach(page => {
        if (page !== dislikesPage) {
            page.style.display = 'none';
        }
    });
}

// Breed info page
function goToBreedInfoPage() {
    contentRight.style.display = 'flex';
    gridWrapper.style.display = 'none';
    breedInfoPage.style.display = 'flex';
    filtersAndSortContainer.style.display = 'none';
    idItem.style.display = 'block';
    pageItem.classList.remove('current');
    
    // Retrieve breedId from URL
    const params = new URLSearchParams(location.hash.split('?')[1]);
    const breedId = params.get('id');

    if (!breedId) {
        console.error('Breed ID is missing in the URL');
        alert('Breed ID is missing. Redirecting to the home page.');
        navigateTo(''); // Redirect to the home page
        return;
    }

    // Load breed data
    loadBreedInfoPage(breedId);
}

// Main navigation cards functionality
votingPageCard.addEventListener('click', () => {
    goToVotingPage();
    fetchRandomCat();
    getUserLogs();
    });
breedsPageCard.addEventListener('click', goToBreedsPage);
galleryPageCard.addEventListener('click', goToGalleryPage);

// Toolbar links functionality
likesPageLink.addEventListener('click', () => {
    goToLikesPage();
    getLikes();
    // getUserLogs(); // Not working. Back to this later
});

favouritesPageLink.addEventListener('click', () => {
    goToFavouritesPage();
    getFavourites();
    // getUserLogs(); // Not working. Back to this later
});

dislikesPageLink.addEventListener('click', () => {
    goToDislikesPage();
    getDislikes();
    // getUserLogs(); // Not working. Back to this later
});


// SPA-navigation
// Each route corresponds to a function that shows the appropriate page
let routes = {
    '': goToHomePage,
    'voting': goToVotingPage,
    'breeds': goToBreedsPage,
    'gallery': goToGalleryPage,
    'likes': goToLikesPage,
    'favourites': goToFavouritesPage,
    'dislikes': goToDislikesPage,
    'breed-info': goToBreedInfoPage,
};

// 404 HANDLER
function renderNotFound() {
    alert('404 Not Found');
}

// Changes the URL hash (e.g., #voting) without reloading the page
function navigateTo(url) {
    location.hash = url;
}

// Looks at the current hash and shows the corresponding page
function render() {
    const [path, query] = location.hash.slice(1).split('?'); // Split the route and parameters
    const routeAction = routes[path] || renderNotFound;

    if (query) {
        // If there are parameters, pass them to the route function
        const params = new URLSearchParams(query);
        routeAction(params);
    } else {
        routeAction();
    }
}

// Browser history support
window.addEventListener('hashchange', render);

// Initialization on page load
document.addEventListener('DOMContentLoaded', () => {
    // Intercept link clicks with data-link to prevent full page reload
    document.body.addEventListener('click', e => {
        const links = e.target.closest('[data-link]');
        if (links && links.getAttribute('href')) {
            e.preventDefault();
            navigateTo(links.getAttribute('href'));
        }
    });

    render();
});

// Back button handler. Makes all .btn-back buttons go one step back in browser history
document.querySelectorAll('.btn-back').forEach(button => {
    button.addEventListener('click', () => {
        history.back();
    });
});

////////////////////////////////////////////////////////////////////

// Voting page functionality 

// Getting a random cat from API, add cat to Voting page
const RANDOM_CAT_URL = 'https://api.thecatapi.com/v1/images/search';
const API_KEY = 'live_lQaLCNVE08afOEATctq7LgFSS1Qn8Dtn3HHQWnfvXchMRAHqK3aYhHe0AYPKtmnW';
let currentImageToVote;
let voteImageWrapper = document.querySelector('.vote-image-wrapper');

// Getting image
async function fetchRandomCat() {
    try {
        // Removing previous image
        const existingImage = voteImageWrapper.querySelector('.candidate-image');
        if (existingImage) {
            existingImage.remove();
        }
        
        // Show loader before fetching data
        loaderSpin.forEach(loader => {
            loader.style.display = 'block';
        });

        const response = await fetch(RANDOM_CAT_URL, {
            headers: {
                'x-api-key': API_KEY
            }
        });
        const data = await response.json();
        currentImageToVote = data[0];
        const candidateCat = document.createElement('img');
        candidateCat.classList.add('candidate-image');
        candidateCat.src = currentImageToVote.url;

        // Adding current image
        voteImageWrapper.prepend(candidateCat);

    } catch (error) {
        console.error('Error fetching random cat:', error);
    } finally {
        loaderSpin.forEach(loader => {
            loader.style.display = 'none';
        });
    }

}

// Voting functionality
const VOTES_URL = 'https://api.thecatapi.com/v1/votes';

async function vote(value) {
    const body = {
        image_id: currentImageToVote.id,
        value
    };

    try {
        const response = await fetch(VOTES_URL, {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                'content-type': "application/json",
                'x-api-key': API_KEY
            }
        });

        fetchRandomCat();

    } catch (error) {
        console.error('Error submitting vote:', error);
    }
}

// Handling vote buttons
const voteButtonLike = document.querySelector('.vote-button.like');
const voteButtonFavourite = document.querySelector('.vote-button.favourite');
const voteButtonDislike = document.querySelector('.vote-button.dislike');

voteButtonLike.addEventListener('click', async () => {
    await vote(1);
    await getUserLogs();
});
voteButtonFavourite.addEventListener('click', async () => {
    await vote(2);
    await getUserLogs();
});
voteButtonDislike.addEventListener('click', async () => {
    await vote(3);
    await getUserLogs();
});

// Get user logs
async function getUserLogs() {
    try {
        const response = await fetch(GET_VOTES_URL, {
            headers: {
                'x-api-key': API_KEY
            }
        });

        const data = await response.json();

        // Clear existing logs to avoid duplicates
        userLogsWrapper.innerHTML = '';

        // Add only the last 5 logs
        const recentLogs = data.slice(-5);
        recentLogs.forEach(vote => {
            createUserLog(vote);
        });
    } catch (error) {
        console.error(`Error fetching user logs: ${error.message}`, error);
    }
}

// Helper function to create user log element
const userLogsWrapper = document.querySelector('.user-action-logs');

function createUserLog(vote) {
    let userLogDiv = document.createElement('div');
    userLogDiv.classList.add('user-action');

    let timeStamp = document.createElement('span');
    timeStamp.classList.add('timestamp');
    timeStamp.textContent = `${vote.created_at.slice(11, 16)}`;

    let logMessage = document.createElement('p');
    logMessage.classList.add('action');
    if (vote.value === VOTE_LIKE) {
        logMessage.innerHTML = `Image ID: <span class="id-highlighted">${vote.image_id}</span> was added to Likes`;
    } else if (vote.value === VOTE_FAVOURITE) {
        logMessage.innerHTML = `Image ID: <span class="id-highlighted">${vote.image_id}</span> was added to Favourites`;
    } else if (vote.value === VOTE_DISLIKE) {
        logMessage.innerHTML = `Image ID: <span class="id-highlighted">${vote.image_id}</span> was added to Dislikes`;
    }

    let logIcon = document.createElement('img');
    logIcon.classList.add('action-icon');
    if (vote.value === VOTE_LIKE) {
        logIcon.src = 'images/like-color-20.svg';
    } else if (vote.value === VOTE_FAVOURITE) {
        logIcon.src = 'images/fav-20.svg';
    } else if (vote.value === VOTE_DISLIKE) {
        logIcon.src = 'images/dislike-color-20.svg';
    }

    userLogDiv.append(timeStamp);
    userLogDiv.append(logMessage);
    userLogDiv.append(logIcon);
    userLogsWrapper.prepend(userLogDiv);
}

// Add votings to Likes, Favourites and Dislikes
const GET_VOTES_URL = 'https://api.thecatapi.com/v1/votes?limit=100';
const likesGrid = document.querySelector(".grid.grid-likes");
const favouritesGrid = document.querySelector(".grid.grid-favourites");
const dislikesGrid = document.querySelector(".grid.grid-dislikes");
const nothingFoundMessage = document.querySelector('.nothing-found-message');
const loaderSpin = document.querySelectorAll('.loader-page');

// Constants for vote values
const VOTE_LIKE = 1;
const VOTE_FAVOURITE = 2;
const VOTE_DISLIKE = 3;

async function getLikes() {
    await getVotesByType(VOTE_LIKE, likesGrid);
}

async function getFavourites() {
    await getVotesByType(VOTE_FAVOURITE, favouritesGrid);
}

async function getDislikes() {
    await getVotesByType(VOTE_DISLIKE, dislikesGrid);
}

async function getVotesByType(voteType, grid) {
    try {
        // Show loader before fetching data
        loaderSpin.forEach(loader => {
            loader.style.display = 'block';
        });

        const response = await fetch(GET_VOTES_URL, {
            headers: {
                'x-api-key': API_KEY
            }
        });

        const data = await response.json();

        // Clear existing grid to avoid duplicates
        grid.innerHTML = '';

        // Filter votes by type and iterate over them
        const filteredVotes = data.filter(vote => vote.value === voteType);

        // Show nothing found message for each page
        const page = grid.closest('.likes-page, .favourites-page, .dislikes-page');
        const message = page?.querySelector('.nothing-found-message');

        if (filteredVotes.length === 0) {
            message.style.display = 'block';
        } else {
            message.style.display = 'none';
        }

        filteredVotes.forEach(vote => {
            createImageCell(vote.image.url, grid);
        });

    } catch (error) {
        console.error(`Error fetching votes for voteType "${voteType}": ${error.message}`, error);
    } finally {
        loaderSpin.forEach(loader => {
            loader.style.display = 'none';
        });
    }
}

// Create grid cell
function createImageCell(imageUrl, grid) {
    const imageCell = document.createElement('div');

    if (grid === favouritesGrid) {
        imageCell.className = 'grid-cell gallery-card';
        const favButton = document.createElement('button');
        favButton.classList.add('btn-gallery-fav');
        const favIcon = document.createElement('img');
        favIcon.src = 'images/fav-20.svg';
        favButton.append(favIcon);
        imageCell.append(favButton);
    } else {
        imageCell.className = 'grid-cell';
    }

    imageCell.style.backgroundImage = `url("${imageUrl}")`;
    grid.append(imageCell);
}

////////////////////////////////////////////////////////////////////

// Breeds Page functionality 

// Constants
const BREEDS_URL = 'https://api.thecatapi.com/v1/breeds';
const breedsGrid = document.querySelector('.grid.grid-breeds');
const breedsDropdown = document.getElementById('breeds-dropdown');
const prevButton = document.querySelector('.page-button.prev');
const nextButton = document.querySelector('.page-button.next');
const limitDropdown = document.getElementById('limit-dropdown');
const orderButtonAsc = document.querySelector('.order.a-z');
const orderButtonDesc = document.querySelector('.order.z-a');

// State Variables
let currentLimit = 5;
let currentPage = 0;
let currentOrder = 'ASC';
let totalBreeds = 0;

// Fetch Data from API
async function fetchBreeds(limit, page, order) {
    const url = `${BREEDS_URL}?limit=${limit}&page=${page}&order=${order}`;
    try {
        showLoader(true);
        const response = await fetch(url, {
            headers: { 'x-api-key': API_KEY }
        });
        const data = await response.json();
        totalBreeds = parseInt(response.headers.get('pagination-count'), 10); // Total breeds count from API
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        alert('Failed to fetch data. Please try again later.');
        return [];
    } finally {
        showLoader(false);
    }
}

// Show/Hide Loader
function showLoader(isVisible) {
    const loaderSpin = document.querySelectorAll('.loader-page');
    loaderSpin.forEach(loader => {
        loader.style.display = isVisible ? 'block' : 'none';
    });
}

// Display Breeds on the Page
function displayBreeds(breeds) {
    breedsGrid.innerHTML = ''; // Clear existing grid
    breeds.forEach(breed => {
        const breedCard = createBreedCard(breed);
        breedsGrid.appendChild(breedCard);
    });
}

// Create Breed Card
function createBreedCard(breed) {
    const breedCard = document.createElement('a');
    breedCard.href = breed.id;
    breedCard.className = 'grid-cell breed-card';
    breedCard.dataset.breedId = breed.id;
    breedCard.style.backgroundImage = `url("${breed.image?.url || ''}")`;

    const breedNameSpan = document.createElement('span');
    breedNameSpan.className = 'breed-name';
    breedNameSpan.textContent = breed.name;

    breedCard.appendChild(breedNameSpan);
    return breedCard;
}

// Update Pagination Buttons
function updatePaginationButtons() {
    const totalPages = Math.ceil(totalBreeds / currentLimit);

    if (currentPage === 0) {
        prevButton.classList.add('disabled');
    } else {
        prevButton.classList.remove('disabled');
    }

    if (currentPage >= totalPages - 1) {
        nextButton.classList.add('disabled');
    } else {
        nextButton.classList.remove('disabled');
    }
}

// Handle Pagination
async function goToPage(page) {
    breedsGrid.innerHTML = ''; // Clear existing grid
    currentPage = page;
    const breeds = await fetchBreeds(currentLimit, currentPage, currentOrder);
    displayBreeds(breeds);
    setupBreedCardListeners(); // Add listeners to breed cards
    updatePaginationButtons();
}

// Initialize Breeds Dropdown
async function initializeDropdown() {
    const allBreeds = await fetchBreeds(100, 0, 'ASC'); // Fetch all breeds for the dropdown
    breedsDropdown.innerHTML = ''; // Clear existing options
    breedsDropdown.append(createDropdownOption('all', 'All breeds'));

    allBreeds.forEach((breed, index) => {
        breedsDropdown.append(createDropdownOption(index, breed.name));
    });

    goToPage(0); // Load the first page
}

// Create Dropdown Option
function createDropdownOption(value, text) {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = text;
    return option;
}

// Handle Breeds Dropdown Change
breedsDropdown.addEventListener('change', async () => {
    const selectedValue = breedsDropdown.value;
    if (selectedValue === 'all') {
        goToPage(0); // Reset to the first page
    } else {
        const allBreeds = await fetchBreeds(100, 0, 'ASC'); // Fetch all breeds to find the selected one
        const selectedBreed = allBreeds[selectedValue];
        displayBreeds(selectedBreed ? [selectedBreed] : []);
        prevButton.disabled = true;
        nextButton.disabled = true;
    }
});

// Handle Limit Dropdown Change
limitDropdown.addEventListener('change', () => {
    currentLimit = parseInt(limitDropdown.value, 10);
    goToPage(0); // Reset to the first page with the new limit
});

// Handle Sorting
function setBreedsOrder(order) {
    currentOrder = order;
    goToPage(0); // Reset to the first page with the new order

    // Update the active state of the order buttons
    if (order === 'ASC') {
        orderButtonAsc.classList.add('active');
        orderButtonDesc.classList.remove('active');
    } else {
        orderButtonAsc.classList.remove('active');
        orderButtonDesc.classList.add('active');
    }
}

orderButtonAsc.addEventListener('click', () => setBreedsOrder('ASC'));
orderButtonDesc.addEventListener('click', () => setBreedsOrder('DESC'));

// Event Listeners for Pagination Buttons
prevButton.addEventListener('click', () => {
    if (currentPage > 0) goToPage(currentPage - 1);
});

nextButton.addEventListener('click', () => {
    const totalPages = Math.ceil(totalBreeds / currentLimit);
    if (currentPage < totalPages - 1) goToPage(currentPage + 1);
});

// Initialize Page
async function initializePage() {
    await initializeDropdown();
}

initializePage();


// Breed info Page 

// Add click event listener to breed cards
function setupBreedCardListeners() {
    const breedsGrid = document.querySelector('.grid.grid-breeds');
    breedsGrid.addEventListener('click', (event) => {
        const card = event.target.closest('.breed-card');
        if (card) {
            event.preventDefault();
            const breedId = card.dataset.breedId || ''; // Extract breed ID from data-breed-id
            navigateTo(`breed-info?id=${breedId}`); // Update URL
        }
    });
}

// Load breed info page
async function loadBreedInfoPage(breedId) {
    try {
        const breedInfoPage = document.querySelector('.breed-info-page');
        const loader = breedInfoPage.querySelector('.loader-page');
        const childElements = Array.from(breedInfoPage.children);

        // Show only the loader
        childElements.forEach(child => {
            if (child !== loader) {
                child.style.display = 'none';
            }
        });
        loader.style.display = 'block';

        // Find the breed data from the already fetched list
        const allBreeds = await fetchBreeds(100, 0, 'ASC'); // Fetch all breeds
        const breed = allBreeds.find(b => b.id === breedId);

        if (!breed) {
            console.error(`The selected breed could not be found (ID: ${breedId})`);
            alert('The selected breed could not be found. Redirecting to the breeds page.');
            navigateTo('breeds');
            return;
        }

        // Render breed info page
        renderBreedInfoPage(breed);
    } catch (error) {
        console.error(`Error loading breed info page for breed ID "${breedId}":`, error);
        alert(`Failed to load breed details for breed ID "${breedId}". Please try again later.`);
    } finally {
        const breedInfoPage = document.querySelector('.breed-info-page');
        const loader = breedInfoPage.querySelector('.loader-page');
        const childElements = Array.from(breedInfoPage.children);

        // Hide loader and show all other child elements
        loader.style.display = 'none';
        childElements.forEach(child => {
            if (child !== loader) {
                child.style.display = '';
            }
        });
    }
}

// Render breed info page
function renderBreedInfoPage(breed) {
    const gridWrapper = document.querySelector('.grid-wrapper');
    const breedInfoPage = document.querySelector('.breed-info-page');

    // Update breed details
    idItem.textContent = breed.id;
    breedInfoPage.querySelector('.breed-page-img').src = breed.image?.url || 'placeholder.jpg';
    breedInfoPage.querySelector('.breed-title').textContent = breed.name || 'Unknown';
    breedInfoPage.querySelector('.details.temperament p').textContent = breed.temperament || 'Unknown';
    breedInfoPage.querySelector('.detail.origin p').textContent = breed.origin || 'Unknown';
    breedInfoPage.querySelector('.detail.weight p').textContent = breed.weight?.metric || 'Unknown';
    breedInfoPage.querySelector('.detail.lifespan p').textContent = breed.life_span || 'Unknown';

    // Hide grid-wrapper and show breed-info-page
    gridWrapper.style.display = 'none';
    breedInfoPage.style.display = 'block';
}



// Helper
// Delete all user votes
async function deleteAllVotes() {
    try {
        const response = await fetch(GET_VOTES_URL, {
            headers: {
                'x-api-key': API_KEY
            }
        });

        const votes = await response.json();

        // Delete each vote
        for (const vote of votes) {
            await fetch(`${VOTES_URL}/${vote.id}`, {
                method: 'DELETE',
                headers: {
                    'x-api-key': API_KEY
                }
            });
        }

        alert('All votes have been deleted.');
        getUserLogs(); // Refresh user logs
    } catch (error) {
        console.error('Error deleting votes:', error);
        alert('Failed to delete votes. Please try again later.');
    }
}