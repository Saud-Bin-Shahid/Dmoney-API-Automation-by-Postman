const newman = require("newman");

newman.run(
  {
    collection: 'https://api.postman.com/collections/27275561-6fd8e16b-2a56-48ae-86be-a552ecc55731?access_key=PMAT-01H8W01XGW9CD3BV1HX0265KZR', // pointing to local JSON file.

    iterationCount: 1,
    reporters: "htmlextra",
    reporter: {
      htmlextra: {
        export: "./Reports/report.html", // If not specified, the file will be written to `newman/` in the current working directory.
      },
    },
  },
  function (err) {
    if (err) {
      throw err;
    }
    console.log("collection run complete!");
  }
);
