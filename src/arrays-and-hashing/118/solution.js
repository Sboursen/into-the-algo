"use strict";
exports.__esModule = true;
function numUniqueEmails(emails) {
    var uniqueEmails = new Set();
    emails.forEach(function (email) {
        var local = email.split('@')[0];
        var domain = email.split('@')[1];
        local = local.split('+')[0].replace(/[.]/g, '');
        uniqueEmails.add("".concat(local, "@").concat(domain));
    });
    return uniqueEmails.size;
}
exports["default"] = numUniqueEmails;
