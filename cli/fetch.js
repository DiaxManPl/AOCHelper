import chalk from "chalk";
import { config } from "dotenv";
import { existsSync, mkdirSync, writeFileSync } from "fs";

config();

if (process.argv.length < 3) {
	console.log(chalk.red("Proper usage: npm run fetch <day>"));
	process.exit(1);
}

if (isNaN(process.argv[2])) {
	console.log(chalk.red("Day must be a number"));
	process.exit(1);
}

if (!process.env.TOKEN) {
	console.log(chalk.red("Please set your adventofcode.com session token in .env file"));
	process.exit(1);
}

console.log(chalk.gray("Fetching input..."));
if (!process.env.YEAR) {
	console.log(chalk.yellow("[WARN] Year not set in .env file, using 2022 as default"));
	process.env.YEAR = "2022";
}

const input = await fetch(`https://adventofcode.com/${process.env.YEAR}/day/${process.argv[2]}/input`, {
	headers: {
		cookie: `session=${process.env.TOKEN};`,
		"User-Agent": "DiaxuDev's Aoc Helper https://github.com/DiaxManPl",
	},
})
	.then(res => res.text())
	.catch(() => {
		console.log(chalk.red("Something went wrong while fetching input. Please check your session token in .env file"));
		process.exit(1);
	});

writeFileSync(`./days/${process.argv[2]}/input.txt`, input.trim());
console.log(chalk.green("Input fetched"));
