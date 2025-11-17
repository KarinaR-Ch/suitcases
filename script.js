// Global variable for cart
let cart = [];
let userReviews = [];
let isLoggedIn = false;

// Check if user data is saved in sessionStorage
function checkRememberedUser() {
    const rememberedUser = sessionStorage.getItem('rememberedUser');
    if (rememberedUser) {
        const userData = JSON.parse(rememberedUser);
        document.getElementById('email').value = userData.email;
        document.getElementById('password').value = userData.password;
        document.getElementById('remember-checkbox').classList.add('checked');
        isLoggedIn = true;
        // Automatically go to cart page if user is remembered
        loadPage('user');
    }
}

// Save user data to sessionStorage
function rememberUser(email, password) {
    const userData = {
        email: email,
        password: password
    };
    sessionStorage.setItem('rememberedUser', JSON.stringify(userData));
}

// Remove saved user data
function forgetUser() {
    sessionStorage.removeItem('rememberedUser');
}

// Page content
const pages = {
    home: `
        <div class="gray-rectangle">
            <div class="white-top-rectangle">
                <div class="white-top-left">
                    <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/d1cd40ce6d48283d0926de63f56b548aee9106c4.png" alt="Additional image">
                    <div class="text-content">
                        <div class="name-text">Lillian Bennett</div>
                        <div class="position-text">Chief Marketing Officer</div>
                    </div>
                    <div class="quote-text">
                        <div>Aliquam Faucibus</div>
                        <div>Odionecom</div>
                    </div>
                    <div class="description-text">
                        <div>Duis vestibulum elit vel neque pharetra vulputate.</div>
                        <div>Quisque scelerisque nisi urna. Duis rutrum non risus in</div>
                        <div>imperdiet. Proin molestie accumsan nulla sit.</div>
                    </div>
                    <div class="additional-text">
                        <div>Namaki duis vestibulum elit vel neque pharetra vulputate.</div>
                        <div>Quisque scelerisque nisi urna.</div>
                    </div>
                </div>
                <div class="white-top-right">
                    <div class="discount-content">
                        <div class="discount-text">25 % Discount</div>
                        <div class="discount-description">
                            <div>Curabitur vulputate arcu odio, ac facilisis diam</div>
                            <div>accumsan ut. Ut imperdiet et leo in vulputate.</div>
                        </div>
                        <div class="discount-button" data-action="goto-catalog">
                            <div class="discount-button-text">Get Discount</div>
                        </div>
                    </div>
                    <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/photo%20(5).png" alt="Additional image">
                </div>
            </div>
            <div class="image-container">
                <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/656c36b623decb2b538d17585f8f19fb0ab685a8.png" alt="Suitcase">
            </div>
            <div class="text-container">
                <span class="text-line">Smart Styles for</span>
                <span class="text-line">Every Destination</span>
            </div>
            <div class="paragraph-2">Phasellus risus turpis, pretium sit amet magna non, molestie ultricies enim.</div>
            <div class="button" data-action="goto-catalog">
                <div class="button-text">View All Items</div>
            </div>
        </div>
        <div class="white-rectangle"></div>
        <div class="suitcases-section">
            <div class="suitcases-container">
                <h1 class="suitcases-title">Travel suitcases</h1>
                <p class="suitcases-subtitle">Duis vestibulum elit vel neque pharetra</p>
                <div class="suitcases-images">
                    <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/card%201.png" alt="Suitcase 1" class="suitcase-image" data-page="product" data-image="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/card%201.png">
                    <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/card%202.png" alt="Suitcase 2" class="suitcase-image" data-page="product" data-image="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/card%202.png">
                    <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/card%203.png" alt="Suitcase 3" class="suitcase-image" data-page="product" data-image="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/card%203.png">
                    <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/card%204.png" alt="Suitcase 4" class="suitcase-image" data-page="product" data-image="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/card%204.png">
                </div>
            </div>
        </div>
        <div class="selected-products-section">
            <div class="selected-products-container">
                <div class="selected-heading">Selected Products</div>
                <div class="selected-subheading">Duis vestibulum elit vel neque pharetra</div>
                <div class="products-container">
                    <div class="product-item">
                        <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/photo.png" alt="Product 1" class="product-image" data-page="product" data-image="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/photo.png">
                        <div class="sale-label">SALE</div>
                        <div class="product-text">Vel vestibulum elit<br>tuvel euqen</div>
                        <div class="price-container">
                            <span class="old-price">$277.78</span>
                            <span class="new-price">$250</span>
                        </div>
                        <button class="add-to-cart-btn" data-product='{"name": "Vel vestibulum elit tuvel euqen", "price": 250, "image": "https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/photo.png"}'>Add to Cart</button>
                    </div>
                    <div class="product-item">
                        <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/photo%20(1).png" alt="Product 2" class="product-image" data-page="product" data-image="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/photo%20(1).png">
                        <div class="sale-label">SALE</div>
                        <div class="product-text">Vel vestibulum elit<br>tuvel euqen</div>
                        <div class="price-container">
                            <span class="old-price">$222.22</span>
                            <span class="new-price">$200</span>
                        </div>
                        <button class="add-to-cart-btn" data-product='{"name": "Vel vestibulum elit tuvel euqen", "price": 200, "image": "https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/photo%20(1).png"}'>Add to Cart</button>
                    </div>
                    <div class="product-item">
                        <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/photo%20(2).png" alt="Product 3" class="product-image" data-page="product" data-image="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/photo%20(2).png">
                        <div class="sale-label">SALE</div>
                        <div class="product-text">Vel vestibulum elit<br>tuvel euqen</div>
                        <div class="price-container">
                            <span class="old-price">$333.33</span>
                            <span class="new-price">$300</span>
                        </div>
                        <button class="add-to-cart-btn" data-product='{"name": "Vel vestibulum elit tuvel euqen", "price": 300, "image": "https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/photo%20(2).png"}'>Add to Cart</button>
                    </div>
                    <div class="product-item">
                        <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/photo%20(3).png" alt="Product 4" class="product-image" data-page="product" data-image="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/photo%20(3).png">
                        <div class="sale-label">SALE</div>
                        <div class="product-text">Vel vestibulum elit<br>tuvel euqen</div>
                        <div class="price-container">
                            <span class="old-price">$388.89</span>
                            <span class="new-price">$350</span>
                        </div>
                        <button class="add-to-cart-btn" data-product='{"name": "Vel vestibulum elit tuvel euqen", "price": 350, "image": "https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/photo%20(3).png"}'>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="offer-section">
            <div class="offer-container">
                <div class="offer-image-container">
                    <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/photo%20(4).png" alt="Image">
                </div>
                <div class="offer-left-section">
                    <div class="offer-big-text">50%</div>
                    <div class="offer-small-text">Curabitur vulputate arcu odio, ac facilisis diam.</div>
                </div>
                <div class="offer-right-section">
                    <div class="offer-title">Offer Of The Month</div>
                    <div class="offer-description offer-description-line1">Curabitur vulputate arcu odio, ac facilisis diam</div>
                    <div class="offer-description">accumsan ut. Ut imperdiet et leo in vulputate.</div>
                    <div class="offer-button-container">
                        <button class="offer-button" data-action="goto-catalog">GET OFFER TODAY</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="new-products-section">
            <div class="new-products-container">
                <h1 class="new-products-header">New Products Arrival</h1>
                <p class="new-products-subtext">Duis vestibulum elit vel neque pharetra</p>
                <div class="new-products-images">
                    <div class="new-product-wrapper">
                        <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/product1.png" alt="Product 1" class="new-product-image product-image" data-page="product" data-image="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/product1.png">
                        <div class="new-product-text">
                            <div>Vel vestibulum elit</div>
                            <div>tuvel euqen.</div>
                        </div>
                        <div class="new-product-price">$150</div>
                        <button class="new-view-button" data-action="goto-catalog">View Product</button>
                    </div>
                    <div class="new-product-wrapper">
                        <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/product2.png" alt="Product 2" class="new-product-image product-image" data-page="product" data-image="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/product2.png">
                        <div class="new-sale-badge">SALE</div>
                        <div class="new-product-text">
                            <div>Vel vestibulum elit</div>
                            <div>tuvel euqen.</div>
                        </div>
                        <div class="price-container">
                            <span class="old-price">$500.00</span>
                            <span class="new-price">$450</span>
                        </div>
                        <button class="new-view-button" data-action="goto-catalog">View Product</button>
                    </div>
                    <div class="new-product-wrapper">
                        <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/product3.png" alt="Product 3" class="new-product-image product-image" data-page="product" data-image="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/product3.png">
                        <div class="new-product-text">
                            <div>Vel vestibulum elit</div>
                            <div>tuvel euqen.</div>
                        </div>
                        <div class="new-product-price">$250</div>
                        <button class="new-view-button" data-action="goto-catalog">View Product</button>
                    </div>
                    <div class="new-product-wrapper">
                        <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/product4.png" alt="Product 4" class="new-product-image product-image" data-page="product" data-image="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/product4.png">
                        <div class="new-sale-badge">SALE</div>
                        <div class="new-product-text">
                            <div>Vel vestibulum elit</div>
                            <div>tuvel euqen.</div>
                        </div>
                        <div class="price-container">
                            <span class="old-price">$222.22</span>
                            <span class="new-price">$200</span>
                        </div>
                        <button class="new-view-button" data-action="goto-catalog">View Product</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="customers-section">
            <h1 class="customers-title">Our Grateful Customers</h1>
            <div class="customers-subtitle">Duis vestibulum elit vel neque pharetra</div>
            <div class="customers-container">
                <div class="customers-content"></div>
            </div>
            <div class="customers-rectangles">
                <div class="customer-rectangle">
                    <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/customer1.png" alt="Customer 1">
                    <div class="customer-text-content">
                        <p>Curabitur vulputate arcu odio, ac</p>
                        <p>facilisis diam accumsan ut. Ut mperdiet</p>
                        <p>et leo in vulputate.</p>
                    </div>
                    <div class="customer-name">Ethan Wade, New York</div>
                </div>
                <div class="customer-rectangle">
                    <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/customer2.png" alt="Customer 2">
                    <div class="customer-text-content">
                        <p>Curabitur vulputate arcu odio, ac</p>
                        <p>facilisis diam accumsan ut. Ut mperdiet</p>
                        <p>et leo in vulputate.</p>
                    </div>
                    <div class="customer-name">Jane Reyes, California</div>
                </div>
                <div class="customer-rectangle">
                    <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/customer3.png" alt="Customer 3">
                    <div class="customer-text-content">
                        <p>Curabitur vulputate arcu odio, ac</p>
                        <p>facilisis diam accumsan ut. Ut mperdiet</p>
                        <p>et leo in vulputate.</p>
                    </div>
                    <div class="customer-name">Erica Banks, Miami</div>
                </div>
            </div>
        </div>
        <div class="footer-section">
            <div class="footer-header">
                <div class="footer-title">Our Benefits</div>
                <div class="footer-vertical-lines">
                    <div class="footer-line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                    <div class="footer-line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                    <div class="footer-line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                    <div class="footer-line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                    <div class="footer-line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                    <div class="footer-line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                    <div class="footer-line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                    <div class="footer-line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                </div>
                <div class="footer-horizontal-images">
                    <div class="footer-horizontal-img"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/footer1.png" alt="Footer 1"></div>
                    <div class="footer-horizontal-img"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/footer2.png" alt="Footer 2"></div>
                    <div class="footer-horizontal-img"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/footer3.png" alt="Footer 3"></div>
                    <div class="footer-horizontal-img"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/footer4.png" alt="Footer 4"></div>
                </div>
            </div>
            <div class="footer-content">
                <div class="footer-links-container">
                    <div class="footer-about-us-container">
                        <div class="footer-link">About Us</div>
                        <div class="footer-sub-links">
                            <div class="footer-sub-link">Organisation</div>
                            <div class="footer-sub-link">Partners</div>
                            <div class="footer-sub-link">Clients</div>
                        </div>
                    </div>
                    <div class="footer-interesting-links-container">
                        <div class="footer-link">Interesting Links</div>
                        <div class="footer-sub-links">
                            <div class="footer-sub-link">Photo Gallery</div>
                            <div class="footer-sub-link">Our Team</div>
                            <div class="footer-sub-link">Socials</div>
                        </div>
                    </div>
                    <div class="footer-achievements-container">
                        <div class="footer-link">Achievements</div>
                        <div class="footer-sub-links">
                            <div class="footer-sub-link">Winning Awards</div>
                            <div class="footer-sub-link">Press</div>
                            <div class="footer-sub-link">Our Amazing Clients</div>
                        </div>
                    </div>
                    <div class="footer-contact-us-container">
                        <div class="footer-link">Contact Us</div>
                        <div class="footer-sub-links">
                            <div class="footer-sub-link">Bendum dolor eu varius. Morbi fermentum velitsodales</div>
                            <div class="footer-sub-link">egetonec. volutpat orci. Sed ipsum felis, tristique</div>
                            <div class="footer-sub-link">egestas et, convallis ac velitn consequat nec luctus</div>
                        </div>
                        <div class="footer-contact-items">
                            <div class="footer-contact-item">
                                <div class="footer-contact-icon">📞</div>
                                <div class="footer-contact-text">Phone: (+63) 236 6322</div>
                            </div>
                            <div class="footer-contact-item">
                                <div class="footer-contact-icon">🕒</div>
                                <div class="footer-contact-text-multi">
                                    <div class="footer-contact-text">Mon - Fri: 10am - 6pm</div>
                                    <div class="footer-contact-text">Sat - Sun: 10am - 6pm</div>
                                </div>
                            </div>
                            <div class="footer-contact-item">
                                <div class="footer-contact-icon">✉️</div>
                                <div class="footer-contact-text">public@news.com</div>
                            </div>
                            <div class="footer-contact-item">
                                <div class="footer-contact-icon">📍</div>
                                <div class="footer-contact-text-multi">
                                    <div class="footer-contact-text">639 Jade Valley,</div>
                                    <div class="footer-contact-text">Washington Dc</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-shipping-section">
                    <div class="footer-shipping-info">Shipping Information</div>
                    <div class="footer-shipping-text">
                        <div class="footer-shipping-line">Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. Ut sit amet erat nec nibh</div>
                        <div class="footer-shipping-line">rhoncus varius in non lorem. Donec interdum, lectus in convallis pulvinar, enim elit porta sapien,</div>
                        <div class="footer-shipping-line">vel finibus erat felis sed neque. Etiam aliquet neque sagittis erat tincidunt aliquam.</div>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">© Copyright 2025</div>
        </div>
    `,
    catalog: `
        <div class="catalog-section">
            <div class="main-container">
                <div class="content-wrapper">
                    <div class="container">
                        <div class="results-text">Showing 1-12 Of 15 Results</div>
                        <select class="dropdown">
                            <option value="">Default Sorting</option>
                            <option value="1">Option 1</option>
                            <option value="2">Option 2</option>
                            <option value="3">Option 3</option>
                        </select>
                        <div class="image-row">
                            <div class="image-container">
                                <div class="image-wrapper">
                                    <div class="sale-badge">SALE</div>
                                    <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/catalog1.png" alt="Suitcase 1" class="product-image" data-page="product" data-image="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/catalog1.png">
                                </div>
                                <div class="image-text">Vel vestibulum elit<br>tuvel euqen.</div>
                                <div class="price-container">
                                    <span class="old-price">$277.78</span>
                                    <span class="new-price">$250</span>
                                </div>
                                <button class="add-to-cart-btn" data-product='{"name": "Vel vestibulum elit tuvel euqen", "price": 250, "image": "https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/catalog1.png"}'>Add To Cart</button>
                            </div>
                            <div class="image-container">
                                <div class="image-wrapper">
                                    <div class="sale-badge">SALE</div>
                                    <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/catalog2.png" alt="Suitcase 2" class="product-image" data-page="product" data-image="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/catalog2.png">
                                </div>
                                <div class="image-text">Vel vestibulum elit<br>tuvel euqen.</div>
                                <div class="price-container">
                                    <span class="old-price">$277.78</span>
                                    <span class="new-price">$250</span>
                                </div>
                                <button class="add-to-cart-btn" data-product='{"name": "Vel vestibulum elit tuvel euqen", "price": 250, "image": "https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/catalog2.png"}'>Add To Cart</button>
                            </div>
                            <div class="image-container">
                                <div class="image-wrapper">
                                    <div class="sale-badge">SALE</div>
                                    <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/catalog3.png" alt="Suitcase 3" class="product-image" data-page="product" data-image="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/catalog3.png">
                                </div>
                                <div class="image-text">Vel vestibulum elit<br>tuvel euqen.</div>
                                <div class="price-container">
                                    <span class="old-price">$277.78</span>
                                    <span class="new-price">$250</span>
                                </div>
                                <button class="add-to-cart-btn" data-product='{"name": "Vel vestibulum elit tuvel euqen", "price": 250, "image": "https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/catalog3.png"}'>Add To Cart</button>
                            </div>
                        </div>
                        <div class="image-row">
                            <div class="image-container">
                                <div class="image-wrapper">
                                    <div class="sale-badge">SALE</div>
                                    <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/catalog4.png" alt="Suitcase 4" class="product-image" data-page="product" data-image="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/catalog4.png">
                                </div>
                                <div class="image-text">Vel vestibulum elit<br>tuvel euqen.</div>
                                <div class="price-container">
                                    <span class="old-price">$277.78</span>
                                    <span class="new-price">$250</span>
                                </div>
                                <button class="add-to-cart-btn" data-product='{"name": "Vel vestibulum elit tuvel euqen", "price": 250, "image": "https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/catalog4.png"}'>Add To Cart</button>
                            </div>
                            <div class="image-container">
                                <div class="image-wrapper">
                                    <div class="sale-badge">SALE</div>
                                    <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/catalog5.png" alt="Suitcase 5" class="product-image" data-page="product" data-image="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/catalog5.png">
                                </div>
                                <div class="image-text">Vel vestibulum elit<br>tuvel euqen.</div>
                                <div class="price-container">
                                    <span class="old-price">$277.78</span>
                                    <span class="new-price">$250</span>
                                </div>
                                <button class="add-to-cart-btn" data-product='{"name": "Vel vestibulum elit tuvel euqen", "price": 250, "image": "https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/catalog5.png"}'>Add To Cart</button>
                            </div>
                            <div class="image-container">
                                <div class="image-wrapper">
                                    <div class="sale-badge">SALE</div>
                                    <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/catalog6.png" alt="Suitcase 6" class="product-image" data-page="product" data-image="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/catalog6.png">
                                </div>
                                <div class="image-text">Vel vestibulum elit<br>tuvel euqen.</div>
                                <div class="price-container">
                                    <span class="old-price">$277.78</span>
                                    <span class="new-price">$250</span>
                                </div>
                                <button class="add-to-cart-btn" data-product='{"name": "Vel vestibulum elit tuvel euqen", "price": 250, "image": "https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/catalog6.png"}'>Add To Cart</button>
                            </div>
                        </div>
                        <div class="image-row">
                            <div class="image-container">
                                <div class="image-wrapper">
                                    <div class="sale-badge">SALE</div>
                                    <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/catalog7.png" alt="Suitcase 7" class="product-image" data-page="product" data-image="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/catalog7.png">
                                </div>
                                <div class="image-text">Vel vestibulum elit<br>tuvel euqen.</div>
                                <div class="price-container">
                                    <span class="old-price">$277.78</span>
                                    <span class="new-price">$250</span>
                                </div>
                                <button class="add-to-cart-btn" data-product='{"name": "Vel vestibulum elit tuvel euqen", "price": 250, "image": "https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/catalog7.png"}'>Add To Cart</button>
                            </div>
                            <div class="image-container">
                                <div class="image-wrapper">
                                    <div class="sale-badge">SALE</div>
                                    <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/catalog8.png" alt="Suitcase 8" class="product-image" data-page="product" data-image="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/catalog8.png">
                                </div>
                                <div class="image-text">Vel vestibulum elit<br>tuvel euqen.</div>
                                <div class="price-container">
                                    <span class="old-price">$277.78</span>
                                    <span class="new-price">$250</span>
                                </div>
                                <button class="add-to-cart-btn" data-product='{"name": "Vel vestibulum elit tuvel euqen", "price": 250, "image": "https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/catalog8.png"}'>Add To Cart</button>
                            </div>
                            <div class="image-container">
                                <div class="image-wrapper">
                                    <div class="sale-badge">SALE</div>
                                    <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/catalog9.png" alt="Suitcase 9" class="product-image" data-page="product" data-image="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/catalog9.png">
                                </div>
                                <div class="image-text">Vel vestibulum elit<br>tuvel euqen.</div>
                                <div class="price-container">
                                    <span class="old-price">$277.78</span>
                                    <span class="new-price">$250</span>
                                </div>
                                <button class="add-to-cart-btn" data-product='{"name": "Vel vestibulum elit tuvel euqen", "price": 250, "image": "https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/catalog9.png"}'>Add To Cart</button>
                            </div>
                        </div>
                        <div class="image-row">
                            <div class="image-container">
                                <div class="image-wrapper">
                                    <div class="sale-badge">SALE</div>
                                    <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/catalog10.png" alt="Suitcase 10" class="product-image" data-page="product" data-image="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/catalog10.png">
                                </div>
                                <div class="image-text">Vel vestibulum elit<br>tuvel euqen.</div>
                                <div class="price-container">
                                    <span class="old-price">$277.78</span>
                                    <span class="new-price">$250</span>
                                </div>
                                <button class="add-to-cart-btn" data-product='{"name": "Vel vestibulum elit tuvel euqen", "price": 250, "image": "https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/catalog10.png"}'>Add To Cart</button>
                            </div>
                            <div class="image-container">
                                <div class="image-wrapper">
                                    <div class="sale-badge">SALE</div>
                                    <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/catalog11.png" alt="Suitcase 11" class="product-image" data-page="product" data-image="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/catalog11.png">
                                </div>
                                <div class="image-text">Vel vestibulum elit<br>tuvel euqen.</div>
                                <div class="price-container">
                                    <span class="old-price">$277.78</span>
                                    <span class="new-price">$250</span>
                                </div>
                                <button class="add-to-cart-btn" data-product='{"name": "Vel vestibulum elit tuvel euqen", "price": 250, "image": "https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/catalog11.png"}'>Add To Cart</button>
                            </div>
                            <div class="image-container">
                                <div class="image-wrapper">
                                    <div class="sale-badge">SALE</div>
                                    <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/catalog12.png" alt="Suitcase 12" class="product-image" data-page="product" data-image="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/catalog12.png">
                                </div>
                                <div class="image-text">Vel vestibulum elit<br>tuvel euqen.</div>
                                <div class="price-container">
                                    <span class="old-price">$277.78</span>
                                    <span class="new-price">$250</span>
                                </div>
                                <button class="add-to-cart-btn" data-product='{"name": "Vel vestibulum elit tuvel euqen", "price": 250, "image": "https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/catalog12.png"}'>Add To Cart</button>
                            </div>
                        </div>
                        <div class="pagination">
                            <div class="page-square" onclick="changePage(1)">
                                <div class="page-number">1</div>
                            </div>
                            <div class="page-square-transparent" onclick="changePage(2)">
                                <div class="page-number-pink">2</div>
                            </div>
                            <button class="next-btn" onclick="nextPage()">NEXT ></button>
                        </div>
                    </div>
                </div>
                <div class="sidebar">
                    <div class="sidebar-search-container" onclick="focusSidebarSearch()">
                        <input type="text" class="sidebar-search-input" placeholder="Search Models">
                        <div class="sidebar-search-icon">🔍</div>
                    </div>
                    <div class="sidebar-title">Top Best Sets</div>
                    <div class="top-images-column">
                        <div class="top-image-item">
                            <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/topcatalog1.png" alt="Top Suitcase 1" class="product-image" data-page="product" data-image="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/topcatalog1.png">
                            <div>
                                <div class="top-image-text">Primis in faucibus aenean<br>laoreet rhoncus ipsum eget.</div>
                                <div class="stars">★★★★★</div>
                                <div class="top-price">$1200</div>
                                <button class="add-to-cart-btn" data-product='{"name": "Primis in faucibus aenean laoreet rhoncus ipsum eget", "price": 1200, "image": "https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/topcatalog1.png"}'>Add To Cart</button>
                        </div>
                        </div>
                        <div class="top-image-item">
                            <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/topcatalog2.png" alt="Top Suitcase 2" class="product-image" data-page="product" data-image="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/topcatalog2.png">
                            <div>
                                <div class="top-image-text">Primis in faucibus aenean<br>laoreet rhoncus ipsum eget.</div>
                                <div class="stars">★★★★★</div>
                                <div class="top-price">$1200</div>
                                <button class="add-to-cart-btn" data-product='{"name": "Primis in faucibus aenean laoreet rhoncus ipsum eget", "price": 1200, "image": "https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/topcatalog2.png"}'>Add To Cart</button>
                        </div>
                        </div>
                        <div class="top-image-item">
                            <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/topcatalog3.png" alt="Top Suitcase 3" class="product-image" data-page="product" data-image="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/topcatalog3.png">
                            <div>
                                <div class="top-image-text">Primis in faucibus aenean<br>laoreet rhoncus ipsum eget.</div>
                                <div class="stars">★★★★★</div>
                                <div class="top-price">$1200</div>
                                <button class="add-to-cart-btn" data-product='{"name": "Primis in faucibus aenean laoreet rhoncus ipsum eget", "price": 1200, "image": "https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/topcatalog3.png"}'>Add To Cart</button>
                        </div>
                        </div>
                        <div class="top-image-item">
                            <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/topcatalog4.png" alt="Top Suitcase 4" class="product-image" data-page="product" data-image="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/topcatalog4.png">
                            <div>
                                <div class="top-image-text">Primis in faucibus aenean<br>laoreet rhoncus ipsum eget.</div>
                                <div class="stars">★★★★★</div>
                                <div class="top-price">$1200</div>
                                <button class="add-to-cart-btn" data-product='{"name": "Primis in faucibus aenean laoreet rhoncus ipsum eget", "price": 1200, "image": "https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/topcatalog4.png"}'>Add To Cart</button>
                        </div>
                        </div>
                        <div class="top-image-item">
                            <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/topcatalog5.png" alt="Top Suitcase 5" class="product-image" data-page="product" data-image="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/topcatalog5.png">
                            <div>
                                <div class="top-image-text">Primis in faucibus aenean<br>laoreet rhoncus ipsum eget.</div>
                                <div class="stars">★★★★★</div>
                                <div class="top-price">$1200</div>
                                <button class="add-to-cart-btn" data-product='{"name": "Primis in faucibus aenean laoreet rhoncus ipsum eget", "price": 1200, "image": "https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/topcatalog5.png"}'>Add To Cart</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-section">
            <div class="footer-header">
                <div class="footer-header-title">Our Benefits</div>
                <div class="vertical-lines">
                    <div class="line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                    <div class="line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                    <div class="line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                    <div class="line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                    <div class="line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                    <div class="line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                    <div class="line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                    <div class="line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                </div>
                <div class="horizontal-images">
                    <div class="horizontal-img"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/footer1.png" alt="Footer 1"></div>
                    <div class="horizontal-img"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/footer2.png" alt="Footer 2"></div>
                    <div class="horizontal-img"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/footer3.png" alt="Footer 3"></div>
                    <div class="horizontal-img"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/footer4.png" alt="Footer 4"></div>
                </div>
            </div>
            <div class="footer-content">
                <div class="links-container">
                    <div class="about-us-container">
                        <div class="link">About Us</div>
                        <div class="sub-links">
                            <div class="sub-link">Organisation</div>
                            <div class="sub-link">Partners</div>
                            <div class="sub-link">Clients</div>
                        </div>
                    </div>
                    <div class="interesting-links-container">
                        <div class="link">Interesting Links</div>
                        <div class="sub-links">
                            <div class="sub-link">Photo Gallery</div>
                            <div class="sub-link">Our Team</div>
                            <div class="sub-link">Socials</div>
                        </div>
                    </div>
                    <div class="achievements-container">
                        <div class="link">Achievements</div>
                        <div class="sub-links">
                            <div class="sub-link">Winning Awards</div>
                            <div class="sub-link">Press</div>
                            <div class="sub-link">Our Amazing Clients</div>
                        </div>
                    </div>
                    <div class="contact-us-container">
                        <div class="link">Contact Us</div>
                        <div class="sub-links">
                            <div class="sub-link">Bendum dolor eu varius. Morbi fermentum velitsodales</div>
                            <div class="sub-link">egetonec. volutpat orci. Sed ipsum felis, tristique</div>
                            <div class="sub-link">egestas et, convallis ac velitn consequat nec luctus</div>
                        </div>
                        <div class="contact-items">
                            <div class="contact-item">
                                <div class="contact-icon">📞</div>
                                <div class="contact-text">Phone: (+63) 236 6322</div>
                            </div>
                            <div class="contact-item">
                                <div class="contact-icon">🕒</div>
                                <div class="contact-text-multi">
                                    <div class="contact-text">Mon - Fri: 10am - 6pm</div>
                                    <div class="contact-text">Sat - Sun: 10am - 6pm</div>
                                </div>
                            </div>
                            <div class="contact-item">
                                <div class="contact-icon">✉️</div>
                                <div class="contact-text">public@news.com</div>
                            </div>
                            <div class="contact-item">
                                <div class="contact-icon">📍</div>
                                <div class="contact-text-multi">
                                    <div class="contact-text">639 Jade Valley,</div>
                                    <div class="contact-text">Washington Dc</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="shipping-section">
                    <div class="shipping-info">Shipping Information</div>
                    <div class="shipping-text">
                        <div class="shipping-line">Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. Ut sit amet erat nec nibh</div>
                        <div class="shipping-line">rhoncus varius in non lorem. Donec interdum, lectus in convallis pulvinar, enim elit porta sapien,</div>
                        <div class="shipping-line">vel finibus erat felis sed neque. Etiam aliquet neque sagittis erat tincidunt aliquam.</div>
                    </div>
                </div>
            </div>
            <div class="copyright">© Copyright 2025</div>
        </div>
    `,
    about: `
        <div class="hero-section"></div>

        <div class="icons-section">
            <div class="icon-item">
                <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/icon%20(1).png" alt="Icon 1">
                <div class="icon-text">Superior Accuracy</div>
                <div class="icon-description">
                    <span class="description-line">Qewist vestibulum elit vel</span>
                    <span class="description-line">neque pharetra vulputate</span>
                    <span class="description-line">scelerisque nisi urna.</span>
                </div>
            </div>
            <div class="icon-item">
                <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/icon%20(2).png" alt="Icon 2">
                <div class="icon-text">Awards</div>
                <div class="icon-description">
                    <span class="description-line">Qewist vestibulum elit vel</span>
                    <span class="description-line">neque pharetra vulputate</span>
                    <span class="description-line">scelerisque nisi urna.</span>
                </div>
            </div>
            <div class="icon-item">
                <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/icon%20(3).png" alt="Icon 3">
                <div class="icon-text">Ecological</div>
                <div class="icon-description">
                    <span class="description-line">Qewist vestibulum elit vel</span>
                    <span class="description-line">neque pharetra vulputate</span>
                    <span class="description-line">scelerisque nisi urna.</span>
                </div>
            </div>
            <div class="icon-item">
                <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/icon%20(4).png" alt="Icon 4">
                <div class="icon-text">Shipping Worldwide</div>
                <div class="icon-description">
                    <span class="description-line">Qewist vestibulum elit vel</span>
                    <span class="description-line">neque pharetra vulputate</span>
                    <span class="description-line">scelerisque nisi urna.</span>
                </div>
            </div>
        </div>

        <div class="new-section">
            <div class="section-container">
                <div class="left-side">
                    <div class="new-arrivals-title">New Arrivals Every Week</div>
                    <button class="see-all-button" data-action="goto-catalog">See All Models</button>
                </div>
                <div class="right-side">
                    <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/ac06fd7c37d57115174b35d848fa80e8da9b50b3.jpg" alt="Right side image">
                </div>
            </div>
        </div>

        <div class="team-section">
            <div class="team-title">Our Incredible Team</div>
        </div>

        <div class="team-images-section">
            <div class="team-member">
                <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/29cace15426bcd891e1a92afea5618fc915f84f6.png" alt="Team member 1" class="team-image">
                <div class="team-name">NATALIIA FOSTER</div>
                <div class="team-position">Product Manager</div>
            </div>
            <div class="team-member">
                <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/5a9072b229966990b5c63eb43c87375792c221f5.png" alt="Team member 2" class="team-image">
                <div class="team-name">ALEXANDRA THOMPSON</div>
                <div class="team-position">Graphic Designer</div>
            </div>
            <div class="team-member">
                <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/7d839c5cdc3f379d86e6306c2bea041e95875d50.png" alt="Team member 3" class="team-image">
                <div class="team-name">IRYNA BROOKS</div>
                <div class="team-position">Head Of Marketing</div>
            </div>
        </div>

        <div class="offer-section">
            <div class="offer-container">
                <div class="offer-image-container">
                    <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/photo%20(4).png" alt="Offer image">
                </div>

                <div class="offer-left-section">
                    <div class="offer-big-text">50%</div>
                    <div class="offer-small-text">Curabitur vulputate arcu odio, ac facilisis diam.</div>
                </div>

                <div class="offer-right-section">
                    <div class="offer-title">Offer Of The Month</div>
                    <div class="offer-description offer-description-line1">Curabitur vulputate arcu odio, ac facilisis diam</div>
                    <div class="offer-description">accumsan ut. Ut imperdiet et leo in vulputate.</div>
                    <div class="offer-button-container">
                        <button class="offer-button" data-action="goto-catalog">GET OFFER TODAY</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="footer-section">
            <div class="footer-header">
                <div class="footer-title">Our Benefits</div>
                <div class="footer-vertical-lines">
                    <div class="footer-line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                    <div class="footer-line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                    <div class="footer-line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                    <div class="footer-line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                    <div class="footer-line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                    <div class="footer-line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                    <div class="footer-line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                    <div class="footer-line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                </div>
                <div class="footer-horizontal-images">
                    <div class="footer-horizontal-img"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/footer1.png" alt="Footer 1"></div>
                    <div class="footer-horizontal-img"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/footer2.png" alt="Footer 2"></div>
                    <div class="footer-horizontal-img"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/footer3.png" alt="Footer 3"></div>
                    <div class="footer-horizontal-img"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/footer4.png" alt="Footer 4"></div>
                </div>
            </div>
            <div class="footer-content">
                <div class="footer-links-container">
                    <div class="footer-about-us-container">
                        <div class="footer-link">About Us</div>
                        <div class="footer-sub-links">
                            <div class="footer-sub-link">Organisation</div>
                            <div class="footer-sub-link">Partners</div>
                            <div class="footer-sub-link">Clients</div>
                        </div>
                    </div>
                    <div class="footer-interesting-links-container">
                        <div class="footer-link">Interesting Links</div>
                        <div class="footer-sub-links">
                            <div class="footer-sub-link">Photo Gallery</div>
                            <div class="footer-sub-link">Our Team</div>
                            <div class="footer-sub-link">Socials</div>
                        </div>
                    </div>
                    <div class="footer-achievements-container">
                        <div class="footer-link">Achievements</div>
                        <div class="footer-sub-links">
                            <div class="footer-sub-link">Winning Awards</div>
                            <div class="footer-sub-link">Press</div>
                            <div class="footer-sub-link">Our Amazing Clients</div>
                        </div>
                    </div>
                    <div class="footer-contact-us-container">
                        <div class="footer-link">Contact Us</div>
                        <div class="footer-sub-links">
                            <div class="footer-sub-link">Bendum dolor eu varius. Morbi fermentum velitsodales</div>
                            <div class="footer-sub-link">egetonec. volutpat orci. Sed ipsum felis, tristique</div>
                            <div class="footer-sub-link">egestas et, convallis ac velitn consequat nec luctus</div>
                        </div>
                        <div class="footer-contact-items">
                            <div class="footer-contact-item">
                                <div class="footer-contact-icon">📞</div>
                                <div class="footer-contact-text">Phone: (+63) 236 6322</div>
                            </div>
                            <div class="footer-contact-item">
                                <div class="footer-contact-icon">🕒</div>
                                <div class="footer-contact-text-multi">
                                    <div class="footer-contact-text">Mon - Fri: 10am - 6pm</div>
                                    <div class="footer-contact-text">Sat - Sun: 10am - 6pm</div>
                                </div>
                            </div>
                            <div class="footer-contact-item">
                                <div class="footer-contact-icon">✉️</div>
                                <div class="footer-contact-text">public@news.com</div>
                            </div>
                            <div class="footer-contact-item">
                                <div class="footer-contact-icon">📍</div>
                                <div class="footer-contact-text-multi">
                                    <div class="footer-contact-text">639 Jade Valley,</div>
                                    <div class="footer-contact-text">Washington Dc</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-shipping-section">
                    <div class="footer-shipping-info">Shipping Information</div>
                    <div class="footer-shipping-text">
                        <div class="footer-shipping-line">Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. Ut sit amet erat nec nibh</div>
                        <div class="footer-shipping-line">rhoncus varius in non lorem. Donec interdum, lectus in convallis pulvinar, enim elit porta sapien,</div>
                        <div class="footer-shipping-line">vel finibus erat felis sed neque. Etiam aliquet neque sagittis erat tincidunt aliquam.</div>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">© Copyright 2025</div>
        </div>
    `,
    contact: `
        <!-- Contact Us Hero Section -->
        <div class="contact-hero-section">
            <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/hero%20(2).png"
                alt="Contact Hero Image" class="contact-hero-image">
        </div>

        <!-- Contact Icons Section -->
        <div class="contact-icons-section">
            <div class="contact-icon-item">
                <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/icon%20(1).png"
                    alt="Location Icon">
                <div class="contact-icon-text">Our Location</div>
                <div class="contact-icon-details">
                    1234 NW Bobcat Lane, St.<br>
                    Robert, MO 65584-5678
                </div>
            </div>
            <div class="contact-icon-item">
                <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/icon%20(2).png"
                    alt="Time Icon">
                <div class="contact-icon-text">Operating Time</div>
                <div class="contact-icon-details">
                    Monday - Friday: 9am - 6 pm<br>
                    Weekends: 10:30 am - 6pm
                </div>
            </div>
            <div class="contact-icon-item">
                <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/icon%20(3).png"
                    alt="Email Icon">
                <div class="contact-icon-text">Our Email</div>
                <div class="contact-icon-details">
                    best@shop.com<br>
                    info@bestshop.com
                </div>
            </div>
            <div class="contact-icon-item">
                <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/icon%20(4).png"
                    alt="Phone Icon">
                <div class="contact-icon-text">Call Us</div>
                <div class="contact-icon-details">
                    (268)142-8413<br>
                    (760)265-2917
                </div>
            </div>
        </div>

        <!-- Contact Form Section -->
        <div class="contact-form-section">
            <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/contactus2.jpg"
                alt="Contact Us" class="contact-form-image">
            <div class="contact-form-right">
                <div class="feedback-title">Your Feedback Is Much Appreciated!</div>
                <div class="feedback-subtitle">We will contact you when you complete the following form!</div>
                <div class="form-label">Your Name *</div>
                <input type="text" class="form-input" id="contact-name">
                <div class="form-label">Your Email Address *</div>
                <input type="email" class="form-input" id="contact-email">
                <div class="form-label">Topic *</div>
                <input type="text" class="form-input" id="contact-topic">
                <div class="form-label">Your Message *</div>
                <textarea class="form-textarea" id="contact-message"></textarea>
                <button class="send-button" id="contact-send-btn">SEND</button>
            </div>
        </div>

        <!-- Footer Section -->
        <div class="footer-section">
            <div class="footer-header">
                <div class="footer-title">Our Benefits</div>
                <div class="footer-vertical-lines">
                    <div class="footer-line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                    <div class="footer-line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                    <div class="footer-line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                    <div class="footer-line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                    <div class="footer-line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                    <div class="footer-line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                    <div class="footer-line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                    <div class="footer-line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                </div>
                <div class="footer-horizontal-images">
                    <div class="footer-horizontal-img"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/footer1.png" alt="Footer 1"></div>
                    <div class="footer-horizontal-img"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/footer2.png" alt="Footer 2"></div>
                    <div class="footer-horizontal-img"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/footer3.png" alt="Footer 3"></div>
                    <div class="footer-horizontal-img"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/footer4.png" alt="Footer 4"></div>
                </div>
            </div>
            <div class="footer-content">
                <div class="footer-links-container">
                    <div class="footer-about-us-container">
                        <div class="footer-link">About Us</div>
                        <div class="footer-sub-links">
                            <div class="footer-sub-link">Organisation</div>
                            <div class="footer-sub-link">Partners</div>
                            <div class="footer-sub-link">Clients</div>
                        </div>
                    </div>
                    <div class="footer-interesting-links-container">
                        <div class="footer-link">Interesting Links</div>
                        <div class="footer-sub-links">
                            <div class="footer-sub-link">Photo Gallery</div>
                            <div class="footer-sub-link">Our Team</div>
                            <div class="footer-sub-link">Socials</div>
                        </div>
                    </div>
                    <div class="footer-achievements-container">
                        <div class="footer-link">Achievements</div>
                        <div class="footer-sub-links">
                            <div class="footer-sub-link">Winning Awards</div>
                            <div class="footer-sub-link">Press</div>
                            <div class="footer-sub-link">Our Amazing Clients</div>
                        </div>
                    </div>
                    <div class="footer-contact-us-container">
                        <div class="footer-link">Contact Us</div>
                        <div class="footer-sub-links">
                            <div class="footer-sub-link">Bendum dolor eu varius. Morbi fermentum velitsodales</div>
                            <div class="footer-sub-link">egetonec. volutpat orci. Sed ipsum felis, tristique</div>
                            <div class="footer-sub-link">egestas et, convallis ac velitn consequat nec luctus</div>
                        </div>
                        <div class="footer-contact-items">
                            <div class="footer-contact-item">
                                <div class="footer-contact-icon">📞</div>
                                <div class="footer-contact-text">Phone: (+63) 236 6322</div>
                            </div>
                            <div class="footer-contact-item">
                                <div class="footer-contact-icon">🕒</div>
                                <div class="footer-contact-text-multi">
                                    <div class="footer-contact-text">Mon - Fri: 10am - 6pm</div>
                                    <div class="footer-contact-text">Sat - Sun: 10am - 6pm</div>
                                </div>
                            </div>
                            <div class="footer-contact-item">
                                <div class="footer-contact-icon">✉️</div>
                                <div class="footer-contact-text">public@news.com</div>
                            </div>
                            <div class="footer-contact-item">
                                <div class="footer-contact-icon">📍</div>
                                <div class="footer-contact-text-multi">
                                    <div class="footer-contact-text">639 Jade Valley,</div>
                                    <div class="footer-contact-text">Washington Dc</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-shipping-section">
                    <div class="footer-shipping-info">Shipping Information</div>
                    <div class="footer-shipping-text">
                        <div class="footer-shipping-line">Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. Ut sit amet erat nec nibh</div>
                        <div class="footer-shipping-line">rhoncus varius in non lorem. Donec interdum, lectus in convallis pulvinar, enim elit porta sapien,</div>
                        <div class="footer-shipping-line">vel finibus erat felis sed neque. Etiam aliquet neque sagittis erat tincidunt aliquam.</div>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">© Copyright 2025</div>
        </div>
    `,
    product: `
        <div class="product-page">
            <!-- New section with two columns -->
            <div class="product-content-section">
                <div class="product-image-section">
                    <img id="main-product-image" src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/global1.png"
                        alt="Global Image">
                </div>
                <div class="product-text-section">
                    <div class="product-text-line">Global Explorer Max Comfort</div>
                    <div class="product-text-line">Suitcase Pro</div>

                    <!-- Stars -->
                    <div class="product-stars">
                        <span class="product-star yellow">★</span>
                        <span class="product-star yellow">★</span>
                        <span class="product-star yellow">★</span>
                        <span class="product-star yellow">★</span>
                        <span class="product-star gray">★</span>
                </div>

                    <!-- Price -->
                    <div class="product-price">$250</div>

                    <!-- Description -->
                    <div class="product-description">
                        The new Global Explorer Max Comfort Suitcase Pro is a bold reimagining of<br>
                        travel essentials, designed to elevate every journey. Made with at least 30%<br>
                        recycled materials, its lightweight yet impact-resistant shell combines eco-<br>
                        conscious innovation with rugged durability.
                    </div>

                    <!-- Additional text -->
                    <div class="product-additional-text">
                        The ergonomic handle and GlideMotion spinner wheels ensure effortless<br>
                        mobility while making a statement in sleek design. Inside, the modular<br>
                        compartments and adjustable straps keep your belongings secure and<br>
                        neatly organized, no matter the destination.
                    </div>

                    <!-- Size, Color, Category with dropdowns -->
                    <div class="product-info-item">Size</div>
                    <div class="product-dropdown-container">
                        <select class="product-dropdown-select">
                            <option value="" disabled selected>Choose option</option>
                            <option value="small">Small (20")</option>
                            <option value="medium">Medium (24")</option>
                            <option value="large">Large (28")</option>
                            <option value="xlarge">Extra Large (32")</option>
                        </select>
                    </div>

                    <div class="product-info-item">Color</div>
                    <div class="product-dropdown-container">
                        <select class="product-dropdown-select">
                            <option value="" disabled selected>Choose option</option>
                            <option value="black">Black</option>
                            <option value="navy">Navy Blue</option>
                            <option value="red">Burgundy Red</option>
                            <option value="silver">Silver</option>
                            <option value="green">Forest Green</option>
                        </select>
                    </div>

                    <div class="product-info-item">Category</div>
                    <div class="product-dropdown-container">
                        <select class="product-dropdown-select">
                            <option value="" disabled selected>Choose option</option>
                            <option value="carry-on">Carry-On</option>
                            <option value="checked">Checked Luggage</option>
                            <option value="duffel">Duffel Bag</option>
                            <option value="backpack">Travel Backpack</option>
                            <option value="business">Business Collection</option>
                        </select>
                    </div>

                    <!-- Quantity and Add To Cart -->
                    <div class="product-action-container">
                        <div class="product-quantity">
                            <button class="product-quantity-button">-</button>
                            <span class="product-quantity-number">1</span>
                            <button class="product-quantity-button">+</button>
                        </div>
                        <div class="product-add-to-cart" data-product='{"name": "Global Explorer Max Comfort Suitcase Pro", "price": 250, "image": "https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/global1.png"}'>
                            <span class="product-add-to-cart-text">Add To Cart</span>
                        </div>
                    </div>

                    <!-- Payments -->
                    <div class="product-payments">
                        <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Payments.png"
                            alt="Payments">
                    </div>
                </div>
            </div>

            <!-- New section with DETAILS, REVIEWS, SHIPPING POLICY -->
            <div class="product-tabs-section">
                <div class="product-tabs-container">
                    <div class="product-tab active" data-tab="details">DETAILS</div>
                    <div class="product-tab" data-tab="reviews">REVIEWS</div>
                    <div class="product-tab" data-tab="shipping">SHIPPING POLICY</div>
                </div>
            </div>

            <!-- Tab content -->
            <div class="product-tab-content active" id="details-tab">
                <div class="product-long-text-content">
                    Vestibulum commodo sapien non elit porttitor, vitae volutpat nibh mollis. Nulla porta risus id neque tempor,
                    in efficitur justo imperdiet. Etiam a ex at<br>
                    ante tincidunt imperdiet. Nunc congue ex vel nisl viverra, sit amet aliquet lectus ullamcorper. Praesent
                    luctus lacus non lorem elementum, eu tristique<br>
                    sapien suscipit. Sed bibendum, ipsum nec viverra malesuada, erat nisi sodales purus, eget hendrerit dui
                    ligula eu enim. Ut non est nisi. Pellentesque<br>
                    tristique pretium dolor eu commodo. Proin iaculis nibh vitae lectus mollis bibendum. Quisque varius eget
                    urna sit amet luctus. Suspendisse potenti.<br>
                    Curabitur ac placerat est, sit amet sodales risus. Pellentesque viverra dui auctor, ullamcorper turpis
                    pharetra, facilisis quam.
                </div>
                <div class="product-additional-text-content" style="margin-top: 15px;">
                    Proin iaculis nibh vitae lectus mollis bibendum. Quisque varius eget urna sit amet luctus. Suspendisse
                    potenti. Curabitur ac placerat est, sit amet sodales<br>
                    risus. Pellentesque viverra dui auctor, ullamcorper turpis pharetra, facilisis quam. Proin iaculis nibh
                    vitae lectus mollis bibendum.
                </div>
                <div class="product-additional-text-content" style="margin-top: 15px;">
                    Quisque varius eget urna sit amet luctus. Suspendisse potenti. Curabitur ac placerat est, sit amet sodales
                    risus. Pellentesque viverra dui auctor,<br>
                    ullamcorper turpis pharetra, facilisis quam.
                </div>
            </div>

            <div class="product-tab-content" id="reviews-tab">
                <!-- Reviews content -->
                <div class="reviews-container">
                    <div class="reviews-split-section">
                        <div class="reviews-left-half">
                            <div class="review-count">1 review for Global Explorer Max Comfort Suitcase Pro</div>
                        </div>
                        <div class="reviews-right-half">
                            <div class="add-review-section">
                                <div class="add-review-text">Add Review</div>
                                <div class="email-note">Your email address won't be shared with anybody. Required fields
                                    have the
                                    symbol *</div>
                                <div class="rate-product-container">
                                    <div class="rate-product">RATE PRODUCT</div>
                                    <div class="rate-stars">
                                        <span class="rate-star">★</span>
                                        <span class="rate-star">★</span>
                                        <span class="rate-star">★</span>
                                        <span class="rate-star">★</span>
                                        <span class="rate-star">★</span>
                                    </div>
                                </div>
                                <div class="review-rectangle">
                                    <textarea class="review-textarea" placeholder=" "></textarea>
                                    <div class="review-label">Your Review*</div>
                                </div>
                                <div class="small-rectangles-container">
                                    <div class="small-rectangle">
                                        <input type="text" class="small-input" placeholder=" ">
                                        <div class="field-label">Your Name*</div>
                                    </div>
                                    <div class="small-rectangle">
                                        <input type="email" class="small-input" placeholder=" ">
                                        <div class="field-label">Your Email*</div>
                                    </div>
                                </div>
                                <div class="save-info-container">
                                    <div class="checkbox-square"></div>
                                    <div class="save-text">Save my name, email, and website in this browser for when I leave
                                        another
                                        comment.</div>
                                </div>
                                <button class="reviews-submit-btn">SUBMIT</button>
                            </div>
                        </div>
                    </div>
                    <div class="reviews-image-container">
                        <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/img.png"
                            alt="Review" class="review-image">
                        <div class="review-content">
                            <div class="reviewer-info">
                                <div class="reviewer-name">Ella Harper</div>
                                <div class="review-date">/ June 11, 2025</div>
                                <div class="review-stars">
                                    <span class="review-star yellow">★</span>
                                    <span class="review-star yellow">★</span>
                                    <span class="review-star yellow">★</span>
                                    <span class="review-star yellow">★</span>
                                    <span class="review-star gray">★</span>
                                </div>
                            </div>
                            <div class="review-text">
                                Proin iaculis nibh vitae lectus mollis bibendum. Quisque<br>
                                varius eget urna sit amet luctus. Suspendisse potenti<br>
                                curabitur ac placerat est, sit amet sodales risus.
                            </div>
                        </div>
                    </div>
                    <div class="user-reviews-container" id="user-reviews-container">
                        <!-- User reviews will be added here -->
                    </div>
                </div>
            </div>

            <div class="product-tab-content" id="shipping-tab">
                <div class="product-long-text-content">
                    Shipping Policy content goes here. We offer worldwide shipping with various delivery options.
                    Standard shipping takes 5-7 business days, while express shipping takes 2-3 business days.
                    Free shipping is available for orders over $100.
                </div>
            </div>

            <!-- New section You May Also Like -->
            <div class="product-recommendations-section">
                <div class="product-recommendations-title">You May Also Like</div>
                <div class="product-recommendation-images">
                    <div class="product-recommendation-item">
                        <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Like1.png"
                            alt="Product 1" class="product-image" data-page="product" data-image="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Like1.png">
                        <div class="product-sale-badge">
                            <span class="product-sale-text">SALE</span>
                        </div>
                        <div class="product-details">
                            <p class="product-line">Vel vestibulum elit</p>
                            <p class="product-line">tuvel euqen.</p>
                            <div class="price-container">
                                <span class="old-price">$222.22</span>
                                <span class="new-price">$200</span>
                            </div>
                            <div class="product-recommendation-add-to-cart" data-product='{"name": "Vel vestibulum elit tuvel euqen", "price": 200, "image": "https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Like1.png"}'>
                                <span class="product-recommendation-add-to-cart-text">Add To Cart</span>
                            </div>
                        </div>
                    </div>
                    <div class="product-recommendation-item">
                        <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/catalog3.png"
                            alt="Product 2" class="product-image" data-page="product" data-image="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/catalog3.png">
                        <div class="product-details">
                            <p class="product-line">Vel vestibulum elit</p>
                            <p class="product-line">tuvel euqen.</p>
                            <div class="product-recommendation-price">$200</div>
                            <div class="product-recommendation-add-to-cart" data-product='{"name": "Vel vestibulum elit tuvel euqen", "price": 200, "image": "https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/catalog3.png"}'>
                                <span class="product-recommendation-add-to-cart-text">Add To Cart</span>
                            </div>
                        </div>
                    </div>
                    <div class="product-recommendation-item">
                        <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Like3.png"
                            alt="Product 3" class="product-image" data-page="product" data-image="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Like3.png">
                        <div class="product-sale-badge">
                            <span class="product-sale-text">SALE</span>
                        </div>
                        <div class="product-details">
                            <p class="product-line">Vel vestibulum elit</p>
                            <p class="product-line">tuvel euqen.</p>
                            <div class="price-container">
                                <span class="old-price">$222.22</span>
                                <span class="new-price">$200</span>
                            </div>
                            <div class="product-recommendation-add-to-cart" data-product='{"name": "Vel vestibulum elit tuvel euqen", "price": 200, "image": "https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Like3.png"}'>
                                <span class="product-recommendation-add-to-cart-text">Add To Cart</span>
                            </div>
                        </div>
                    </div>
                    <div class="product-recommendation-item">
                        <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Like4.png"
                            alt="Product 4" class="product-image" data-page="product" data-image="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Like4.png">
                        <div class="product-details">
                            <p class="product-line">Vel vestibulum elit</p>
                            <p class="product-line">tuvel euqen.</p>
                            <div class="product-recommendation-price">$200</div>
                            <div class="product-recommendation-add-to-cart" data-product='{"name": "Vel vestibulum elit tuvel euqen", "price": 200, "image": "https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Like4.png"}'>
                                <span class="product-recommendation-add-to-cart-text">Add To Cart</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Footer section -->
            <div class="footer-section">
                <div class="footer-header">
                    <div class="footer-title">Our Benefits</div>
                    <div class="footer-vertical-lines">
                        <div class="footer-line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                        <div class="footer-line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                        <div class="footer-line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                        <div class="footer-line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                        <div class="footer-line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                        <div class="footer-line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                        <div class="footer-line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                        <div class="footer-line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                    </div>
                    <div class="footer-horizontal-images">
                        <div class="footer-horizontal-img"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/footer1.png" alt="Footer 1"></div>
                        <div class="footer-horizontal-img"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/footer2.png" alt="Footer 2"></div>
                        <div class="footer-horizontal-img"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/footer3.png" alt="Footer 3"></div>
                        <div class="footer-horizontal-img"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/footer4.png" alt="Footer 4"></div>
                </div>
            </div>
            <div class="footer-content">
                <div class="footer-links-container">
                    <div class="footer-about-us-container">
                        <div class="footer-link">About Us</div>
                        <div class="footer-sub-links">
                            <div class="footer-sub-link">Organisation</div>
                            <div class="footer-sub-link">Partners</div>
                            <div class="footer-sub-link">Clients</div>
                        </div>
                    </div>
                    <div class="footer-interesting-links-container">
                        <div class="footer-link">Interesting Links</div>
                        <div class="footer-sub-links">
                            <div class="footer-sub-link">Photo Gallery</div>
                            <div class="footer-sub-link">Our Team</div>
                            <div class="footer-sub-link">Socials</div>
                        </div>
                    </div>
                    <div class="footer-achievements-container">
                        <div class="footer-link">Achievements</div>
                        <div class="footer-sub-links">
                            <div class="footer-sub-link">Winning Awards</div>
                            <div class="footer-sub-link">Press</div>
                            <div class="footer-sub-link">Our Amazing Clients</div>
                        </div>
                    </div>
                    <div class="footer-contact-us-container">
                        <div class="footer-link">Contact Us</div>
                        <div class="footer-sub-links">
                            <div class="footer-sub-link">Bendum dolor eu varius. Morbi fermentum velitsodales</div>
                            <div class="footer-sub-link">egetonec. volutpat orci. Sed ipsum felis, tristique</div>
                            <div class="footer-sub-link">egestas et, convallis ac velitn consequat nec luctus</div>
                        </div>
                        <div class="footer-contact-items">
                            <div class="footer-contact-item">
                                <div class="footer-contact-icon">📞</div>
                                <div class="footer-contact-text">Phone: (+63) 236 6322</div>
                            </div>
                            <div class="footer-contact-item">
                                <div class="footer-contact-icon">🕒</div>
                                <div class="footer-contact-text-multi">
                                    <div class="footer-contact-text">Mon - Fri: 10am - 6pm</div>
                                    <div class="footer-contact-text">Sat - Sun: 10am - 6pm</div>
                                </div>
                            </div>
                            <div class="footer-contact-item">
                                <div class="footer-contact-icon">✉️</div>
                                <div class="footer-contact-text">public@news.com</div>
                            </div>
                            <div class="footer-contact-item">
                                <div class="footer-contact-icon">📍</div>
                                <div class="footer-contact-text-multi">
                                    <div class="footer-contact-text">639 Jade Valley,</div>
                                    <div class="footer-contact-text">Washington Dc</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-shipping-section">
                    <div class="footer-shipping-info">Shipping Information</div>
                    <div class="footer-shipping-text">
                        <div class="footer-shipping-line">Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. Ut sit amet erat nec nibh</div>
                        <div class="footer-shipping-line">rhoncus varius in non lorem. Donec interdum, lectus in convallis pulvinar, enim elit porta sapien,</div>
                        <div class="footer-shipping-line">vel finibus erat felis sed neque. Etiam aliquet neque sagittis erat tincidunt aliquam.</div>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">© Copyright 2025</div>
        </div>
    `,
    user: `
        <!-- Added image -->
        <img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/hero%20(3).png" alt="Hero Image"
            class="full-width-image">

        <!-- Table header -->
        <div class="table-container">
            <div class="table-header">
                <div class="table-column">Image</div>
                <div class="table-column">Product Name</div>
                <div class="table-column">Price</div>
                <div class="table-column">Quantity</div>
                <div class="table-column">Total</div>
                <div class="table-column">Delete</div>
            </div>
        </div>

        <!-- Table rows -->
        <div class="table-rows-container" id="cart-items-container">
            <!-- Cart items will be dynamically added here -->
        </div>

        <!-- Row separators -->
        <div class="row-separator"></div>
        <div class="row-separator"></div>
        <div class="row-separator"></div>

        <!-- Buttons -->
        <div class="buttons-container">
            <button class="action-btn" onclick="loadPage('catalog')">CONTINUE SHOPPING</button>
            <button class="action-btn" onclick="clearCart()">CLEAR SHOPPING CART</button>
        </div>

        <!-- Rectangle -->
        <div class="summary-rectangle">
            <div class="summary-content">
                <div class="summary-labels">
                    <div class="summary-text">Sub Total</div>
                    <div class="summary-text">Shipping</div>
                    <div class="summary-text">Total</div>
                </div>
                <div class="summary-values">
                    <div class="summary-value" id="cart-subtotal-summary">$0</div>
                    <div class="summary-value" id="cart-shipping-summary">$0</div>
                    <div class="summary-value" id="cart-total-summary">$0</div>
                </div>
            </div>
            <button class="checkout-btn">CHECKOUT</button>
        </div>

        <!-- Footer -->
        <div class="footer-section">
            <div class="footer-header">
                <div class="footer-title">Our Benefits</div>
                <div class="footer-vertical-lines">
                    <div class="footer-line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                    <div class="footer-line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                    <div class="footer-line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                    <div class="footer-line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                    <div class="footer-line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                    <div class="footer-line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                    <div class="footer-line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                    <div class="footer-line"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/Path%2022.png" alt="Line"></div>
                </div>
                <div class="footer-horizontal-images">
                    <div class="footer-horizontal-img"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/footer1.png" alt="Footer 1"></div>
                    <div class="footer-horizontal-img"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/footer2.png" alt="Footer 2"></div>
                    <div class="footer-horizontal-img"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/footer3.png" alt="Footer 3"></div>
                    <div class="footer-horizontal-img"><img src="https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/footer4.png" alt="Footer 4"></div>
                </div>
            </div>
            <div class="footer-content">
                <div class="footer-links-container">
                    <div class="footer-about-us-container">
                        <div class="footer-link">About Us</div>
                        <div class="footer-sub-links">
                            <div class="footer-sub-link">Organisation</div>
                            <div class="footer-sub-link">Partners</div>
                            <div class="footer-sub-link">Clients</div>
                        </div>
                    </div>
                    <div class="footer-interesting-links-container">
                        <div class="footer-link">Interesting Links</div>
                        <div class="footer-sub-links">
                            <div class="footer-sub-link">Photo Gallery</div>
                            <div class="footer-sub-link">Our Team</div>
                            <div class="footer-sub-link">Socials</div>
                        </div>
                    </div>
                    <div class="footer-achievements-container">
                        <div class="footer-link">Achievements</div>
                        <div class="footer-sub-links">
                            <div class="footer-sub-link">Winning Awards</div>
                            <div class="footer-sub-link">Press</div>
                            <div class="footer-sub-link">Our Amazing Clients</div>
                        </div>
                    </div>
                    <div class="footer-contact-us-container">
                        <div class="footer-link">Contact Us</div>
                        <div class="footer-sub-links">
                            <div class="footer-sub-link">Bendum dolor eu varius. Morbi fermentum velitsodales</div>
                            <div class="footer-sub-link">egetonec. volutpat orci. Sed ipsum felis, tristique</div>
                            <div class="footer-sub-link">egestas et, convallis ac velitn consequat nec luctus</div>
                        </div>
                        <div class="footer-contact-items">
                            <div class="footer-contact-item">
                                <div class="footer-contact-icon">📞</div>
                                <div class="footer-contact-text">Phone: (+63) 236 6322</div>
                            </div>
                            <div class="footer-contact-item">
                                <div class="footer-contact-icon">🕒</div>
                                <div class="footer-contact-text-multi">
                                    <div class="footer-contact-text">Mon - Fri: 10am - 6pm</div>
                                    <div class="footer-contact-text">Sat - Sun: 10am - 6pm</div>
                                </div>
                            </div>
                            <div class="footer-contact-item">
                                <div class="footer-contact-icon">✉️</div>
                                <div class="footer-contact-text">public@news.com</div>
                            </div>
                            <div class="footer-contact-item">
                                <div class="footer-contact-icon">📍</div>
                                <div class="footer-contact-text-multi">
                                    <div class="footer-contact-text">639 Jade Valley,</div>
                                    <div class="footer-contact-text">Washington Dc</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-shipping-section">
                    <div class="footer-shipping-info">Shipping Information</div>
                    <div class="footer-shipping-text">
                        <div class="footer-shipping-line">Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. Ut sit amet erat nec nibh</div>
                        <div class="footer-shipping-line">rhoncus varius in non lorem. Donec interdum, lectus in convallis pulvinar, enim elit porta sapien,</div>
                        <div class="footer-shipping-line">vel finibus erat felis sed neque. Etiam aliquet neque sagittis erat tincidunt aliquam.</div>
                    </div>
                </div>
            </div>
            <div class="footer-copyright">© Copyright 2025</div>
        </div>
    `
};

// Function to change page
function loadPage(page) {
    // If user is not logged in and trying to access cart page, show login modal
    if (page === 'user' && !isLoggedIn) {
        openLoginModal();
        return;
    }

    const container = document.getElementById('content-container');
    const navLinks = document.querySelectorAll('.nav-link');

    // Add fade-out animation
    container.classList.add('fade-out');

    setTimeout(() => {
        // Update content
        container.innerHTML = pages[page];

        // Remove fade-out animation
        container.classList.remove('fade-out');

        // Update active menu item
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === page) {
                link.classList.add('active');
            }
        });

        // Add event handlers for product images
        addProductImageListeners();

        // Add handlers for tabs on product page
        if (page === 'product') {
            setupProductPage();
            setupProductTabs();
            setupAddToCart();
            setupReviewsForm();
        }

        // Add handlers for cart page
        if (page === 'user') {
            setupCartPage();
            updateCartSummary();
        }

        // Add event handlers for Add to Cart buttons
        setupAddToCartButtons();

        // Add handlers for contact form
        if (page === 'contact') {
            setupContactForm();
        }

        // Scroll to top of page
        window.scrollTo(0, 0);
    }, 300);
}

// Function to setup product page
function setupProductPage() {
    const mainImage = document.getElementById('main-product-image');
    if (mainImage) {
        // Check if there's a saved image in sessionStorage
        const clickedImageUrl = sessionStorage.getItem('clickedProductImage');
        if (clickedImageUrl) {
            mainImage.src = clickedImageUrl;
            sessionStorage.removeItem('clickedProductImage');
        }
    }
}

// Function to add event handlers for Add to Cart buttons
function setupAddToCartButtons() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn, .product-add-to-cart, .product-recommendation-add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const productData = this.getAttribute('data-product');
            if (productData) {
                const product = JSON.parse(productData);
                addToCart(product);
            }
        });
    });
}

// Function to add product to cart
function addToCart(product) {
    // Check if product is already in cart
    const existingProduct = cart.find(item => item.name === product.name && item.price === product.price);
    
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    // Update cart display
    updateCartDisplay();
    
    // Show notification
    showAddToCartNotification(product.name);
}

// Function to update cart display
function updateCartDisplay() {
    const cartBadge = document.getElementById('cart-badge');
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    
    if (cartBadge) {
        cartBadge.textContent = totalItems;
        cartBadge.style.display = totalItems > 0 ? 'flex' : 'none';
    }
    
    // Update cart modal
    updateCartModal();
    
    // Update cart page if it's active
    if (document.querySelector('.table-rows-container')) {
        updateCartPage();
        updateCartSummary();
    }
}

// Function to update cart modal
function updateCartModal() {
    const subtotalElement = document.getElementById('cart-subtotal');
    const shippingElement = document.getElementById('cart-shipping-value');
    const totalElement = document.getElementById('cart-total');
    
    if (subtotalElement && shippingElement && totalElement) {
        const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        // Shipping 30 if there are items, otherwise 0
        const shipping = cart.length > 0 ? 30 : 0;
        const total = subtotal + shipping;

        subtotalElement.textContent = `$${subtotal}`;
        shippingElement.textContent = `$${shipping}`;
        totalElement.textContent = `$${total}`;
    }
}

// Function to update cart page
function updateCartPage() {
    const container = document.getElementById('cart-items-container');
    if (!container) return;

    container.innerHTML = '';

    // Create columns
    const imagesColumn = document.createElement('div');
    imagesColumn.className = 'images-column';
    
    const productNamesColumn = document.createElement('div');
    productNamesColumn.className = 'product-names-column';
    
    const pricesColumn = document.createElement('div');
    pricesColumn.className = 'prices-column';
    
    const quantityColumn = document.createElement('div');
    quantityColumn.className = 'quantity-column';
    
    const totalsColumn = document.createElement('div');
    totalsColumn.className = 'totals-column';
    
    const deleteColumn = document.createElement('div');
    deleteColumn.className = 'delete-column';

    // Add items to columns
    cart.forEach((item, index) => {
        // Image
        const img = document.createElement('img');
        img.src = item.image;
        img.alt = item.name;
        img.className = 'cart-image';
        imagesColumn.appendChild(img);

        // Product name
        const name = document.createElement('div');
        name.className = 'product-name';
        name.textContent = item.name;
        productNamesColumn.appendChild(name);

        // Price
        const price = document.createElement('div');
        price.className = 'price';
        price.textContent = `$${item.price}`;
        pricesColumn.appendChild(price);

        // Quantity
        const quantityControl = document.createElement('div');
        quantityControl.className = 'quantity-control';
        
        const minusBtn = document.createElement('button');
        minusBtn.className = 'quantity-btn minus';
        minusBtn.textContent = '-';
        minusBtn.onclick = () => updateQuantity(index, -1);
        
        const quantityValue = document.createElement('span');
        quantityValue.className = 'quantity-value';
        quantityValue.textContent = item.quantity;
        
        const plusBtn = document.createElement('button');
        plusBtn.className = 'quantity-btn plus';
        plusBtn.textContent = '+';
        plusBtn.onclick = () => updateQuantity(index, 1);
        
        quantityControl.appendChild(minusBtn);
        quantityControl.appendChild(quantityValue);
        quantityControl.appendChild(plusBtn);
        quantityColumn.appendChild(quantityControl);

        // Total price
        const total = document.createElement('div');
        total.className = 'total';
        total.textContent = `$${item.price * item.quantity}`;
        totalsColumn.appendChild(total);

        // Delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.onclick = () => removeFromCart(index);
        
        const deleteIcon = document.createElement('img');
        deleteIcon.src = 'https://raw.githubusercontent.com/KarinaR-Ch/suitcases/refs/heads/main/delete.png';
        deleteIcon.alt = 'Delete';
        deleteIcon.className = 'delete-icon';
        
        deleteBtn.appendChild(deleteIcon);
        deleteColumn.appendChild(deleteBtn);
    });

    // Add columns to container
    container.appendChild(imagesColumn);
    container.appendChild(productNamesColumn);
    container.appendChild(pricesColumn);
    container.appendChild(quantityColumn);
    container.appendChild(totalsColumn);
    container.appendChild(deleteColumn);
}

// Function to update cart summary
function updateCartSummary() {
    const subtotalElement = document.getElementById('cart-subtotal-summary');
    const shippingElement = document.getElementById('cart-shipping-summary');
    const totalElement = document.getElementById('cart-total-summary');
    
    if (subtotalElement && shippingElement && totalElement) {
        const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
        const shipping = cart.length > 0 ? 30 : 0; // Fixed shipping cost
        const total = subtotal + shipping;
        
        subtotalElement.textContent = `$${subtotal}`;
        shippingElement.textContent = `$${shipping}`;
        totalElement.textContent = `$${total}`;
    }
}

// Function to update product quantity
function updateQuantity(index, change) {
    if (cart[index]) {
        cart[index].quantity += change;
        
        if (cart[index].quantity <= 0) {
            cart.splice(index, 1);
        }
        
        updateCartDisplay();
    }
}

// Function to remove product from cart
function removeFromCart(index) {
    if (cart[index]) {
        cart.splice(index, 1);
        updateCartDisplay();
    }
}

// Function to clear cart
function clearCart() {
    cart = [];
    updateCartDisplay();
}

// Function to show add to cart notification
function showAddToCartNotification(productName) {
    // Create notification
    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = 'rgba(185, 39, 112, 0.9)';
    notification.style.color = 'white';
    notification.style.padding = '15px 20px';
    notification.style.borderRadius = '5px';
    notification.style.zIndex = '10000';
    notification.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
    notification.style.fontFamily = 'Montserrat, sans-serif';
    notification.style.fontSize = '16px';
    notification.style.transition = 'all 0.3s ease';
    
    notification.innerHTML = `
        <div>Product "${productName}" has been added to the cart!</div>
    `;
    
    document.body.appendChild(notification);
    
    // Automatically remove notification after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Function to show review notification
function showReviewNotification() {
    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = 'rgba(185, 39, 112, 0.9)';
    notification.style.color = 'white';
    notification.style.padding = '15px 20px';
    notification.style.borderRadius = '5px';
    notification.style.zIndex = '10000';
    notification.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
    notification.style.fontFamily = 'Montserrat', sans-serif;
    notification.style.fontSize = '16px';
    notification.style.transition = 'all 0.3s ease';
    
    notification.innerHTML = `
        <div>Your review has been submitted successfully!</div>
    `;
    
    document.body.appendChild(notification);
    
    // Automatically remove notification after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Function to setup contact form
function setupContactForm() {
    const sendButton = document.getElementById('contact-send-btn');
    if (sendButton) {
        sendButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('contact-name').value;
            const email = document.getElementById('contact-email').value;
            const topic = document.getElementById('contact-topic').value;
            const message = document.getElementById('contact-message').value;
            
            // Check if required fields are filled
            if (!name || !email || !topic || !message) {
                return;
            }
            
            // Show success notification
            showContactNotification();
            
            // Clear form
            document.getElementById('contact-name').value = '';
            document.getElementById('contact-email').value = '';
            document.getElementById('contact-topic').value = '';
            document.getElementById('contact-message').value = '';
        });
    }
}

// Function to show contact form notification
function showContactNotification() {
    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = 'rgba(185, 39, 112, 0.9)';
    notification.style.color = 'white';
    notification.style.padding = '15px 20px';
    notification.style.borderRadius = '5px';
    notification.style.zIndex = '10000';
    notification.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
    notification.style.fontFamily = 'Montserrat', sans-serif;
    notification.style.fontSize = '16px';
    notification.style.transition = 'all 0.3s ease';
    
    notification.innerHTML = `
        <div>Your message has been sent successfully!</div>
    `;
    
    document.body.appendChild(notification);
    
    // Automatically remove notification after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Add event handlers for navigation
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = e.target.getAttribute('data-page');
        if (page) {
            loadPage(page);
        }
    });
});

// CHANGE: Change handler for user icon
document.querySelector('.user-icon').addEventListener('click', (e) => {
    e.preventDefault();
    if (isLoggedIn) {
        loadPage('user');
    } else {
        openLoginModal();
    }
});

// Add handler for cart icon
document.querySelector('.cart-icon').addEventListener('click', (e) => {
    e.preventDefault();
    openCartModal();
});

// Load home page on load
document.addEventListener('DOMContentLoaded', () => {
    checkRememberedUser();
    if (!isLoggedIn) {
        loadPage('home');
    }
    updateCartDisplay();
});

// Functions for the catalog
function changePage(pageNumber) {
    // Page change logic without alert
}

function nextPage() {
    // Next page logic without alert
}

function focusSidebarSearch() {
    const searchInput = document.querySelector('.sidebar-search-input');
    if (searchInput) {
        searchInput.focus();
    }
}

function performSidebarSearch() {
    const searchInput = document.querySelector('.sidebar-search-input');
    if (searchInput) {
        const searchTerm = searchInput.value;
    }
}

// Adding event handler for sidebar search
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('sidebar-search-icon') ||
        e.target.classList.contains('sidebar-search-container')) {
        focusSidebarSearch();
    }
});

document.addEventListener('keypress', (e) => {
    if (e.target.classList.contains('sidebar-search-input') && e.key === 'Enter') {
        performSidebarSearch();
    }
});

// Function for adding event handlers for product images
function addProductImageListeners() {
    const productImages = document.querySelectorAll('.product-image, .suitcase-image, .new-product-image');
    productImages.forEach(img => {
        img.addEventListener('click', (e) => {
            e.preventDefault();
            const imageUrl = img.getAttribute('data-image') || img.src;
            sessionStorage.setItem('clickedProductImage', imageUrl);
            loadPage('product');
        });
    }); 
}

// Feature for setting up tabs on product page
function setupProductTabs() {
    const tabs = document.querySelectorAll('.product-tab');
    const tabContents = document.querySelectorAll('.product-tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab');

            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to current tab
            tab.classList.add('active');

            // Show relevant content
            const content = document.getElementById(`${tabId}-tab`);
            if (content) {
                content.classList.add('active');
            }
        });
    });
}

// Function for setting up Add to Cart button
function setupAddToCart() {
    const addToCartButtons = document.querySelectorAll('.product-add-to-cart, .product-add-to-cart-text, .product-recommendation-add-to-cart, .product-recommendation-add-to-cart-text');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const productData = button.getAttribute('data-product');
            if (productData) {
                const product = JSON.parse(productData);
                addToCart(product);
            }
        });
    });
}

// Cart page setup feature
function setupCartPage() {
    updateCartPage();
    updateCartSummary();
}

// Functions for login modal
function openLoginModal() {
    document.getElementById('login-modal').style.display = 'flex';
}

function closeLoginModal() {
    document.getElementById('login-modal').style.display = 'none';
}

// Review form setup feature
function setupReviewsForm() {
    // Setting stars for rating
    const stars = document.querySelectorAll('.rate-star');
    let currentRating = 0;

    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            currentRating = index + 1;
            updateStars(stars, currentRating);
        });

        star.addEventListener('mouseover', () => {
            updateStars(stars, index + 1);
        });

        star.addEventListener('mouseout', () => {
            updateStars(stars, currentRating);
        });
    });

    // Configuring form fields
    setupFormField('.review-rectangle', '.review-textarea', '.review-label');
    setupFormField('.small-rectangle:first-child', '.small-input', '.field-label');
    setupFormField('.small-rectangle:last-child', '.small-input', '.field-label');

    // Checkbox settings
    const checkbox = document.querySelector('.checkbox-square');
    checkbox.addEventListener('click', function() {
        this.classList.toggle('checked');
    });

    // Send button settings
    const submitBtn = document.querySelector('.reviews-submit-btn');
    submitBtn.addEventListener('click', submitReview);
}

// Feature to update stars
function updateStars(stars, rating) {
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

// Function for setting up form fields
function setupFormField(containerSelector, inputSelector, labelSelector) {
    const container = document.querySelector(containerSelector);
    const input = document.querySelector(inputSelector);
    const label = document.querySelector(labelSelector);

    if (input && label) {
        input.addEventListener('focus', () => {
            container.classList.add('focused');
        });

        input.addEventListener('blur', () => {
            if (!input.value) {
                container.classList.remove('focused');
            }
        });

        // If field already has value when loaded
        if (input.value) {
            container.classList.add('focused');
        }
    }
}

// Function for submitting review
function submitReview() {
    const nameInput = document.querySelector('.small-rectangle:first-child .small-input');
    const emailInput = document.querySelector('.small-rectangle:last-child .small-input');
    const reviewTextarea = document.querySelector('.review-textarea');
    const stars = document.querySelectorAll('.rate-star.active');

    // Check that required fields are filled
    if (!nameInput.value || !emailInput.value || !reviewTextarea.value || stars.length === 0) {
        return;
    }

    // Create new review
    const newReview = {
        name: nameInput.value,
        email: emailInput.value,
        review: reviewTextarea.value,
        rating: stars.length,
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    };

    // Add review to array
    userReviews.push(newReview);

    // Update review display
    displayUserReviews();

    // Clear form
    nameInput.value = '';
    emailInput.value = '';
    reviewTextarea.value = '';
    document.querySelectorAll('.rate-star').forEach(star => star.classList.remove('active'));
    document.querySelectorAll('.small-rectangle, .review-rectangle').forEach(container => {
        container.classList.remove('focused');
    });
    document.querySelector('.checkbox-square').classList.remove('checked');

    // Show notification
    showReviewNotification();
}

// User review display feature
function displayUserReviews() {
    const container = document.getElementById('user-reviews-container');
    if (!container) return;

    container.innerHTML = '';

    if (userReviews.length === 0) {
        return;
    }

    userReviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.className = 'user-review';

        const starsHtml = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);

        reviewElement.innerHTML = `
            <div class="user-review-header">
                <div class="user-review-name">${review.name}</div>
                <div class="user-review-date">${review.date}</div>
            </div>
            <div class="user-review-stars">
                ${starsHtml.split('').map(star => 
                    `<span class="${star === '★' ? 'review-star yellow' : 'review-star gray'}">${star}</span>`
                ).join('')}
            </div>
            <div class="user-review-text">${review.review}</div>
        `;

        container.appendChild(reviewElement);
    });
}

// Functions for cart modal
function openCartModal() {
    updateCartModal();
    document.getElementById('cart-modal').style.display = 'flex';
}

function closeCartModal() {
    document.getElementById('cart-modal').style.display = 'none';
}

// Event handlers for modals
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('close-login') || e.target.id === 'login-modal') {
        closeLoginModal();
    }
    if (e.target.classList.contains('close-cart') || e.target.id === 'cart-modal') {
        closeCartModal();
    }
});

// Handlers for quantity buttons on product page
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('product-quantity-button')) {
        const quantityElement = e.target.parentElement.querySelector('.product-quantity-number');
        let quantity = parseInt(quantityElement.textContent);

        if (e.target.textContent === '+') {
            quantity++;
        } else if (e.target.textContent === '-' && quantity > 1) {
            quantity--;
        }

        quantityElement.textContent = quantity;
    }
});

// Handler for login form
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('remember-checkbox').classList.contains('checked');

    // Check field completion
    if (!email || !password) {
        return;
    }

    // Save data when "Remember me" is selected
    if (rememberMe) {
        rememberUser(email, password);
    } else {
        forgetUser();
    }

    // Set user as logged in
    isLoggedIn = true;

    closeLoginModal();
    loadPage('user');
});

// Tool for changing password visibility
document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
});

// Handler for "Remember me" checkbox
document.getElementById('remember-checkbox').addEventListener('click', function() {
    this.classList.toggle('checked');
});

// Handler for buttons with data-action="goto-catalog"
document.addEventListener('click', function(e) {
    let target = e.target;
    // If clicked on child element, find parent with data-action
    if (!target.hasAttribute('data-action')) {
        target = target.closest('[data-action]');
    }
    if (target && target.getAttribute('data-action') === 'goto-catalog') {
        e.preventDefault();
        loadPage('catalog');
    }
});

// Checkout Modal Functions
function openCheckoutModal() {
    if (cart.length === 0) {
        alert('Your cart is empty. Please add some products before checkout.');
        return;
    }
    
    updateCheckoutSummary();
    document.getElementById('checkout-modal').style.display = 'flex';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeCheckoutModal() {
    document.getElementById('checkout-modal').style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

function updateCheckoutSummary() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = cart.length > 0 ? 30 : 0;
    const total = subtotal + shipping;
    
    document.getElementById('checkout-subtotal').textContent = `$${subtotal}`;
    document.getElementById('checkout-shipping').textContent = `$${shipping}`;
    document.getElementById('checkout-total').textContent = `$${total}`;
}

// Payment Method Toggle
document.addEventListener('click', function(e) {
    if (e.target.name === 'payment-method') {
        const paymentDetails = document.getElementById('credit-card-details');
        if (e.target.value === 'credit-card') {
            paymentDetails.style.display = 'block';
        } else {
            paymentDetails.style.display = 'none';
        }
    }
});

// Checkout Form Submission
document.getElementById('checkout-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Basic validation
    const requiredFields = this.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            isValid = false;
            field.style.borderColor = '#ff0000';
        } else {
            field.style.borderColor = '#e0e0e0';
        }
    });
    
    if (!isValid) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // If credit card is selected, validate card details
    const paymentMethod = document.querySelector('input[name="payment-method"]:checked').value;
    if (paymentMethod === 'credit-card') {
        const cardNumber = document.getElementById('card-number').value;
        const expiryDate = document.getElementById('expiry-date').value;
        const cvv = document.getElementById('cvv').value;
        const cardName = document.getElementById('card-name').value;
        
        if (!cardNumber || !expiryDate || !cvv || !cardName) {
            alert('Please fill in all credit card details.');
            return;
        }
    }
    
    // Show success message
    showOrderConfirmation();
    
    // Clear cart and close modals
    clearCart();
    closeCheckoutModal();
    closeCartModal();
});

function showOrderConfirmation() {
    const notification = document.createElement('div');
    notification.style.position = 'fixed';
    notification.style.top = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = 'rgba(76, 175, 80, 0.9)';
    notification.style.color = 'white';
    notification.style.padding = '20px 25px';
    notification.style.borderRadius = '8px';
    notification.style.zIndex = '10000';
    notification.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
    notification.style.fontFamily = 'Montserrat, sans-serif';
    notification.style.fontSize = '16px';
    notification.style.transition = 'all 0.3s ease';
    notification.style.maxWidth = '400px';
    
    notification.innerHTML = `
        <div style="font-weight: 600; margin-bottom: 5px;">Order Confirmed!</div>
        <div>Your order has been placed successfully! Thank you for your purchase.</div>
    `;
    
    document.body.appendChild(notification);
    
    // Automatically remove notification after 5 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Update event listeners for checkout buttons
document.addEventListener('click', function(e) {
    if (e.target.classList.contains('checkout-btn') || 
        e.target.closest('.checkout-btn') ||
        (e.target.classList.contains('cart-checkout-button') || 
         e.target.classList.contains('cart-checkout-text'))) {
        e.preventDefault();
        openCheckoutModal();
    }
});

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('close-checkout') || e.target.id === 'checkout-modal') {
        closeCheckoutModal();
    }
});
