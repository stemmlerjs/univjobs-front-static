'use strict'

const crypto = require("crypto");

class Processor {
  constructor (createNodeId, createNode) {
    this.createNodeId = createNodeId;
    this.createNode = createNode;
  }

  /**
   * _processDirectoryCompany
   * 
   * @function _processDirectoryCompany processes a company and returns the Gatsby
   * GraphQL object format.
   * @param {Object} directoryCompany
   * @return {Object} for GraphQL/Gatsby
   */

  _processDirectoryCompany (directoryCompany) {
    const { createNodeId } = this;

    const nodeId = createNodeId(`univjobs-directory-company-${directoryCompany.companyId}`)
    const nodeContent = JSON.stringify(directoryCompany)
    const nodeContentDigest = crypto
      .createHash('md5')
      .update(nodeContent)
      .digest('hex')

    const nodeData = Object.assign({}, directoryCompany, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `DirectoryCompany`,
        content: nodeContent,
        contentDigest: nodeContentDigest,
      },
    })
    return nodeData
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
    const nodeData = this._processDirectoryCompany(directoryCompany);
    createNode(nodeData);
    console.log("Created Directory Company node");
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
  }
}

module.exports = {
  createProcessor: (createNodeId, createNode) => {
    return new Processor(createNodeId, createNode);
  }
}
