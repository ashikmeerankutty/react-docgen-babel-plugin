var _ = require('lodash')
var propsParser = require('react-docgen-typescript');

module.exports = function ({ types: t }) {
  return {
    visitor: {
      Program: {
        exit(path, state) {
          injectReactDocInfo(path, state, this.file.code, t);
        }
      }
    }
  }
}

function injectReactDocInfo(path, state, code, t) {
  const { filename } = state.file.opts;
  const program = path.scope.getProgramParent().path;

  const data = propsParser.withCustomConfig('tsconfig.json', {shouldExtractLiteralValuesFromEnum: true}).parse
  let docgenResults = data(filename);
  if(docgenResults.length > 0){
  docgenResults.forEach(function (docgenResult, index) {
    const exportName = docgenResult.displayName
    const docNode = buildObjectExpression(docgenResult, t);
    const docgenInfo = t.expressionStatement(
      t.assignmentExpression(
        '=',
        t.memberExpression(t.identifier(exportName), t.identifier('__docsInfo')),
        docNode
      )
    );
      program.pushContainer('body', docgenInfo);
  })
}
}


function buildObjectExpression(obj, t) {
  if (_.isPlainObject(obj)) {
    const children = [];
    for (let key in obj) {
      if (key === 'actualName') continue;
      if (!obj.hasOwnProperty(key) || _.isUndefined(obj[key])) continue;
      children.push(t.objectProperty(t.stringLiteral(key), buildObjectExpression(obj[key], t)));
    }
    return t.objectExpression(children);
  } else if (_.isString(obj)) {
    return t.stringLiteral(obj);
  } else if (_.isBoolean(obj)) {
    return t.booleanLiteral(obj);
  } else if (_.isNumber(obj)) {
    return t.numericLiteral(obj);
  } else if (_.isArray(obj)) {
    const children = [];
    obj.forEach(function(val) {
      children.push(buildObjectExpression(val, t));
    });
    return t.ArrayExpression(children);
  } else if (_.isNull(obj)) {
    return t.nullLiteral();
  }
}