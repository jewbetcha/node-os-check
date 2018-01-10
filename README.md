# node-os-check
A CLI tool to run certain Node scripts based on the OS you are working in :thinking:

## Usage

```bash
// prints current operating system
$ os-check check

// run a command if you're in a linux environment
$ os-check check --lunux <command>

// run one command if linux, another if macOS
$ os-check check --linux <command> --mac <different command>

// use --script flag if your command is in your package.json "scripts"
$ os-check check --script y --linux <command> --mac <different command>
```