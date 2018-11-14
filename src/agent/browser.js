function Browser() {
  this.browser = window.SafariViewController;
  this.open = this.open.bind(this);
  this.close = this.close.bind(this);
}

Browser.isAvailable = function (callback) {
  window.SafariViewController.isAvailable(callback);
};


Browser.prototype.open = function (url, callback, options) {
  var defaultOptions = {
    hidden: false,
    url: url
  };

  var browserOptions = Object.assign({}, defaultOptions, options || {});

  this.browser.show(browserOptions, function (result) {
    callback(null, result);
  }, function (message) {
    callback(new Error(message));
  });
};

Browser.prototype.close = function () {
  this.browser.hide();
};

module.exports = Browser;
