module.exports = {
  ci: {
    collect: {
      url: [
        'https://www.readerbound.com/',
        'https://www.mugo.ca/',
      ],
      numberOfRuns: 1, // Set low to speed up the test runs. Default is 3.
      headful: false, // Show the browser which is helpful when checking the config
      settings: {
        disableStorageReset: true, // Don't clear localStorage / IndexedDB / etc before loading the page
        preset: 'desktop',
	chromeFlags: '--no-sandbox  --headless --disable-gpu',
      },
      assert: {
        preset: 'lighthouse:recommended',
        assertions: {
          "categories.pwa": "off",
          "bypass": ["error", {"minScore": 0}],
          "offline-start-url": ["error", {"minScore": 0}],
          "service-worker": ["error", {"minScore": 0}],
          "works-offline": ["error", {"minScore": 0}],
          "redirects-http": ["warn", {"minScore": 0}],
          "render-blocking-resources": ["warn", {"maxLength": 1}],
          "uses-http2": ["warn", {"minScore": 0}]
        }
      },
    },
    upload: {
      target: 'lhci',
        serverbaseUrl: 'http://3.97.204.33',
        token: '9d276add-3606-4fb2-8616-1a6c558beeca'
    }
  }
};
