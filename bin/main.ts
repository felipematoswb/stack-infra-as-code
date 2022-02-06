#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { RdsInStack } from '../lib/rds';
import { EksInStack } from '../lib/eks';
import { VpcInStack } from '../lib/vpc';

const app = new cdk.App();
new RdsInStack(app, 'RdsInStack');
new EksInStack(app, 'EksInStack');
new VpcInStack(app, 'VpcInStack');