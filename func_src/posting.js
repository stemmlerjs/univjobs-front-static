'use strict';
const express = require('express');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');
const request = require('request')

// Configure the environment settings
const setting = {
	"staging": {
		"api": "https://api.01-staging.univjobs.ca",
		"app": "https://app.01-staging.univjobs.ca",
	},
	"prod": {
		"api": "https://api.univjobs.ca",
		"app": "https://app.univjobs.ca",
	}
}

const getBaseUrl = (url) => {
	const chunks = url.split('/');
	const env = chunks[chunks.length - 3];
	console.log("current env", env)
	if (env === "staging") {
		console.log(`[Staging request]: ${setting.staging.app}`)
		return setting.staging.app;
	}
	console.log(`[Prod request]: ${setting.prod.app}`)
	return setting.prod.app;
}

const getJobSlug = (url) => {
	const chunks = url.split('/');
	return chunks[chunks.length - 1];
}

app.use(require('prerender-node')
.set('prerenderToken', 'Ecl3kKs6Lg7ZdBcbaKTF'))

const router = express.Router();
app.use((req, res) => {
	console.log('Request to', req.url);
	console.log(req.url.split('/'), "========== :)")
	// request({
	// 	url: `${getBaseUrl(req.url)}/posting/${getJobSlug(req.url)}`,
	// 	method: 'GET'
	// }).pipe(res)

	req.pipe(request.get({ 
		url: `${getBaseUrl(req.url)}/posting/${getJobSlug(req.url)}`
	}), {
		end: false
	}).pipe(res);
})

// app.use(bodyParser.json());
app.use('/.netlify/functions/posting', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);

// exports.handler = function(event, context, callback) {
	
// 	const setting = {
// 		"staging": {
// 			"api": "https://api.01-staging.univjobs.ca",
// 			"app": "https://app.01-staging.univjobs.ca",
// 		},
// 		"prod": {
// 			"api": "https://api.univjobs.ca",
// 			"app": "https://app.univjobs.ca",
// 		}
// 	}

	// var splits = event.path.split("/");
	// var job_id = splits[splits.length-1];
	// var env = splits[splits.length-3];

	// // console.log(splits);
	// // console.log(env);
	// var setting = (env == "staging") ? setting.staging : setting.prod;
	// console.log(JSON.stringify(setting));

// 	axios.get(`${setting.api}/api/v1/public/job/${job_id}`).then((r) => {

// 		axios.get(setting.app).then((t) => {

// 			var test3 = new jsdom.JSDOM(t.data);

// 			var job = r.data.job;

// 			var title = `${job.title} @ ${job.Employer.company_name}`;
// 			var url = `${setting.app}/posting/${job_id}`;
// 			var description = striptags(job.compensation);
// 			var image = job.Employer.logo_url;

// 			test3.window.document.querySelector("[property='og:title']").setAttribute("content",title);
// 			test3.window.document.querySelector("[property='og:url']").setAttribute("content",url);
// 			test3.window.document.querySelector("[property='og:description']").setAttribute("content",description);
// 			test3.window.document.querySelector("[property='og:image']").setAttribute("content",image);
// 			test3.window.document.querySelector("[property='og:type']").setAttribute("content","website");

// 			var response = {
// 				statusCode: 200,
// 				headers: {
// 					"Content-Type": "text/html"
// 				},
// 				body: test3.window.document.documentElement.outerHTML
// 			}
// 			callback(null,response)
// 		}).catch((e) => {
// 			callback(e)
// 		});
// 	}).catch((e) => {
// 		callback(e)
// 	});
// 	};
