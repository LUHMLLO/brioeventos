module.exports = {
	pwa: {
		workboxOptions: {
			// ...other Workbox options...
			exclude: [/_redirects/,/_headers/,/netlify.toml/],			
            skipWaiting: true

		},
		manifestOptions: {
			"name": "Brio Eventos",
			"short_name": "BrioEventos",
			"display": "standalone",
			"gcm_sender_id": "615836040451",

			"theme_color": "#000000",
			"msTileColor": "#000000",
			"background_color": "#000000",
			"appleMobileWebAppStatusBarStyle": "#000000",
			"appleMobileWebAppCapable": "yes",
		},
	},
}


/*
"icons": [
	{
		"src": "/icon.png",
		"sizes": "16x16 24x24 32x32 50x50 64x64 72x72 96x96 120x120 128x128 144x144 152x152 180x180 192x192 384x384 512x512",
		"type": "image/png"
	},
],
*/