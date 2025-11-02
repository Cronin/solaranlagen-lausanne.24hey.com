#!/usr/bin/env node

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

const CREDENTIALS_PATH = path.join(process.env.HOME, 'websites', 'credentials.json');

async function testAPI() {
  const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, 'utf8'));

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: [
      'https://www.googleapis.com/auth/analytics.edit',
      'https://www.googleapis.com/auth/analytics.manage.users'
    ]
  });

  const authClient = await auth.getClient();

  // Test different API versions
  console.log('\nTesting v1alpha:');
  const adminAlpha = google.analyticsadmin({ version: 'v1alpha', auth: authClient });
  console.log('Properties available:', Object.keys(adminAlpha));
  if (adminAlpha.properties) {
    console.log('properties methods:', Object.keys(adminAlpha.properties));
  }

  console.log('\nTesting v1beta:');
  const adminBeta = google.analyticsadmin({ version: 'v1beta', auth: authClient });
  console.log('Properties available:', Object.keys(adminBeta));
  if (adminBeta.properties) {
    console.log('properties methods:', Object.keys(adminBeta.properties));
  }

  // Try to use the Management API instead
  console.log('\n\nTesting Analytics Management API v3:');
  const analytics = google.analytics({ version: 'v3', auth: authClient });
  console.log('Management available:', Object.keys(analytics));
  if (analytics.management) {
    console.log('management methods:', Object.keys(analytics.management));
  }
}

testAPI().catch(console.error);
