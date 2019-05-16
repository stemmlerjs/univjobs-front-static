
const crypto = require("crypto");

exports.BaseNodeProcessor = class BaseNodeProcessor {
  constructor (createNodeId, createNode) {
    this._createNodeId = createNodeId;
    this._createNode = createNode;
  }

  _createDigest (nodeContent) {
    return crypto
      .createHash('md5')
      .update(nodeContent)
      .digest('hex')
  }

  _toGraphQLFormattedNode (rawData, nodeId, nodeDisplayName, nodeContent, nodeContentDigest) {
    return Object.assign({}, rawData, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: nodeDisplayName,
        content: nodeContent,
        contentDigest: nodeContentDigest,
      },
    });
  }

  create (rawData, uniqueNodeName, nodeDisplayName) {
    const { _createNodeId, _createDigest, _toGraphQLFormattedNode } = this;

    const nodeId = _createNodeId(uniqueNodeName)
    const nodeContent = JSON.stringify(rawData)
    const nodeContentDigest = _createDigest(nodeContent);
    const graphQLNode = _toGraphQLFormattedNode(rawData, nodeId, nodeDisplayName, nodeContent, nodeContentDigest)
    return this._createNode(graphQLNode);
  }
}