Project.viewModels.bidderViewModel = function () {
    var self = this;

    console.log('new instance of bidderViewModel');

    self.bidder = ko.observable();


    self.init = function(){
        var idFromUrl = Project.helpers.getIdFromUrl();
        self.bidder(new Project.models.bidder({id: idFromUrl}));
    }

    self.init();
}