// Sample items data - you can modify this array to add/remove/edit items
const items = [
    {
        id: 1,
        name: "Wireless Headphones",
        description: "Premium noise-cancelling headphones with 30-hour battery life",
        price: "$299",
        category: "Electronics",
        link: "https://www.example.com/headphones"
    },
    {
        id: 2,
        name: "Coffee Maker",
        description: "Programmable coffee maker with thermal carafe",
        price: "$89",
        category: "Kitchen",
        link: "https://www.example.com/coffee-maker"
    },
    {
        id: 3,
        name: "Yoga Mat",
        description: "Eco-friendly non-slip yoga mat with carrying strap",
        price: "$45",
        category: "Fitness",
        link: "https://www.example.com/yoga-mat"
    },
    {
        id: 4,
        name: "Book Set",
        description: "Classic literature collection - 5 hardcover books",
        price: "$65",
        category: "Books",
        link: "https://www.example.com/books"
    },
    {
        id: 5,
        name: "Smart Watch",
        description: "Fitness tracker with heart rate monitor and GPS",
        price: "$249",
        category: "Electronics",
        link: "https://www.example.com/smart-watch"
    },
    {
        id: 6,
        name: "Cooking Knife Set",
        description: "Professional 8-piece knife set with wooden block",
        price: "$159",
        category: "Kitchen",
        link: "https://www.example.com/knife-set"
    }
];

// Function to create an item card
function createItemCard(item) {
    const card = document.createElement('div');
    card.className = 'item-card';
    
    card.innerHTML = `
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <div class="item-meta">
            <span class="item-price">${item.price}</span>
            <span class="item-category">${item.category}</span>
        </div>
        <a href="${item.link}" target="_blank" class="item-button">View Item</a>
    `;
    
    return card;
}

// Function to display all items
function displayItems() {
    const container = document.getElementById('items-container');
    
    // Clear existing items
    container.innerHTML = '';
    
    // Add each item to the container
    items.forEach(item => {
        const card = createItemCard(item);
        container.appendChild(card);
    });
}

// Load items when the page loads
document.addEventListener('DOMContentLoaded', displayItems);
