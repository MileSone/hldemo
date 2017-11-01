/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your customer ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', "viewModels/dashboard", 'ojs/ojknockout', 'promise', 'ojs/ojlistview', 'ojs/ojarraytabledatasource', 'ojs/ojinputtext', 'ojs/ojlabel'],
        function (oj, ko, $, dash) {



            function OrderDetailsViewModel() {
                var self = this;
                self.router = oj.Router.rootInstance;

                self.data = ko.observableArray([]);
                self.dataCell = ko.observable();
                self.dataSource = new oj.ArrayTableDataSource(self.data, {idAttribute: "item"});
                self.orderNo = ko.observable();
                self.inpProduct = ko.observable("111111");
                self.inpDetail = ko.observable("猪肉");
                self.inpAmount = ko.observable("123412");
                self.inpPrice = ko.observable("5.2");
                self.inpRetailPrice = ko.observable("10");

                self.isShow = ko.observable(true);
                // Below are a subset of the ViewModel methods invoked by the ojModule binding
                // Please reference the ojModule jsDoc for additional available methods.

                self.onBackClick = function () {
                    self.router.go("/orders")
                }

                self.refreshView = function () {
                    $.ajax({
                        type: "GET",
                        url: dash.seviceURL + "/custom/BHG/order/getOrderList",
                        async: false,
                        headers: {
                            "oracle-mobile-backend-id": dash.MBE_ID,
                            "Authorization": "Basic " + window.btoa(dash.username() + ":" + dash.password())
                        },
                        success: function (data) {
                            console.log(data);

                            $.each(data, function (index2, value2)
                            {
                                if (self.orderNo() === value2.orderNo) {
                                    self.dataCell = value2;
                                    self.router.store({"parent": self.dataCell});
                                    var data = self.router.retrieve();
                                    if (data.parent)
                                        self.orderNo(data.parent.orderNo);
                                    self.data(data.parent.orderLines);
                                }
                            });

                        },
                        error: function (e) {
                            console.log("cannot retrieve data. " + e)
                        }
                    })
                };

//                self.hideList = function () {
//                    self.isShow(false);
//                };

                self.onAddCellClick = function () {
   

                    var inpData = {
                        "item": self.inpProduct(),
                        "itemDesc": self.inpDetail(),
                        "locType": "S",
                        "orderNo": self.orderNo(),
                        "qtyOrdered": self.inpAmount(),
                        "qtyPrescaled": 0,
                        "qtyReceived": self.inpAmount(),
                        "unitCost": self.inpPrice(),
                        "unitRetail": self.inpRetailPrice()
                    };

                    $.ajax({
                        type: "POST",
                        url: dash.seviceURL + "/custom/BHG/order/insertline",
                        async: false,
                        data: inpData,
                        headers: {
                            "oracle-mobile-backend-id": dash.MBE_ID,
                            "Authorization": "Basic " + window.btoa(dash.username() + ":" + dash.password())
                        },
                        success: function (data) {
                            console.log(data);
                            self.refreshView();
                        },
                        error: function (e) {
                            console.log("cannot retrieve data. " + e)
                        }
                    });


                }

                /**
                 * Optional ViewModel method invoked when this ViewModel is about to be
                 * used for the View transition.  The application can put data fetch logic
                 * here that can return a Promise which will delay the handleAttached function
                 * call below until the Promise is resolved.
                 * @param {Object} info - An object with the following key-value pairs:
                 * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
                 * @param {Function} info.valueAccessor - The binding's value accessor.
                 * @return {Promise|undefined} - If the callback returns a Promise, the next phase (attaching DOM) will be delayed until
                 * the promise is resolved
                 */
                self.handleActivated = function (info) {
                    // Implement if needed
                    var data = self.router.retrieve();
                    if (data.parent)
                        self.orderNo(data.parent.orderNo);
                    self.data(data.parent.orderLines);
                };

                /**
                 * Optional ViewModel method invoked after the View is inserted into the
                 * document DOM.  The application can put logic that requires the DOM being
                 * attached here.
                 * @param {Object} info - An object with the following key-value pairs:
                 * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
                 * @param {Function} info.valueAccessor - The binding's value accessor.
                 * @param {boolean} info.fromCache - A boolean indicating whether the module was retrieved from cache.
                 */
                self.handleAttached = function (info) {
                    // Implement if needed
                };


                /**
                 * Optional ViewModel method invoked after the bindings are applied on this View. 
                 * If the current View is retrieved from cache, the bindings will not be re-applied
                 * and this callback will not be invoked.
                 * @param {Object} info - An object with the following key-value pairs:
                 * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
                 * @param {Function} info.valueAccessor - The binding's value accessor.
                 */
                self.handleBindingsApplied = function (info) {
                    // Implement if needed
                };

                /*
                 * Optional ViewModel method invoked after the View is removed from the
                 * document DOM.
                 * @param {Object} info - An object with the following key-value pairs:
                 * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
                 * @param {Function} info.valueAccessor - The binding's value accessor.
                 * @param {Array} info.cachedNodes - An Array containing cached nodes for the View if the cache is enabled.
                 */
                self.handleDetached = function (info) {
                    // Implement if needed
                };

            }

            /*
             * Returns a constructor for the ViewModel so that the ViewModel is constructed
             * each time the view is displayed.  Return an instance of the ViewModel if
             * only one instance of the ViewModel is needed.
             */
            return new OrderDetailsViewModel();
        }
);
