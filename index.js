'use strict';

module.exports = function () {
  
  var regex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;

  function _getEmails (text) {
    return text ? text.match(regex) : null;
  };

  function _hasEmail (text) {
    return _getEmails(text) != null;
  };

  function _validateEmail (email) {
    var emails = email.match(regex) || [];
    return emails.length == 1 && emails[0] == email;
  };

  return {
      getEmails: _getEmails
    , hasEmail: _hasEmail
    , validateEmail: _validateEmail
  };
  
}();