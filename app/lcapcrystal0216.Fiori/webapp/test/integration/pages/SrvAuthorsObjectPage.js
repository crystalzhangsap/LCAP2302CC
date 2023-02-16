sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'lcapcrystal0216.Fiori',
            componentId: 'SrvAuthorsObjectPage',
            entitySet: 'SrvAuthors'
        },
        CustomPageDefinitions
    );
});