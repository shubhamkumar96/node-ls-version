#!/usr/bin/env node
// Added above line to allow 'index.js' file to be treated as an executable.

const fs = require("fs");
const chalk = require("chalk");
const path = require("path");

const { lstat } = fs.promises;

//  Accepting Command Line Arguments.
const targetDir = process.argv[2] || process.cwd();

fs.readdir(targetDir, async (err, filenames) => {
  if (err) {
    console.log(err);
  }

  const statPromises = filenames.map((filename) => {
    return lstat(path.join(targetDir, filename));
  });

  const allStats = await Promise.all(statPromises);

  for (let stats of allStats) {
    const index = allStats.indexOf(stats);
    //  Logic to Distinguish between Folders and Files.
    if (stats.isFile()) {
      console.log(filenames[index]);
    } else {
      console.log(chalk.red(filenames[index]));
    }
  }
});
