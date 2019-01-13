'use strict'

const crypto = require("crypto");

class Processor {
  constructor (createNodeId, createNode) {
    this.createNodeId = createNodeId;
    this.createNode = createNode;
  }

  /**
   * _processNode
   * Creates a unique node.
   * 
   * @param {Object} source source object to use as node data
   * @param {String} uniqueNodeString required unique string
   * 
   * @return {Object} node
   */

  _processNode (source, uniqueNodeString, nodeName) {
    const { createNodeId } = this;

    const nodeId = createNodeId(uniqueNodeString)
    const nodeContent = JSON.stringify(source)
    const nodeContentDigest = crypto
      .createHash('md5')
      .update(nodeContent)
      .digest('hex')

    const nodeData = Object.assign({}, source, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: nodeName,
        content: nodeContent,
        contentDigest: nodeContentDigest,
      },
    })
    return nodeData
  }

  processAndCreateCompanyNodesBulk (companies) {
    console.log("\n\n======================================")
    console.log('Every <CompanyNode/>');

    for(let company of companies) {
      console.log('Start @ => Comp')
      console.log(company);
      if (company) this.processAndCreateCompanyNode(company)
      console.log('End @ => Comp\n\n\n')
    }
  }


  processAndCreateCityNode (cityData) {
    const { createNode } = this;
    console.log('creating city node', cityData.name)
    // We can't index empty arrays. If the city has no jobs,
    // delete the empty array.
    if (cityData.jobs.length === 0) {
      delete cityData.jobs;
    }
    const nodeData = this._processNode(
      cityData,
      `univjobs-city-${cityData.name} `,
      'City'
    );
    createNode(nodeData);
    console.log(cityData);
    // console.log("Created city node");
  }

  processAndCreateDirectoryCompanyNodesBulk (directoryCompanies) {
    for (let directoryCompany of directoryCompanies) {
      this.processAndCreateDirectoryCompanyNode(directoryCompany)
    }
  }

  /**
   * processAndCreateDirectoryCompanyNode
   * 
   * @function that processes and creates a new directory company node.
   * @param {Object} company object
   * @return {Promise}
   */

  processAndCreateDirectoryCompanyNode (directoryCompany) {
    const { createNode } = this;
    const nodeData = this._processNode(
      directoryCompany,
      `univjobs-directory-company-${directoryCompany.companyId}`,
      'DirectoryCompany'
    );
    createNode(nodeData);
    // console.log("Created Directory Company node");
  }

  /**
   * processAndCreateCompanyNode
   * 
   * @function that processes and creates a new company node.
   * @param {Object} company object
   * @return {Promise}
   */

  processAndCreateCompanyNode (company) {
    const { createNode } = this;
    const nodeData = this._processNode(
      company,
      `univjobs-company-${company.companyId}`,
      'Company'
    );
    createNode(nodeData);
    console.log(`Created company node for company id =${company.companyId}`);
  }

  /**
   * processAndCreateJobNode
   * 
   * @function that processes and creates a new job node.
   * @param {Object} company object
   * @return {Promise}
   */

  processAndCreateJobNode (job) {
    const { createNode } = this;
    const nodeData = this._processNode(
      job,
      `univjobs-company-job-${job.jobId}`,
      'Job'
    );
    createNode(nodeData);
  }

}

module.exports = {
  createProcessor: (createNodeId, createNode) => {
    return new Processor(createNodeId, createNode);
  }
}
