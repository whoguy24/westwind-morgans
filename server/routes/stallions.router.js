const express = require('express');
const db = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {
    
    db.query(
        `SELECT * FROM horses;`,
        (error, result) => {
            if (error) {
                console.log(error);
            } else {
                console.log(result);
                res.send(result)
                
            }
        }
    )
    
});

// router.get('/:id', async (req, res) => {

//     const sqlQuery = `
//         SELECT * FROM "horses"
//         WHERE "horses"."id" = $1
//         ORDER BY "horses"."id" ASC;
//     `;
//     const sqlValues = [ req.params.id ];

//     db.query(sqlQuery, sqlValues)
//     .then(async(result) => { 
//         const horse = result.rows[0];
//         horse.parents = await fetchParents(horse.sire_id, horse.dam_id, 0);
//         horse.images = await fetchImages(horse.id);
//         res.send(horse)
//     })
//     .catch((error) => {
//         console.log(error);
//         res.sendStatus(500);
//     });
// });

// function fetchParents(sire_id, dam_id, i) {
//     return new Promise((resolve, reject )=> {
//         const queryValues = [sire_id, dam_id];
//         const queryText = `
//             SELECT * FROM "horses"
//             WHERE "horses"."id" = $1 OR "horses"."id" = $2
//             ORDER BY "horses"."id" ASC;
//         ;`
//         db.query(queryText, queryValues)
//         .then(async(result) => { 
//             const parents = result.rows
//             if (i<1) {
//                 for (const parent of parents) {
//                     parent.parents = await fetchParents( parent.sire_id, parent.dam_id, i+1 )  
//                 }
//             }
//             resolve(parents)
//         })
//         .catch((error) => { 
//             reject(error);
//         });
//     })
// }


















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