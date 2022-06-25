var url="http://localhost:5050";

var app = new Vue({
    el: '#app',
    data: {
        addresses: [],

        firstNameInput: "",
        lastNameInput: "",
        emailInput: "",
        phoneNumberInput: "",
        addressInput: "",
    },
    methods: {
        // Add a new address
        addAddress: function() {
            // Create a new address object
            var newAddress = {
                firstName: this.firstNameInput,
                lastName: this.lastNameInput,
                email: this.emailInput,
                phoneNumber: this.phoneNumberInput,
                address: this.addressInput,
            };

            this.postAddressBook(newAddress);

            // Clear the input fields
            this.firstNameInput = "";
            this.lastNameInput = "";
            this.emailInput = "";
            this.phoneNumberInput = "";
            this.addressInput = "";
        },

        // Get all address books
        getAddressBooks: function() {
            fetch(url + "/addressbooks").then(response => {
                response.json().then(data => {
                    this.addresses = data;
                });
            });
        },

        // Post address book
        postAddressBook: function(newAddress) {
            fetch(url + "/addressbook", {
                method: "POST",
                body: JSON.stringify(newAddress),
                headers: {
                    "Content-Type": "application/json"
                },
            }).then(response => {
                response.json().then(createdAddress => {
                    this.getAddressBooks();
                });
            });
        },

        // Delete address book
        deleteAddressBook: function(addressBook) {
            fetch(url + "/addressbook/" + addressBook._id, {
                method: "DELETE",
            }).then(response => {
                response.json().then(deletedAddress => {
                    this.getAddressBooks();
                });
            });
        }
    },
    created: function() {
        this.getAddressBooks();
    }
});