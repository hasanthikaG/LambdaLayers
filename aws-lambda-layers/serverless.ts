import type { AWS } from '@serverless/typescript';
import hello from '@functions/hello';
import { hello2 } from "@functions/index";

const serverlessConfiguration: AWS = {
  service: 'aws-lambda-layers',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
    },
  },
  layers: {
    demoLayer: {
      path:'lambda-layers',
      name: "${sls:stage}-demoLayer",
      description: "import axios library"
    },
    demoLayer2: {
      path:'lambda-layers2',
      name: "${sls:stage}-demoLayer2",
      description: "import common methods"
    }
  },
  // import the function via paths
  functions: { hello,hello2 },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
  },
};

module.exports = serverlessConfiguration;
