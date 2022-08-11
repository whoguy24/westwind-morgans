const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    const queryText = `
        SELECT "horses".*, "images"."url"
        FROM "horses"
        LEFT OUTER JOIN "images" ON "horses"."profile_image_id" = "images"."id"
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

router.get('/:id', (req, res) => {
    const sqlQuery = `
        SELECT "horses".*, "images"."url"
        FROM "horses"
        LEFT OUTER JOIN "images" ON "horses"."profile_image_id" = "images"."id"
        WHERE "horses"."id" = $1
        ORDER BY "horses"."id" ASC;
    `;
    const sqlValues = [
        req.params.id
    ];
    pool.query(sqlQuery, sqlValues)
    .then((result) => { 
        res.send(result.rows[0])
    })
    .catch((error) => {
        console.log(error);
        res.sendStatus(500);
    });
});

module.exports = router;
