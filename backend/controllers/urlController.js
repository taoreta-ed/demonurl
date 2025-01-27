const {URL} = require ("isomorphic-url");
const knex = require("../db/knex");

exports.shortenUrl = async(req, res) => {
    try{
        const {originalUrl, customSlug} = req.body;

        //Validar url
        const url = new URL(originalUrl); //Si la url es inválida, se lanzará un error

        //General slug aleatorio si no hay customSlug
        const slug = customSlug || Math.random().toString(36).substring(2, 7);

        await knex("urls").insert({ original_url: originalUrl, slug });
        res.json({slug});

    }catch(error){
        res.status(400).json({error: "URL inválida o slug en uso"})
    }
}