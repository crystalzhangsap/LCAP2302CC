using { lcapcrystal0216 as my } from '../db/schema';

using lcapcrystal0216 from '../db/schema';

@path : 'service/lcapcrystal0216'
service lcapcrystal0216Service
{
    entity SrvAuthors as
        projection on my.Authors;

    entity Srvbooks as
        projection on my.books;
}

annotate lcapcrystal0216Service with @requires :
[
    'authenticated-user'
];
