#!/usr/bin/env node

const prog = require("caporal");
const os = require("os");
const exec = require("child_process").exec;

const runCommand = action => {
  exec(action, (error, stdout, stderr) => {
    if (error) {
      console.log(error);
    } else {
      console.log(stderr);
    }
  });
};

prog
  .version("0.1")
  .description(
    "A CLI tool to check your current os enviroment and run appropriate scripts based on the result."
  )
  .command("check")
  .option(
    "--script [script]",
    "Add this flag if your command is in your package.json",
    prog.REPEATABLE
  )
  .option("--linux [linux]", "Process to run if on Linux")
  .option("--win [win]", "Process to run if on Windows")
  .option("--max [mac]", "Process to run if on a Mac")
  .action(function(args, options, logger) {
    const platform = os.platform();
    let action;
    if (
      options.script === undefined &&
      options.linux === undefined &&
      options.win === undefined &&
      options.mac === undefined
    ) {
      console.log(platform);
    } else {
      switch (platform) {
        case "linux":
          action = options.linux;
          if (options.script != undefined) {
            action = `npm run ${action}`;
          }
          runCommand(action);
          break;
        case "darwin":
          action = options.mac;
          if (options.script != undefined) {
            action = `npm run ${action}`;
          }
          runCommand(action);
          break;
        case "win32":
          action = options.win;
          if (options.script != undefined) {
            action = `npm run ${action}`;
          }
          runCommand(action);
          break;
        default:
          logger.info("idk wtf system this is");
          break;
      }
    }
  });

prog.parse(process.argv);
