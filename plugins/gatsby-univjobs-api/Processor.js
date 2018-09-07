'use strict'

const crypto = require("crypto");

class Processor {
  constructor (createNodeId, createNode) {
    this.createNodeId = createNodeId;
    this.createNode = createNode;
  }

  /**
   * _processCompany
   * 
   * @function that processes a company and returns the Gatsby/
   * GraphQL object format.
   * @param {Object} company
   * @return {Object} for GraphQL/Gatsby
   */

  _processCompany (company) {
    const { createNodeId } = this;

    const nodeId = createNodeId(`univjobs-company-${company.companyId}`)
    const nodeContent = JSON.stringify(company)
    const nodeContentDigest = crypto
      .createHash('md5')
      .update(nodeContent)
      .digest('hex')

    const nodeData = Object.assign({}, company, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `Company`,
        content: nodeContent,
        contentDigest: nodeContentDigest,
      },
    })
    return nodeData
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
    const nodeData = this._processCompany(company);
    createNode(nodeData);
    console.log("Created company node");
  }

  /**
   * _processJobs
   * 
   * @function that processes a job and returns the Gatsby/
   * GraphQL object format.
   * @param {Object} company
   * @return {Object} for GraphQL/Gatsby
   */

  _processJob (job) {
    const { createNodeId } = this;

    const nodeId = createNodeId(`univjobs-company-job-${job.jobId}`)
    const nodeContent = JSON.stringify(job)
    const nodeContentDigest = crypto
      .createHash('md5')
      .update(nodeContent)
      .digest('hex')

    const nodeData = Object.assign({}, job, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `Job`,
        content: nodeContent,
        contentDigest: nodeContentDigest,
      },
    })
    return nodeData
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
    const nodeData = this._processJob(job);
    createNode(nodeData);
    console.log("Created job node");
  }



}



module.exports = {
  createProcessor: (createNodeId, createNode) => {
    return new Processor(createNodeId, createNode);
  }
}
