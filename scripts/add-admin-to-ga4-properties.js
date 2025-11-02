#!/usr/bin/env node

/**
 * Add Administrator Access to Multiple GA4 Properties
 *
 * This script adds 24prontocom@gmail.com as an Administrator
 * to all 10 Swiss Solar GA4 properties.
 */

const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

// Service account credentials path
const CREDENTIALS_PATH = path.join(process.env.HOME, 'websites', 'credentials.json');

// New admin email to add
const NEW_ADMIN_EMAIL = '24prontocom@gmail.com';

// GA4 Properties to update
const PROPERTIES = [
  { name: 'Solaranlagen Zürich', id: 'properties/509622254', measurementId: 'G-SYSBD1KCLN' },
  { name: 'Solaranlagen Aargau', id: 'properties/509572234', measurementId: 'G-F08NC56F59' },
  { name: 'Solaranlagen Luzern', id: 'properties/509640752', measurementId: 'G-B76BGVESER' },
  { name: 'Solaranlagen Basel', id: 'properties/509645620', measurementId: 'G-RBK11732E3' },
  { name: 'Solaranlagen Bern', id: 'properties/509661575', measurementId: 'G-N2X4QZD0B3' },
  { name: 'Solaranlagen St. Gallen', id: 'properties/509599643', measurementId: 'G-1BW983H5T0' },
  { name: 'Solaranlagen Winterthur', id: 'properties/509618440', measurementId: 'G-3R0QV1VH8Y' },
  { name: 'Solaranlagen Zug', id: 'properties/509589672', measurementId: 'G-RWFTD98BDC' },
  { name: 'Panneaux Solaires Geneva', id: 'properties/509638846', measurementId: 'G-ER1W0S5EQH' },
  { name: 'Panneaux Solaires Lausanne', id: 'properties/509642677', measurementId: 'G-CPFVSVLPGP' }
];

/**
 * Authenticate with Google Analytics Admin API
 */
async function authenticate() {
  try {
    const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, 'utf8'));

    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: [
        'https://www.googleapis.com/auth/analytics.edit',
        'https://www.googleapis.com/auth/analytics.manage.users'
      ]
    });

    return await auth.getClient();
  } catch (error) {
    console.error('❌ Authentication failed:', error.message);
    throw error;
  }
}

/**
 * Add user as Administrator to a GA4 property
 */
async function addAdminToProperty(analyticsAdmin, propertyId, email) {
  try {
    const response = await analyticsAdmin.properties.accessBindings.create({
      parent: propertyId,
      requestBody: {
        roles: ['predefinedRoles/admin'],
        user: email
      }
    });

    return {
      success: true,
      data: response.data
    };
  } catch (error) {
    return {
      success: false,
      error: error.message,
      code: error.code
    };
  }
}

/**
 * Main execution function
 */
async function main() {
  console.log('🚀 Adding Administrator Access to GA4 Properties');
  console.log('================================================\n');
  console.log(`📧 New Admin Email: ${NEW_ADMIN_EMAIL}`);
  console.log(`📊 Properties to Update: ${PROPERTIES.length}\n`);

  try {
    // Authenticate
    console.log('🔐 Authenticating with Google Analytics Admin API...');
    const authClient = await authenticate();
    const analyticsAdmin = google.analyticsadmin({
      version: 'v1alpha',
      auth: authClient
    });
    console.log('✅ Authentication successful\n');

    // Results tracking
    const results = {
      successful: [],
      failed: [],
      total: PROPERTIES.length
    };

    // Process each property
    for (let i = 0; i < PROPERTIES.length; i++) {
      const property = PROPERTIES[i];
      const propertyNum = i + 1;

      console.log(`\n[${propertyNum}/${PROPERTIES.length}] Processing: ${property.name}`);
      console.log(`   Property ID: ${property.id}`);
      console.log(`   Measurement ID: ${property.measurementId}`);

      const result = await addAdminToProperty(analyticsAdmin, property.id, NEW_ADMIN_EMAIL);

      if (result.success) {
        console.log('   ✅ Successfully added administrator access');
        results.successful.push({
          name: property.name,
          propertyId: property.id,
          measurementId: property.measurementId,
          userLink: result.data.name
        });
      } else {
        console.log(`   ❌ Failed: ${result.error}`);
        results.failed.push({
          name: property.name,
          propertyId: property.id,
          measurementId: property.measurementId,
          error: result.error,
          code: result.code
        });
      }

      // Small delay to avoid rate limiting
      if (i < PROPERTIES.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 500));
      }
    }

    // Print summary report
    console.log('\n\n' + '='.repeat(60));
    console.log('📊 SUMMARY REPORT');
    console.log('='.repeat(60));
    console.log(`\n✅ Successful: ${results.successful.length}/${results.total}`);
    console.log(`❌ Failed: ${results.failed.length}/${results.total}\n`);

    if (results.successful.length > 0) {
      console.log('✅ Successfully Updated Properties:');
      console.log('─'.repeat(60));
      results.successful.forEach((item, idx) => {
        console.log(`${idx + 1}. ${item.name}`);
        console.log(`   Property ID: ${item.propertyId}`);
        console.log(`   Measurement ID: ${item.measurementId}`);
        console.log(`   User Link: ${item.userLink}\n`);
      });
    }

    if (results.failed.length > 0) {
      console.log('\n❌ Failed Properties:');
      console.log('─'.repeat(60));
      results.failed.forEach((item, idx) => {
        console.log(`${idx + 1}. ${item.name}`);
        console.log(`   Property ID: ${item.propertyId}`);
        console.log(`   Error: ${item.error}`);
        if (item.code) console.log(`   Code: ${item.code}`);
        console.log('');
      });
    }

    // Save detailed report to JSON
    const reportPath = path.join(__dirname, '..', 'ga4-admin-access-report.json');
    fs.writeFileSync(reportPath, JSON.stringify({
      timestamp: new Date().toISOString(),
      adminEmail: NEW_ADMIN_EMAIL,
      totalProperties: results.total,
      successCount: results.successful.length,
      failureCount: results.failed.length,
      successful: results.successful,
      failed: results.failed
    }, null, 2));

    console.log(`\n💾 Detailed report saved to: ${reportPath}`);

    // Exit with appropriate code
    process.exit(results.failed.length > 0 ? 1 : 0);

  } catch (error) {
    console.error('\n❌ Fatal Error:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

// Run the script
main();
