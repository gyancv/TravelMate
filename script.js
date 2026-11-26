
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
