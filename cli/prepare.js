import chalk from "chalk";
import { config } from "dotenv";
import { existsSync, mkdirSync, writeFileSync } from "fs";

config();

if (process.argv.length < 3) {
	console.log(chalk.red("Proper usage: npm run prep <day>"));
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

if (existsSync(`./days/${process.argv[2]}`)) {
	console.log(chalk.red("Day already exists"));
	process.exit(1);
}

if (!existsSync("./days")) {
	console.log(chalk.gray("Days directory not exists, creating..."));
	mkdirSync("./days");
	console.log(chalk.green("Days directory created"));
}

console.log(chalk.gray("Creating day files..."));
mkdirSync(`./days/${process.argv[2]}`);
writeFileSync(
	`./days/${process.argv[2]}/partOne.js`,
	`import run from "../../run.js";\n\nrun(\n\t(input) => {\n\t\treturn 0;\n\t},\n\t${process.argv[2]},\n\t1\n);`
);
writeFileSync(
	`./days/${process.argv[2]}/partTwo.js`,
	`import run from "../../run.js";\n\nrun(\n\t(input) => {\n\t\treturn 0;\n\t},\n\t${process.argv[2]},\n\t2\n);`
);
console.log(chalk.green("Day files created"));

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
