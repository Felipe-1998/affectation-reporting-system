const { Router }=require('express');
const router = Router();
const admin = require("firebase-admin");

var serviceAccount = require("./permisos.json");

admin.initializeApp({
    credential:admin.credential.cert(serviceAccount),
    databaseURL:'https://affectation-reporting-system-default-rtdb.firebaseio.com/'
});

const db = admin.database();

router.get('/', (req,res)=>{
    db.ref('affecteds').once('value',(snapshot)=>{
        const data = snapshot.val();
        res.status(200).json(data);
    });
});

router.post('/new-affected',(req,res)=>{
    const dataBody = req.body;
    dataBody.forEach((affected,index)=>{
        const newAffected = { ...affected };
        const {idCard} = affected;
        console.log(newAffected,index);
        const reference = db.ref('affecteds') //.set(newAffected); 
        reference.orderByChild("idCard").equalTo(idCard).once("value",async function(snapshot){
            if(snapshot.exists()){
                console.log("El registro ya existe en la BD");
            }else{
                await reference.push(newAffected);
                console.log("Nuevo registro agregado");
            }
        })
    });
    res.status(200).send('recived');
    // const {idCard, name , age , country,birthday,location} = req.body;
    // const newAffected = { idCard, name , age , country, birthday, location };
    // db.ref('affecteds').push(newAffected);
    // res.status(200).send('recived');
});

router.delete('/delete-affected/:id',(req,res)=>{
    const {id} = req.params;
    db.ref('affecteds/' + id).remove();
    res.status(200).json({"message": "affected was removed"});
});

module.exports = router;