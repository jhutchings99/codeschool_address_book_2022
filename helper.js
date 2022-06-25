// Validate address book function
var setupAddressBook = function (addressBookData) {
    return {
        firstName: addressBookData.firstName || "",
        lastName: addressBookData.lastName || "",
        email: addressBookData.email || "",
        phoneNumber: addressBookData.phoneNumber || "",
        address: addressBookData.address || ""
    }
}

module.exports = {
    setupAddressBook,
}