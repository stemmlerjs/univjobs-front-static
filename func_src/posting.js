'use strict';
var https = require('https');
var axios = require('axios');
var jsdom = require('jsdom');
var striptags = require("striptags");


exports.handler = function(event, context, callback) {
	//exports.handler = async function(event, context, callback) {

	console.log();
	axios.get(`https://api.univjobs.ca/api/v1/public/job/${event.path.split("/")[2]}`).then((r) => {

		axios.get('http://app.univjobs.ca').then((t) => {

			var test3 = new jsdom.JSDOM(t.data);

			var job = r.data.job;

			var title = `${job.title} @ ${job.Employer.company_name}`;
			var url = `http://app.univjobs.ca/posting/${event.path.split("/")[2]}`;
			var description = striptags(job.compensation);
			var image = job.Employer.logo_url;

			test3.window.document.querySelector("[property='og:title']").setAttribute("content",title);
			test3.window.document.querySelector("[property='og:url']").setAttribute("content",url);
			test3.window.document.querySelector("[property='og:description']").setAttribute("content",description);
			test3.window.document.querySelector("[property='og:image']").setAttribute("content",image);
			test3.window.document.querySelector("[property='og:type']").setAttribute("content","website");

			var response = {
				statusCode: 200,
				headers: {
					"Content-Type": "text/html"
				},
				body: test3.window.document.documentElement.outerHTML
			}
			callback(null,response)
		}).catch((e) => {
			callback(e)
		});
	}).catch((e) => {
		callback(e)
	});
	};
