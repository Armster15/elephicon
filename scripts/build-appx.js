require('dotenv').config();
const builder = require('electron-builder');

builder
  .build({
    config: {
      productName: 'GenICNS',
      copyright: 'Copyright (C) 2020 sprout2000.',
      artifactName: '${productName}-${version}.${ext}',
      files: ['dist/**/*'],
      directories: {
        output: 'release',
      },
      asar: true,
      asarUnpack: ['dist/preload.js'],
      win: {
        icon: 'assets/icon.ico',
        target: ['appx'],
      },
      appx: {
        applicationId: process.env.APPLICATION_ID,
        backgroundColor: '#323232',
        displayName: 'GenICNS',
        identityName: process.env.IDENTITY_NAME,
        publisher: process.env.PUBLISHER,
        publisherDisplayName: 'sprout2000',
        languages: ['JA-JP', 'EN-US'],
        addAutoLaunchExtension: false,
      },
    },
  })
  .catch((err) => console.log(err));