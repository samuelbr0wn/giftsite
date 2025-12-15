
const items = [
    {
        id: 1,
        name: "Scrabble Slam",
        description: "Card game version of Scrabble.",
        price: "$8.00",
        category: "Games",
        link: "https://store.boardgamebarrister.com/scrabble-slam/"
    },
    {
        id: 2,
        name: "Cat in the Box",
        description: "Card game.",
        price: "$30.00",
        category: "Games",
        link: "https://store.boardgamebarrister.com/cat-in-the-box-deluxe-edition/?searchid=204060&search_query=cat+in+the+box"
    },
    {
        id: 3,
        name: "Tailored Realities by Brandon Sanderson",
        description: "Short story collection by Brandon Sanderson",
        price: "$29.99",
        category: "Books",
        link: "https://www.barnesandnoble.com/w/tailored-realities-brandon-sanderson/1146640859?ean=9781250410481"
    },
    {
        id: 4,
        name: "Hyperion by Dan Simmons",
        description: "Science fiction novel, first in the Hyperion Cantos series",
        price: "$18.99",
        category: "Books",
        link: "https://www.barnesandnoble.com/w/hyperion-dan-simmons/1100216988?ean=9780399178610"
    },
    {
        id: 5,
        name: "Athletic Shorts, Large, 7inch Inseam",
        description: "Comfortable athletic shorts with moisture-wicking fabric",
        price: "$TBD",
        category: "Clothing",
        link: "https://www.rei.com/c/mens-shorts?ir=category%3Amens-shorts&r=c%3Bsize%3ALarge%3Binseam-in%3A7"
    },
    {
        id: 6,
        name: "Goodr Bolt G Sunglasses",
        description: "Running/cycling wrap sunglasses",
        price: "$35.00",
        category: "Accessories",
        link: "https://www.rei.com/product/247381/goodr-bolt-g-polarized-sunglasses"
    },
    {
        id: 7,
        name: "Black Loafers - Size 10D",
        description: "Use this promo code: E9A92D71E3F21047C ",
        price: "$87",
        category: "Clothing",
        link: "https://www.florsheim.com/shop/style/17058-01.html"
    },
    {
        id: 8,
        name: "Cologne Discovery Set",
        description: "Any sample set of new colognes to try",
        price: "$TBD",
        category: "Fragrance",
        link: "https://www.nordstrom.com/sr?origin=keywordsearch&keyword=cologne%20sample%20set%20men"
    },
    {
        id: 9,
        name: "Long Sleeve Button Up Shirt, Solid Colors, Large",
        description: "Casual shirts that work for both work and casual settings",
        price: "$TBD",
        category: "Clothing",
        link: "https://www.jcrew.com/plp/mens/categories/clothing/shirts?sub-categories=men-shirts-brokeninoxford,men-shirts-cotton-hemp,men-shirts-secretwash,mens-shirts-seaboard&size=LARGE&sleeve-length=mens-casualshirts-longsleeve"
    },
    {
        id: 10,
        name: "Casual Tech Pants, Pull-on/drawstring, Large",
        description: "Easy pants that work like sweatpants but look normal. Straight leg. No joggers. Don't have to be this pair.",
        price: "$TBD",
        category: "Clothing",
        link: "https://shop.lululemon.com/p/men-pants/Ripstop-Pull-On-Pant/_/prod20005107?color=0001"
    }
    ,    {
        id: 11,
        name: "SKS S-Blade Fender Set",
        description: "Fenders for my bike",
        price: "$52",
        category: "Gear",
        link: "https://sks-us.com/products/s-board-s-blade-quickrelease-fender-set-for-700c?srsltid=AfmBOoryvIwuX4obkwSg53PinRn3IV4iXpWJqeS1wJHlocfK5JQa5QUR"
    }
    ,    {
        id: 12,
        name: "Whatever cool fashion thing you're into right now",
        description: "If you like it, I'll probably like it.",
        price: "$TBD",
        category: "Clothing"}
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
