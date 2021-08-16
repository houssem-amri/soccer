// import express module
const express = require('express');
// import body-parse module
const bodyParser = require('body-parser');
// import mongoose module
const mongoose = require('mongoose');
// import bcrypt module
const bcrypt = require('bcrypt');
// import pdfkit-tables module
const fs = require('fs');
// import nodeMailler module
const nodemailer = require('nodemailer');
// import multer module
const multer = require('multer');
// import  module path predefini en node js
const path = require('path');
// import  module request predefini en node js
const request = require('request');

// import  module https predefini en node js
const https = require('https');
// scrapting module node js
const axios = require('axios')
const cheerio = require('cheerio')

// import les modeles
const Match = require('./models/match');
const Team = require('./models/team');
const Player = require('./models/player');
const User = require('./models/user');
const PDFDocument = require('./pdf-configue/pdfkit-tables');
const { json } = require('body-parser');
// chart example

// create express App
const app = express();

// configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// configure path
app.use('/images', express.static(path.join('backend/images')));

// Security configuration
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, Accept, Content-Type, X-Requested-with, Authorization');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS, PATCH, PUT');
	next();
});
// cofiguration d'image
const MIME_TYPE = {
	'image/png': 'png',
	'image/jpeg': 'jpg',
	'image/jpg': 'jpg'
};
const storage = multer.diskStorage({
	// destination
	destination: (req, file, cb) => {
		const isValid = MIME_TYPE[file.mimetype];
		let error = new Error('Mime type is invalid');
		if (isValid) {
			error = null;
		}
		cb(null, 'backend/images');
	},
	filename: (req, file, cb) => {
		const name = file.originalname.toLowerCase().split(' ').join('-');
		const extension = MIME_TYPE[file.mimetype];
		const imgName = name + '-' + Date.now() + '-sport-' + '.' + extension;
		cb(null, imgName);
	}
});

// connect mongoose
mongoose.connect('mongodb://localhost:27017/sportDb', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	useCreateIndex: true
});

app.get('/api/users/fetchData', (req, res) => {
	console.log('here in fetch data');
	const fetchData = async () => {
		const a = "a50 samsung"
		const { data } = await axios.get("https://fnac.tn/search?q=" + a)
		const $ = cheerio.load(data)
		const title = $("div[class='product-info']>div[class='product-description']>a	")
			.text()
			.trim()
		console.log(title)
		return title
	}

	res.status(200).json({
		result: fetchData()
	});


});
// const fetchData = async () => {
// 	const a = "samsung galaxy a01"
// 	const { data } = await axios.get("https://fnac.tn/search?q=" + a)
// 	const $ = cheerio.load(data)
// 	const title = $("div[class='product-info']>div[class='product-description']>a	")
// 		.text()
// 		.trim()
// 	console.log(title)
// }
// fetchData()
// async function fetchHTML(url) {
// 	const { data } = await axios.get(url)
// 	return cheerio.load(data)
// 	const $ = await fetchHTML("https://www.mytek.tn/")
// 	// Print the full HTML
// 	console.log(`Site HTML: ${$.html()}\n\n`)

// 	// Print some specific page content
// 	console.log(`First h1 tag: ${$('h1').text()}`)
// }



// traitement logique de  matches
app.get('/matches', (req, res) => {
	console.log('here in get all matches');
	Match.find((err, docs) => {
		if (err) {
			console.log('error widh DB');
		} else {
			res.status(200).json({
				matches: docs
			});
		}
	});
});

app.post('/matches', multer({ storage: storage }).single('image'), (req, res) => {
	console.log('req.file', req.file);
	url = req.protocol + '://' + req.get('host');
	// const match;
	if (req.file === undefined) {
		match = new Match({
			teamOne: req.body.teamOne,
			teamTwo: req.body.teamTwo,
			scoreOne: req.body.scoreOne,
			scoreTwo: req.body.scoreTwo,
			image: url + '/images/a.jpg'
		});
	} else {
		match = new Match({
			teamOne: req.body.teamOne,
			teamTwo: req.body.teamTwo,
			scoreOne: req.body.scoreOne,
			scoreTwo: req.body.scoreTwo,
			image: url + '/images/' + req.file.filename
		});
	}

	match.save().then(
		res.status(200).json({
			message: 'Match Added successfully'
		})
	);
});

app.get('/matches/:id', (req, res) => {
	console.log('here id', req.params.id);

	Match.findOne({ _id: req.params.id }).then((findedObject) => {
		if (findedObject) {
			res.status(200).json({
				match: findedObject
			});
		}
	});
});

app.put('/matches/:id', (req, res) => {
	console.log('here match is update');
	const match = new Match({
		_id: req.body._id,
		teamOne: req.body.teamOne,
		teamTwo: req.body.teamTwo,
		scoreOne: req.body.scoreOne,
		scoreTwo: req.body.scoreTwo
	});

	Match.updateOne({ _id: req.params.id }, match).then((result) => {
		if (result) {
			res.status(200).json({
				message: 'Match updated'
			});
		}
	});
});
app.delete('/matches/:id', (req, res) => {
	console.log('here match is deleted', req.params.id);
	Match.deleteOne({ _id: req.params.id }).then(
		res.status(200).json({
			message: 'Match deleted successfully'
		})
	);
});

// traitement logique de teams
app.get('/teams/api/soccer/teams', (req, res) => {
	console.log('here in get all teams');
	// Team.find((err, docs) => {
	// 	if (err) {
	// 		console.log('error widh DB');
	// 	} else {
	// 		res.status(200).json({
	// 			teams: docs
	// 		});
	// 	}
	// });

	// get teams API
	var options = {
		url:
			'https://app.sportdataapi.com/api/v1/soccer/teams?apikey=3b133ad0-a1c0-11eb-80a8-f777ca078eb8&country_id=119'
	};

	function callback(error, response, body) {
		if (!error && response.statusCode == 200) {
			// console.log(body);
			res.status(200).json({
				result: JSON.parse(body).data
			});
		}
	}

	request(options, callback);
});
app.post('/teams', (req, res) => {
	const team = new Team({
		teamName: req.body.teamName,
		teamFoundation: req.body.teamFoundation,
		teamStadium: req.body.teamStadium
	});
	team.save().then(
		res.status(200).json({
			message: 'Team added successfully'
		})
	);
});
app.get('/teams/:id', (req, res) => {
	console.log('here id', req.params.id);
	Team.findOne({ _id: req.params.id }).then((findedObject) => {
		if (findedObject) {
			res.status(200).json({
				team: findedObject
			});
		}
	});
});
app.put('/teams/:id', (req, res) => {
	console.log('here team is update');
	const team = new Team({
		_id: req.body._id,
		teamName: req.body.teamName,
		teamFoundation: req.body.teamFoundation,
		teamStadium: req.body.teamStadium
	});
	Team.updateOne({ _id: req.params.id }, team).then((result) => {
		if (result) {
			res.status(200).json({
				message: 'team updated'
			});
		}
	});
});
app.delete('/teams/:id', (req, res) => {
	console.log('here team is deleted', req.params.id);
	Team.deleteOne({ _id: req.params.id }).then(
		res.status(200).json({
			message: 'team deleted successfully'
		})
	);
});

// traitement logique de players
app.get('/players', (req, res) => {
	console.log('here get all players');
	Player.find((err, docs) => {
		if (err) {
			console.log('error widh DB');
		} else {
			res.status(200).json({
				players: docs
			});
		}
	});
});
app.post('/players', (req, res) => {
	console.log('here in post all players', req.body);
	const player = new Player({
		playerName: req.body.playerName,
		playerAge: req.body.playerAge,
		playerNumber: req.body.playerNumber,
		playerPoste: req.body.playerPoste
	});
	player.save();
});
app.get('/players/:id', (req, res) => {
	console.log('here id', req.params.id);
	Player.findOne({ _id: req.params.id }).then((findedObject) => {
		if (findedObject) {
			res.status(200).json({
				player: findedObject
			});
		}
	});
});
app.put('/players/:id', (req, res) => {
	console.log('here PLAYER is update');
	const player = new Player({
		_id: req.body._id,
		playerName: req.body.playerName,
		playerAge: req.body.playerAge,
		playerNumber: req.body.playerNumber,
		playerPoste: req.body.playerPoste
	});
	Player.updateOne({ _id: req.params.id }, player).then((result) => {
		if (result) {
			res.status(200).json({
				message: 'player updated'
			});
		}
	});
});
app.delete('/players/:id', (req, res) => {
	console.log('here player is deleted', req.params.id);
	Player.deleteOne({ _id: req.params.id }).then(
		res.status(200).json({
			message: 'player deleted successfully'
		})
	);
});
// traitement search by teamOne
app.post('/matches/search', (req, res) => {
	console.log('here in get all matches');
	const search = req.body.teamOne;
	Match.find({ teamOne: search }).then((findedObject) => {
		if (findedObject) {
			res.status(200).json({
				match: findedObject
			});
		}
	});
});
// traitement logique de users
app.get('/api/users', (req, res) => {
	console.log('here in get all users');
	User.find((err, docs) => {
		if (err) {
			console.log('error widh DB');
		} else {
			res.status(200).json({
				users: docs
			});
		}
	});
});

app.post('/api/users/signup', (req, res) => {
	bcrypt.hash(req.body.pwd, 10).then((cryptedPwd) => {
		console.log('here in post all users', req.body);

		const user = new User({
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			email: req.body.email,
			pwd: cryptedPwd,
			role: req.body.role
			// confirmPwd: req.body.confirmPwd
		});
		// TRANSPORT node mailler
		var transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: 'amri.houcem.eddine@gmail.com',
				pass: 'Hache21211441'
			}
		});
		// mailOptions node mailler
		var mailOptions = {
			from: 'amri.houcem.eddine@gmail.com',
			to: req.body.email,
			subject: 'Sending Email using Node.js',
			text: 'test ok '
		};

		transporter.sendMail(mailOptions, function (error, info) {
			if (error) {
				console.log(error);
			} else {
				console.log('Email sent: ' + info.response);
			}
		});
		// const message = {
		// 	from: 'amri.houcem.eddine@gmail.com', // Sender address
		// 	to: req.body.email, // recipients
		// 	subject: 'test mail from Nodejs', // Subject line
		// 	text: '<p>Successfully! received mail using nodejs</p>' // Plain text body
		// };

		user.save().then(
			// transport.sendMail(message, function(err, info) {
			// 	if (err) {
			// 		console.log(err);
			// 	} else {
			// 		console.log('mail has sent.');
			// 		console.log(info);
			res.status(200).json({
				message: 'user added successfully'
			})
			// 	}
			// })
		);
	});
});
app.post('/api/users/signin', (req, res) => {
	User.findOne({ email: req.body.email })
		.then((findedUser) => {
			console.log('findedUser', findedUser);
			if (!findedUser) {
				res.status(200).json({
					message: '0'
				});
			}
			return bcrypt.compare(req.body.pwd, findedUser.pwd);
		})
		.then((correctUserPwd) => {
			if (!correctUserPwd) {
				res.status(200).json({
					message: '1'
				});
			}
			User.findOne({ email: req.body.email }).then((finalUser) => {
				let user = {
					id: finalUser._id,
					firstName: finalUser.firstName,
					lastName: finalUser.lastName,
					role: finalUser.role
				};
				res.status(200).json({
					user: user,
					message: '2'
				});
			});
		});
});
// genrate pfd

// Add the Matches to the table
app.get('/matches/ali/pdfs', (req, res) => {
	console.log(' here into generate pdf file');
	const doc = new PDFDocument();
	doc.pipe(fs.createWriteStream(`backend/pdfs/matches.pdf`));
	doc
		.fillColor('#444444')
		.fontSize(20)
		.text('Matches Information.', 110, 57)
		.fontSize(10)
		.text('725 Fowler Avenue', 200, 65, { align: 'right' })
		.text('Chamblee, GA 30341', 200, 80, { align: 'right' })
		.moveDown();
	// create a table
	const table = {
		headers: ['team one', 'team two', 'score one', 'score two'],
		rows: []
	};
	console.log('here in get all matches');
	Match.find((err, docs) => {
		if (err) {
			console.log('error widh DB');
		} else {
			for (const match of docs) {
				table.rows.push([match.teamOne, match.teamTwo, match.scoreOne, match.scoreTwo]);
			}
			doc.moveDown().table(table, 10, 125, { width: 590 });
			doc.end();
			res.status(200).json({
				message: 'Done for PDF'
			});
		}
	});
});
// for (const match of Match) {
// 	table.rows.push([ match.teamOne, match.teamTwo, match.scoreOne, match.scoreTwo ]);
// }
// API weather
app.get('/api/users/weather', (req, res) => {
	console.log('here into weather');
	const apiKey = 'f6cb22e78767cc9aaa7677d824be5b31';
	const city = 'Tunisia';
	const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey + '&units=metric';
	// const url = 'api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey;

	https.get(url, (response) => {
		response.on('data', (data) => {
			console.log('Data', data);
			const weather = JSON.parse(data);
			console.log('Weather', weather);
			const temp = weather.main.temp;
			const minTemp = weather.main.temp_min;
			const maxTemp = weather.main.temp_max;
			console.log(temp, minTemp, maxTemp);

			const icon = weather.weather[0].icon;
			console.log('Icon', icon);
			const iconUrl = 'http://openweathermap.org/img/w/' + icon + '.png';
			// res.write("Temp " + temp);
			// res.send("<input type='text' value=" + temp + ">" + "<img src=" + iconUrl + ">");
			res.status(200).json({
				weather: JSON.parse(data)

			});
		});
	});
});
// / match chart
// app.get('/matches/chart', function(req, res, next) {
// 	Match.aggregate(
// 		[
// 			{
// 				$group: {
// 					teamOne: { teamOne: '$teamOne', teamTwo: '$teamTwo' },
// 					scoreOne: {
// 						$sum: '$scoreOne'
// 					}
// 				}
// 			},
// 			{ $sort: { scoreOne: 1 } }
// 		],
// 		function(err, match) {
// 			if (err) return next(err);
// 			res.json(match);
// 		}
// 	);
// });
app.get('/matches/chart', (req, res) => {
	console.log('here in get all matches chart');
	Match.find((err, docs) => {
		if (err) {
			console.log('error widh DB');
		} else {
			res.status(200).json({
				matches: docs
			});
		}
	});
});

module.exports = app;
