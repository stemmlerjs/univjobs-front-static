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

const getBaseUrl = (req) => {
	const baseUrl = req.url.split("/")[2];
	if (baseUrl === "app.01-staging.univjobs.ca") {
		return setting.staging.app;
	}
	return setting.prod.app;
}

app.use(require('prerender-node')
.set('prerenderToken', 'Ecl3kKs6Lg7ZdBcbaKTF'))
// .set('forwardHeaders', true);

const router = express.Router();
app.get('*', (req, res) => {
	console.log(req.url);
	console.log(JSON.stringify(req))
	res.send("here's where we are now buddy")
})
app.get('/posting/:jobId', (req, res) => request({
	url: `${getBaseUrl(req)}/posting/${req.params.jobId}`,
	method: 'GET'
}).pipe(res));

app.use(bodyParser.json());
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
