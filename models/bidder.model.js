Project.models.bidder = function (data) {
    var self = this;
    data = data || {};

    self.id = ko.observable(data.id || 0);

    console.log('new instance of bidder model with id ' + self.id());
}