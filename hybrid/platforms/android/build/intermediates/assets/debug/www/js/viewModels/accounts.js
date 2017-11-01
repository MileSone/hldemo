/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your incidents ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery','viewModels/dashboard'],
        function (oj, ko, $,dash) {

            function AccountsViewModel() {
                var self = this;
                self.data = ko.observableArray([]);

                var data = [
                    {
                        "accountDesc": "北京华联综合超市股份有限公司安徽第二分公司.-.营业外收入-其他.-.-.-.-.-.-",
                        "accountGroup": "21222.0.6301980101.0.0.0.0.0.0",
                        "accountName": "营业外收入-其他",
                        "accountNo": "6301980101",
                        "credit": 2881.34,
                        "dailyAccountName": "21222蒙城店期初科目余额表导入 记账凭证 CNY",
                        "dailyAccountSrc": "人工",
                        "dailyAccountType": "记账凭证",
                        "debit": 0,
                        "locationName": "北京华联综合超市股份有限公司安徽第二分公司",
                        "locationNo": "21222",
                        "oid": "1",
                        "orderNo": "3000000004",
                        "rowDesc": "已创建日记账导入",
                        "validDate": "2015-07-31"
                    },
                    {
                        "accountDesc": "北京华联综合超市股份有限公司成都第一分公司.-.营业外收入-其他.-.-.-.-.-.-",
                        "accountGroup": "21222.0.6301980101.0.0.0.0.0.0",
                        "accountName": "营业外收入-其他",
                        "accountNo": "6301983928",
                        "credit": 369.4,
                        "dailyAccountName": "收款/收银员长短款",
                        "dailyAccountSrc": "人工",
                        "dailyAccountType": "记账凭证",
                        "debit": 0,
                        "locationName": "北京华联综合超市股份有限公司安徽第二分公司",
                        "locationNo": "21222",
                        "oid": "2",
                        "orderNo": "3000000199",
                        "rowDesc": "收款/收银员长短款7.1-7.31",
                        "validDate": "2015-08-28"
                    }
                ]

                self.dataSource = new oj.ArrayTableDataSource(self.data, {idAttribute: "accountNo"});
                // Below are a subset of the ViewModel methods invoked by the ojModule binding
                // Please reference the ojModule jsDoc for additional available methods.

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

                    $.ajax({
                        type: "GET",
                        url: dash.seviceURL + "/custom/BHG/account/getAccountDetail",
                        async: false,
                        headers: {
                            "oracle-mobile-backend-id": dash.MBE_ID,
                            "Authorization": "Basic " + window.btoa(dash.username() + ":" + dash.password())
                        },
                        success: function (data) {
                            console.log(data);
                            self.data(data);
                            self.dataSource = new oj.ArrayTableDataSource(self.data, {idAttribute: "accountNo"});
                        },
                        error: function (e) {
                            console.log("cannot retrieve data. " + e)
                        }
                    })
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
            return new AccountsViewModel();
        }
);
