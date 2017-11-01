/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * neworder module
 */
define(['ojs/ojcore', 'knockout', 'viewModels/dashboard', 'jquery', 'ojs/ojinputtext', 'ojs/ojinputnumber', 'ojs/ojbutton', 'ojs/ojlabel'
], function (oj, ko, dash) {
    /**
     * The view model for the main content view template
     */
    function neworderContentViewModel() {
        var self = this;
        self.address = ko.observable();
        self.phoneNumber = ko.observable();
        self.locID = ko.observable();
        self.supID = ko.observable();
        self.supName = ko.observable();

        self.router = oj.Router.rootInstance;

        self.onBackClick = function () {
            self.router.go("/orders");
        };

        self.isoDate = function (msSinceEpoch) {
            var d = new Date(msSinceEpoch);
            return d.getUTCFullYear() + '-' + (d.getUTCMonth() + 1) + '-' + d.getUTCDate();
        };

        self.createNewOrder = function () {
            var today = new Date();
            var orderData = {
                "address_1": self.address(),
                "contactFax": "",
                "contactPhone": self.phoneNumber(),
                "locationNo": self.locID(),
                "orderLines": "",
                "orderNo": "",
                "receiveDate": self.isoDate(today),
                "supplier": self.supID(),
                "supplierName": self.supName(),
            };

            console.log("send data :", orderData);

            $.ajax({
                type: "POST",
                url: dash.seviceURL + "/custom/BHG/order/insertheader",
                async: false,
                data: orderData,
                headers: {
                    "oracle-mobile-backend-id": dash.MBE_ID,
                    "Authorization": "Basic " + window.btoa(dash.username() + ":" + dash.password())
                },
                success: function (data) {
                    console.log(data);
                    self.router.go("/orders");
                },
                error: function (e) {
                    console.log("cannot retrieve data. " + e)
                }
            });
        };
    }
    return neworderContentViewModel;
});
