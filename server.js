const express = require( 'express' );
const app     = express();
const port    = process.env.PORT || 3000;

const routes = require( './routes/routes.js' );

app.use(express.static( 'public' ) );
app.set( 'view engine', 'ejs' );
app.use( '/', routes );

app.listen( port, () => {
	console.log( `Listening on port:${port}` );
});