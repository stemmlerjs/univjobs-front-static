'use strict';
var https = require('https');
var axios = require('axios');
var jsdom = require('jsdom');
var striptags = require("striptags");


exports.handler = async function(event, context, callback) {

	try {
		const res2 = await axios.get('https://api.univjobs.ca/api/v1/public/job/101');

		const res = await axios.get('https://app.univjobs.ca');

		var test3 = new jsdom.JSDOM(res.data);

		var job = res2.data.job;

		var title = `${job.title} @ ${job.Employer.company_name}`;
		var url = "https://app.univjobs.ca/posting/101";
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
	} catch (e) {
		callback(e)
	}
};
