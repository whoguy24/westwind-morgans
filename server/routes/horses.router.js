const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/:route', (req, res) => {
    
    const queryText = `
        SELECT * FROM "horses"
        WHERE "horses"."type" = $1
        ORDER BY "horses"."id" ASC;
    `;

    const sqlValues = [ req.params.route ];
    
    pool.query(queryText, sqlValues)
    .then((result) => { 
        res.send(result.rows)
    })
    .catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

router.get('/:route/:id', async (req, res) => {

    const sqlQuery = `
        SELECT * FROM "horses"
        WHERE "horses"."type" = $1 AND "horses"."id" = $2
        ORDER BY "horses"."id" ASC;
    `;
    const sqlValues = [ req.params.route, req.params.id ];

    pool.query(sqlQuery, sqlValues)
    .then(async(result) => { 
        const horse = result.rows[0];
        horse.parents = await fetchParents(horse.sire_id, horse.dam_id, 0) || [];
        horse.progeny = await fetchProgeny(horse.id) || [];
        horse.images = await fetchImages(horse.id) || [];
        res.send(horse)
    })
    .catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

function fetchParents(sire_id, dam_id, i) {
    return new Promise((resolve, reject )=> {
        const queryValues = [sire_id, dam_id];
        const queryText = `
            SELECT * FROM "horses"
            WHERE "horses"."id" = $1 OR "horses"."id" = $2
            ORDER BY "horses"."id" ASC;
        ;`
        pool.query(queryText, queryValues)
        .then(async(result) => { 
            const parents = result.rows
            if (i<1) {
                for (const parent of parents) {
                    parent.parents = await fetchParents( parent.sire_id, parent.dam_id, i+1 )  
                }
            }
            resolve(parents)
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

function fetchProgeny(id) {
    return new Promise((resolve, reject )=> {
        const queryValues = [id];
        const queryText = `
            SELECT * FROM "horses"
            WHERE "horses"."sire_id" = $1 OR "horses"."dam_id" = $1
            ORDER BY "horses"."id" ASC;
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