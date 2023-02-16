sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'lcapcrystal0216/Fiori/test/integration/FirstJourney',
		'lcapcrystal0216/Fiori/test/integration/pages/SrvAuthorsList',
		'lcapcrystal0216/Fiori/test/integration/pages/SrvAuthorsObjectPage',
		'lcapcrystal0216/Fiori/test/integration/pages/SrvbooksObjectPage'
    ],
    function(JourneyRunner, opaJourney, SrvAuthorsList, SrvAuthorsObjectPage, SrvbooksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('lcapcrystal0216/Fiori') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheSrvAuthorsList: SrvAuthorsList,
					onTheSrvAuthorsObjectPage: SrvAuthorsObjectPage,
					onTheSrvbooksObjectPage: SrvbooksObjectPage
                }
            },
            opaJourney.run
        );
    }
);