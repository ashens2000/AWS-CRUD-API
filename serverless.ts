import type { AWS } from '@serverless/typescript';

import functions from '@functions/index';
import sns from './resources/sns';


const serverlessConfiguration: AWS = {
  service: 'student-service',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild','serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    stage:'dev',
    //stackName:'${self:service}-stack-${sls:stage}',//since cloud formation understands stack and to understand billing
    apiName:'${self:service}-${sls:stage}',
    timeout:30,
    endpointType:'regional',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
      apiKeys:['${self:provider.apiName}-apikey'],
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      NODE_OPTIONS: '--enable-source-maps --stack-trace-limit=1000',
      DBHOSTNAME:'yourapi',
      DBPORT: '5432',
      DBNAME:
        'postgres',
      DBUSERNAME:
        'postgres',
      DBPASSWORD:
        'pass',
      DBSCHEMA:
        'public',
    },
  },
  // import the function via paths
  functions: functions,
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

  resources:{

    Resources:{
      ...sns,
    }
  },
  

};

module.exports = serverlessConfiguration;
