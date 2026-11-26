## **Project: TravelMate — Tour & Travel Management System**

A frontend application where users can manage tour packages, customers, and bookings using a browser interface.

### **Project structure**

```
TravelMate/
│
├── index.html
├── style.css
└── script.js
```

**Technology restrictions:**

- HTML: structure and forms
- CSS: styling and layout
- JavaScript: only your listed fundamentals
- No backend
- No database
- No API
- No DOM frameworks
- No classes
- No promises/async-await
- Data stored in JavaScript arrays and objects

## **1.&#x20;**`index.html`

```

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TravelMate | Tour Management</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>

    <header class="header">
        <div class="logo">
            <span class="logo-icon">✈</span>
            TravelMate
        </div>

        <nav>
            <a href="#dashboard">Dashboard</a>
            <a href="#tours">Tours</a>
            <a href="#customers">Customers</a>
            <a href="#bookings">Bookings</a>
        </nav>
    </header>

    <main class="container">

        <!-- HERO -->
        <section class="hero">
            <div>
                <p class="eyebrow">TRAVEL MANAGEMENT SYSTEM</p>
                <h1>Manage your travel business</h1>
                <p class="hero-description">
                    Explore destinations, manage customers,
                    and track bookings from one place.
                </p>
            </div>

            <div class="hero-icon">🌍</div>
        </section>


        <!-- DASHBOARD -->
        <section id="dashboard">

            <h2>Dashboard Overview</h2>

            <div class="stats-grid">

                <div class="stat-card">
                    <div class="stat-icon">🌍</div>
                    <p>Total Tours</p>
                    <h3 id="totalTours">0</h3>
                </div>

                <div class="stat-card">
                    <div class="stat-icon">👥</div>
                    <p>Total Customers</p>
                    <h3 id="totalCustomers">0</h3>
                </div>

                <div class="stat-card">
                    <div class="stat-icon">🎫</div>
                    <p>Total Bookings</p>
                    <h3 id="totalBookings">0</h3>
                </div>

                <div class="stat-card">
                    <div class="stat-icon">💰</div>
                    <p>Total Revenue</p>
                    <h3 id="totalRevenue">₹0</h3>
                </div>

            </div>

        </section>


        <!-- TOUR MANAGEMENT -->
        <section id="tours">

            <div class="section-heading">

                <div>
                    <h2>Tour Packages</h2>
                    <p>Explore and manage available destinations</p>
                </div>

                <button id="showTourFormBtn" class="primary-button">
                    + Add Tour
                </button>

            </div>


            <!-- ADD TOUR FORM -->
            <div id="tourFormContainer" class="form-container hidden">

                <h3>Add New Tour</h3>

                <form id="tourForm">

                    <div class="form-grid">

                        <div class="form-group">
                            <label>Destination</label>
                            <input
                                type="text"
                                id="destination"
                                required
                                placeholder="e.g. Manali"
                            >
                        </div>

                        <div class="form-group">
                            <label>Category</label>
                            <select id="category" required>
                                <option value="">Select category</option>
                                <option>Adventure</option>
                                <option>Beach</option>
                                <option>Heritage</option>
                                <option>Nature</option>
                                <option>Luxury</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label>Duration (Days)</label>
                            <input
                                type="number"
                                id="duration"
                                min="1"
                                required
                            >
                        </div>

                        <div class="form-group">
                            <label>Price Per Person</label>
                            <input
                                type="number"
                                id="price"
                                min="1"
                                required
                            >
                        </div>

                        <div class="form-group">
                            <label>Available Seats</label>
                            <input
                                type="number"
                                id="seats"
                                min="1"
                                required
                            >
                        </div>

                    </div>

                    <div class="form-actions">

                        <button type="submit" class="primary-button">
                            Save Tour
                        </button>

                        <button
                            type="button"
                            id="cancelTourFormBtn"
                            class="secondary-button"
                        >
                            Cancel
                        </button>

                    </div>

                </form>

            </div>


            <!-- SEARCH AND FILTER -->
            <div class="toolbar">

                <input
                    type="text"
                    id="searchTour"
                    placeholder="Search destination..."
                >

                <select id="filterCategory">
                    <option value="All">All Categories</option>
                    <option>Adventure</option>
                    <option>Beach</option>
                    <option>Heritage</option>
                    <option>Nature</option>
                    <option>Luxury</option>
                </select>

                <select id="sortTours">
                    <option value="default">Sort by</option>
                    <option value="lowToHigh">Price: Low to High</option>
                    <option value="highToLow">Price: High to Low</option>
                </select>

            </div>


            <!-- TOUR CARDS -->
            <div id="tourList" class="tour-grid"></div>

        </section>


        <!-- CUSTOMERS -->
        <section id="customers">

            <div class="section-heading">

                <div>
                    <h2>Customers</h2>
                    <p>Manage customer information</p>
                </div>

                <button id="showCustomerFormBtn" class="primary-button">
                    + Add Customer
                </button>

            </div>


            <div id="customerFormContainer" class="form-container hidden">

                <h3>Register Customer</h3>

                <form id="customerForm">

                    <div class="form-grid">

                        <div class="form-group">
                            <label>Customer Name</label>
                            <input
                                type="text"
                                id="customerName"
                                required
                            >
                        </div>

                        <div class="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                id="customerEmail"
                                required
                            >
                        </div>

                        <div class="form-group">
                            <label>Age</label>
                            <input
                                type="number"
                                id="customerAge"
                                min="1"
                                required
                            >
                        </div>

                    </div>

                    <div class="form-actions">

                        <button type="submit" class="primary-button">
                            Register Customer
                        </button>

                        <button
                            type="button"
                            id="cancelCustomerFormBtn"
                            class="secondary-button"
                        >
                            Cancel
                        </button>

                    </div>

                </form>

            </div>


            <div class="table-container">

                <table>

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody id="customerTable"></tbody>

                </table>

            </div>

        </section>


        <!-- BOOKINGS -->
        <section id="bookings">

            <div class="section-heading">

                <div>
                    <h2>Bookings</h2>
                    <p>Manage customer tour reservations</p>
                </div>

                <button id="showBookingFormBtn" class="primary-button">
                    + Create Booking
                </button>

            </div>


            <!-- BOOKING FORM -->
            <div id="bookingFormContainer" class="form-container hidden">

                <h3>Create Booking</h3>

                <form id="bookingForm">

                    <div class="form-grid">

                        <div class="form-group">
                            <label>Customer</label>
                            <select id="bookingCustomer" required>
                                <option value="">Select customer</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label>Tour</label>
                            <select id="bookingTour" required>
                                <option value="">Select tour</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label>Number of Persons</label>
                            <input
                                type="number"
                                id="persons"
                                min="1"
                                required
                            >
                        </div>

                    </div>

                    <div class="form-actions">

                        <button type="submit" class="primary-button">
                            Create Booking
                        </button>

                        <button
                            type="button"
                            id="cancelBookingFormBtn"
                            class="secondary-button"
                        >
                            Cancel
                        </button>

                    </div>

                </form>

            </div>


            <div class="table-container">

                <table>

                    <thead>
                        <tr>
                            <th>Booking ID</th>
                            <th>Customer</th>
                            <th>Destination</th>
                            <th>Persons</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody id="bookingTable"></tbody>

                </table>

            </div>

        </section>

    </main>


    <footer>
        <p>TravelMate JavaScript Fundamentals Project</p>
    </footer>


    <script src="script.js"></script>

</body>
</html>

```

## **2.&#x20;**`style.css`

```

/* =========================================
   GLOBAL STYLES
========================================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    background: #f5f7fb;
    color: #1e293b;
}

html {
    scroll-behavior: smooth;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: auto;
}

section {
    margin: 40px 0;
}


/* =========================================
   HEADER
========================================= */

.header {
    background: white;
    padding: 18px 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
    position: sticky;
    top: 0;
    z-index: 100;
}

.logo {
    font-size: 23px;
    font-weight: bold;
    color: #2563eb;
}

.logo-icon {
    margin-right: 8px;
}

nav {
    display: flex;
    gap: 25px;
}

nav a {
    text-decoration: none;
    color: #64748b;
    font-weight: 600;
    font-size: 14px;
}

nav a:hover {
    color: #2563eb;
}


/* =========================================
   HERO
========================================= */

.hero {
    background: linear-gradient(135deg, #2563eb, #4f46e5);
    color: white;
    border-radius: 18px;
    padding: 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 35px;
}

.eyebrow {
    font-size: 12px;
    letter-spacing: 2px;
    opacity: 0.8;
    margin-bottom: 15px;
}

.hero h1 {
    font-size: 35px;
    margin-bottom: 15px;
}

.hero-description {
    max-width: 500px;
    line-height: 1.6;
    color: #dbeafe;
}

.hero-icon {
    font-size: 90px;
}


/* =========================================
   SECTION HEADINGS
========================================= */

h2 {
    font-size: 26px;
    margin-bottom: 10px;
}

.section-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
}

.section-heading p {
    color: #64748b;
    font-size: 14px;
}


/* =========================================
   DASHBOARD CARDS
========================================= */

.stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-top: 20px;
}

.stat-card {
    background: white;
    padding: 25px;
    border-radius: 14px;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.03);
}

.stat-icon {
    font-size: 28px;
    margin-bottom: 15px;
}

.stat-card p {
    color: #64748b;
    font-size: 14px;
    margin-bottom: 10px;
}

.stat-card h3 {
    font-size: 27px;
    color: #1e293b;
}


/* =========================================
   BUTTONS
========================================= */

button {
    cursor: pointer;
    border: none;
    border-radius: 8px;
    padding: 11px 17px;
    font-weight: 600;
    transition: 0.2s;
}

.primary-button {
    background: #2563eb;
    color: white;
}

.primary-button:hover {
    background: #1d4ed8;
}

.secondary-button {
    background: #e2e8f0;
    color: #334155;
}

.secondary-button:hover {
    background: #cbd5e1;
}

.danger-button {
    background: #fee2e2;
    color: #dc2626;
}

.danger-button:hover {
    background: #fecaca;
}

.small-button {
    padding: 7px 10px;
    font-size: 12px;
}


/* =========================================
   FORMS
========================================= */

.form-container {
    background: white;
    padding: 25px;
    border-radius: 14px;
    margin-bottom: 25px;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.04);
}

.form-container h3 {
    margin-bottom: 20px;
}

.form-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.form-group label {
    font-size: 14px;
    font-weight: 600;
}

input,
select {
    width: 100%;
    padding: 12px;
    border: 1px solid #cbd5e1;
    border-radius: 8px;
    font-size: 14px;
    outline: none;
    background: white;
}

input:focus,
select:focus {
    border-color: #2563eb;
}

.form-actions {
    margin-top: 20px;
    display: flex;
    gap: 10px;
}

.hidden {
    display: none;
}


/* =========================================
   TOOLBAR
========================================= */

.toolbar {
    display: flex;
    gap: 15px;
    margin-bottom: 25px;
}

.toolbar input {
    flex: 2;
}

.toolbar select {
    flex: 1;
}


/* =========================================
   TOUR CARDS
========================================= */

.tour-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}

.tour-card {
    background: white;
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 3px 12px rgba(0, 0, 0, 0.04);
}

.tour-banner {
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 65px;
    background: linear-gradient(135deg, #dbeafe, #e0e7ff);
}

.tour-content {
    padding: 20px;
}

.tour-category {
    display: inline-block;
    background: #eff6ff;
    color: #2563eb;
    padding: 6px 10px;
    border-radius: 20px;
    font-size: 12px;
    margin-bottom: 12px;
}

.tour-content h3 {
    font-size: 20px;
    margin-bottom: 10px;
}

.tour-info {
    color: #64748b;
    font-size: 14px;
    margin-bottom: 7px;
}

.tour-price {
    color: #2563eb;
    font-size: 23px;
    font-weight: bold;
    margin: 15px 0;
}

.tour-actions {
    display: flex;
    gap: 10px;
}


/* =========================================
   TABLES
========================================= */

.table-container {
    overflow-x: auto;
    background: white;
    border-radius: 12px;
    margin-top: 20px;
}

table {
    width: 100%;
    border-collapse: collapse;
    min-width: 700px;
}

th,
td {
    padding: 16px;
    text-align: left;
    border-bottom: 1px solid #e2e8f0;
    font-size: 14px;
}

th {
    background: #f8fafc;
    color: #64748b;
    font-size: 12px;
    text-transform: uppercase;
}

tr:hover {
    background: #f8fafc;
}


/* =========================================
   STATUS
========================================= */

.status {
    padding: 6px 10px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: bold;
}

.confirmed {
    background: #dcfce7;
    color: #15803d;
}

.cancelled {
    background: #fee2e2;
    color: #dc2626;
}


/* =========================================
   FOOTER
========================================= */

footer {
    text-align: center;
    padding: 30px;
    color: #64748b;
    font-size: 14px;
}


/* =========================================
   RESPONSIVE DESIGN
========================================= */

@media (max-width: 900px) {

    .stats-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .tour-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .form-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .hero-icon {
        font-size: 60px;
    }
}

@media (max-width: 600px) {

    .header {
        flex-direction: column;
        gap: 15px;
    }

    nav {
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
    }

    .hero {
        padding: 25px;
    }

    .hero h1 {
        font-size: 25px;
    }

    .hero-icon {
        display: none;
    }

    .stats-grid {
        grid-template-columns: 1fr 1fr;
    }

    .tour-grid {
        grid-template-columns: 1fr;
    }

    .form-grid {
        grid-template-columns: 1fr;
    }

    .toolbar {
        flex-direction: column;
    }

    .section-heading {
        align-items: flex-start;
        gap: 15px;
        flex-direction: column;
    }
}

```

## **3.&#x20;**`script.js`

This is the main file where students practice the syllabus concepts.

```

/* =====================================================
   TRAVELMATE
   JavaScript Fundamentals Project
===================================================== */


/* =====================================================
   1. VARIABLES
===================================================== */

const companyName = "TravelMate";

let discountPercentage = 10;

let nextTourId = 105;

let nextCustomerId = 203;

let nextBookingId = 303;


/* =====================================================
   2. DATA TYPES
===================================================== */

let systemActive = true;

let companyLocation = "Delhi";

let totalRevenue = 0;

let selectedTour = null;


/* =====================================================
   3. NON-PRIMITIVE DATA TYPES
   ARRAYS AND OBJECTS
===================================================== */

const tours = [

    {
        id: 101,
        destination: "Manali",
        category: "Adventure",
        duration: 5,
        price: 15000,
        seats: 20,
        active: true
    },

    {
        id: 102,
        destination: "Goa",
        category: "Beach",
        duration: 4,
        price: 12000,
        seats: 15,
        active: true
    },

    {
        id: 103,
        destination: "Jaipur",
        category: "Heritage",
        duration: 3,
        price: 8000,
        seats: 25,
        active: true
    },

    {
        id: 104,
        destination: "Kashmir",
        category: "Adventure",
        duration: 7,
        price: 25000,
        seats: 10,
        active: true
    }
];


const customers = [

    {
        id: 201,
        name: "Rahul Sharma",
        email: "rahul@example.com",
        age: 25
    },

    {
        id: 202,
        name: "Priya Verma",
        email: "priya@example.com",
        age: 28
    }
];


const bookings = [

    {
        id: 301,
        customerId: 201,
        tourId: 101,
        persons: 2,
        totalAmount: 27000,
        status: "Confirmed"
    },

    {
        id: 302,
        customerId: 202,
        tourId: 102,
        persons: 1,
        totalAmount: 10800,
        status: "Confirmed"
    }
];


/* =====================================================
   HELPER FUNCTIONS
===================================================== */

function formatCurrency(amount) {

    return "₹" + amount.toLocaleString("en-IN");
}


function getTourEmoji(category) {

    if (category === "Adventure") {
        return "🏔️";
    }

    else if (category === "Beach") {
        return "🏖️";
    }

    else if (category === "Heritage") {
        return "🏰";
    }

    else if (category === "Nature") {
        return "🌳";
    }

    else if (category === "Luxury") {
        return "✨";
    }

    else {
        return "🌍";
    }
}


/* =====================================================
   4. OPERATORS
===================================================== */

function calculatePrice(price, persons) {

    let subtotal = price * persons;

    let discount = subtotal * discountPercentage / 100;

    let finalAmount = subtotal - discount;

    return finalAmount;
}


function checkSeatAvailability(tour, persons) {

    return tour.seats >= persons;
}


/* =====================================================
   5. CONTROL FLOW
===================================================== */

function getBookingCategory(amount) {

    if (amount >= 50000) {

        return "Premium";

    }

    else if (amount >= 20000) {

        return "Standard";

    }

    else {

        return "Basic";
    }
}


function getDestinationType(destination) {

    switch (destination) {

        case "Manali":
            return "Mountain Destination";

        case "Goa":
            return "Beach Destination";

        case "Jaipur":
            return "Heritage Destination";

        case "Kashmir":
            return "Mountain Destination";

        default:
            return "Other Destination";
    }
}


/* =====================================================
   6. FUNCTIONS
===================================================== */

function displayWelcomeMessage() {

    console.log("Welcome to " + companyName);
}


function getTourById(tourId) {

    return tours.find(function (tour) {

        return tour.id === tourId;
    });
}


function getCustomerById(customerId) {

    return customers.find(function (customer) {

        return customer.id === customerId;
    });
}


function getBookingById(bookingId) {

    return bookings.find(function (booking) {

        return booking.id === bookingId;
    });
}


/* =====================================================
   7. SCOPE
===================================================== */

let globalMessage = "Welcome to TravelMate";


function demonstrateScope() {

    let localMessage = "Inside function";

    console.log(globalMessage);

    console.log(localMessage);


    if (true) {

        let blockMessage = "Inside block";

        console.log(blockMessage);
    }

}


/* =====================================================
   8. CALLBACK FUNCTIONS
===================================================== */

function processTour(tour, callback) {

    callback(tour);
}


function showTourName(tour) {

    console.log(tour.destination);
}


/* =====================================================
   9. HIGHER ORDER FUNCTIONS
===================================================== */

function calculateWithOperation(price, operation) {

    return operation(price);
}


function applyDiscount(price) {

    return price - (price * 0.10);
}


function addTax(price) {

    return price + (price * 0.05);
}


function createDiscount(discountRate) {

    return function (price) {

        return price - price * discountRate;
    };
}


const festivalDiscount = createDiscount(0.20);


/* =====================================================
   10. ARRAYS
===================================================== */

function addTour(tour) {

    tours.push(tour);
}


function deleteTour(tourId) {

    const index = tours.findIndex(function (tour) {

        return tour.id === tourId;
    });


    if (index !== -1) {

        tours.splice(index, 1);

        return true;

    }

    return false;
}


/* =====================================================
   11. ARRAY METHODS - I
===================================================== */


/* forEach */

function getTourNames() {

    tours.forEach(function (tour) {

        console.log(tour.destination);
    });
}


/* map */

function getAllDestinations() {

    return tours.map(function (tour) {

        return tour.destination;
    });
}


/* =====================================================
   12. ARRAY METHODS - II
===================================================== */


/* filter */

function getToursByCategory(category) {

    if (category === "All") {

        return tours;
    }

    return tours.filter(function (tour) {

        return tour.category === category;
    });
}


/* find */

function searchTourByDestination(destination) {

    return tours.find(function (tour) {

        return tour.destination.toLowerCase().includes(
            destination.toLowerCase()
        );
    });
}


/* findIndex */

function getTourIndex(tourId) {

    return tours.findIndex(function (tour) {

        return tour.id === tourId;
    });
}


/* some */

function checkAffordableTour(maxPrice) {

    return tours.some(function (tour) {

        return tour.price <= maxPrice;
    });
}


/* every */

function checkAllToursActive() {

    return tours.every(function (tour) {

        return tour.active === true;
    });
}


/* =====================================================
   13. ARRAY METHODS - III
===================================================== */


/* reduce */

function calculateRevenue() {

    return bookings.reduce(function (total, booking) {

        if (booking.status === "Confirmed") {

            return total + booking.totalAmount;
        }

        return total;

    }, 0);
}


/* sort */

function sortToursByPrice(order) {

    const copiedTours = [...tours];

    if (order === "lowToHigh") {

        copiedTours.sort(function (tour1, tour2) {

            return tour1.price - tour2.price;
        });

    }

    else if (order === "highToLow") {

        copiedTours.sort(function (tour1, tour2) {

            return tour2.price - tour1.price;
        });

    }

    return copiedTours;
}


/* reverse */

function reverseTourList() {

    return [...tours].reverse();
}


/* includes */

function destinationExists(destination) {

    const destinations = getAllDestinations();

    return destinations.includes(destination);
}


/* =====================================================
   14. INTRODUCTION TO OBJECTS
===================================================== */

const company = {

    name: "TravelMate",

    location: "Delhi",

    contact: "9876543210",

    services: [
        "Tour Packages",
        "Hotel Booking",
        "Travel Planning"
    ],

    displayInformation: function () {

        console.log(this.name);

        console.log(this.location);

        console.log(this.contact);
    }
};


/* =====================================================
   15. CRUD AND COPY IN OBJECT
===================================================== */


/* CREATE CUSTOMER */

function addCustomer(customer) {

    customers.push(customer);
}


/* READ CUSTOMER */

function readCustomer(customerId) {

    return customers.find(function (customer) {

        return customer.id === customerId;
    });
}


/* UPDATE CUSTOMER */

function updateCustomer(customerId, newData) {

    const customer = readCustomer(customerId);

    if (customer) {

        customer.name = newData.name;

        customer.email = newData.email;

        customer.age = newData.age;

        return true;
    }

    return false;
}


/* DELETE CUSTOMER */

function deleteCustomer(customerId) {

    const index = customers.findIndex(function (customer) {

        return customer.id === customerId;
    });


    if (index !== -1) {

        customers.splice(index, 1);

        return true;
    }

    return false;
}


/* SHALLOW COPY */

function shallowCopyObject(object) {

    return { ...object };
}


/* OBJECT ASSIGN COPY */

function copyUsingAssign(object) {

    return Object.assign({}, object);
}


/* DEEP COPY */

function deepCopyObject(object) {

    return JSON.parse(JSON.stringify(object));
}


/* =====================================================
   16. OBJECT METHODS - I
===================================================== */

function getObjectKeys(object) {

    return Object.keys(object);
}


function getObjectValues(object) {

    return Object.values(object);
}


function getObjectEntries(object) {

    return Object.entries(object);
}


/* =====================================================
   17. OBJECT METHODS - II
===================================================== */

function mergeObjects(object1, object2) {

    return Object.assign({}, object1, object2);
}


function hasProperty(object, property) {

    return Object.hasOwn(object, property);
}


function freezeObject(object) {

    return Object.freeze(object);
}


function sealObject(object) {

    return Object.seal(object);
}


/* =====================================================
   BOOKING MANAGEMENT
===================================================== */


/* CREATE BOOKING */

function createBooking(customerId, tourId, persons) {

    const customer = getCustomerById(customerId);

    const tour = getTourById(tourId);


    if (!customer) {

        alert("Customer not found");

        return false;
    }


    if (!tour) {

        alert("Tour not found");

        return false;
    }


    if (persons <= 0) {

        alert("Number of persons must be greater than zero");

        return false;
    }


    if (!checkSeatAvailability(tour, persons)) {

        alert("Not enough seats available");

        return false;
    }


    const amount = calculatePrice(tour.price, persons);


    const booking = {

        id: nextBookingId,

        customerId: customerId,

        tourId: tourId,

        persons: persons,

        totalAmount: amount,

        status: "Confirmed"
    };


    bookings.push(booking);

    tour.seats = tour.seats - persons;

    nextBookingId++;


    alert("Booking created successfully!");

    return true;
}


/* CANCEL BOOKING */

function cancelBooking(bookingId) {

    const booking = getBookingById(bookingId);

    if (!booking) {

        return false;
    }


    if (booking.status === "Cancelled") {

        alert("Booking is already cancelled");

        return false;
    }


    booking.status = "Cancelled";


    const tour = getTourById(booking.tourId);

    if (tour) {

        tour.seats = tour.seats + booking.persons;
    }


    return true;
}


/* =====================================================
   DOM DISPLAY FUNCTIONS
===================================================== */


/* DISPLAY TOURS */

function displayTours(tourArray) {

    const tourList = document.getElementById("tourList");

    tourList.innerHTML = "";


    tourArray.forEach(function (tour) {

        const tourCard = document.createElement("div");

        tourCard.className = "tour-card";


        tourCard.innerHTML = `

            <div class="tour-banner">

                ${getTourEmoji(tour.category)}

            </div>

            <div class="tour-content">

                <span class="tour-category">

                    ${tour.category}

                </span>

                <h3>${tour.destination}</h3>

                <p class="tour-info">

                    📅 ${tour.duration} Days

                </p>

                <p class="tour-info">

                    🪑 ${tour.seats} Seats Available

                </p>

                <p class="tour-price">

                    ${formatCurrency(tour.price)}

                </p>

                <div class="tour-actions">

                    <button
                        class="primary-button small-button"
                        onclick="openBookingForm(${tour.id})"
                    >

                        Book Now

                    </button>

                    <button
                        class="danger-button small-button"
                        onclick="removeTour(${tour.id})"
                    >

                        Delete

                    </button>

                </div>

            </div>

        `;


        tourList.appendChild(tourCard);
    });


    if (tourArray.length === 0) {

        tourList.innerHTML = "<p>No tours found.</p>";
    }

}


/* DISPLAY CUSTOMERS */

function displayCustomers() {

    const customerTable = document.getElementById("customerTable");

    customerTable.innerHTML = "";


    customers.forEach(function (customer) {

        const row = document.createElement("tr");


        row.innerHTML = `

            <td>${customer.id}</td>

            <td>${customer.name}</td>

            <td>${customer.email}</td>

            <td>${customer.age}</td>

            <td>

                <button
                    class="danger-button small-button"
                    onclick="removeCustomer(${customer.id})"
                >

                    Delete

                </button>

            </td>

        `;


        customerTable.appendChild(row);
    });


    if (customers.length === 0) {

        customerTable.innerHTML = `

            <tr>

                <td colspan="5">

                    No customers registered.

                </td>

            </tr>

        `;
    }

}


/* DISPLAY BOOKINGS */

function displayBookings() {

    const bookingTable = document.getElementById("bookingTable");

    bookingTable.innerHTML = "";


    bookings.forEach(function (booking) {

        const customer = getCustomerById(booking.customerId);

        const tour = getTourById(booking.tourId);


        const customerName = customer
            ? customer.name
            : "Customer Deleted";


        const destination = tour
            ? tour.destination
            : "Tour Deleted";


        const row = document.createElement("tr");


        row.innerHTML = `

            <td>${booking.id}</td>

            <td>${customerName}</td>

            <td>${destination}</td>

            <td>${booking.persons}</td>

            <td>${formatCurrency(booking.totalAmount)}</td>

            <td>

                <span class="status ${
                    booking.status === "Confirmed"
                        ? "confirmed"
                        : "cancelled"
                }">

                    ${booking.status}

                </span>

            </td>

            <td>

                ${
                    booking.status === "Confirmed"

                    ? `
                        <button
                            class="danger-button small-button"
                            onclick="cancelBookingFromUI(${booking.id})"
                        >
                            Cancel
                        </button>
                    `

                    : ""
                }

            </td>

        `;


        bookingTable.appendChild(row);
    });


    if (bookings.length === 0) {

        bookingTable.innerHTML = `

            <tr>

                <td colspan="7">

                    No bookings available.

                </td>

            </tr>

        `;
    }

}


/* =====================================================
   DASHBOARD
===================================================== */

function updateDashboard() {

    document.getElementById("totalTours").textContent =
        tours.length;


    document.getElementById("totalCustomers").textContent =
        customers.length;


    document.getElementById("totalBookings").textContent =
        bookings.length;


    document.getElementById("totalRevenue").textContent =
        formatCurrency(calculateRevenue());

}


/* =====================================================
   DROPDOWN DATA
===================================================== */

function populateCustomerDropdown() {

    const dropdown = document.getElementById("bookingCustomer");

    dropdown.innerHTML = `
        <option value="">Select customer</option>
    `;


    customers.forEach(function (customer) {

        const option = document.createElement("option");

        option.value = customer.id;

        option.textContent = customer.name;

        dropdown.appendChild(option);
    });

}


function populateTourDropdown() {

    const dropdown = document.getElementById("bookingTour");

    dropdown.innerHTML = `
        <option value="">Select tour</option>
    `;


    tours.forEach(function (tour) {

        const option = document.createElement("option");

        option.value = tour.id;

        option.textContent =
            tour.destination +
            " - " +
            formatCurrency(tour.price);

        dropdown.appendChild(option);
    });

}


/* =====================================================
   RENDER ALL
===================================================== */

function renderApplication() {

    displayTours(tours);

    displayCustomers();

    displayBookings();

    updateDashboard();

    populateCustomerDropdown();

    populateTourDropdown();
}


/* =====================================================
   TOUR CRUD
===================================================== */

function removeTour(tourId) {

    const confirmation = confirm(
        "Are you sure you want to delete this tour?"
    );


    if (confirmation) {

        const result = deleteTour(tourId);

        if (result) {

            renderApplication();
        }
    }

}


function openTourForm() {

    document
        .getElementById("tourFormContainer")
        .classList.remove("hidden");
}


function closeTourForm() {

    document
        .getElementById("tourFormContainer")
        .classList.add("hidden");

}


/* =====================================================
   CUSTOMER CRUD
===================================================== */

function removeCustomer(customerId) {

    const confirmation = confirm(
        "Are you sure you want to delete this customer?"
    );


    if (confirmation) {

        const result = deleteCustomer(customerId);

        if (result) {

            renderApplication();
        }
    }

}


function openCustomerForm() {

    document
        .getElementById("customerFormContainer")
        .classList.remove("hidden");
}


function closeCustomerForm() {

    document
        .getElementById("customerFormContainer")
        .classList.add("hidden");

}


/* =====================================================
   BOOKING UI
===================================================== */

function openBookingForm(tourId) {

    document
        .getElementById("bookingFormContainer")
        .classList.remove("hidden");


    if (tourId) {

        document.getElementById("bookingTour").value = tourId;
    }

}


function closeBookingForm() {

    document
        .getElementById("bookingFormContainer")
        .classList.add("hidden");

}


function cancelBookingFromUI(bookingId) {

    const confirmation = confirm(
        "Are you sure you want to cancel this booking?"
    );


    if (confirmation) {

        const result = cancelBooking(bookingId);

        if (result) {

            renderApplication();
        }
    }

}


/* =====================================================
   SEARCH, FILTER AND SORT
===================================================== */

function filterAndDisplayTours() {

    const searchText =
        document.getElementById("searchTour").value;


    const selectedCategory =
        document.getElementById("filterCategory").value;


    const sortOption =
        document.getElementById("sortTours").value;


    let filteredTours = tours.filter(function (tour) {

        const matchesSearch =
            tour.destination.toLowerCase().includes(
                searchText.toLowerCase()
            );


        const matchesCategory =
            selectedCategory === "All" ||
            tour.category === selectedCategory;


        return matchesSearch && matchesCategory;
    });


    if (sortOption === "lowToHigh") {

        filteredTours = sortToursByPrice("lowToHigh");
    }


    else if (sortOption === "highToLow") {

        filteredTours = sortToursByPrice("highToLow");
    }


    displayTours(filteredTours);
}


/* =====================================================
   EVENT LISTENERS
===================================================== */


/* SHOW/HIDE FORMS */

document
    .getElementById("showTourFormBtn")
    .addEventListener("click", openTourForm);


document
    .getElementById("cancelTourFormBtn")
    .addEventListener("click", closeTourForm);


document
    .getElementById("showCustomerFormBtn")
    .addEventListener("click", openCustomerForm);


document
    .getElementById("cancelCustomerFormBtn")
    .addEventListener("click", closeCustomerForm);


document
    .getElementById("showBookingFormBtn")
    .addEventListener("click", function () {

        openBookingForm();
    });


document
    .getElementById("cancelBookingFormBtn")
    .addEventListener("click", closeBookingForm);


/* SEARCH */

document
    .getElementById("searchTour")
    .addEventListener("input", filterAndDisplayTours);


/* FILTER */

document
    .getElementById("filterCategory")
    .addEventListener("change", filterAndDisplayTours);


/* SORT */

document
    .getElementById("sortTours")
    .addEventListener("change", filterAndDisplayTours);


/* =====================================================
   ADD TOUR FORM
===================================================== */

document
    .getElementById("tourForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();


        const destination =
            document.getElementById("destination").value;


        const category =
            document.getElementById("category").value;


        const duration =
            Number(document.getElementById("duration").value);


        const price =
            Number(document.getElementById("price").value);


        const seats =
            Number(document.getElementById("seats").value);


        const newTour = {

            id: nextTourId,

            destination: destination,

            category: category,

            duration: duration,

            price: price,

            seats: seats,

            active: true
        };


        addTour(newTour);

        nextTourId++;


        this.reset();

        closeTourForm();

        renderApplication();
    });


/* =====================================================
   ADD CUSTOMER FORM
===================================================== */

document
    .getElementById("customerForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("customerName").value;


        const email =
            document.getElementById("customerEmail").value;


        const age =
            Number(document.getElementById("customerAge").value);


        const newCustomer = {

            id: nextCustomerId,

            name: name,

            email: email,

            age: age
        };


        addCustomer(newCustomer);

        nextCustomerId++;


        this.reset();

        closeCustomerForm();

        renderApplication();
    });


/* =====================================================
   CREATE BOOKING FORM
===================================================== */

document
    .getElementById("bookingForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();


        const customerId =
            Number(document.getElementById("bookingCustomer").value);


        const tourId =
            Number(document.getElementById("bookingTour").value);


        const persons =
            Number(document.getElementById("persons").value);


        const result = createBooking(
            customerId,
            tourId,
            persons
        );


        if (result) {

            this.reset();

            closeBookingForm();

            renderApplication();
        }

    });


/* =====================================================
   INITIAL APPLICATION LOAD
===================================================== */

displayWelcomeMessage();

renderApplication();

```

# **4. How the Project Covers Your Syllabus**

| Topic                      | Project Implementation                                           |
| -------------------------- | ---------------------------------------------------------------- |
| Introduction to JavaScript | Browser-based application                                        |
| Variables and difference   | `let`, `const`                                                   |
| Data Types                 | String, Number, Boolean                                          |
| Non-Primitive Data Types   | Arrays and objects                                               |
| Operators                  | Price calculation, discount, availability                        |
| Control Flow               | `if/else`, `switch`                                              |
| Functions                  | Reusable application functions                                   |
| Scopes                     | Global, function, block scope                                    |
| Callback Function          | `addEventListener`, `forEach`, callback examples                 |
| Higher Order Function      | Functions accepting/returning functions                          |
| Arrays                     | Tours, customers, bookings                                       |
| Array Methods I            | `forEach`, `map`                                                 |
| Array Methods II           | `filter`, `find`, `findIndex`, `some`, `every`                   |
| Array Methods III          | `reduce`, `sort`, `reverse`, `includes`                          |
| Introduction to Object     | Tour, customer, booking objects                                  |
| CRUD and Copy in Object    | Add, read, update, delete, shallow copy, deep copy               |
| Objects Methods I          | `Object.keys`, `Object.values`, `Object.entries`                 |
| Objects Methods II         | `Object.assign`, `Object.hasOwn`, `Object.freeze`, `Object.seal` |

## **5. Features Students Will Build**

**🌍 Tour Management**

- Add tours
- Delete tours
- Search destinations
- Filter by category
- Sort by price

**👥 Customer Management**

- Register customers
- Display customers
- Delete customers
- Customer search challenges

**🎫 Booking Management**

- Create booking
- Calculate price
- Apply discount
- Check seats
- Cancel booking

**📊 Dashboard**

- Total tours
- Total customers
- Total bookings
- Revenue calculation

## **6. Running the Project**

1. Create a folder named `TravelMate`.
2. Create three files:
   - `index.html`
   - `style.css`
   - `script.js`
3. Paste the respective code into each file.
4. Open `index.html` in Chrome.

No installation required.

## **7. Recommended Student Restrictions**

For this capstone, students should **not use**:

- React, Angular or Vue
- Bootstrap or Tailwind
- LocalStorage
- APIs
- Backend/server
- Database
- Classes
- Promises
- Async/await
- Modules
- Advanced ES6 concepts not taught
