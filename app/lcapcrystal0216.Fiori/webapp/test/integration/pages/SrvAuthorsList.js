sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'lcapcrystal0216.Fiori',
            componentId: 'SrvAuthorsList',
            entitySet: 'SrvAuthors'
        },
        CustomPageDefinitions
    );
});