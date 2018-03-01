const express = require( 'express' );
const router = express.Router();

router.get( '/', ( req, res ) => {
    res.render( 'home' );
});

router.get( '/projects', ( req, res ) => {
	res.render( 'projects' );
});

router.get( '/about-me', ( req, res ) => {
	res.render( 'about-me' );
});

router.get( '/skills', ( req, res ) => {
    res.render( 'skills' );
});

module.exports = router;