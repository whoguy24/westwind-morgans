const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    const queryText = `
        SELECT * FROM "horses"
        WHERE "horses"."category" = 'Stallion'
        ORDER BY "horses"."id" ASC;
    `;
    
    pool.query(queryText)
    .then((result) => { 
        res.send(result.rows)
    })
    .catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});








router.get('/:id', async (req, res) => {

    const sqlQuery = `
        SELECT * FROM "horses"
        WHERE "horses"."id" = $1
        ORDER BY "horses"."id" ASC;
    `;
    const sqlValues = [ req.params.id ];

    pool.query(sqlQuery, sqlValues)
    .then(async(result) => { 

        const horse = result.rows[0];

        horse.pedigree_graph = await buildPedigreeGraph(horse);

        // horse.parents = [];
        // horse.parents.push(await fetchParent(horse.sire_id));
        // horse.parents.push(await fetchParent(horse.dam_id));

        // const images = await fetchImages(horse.id)
        // horse.images = images;

        res.send(horse)
    })
    .catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });

});



async function buildPedigreeGraph(horse) {

    horse.parents = [];

    if (horse.sire_id) {
        horse.parents.push(await fetchParent(horse.sire_id));
    }
    
}

function fetchParent(parent_id) {
    return new Promise((resolve, reject )=> {
        const queryValues = [parent_id];
        const queryText = `
            SELECT * FROM "horses"
            WHERE "horses"."id" = $1
            ORDER BY "horses"."id" ASC;
        ;`
        pool.query(queryText, queryValues)
        .then((result) => { 
            resolve(...result.rows)
        })
        .catch((error) => { 
            reject(error);
        });
    })
}


















function fetchImages(id) {
    return new Promise((resolve, reject )=> {
        const queryValues = [id];
        const queryText = `
            SELECT * FROM "images"
            WHERE "images"."horse_id" = $1
            ORDER BY "images"."id" ASC;
        ;`
        pool.query(queryText, queryValues)
        .then((result) => { 
            resolve(result.rows)
        })
        .catch((error) => { 
            reject(error);
        });
    })
}

module.exports = router;