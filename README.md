# AOC Helper

This is a set of tools for Advent Of Code.

## Usage

### Installation

```bash
git clone https://github.com/DiaxManPl/AOCHelper.git
cd AOCHelper
pnpm install
```

Also make sure to set ` TOKEN` and `YEAR` in the .env file

### Usage

This tool consists of two commands: prep and dev
Use prep for quick generation of boilerplate code

```bash
pnpm run prep <day>
```

It will generate template code and download input

When you want to test your code run

```bash
pnpm run dev <day> <part>
```

It will run your code with input and print output to the console. It also automatically restarts after file save
