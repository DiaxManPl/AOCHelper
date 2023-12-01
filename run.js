import chalk from "chalk";
import { readFileSync } from "fs";

export default function (runner, day, part) {
	const start = performance.now();
	const output = runner(readFileSync(`./days/${day}/input.txt`, "utf-8").split("\n"));

	Object.prototype.toString = function () {
		return JSON.stringify(this, "", 2);
	};

	console.log(chalk.green("Day ") + chalk.blue(day) + chalk.green(", part ") + chalk.blue(part) + chalk.green(" result: ") + chalk.gray(output));
	console.log(chalk.gray("Time elapsed: ") + chalk.blue(performance.now() - start + "ms"));
}
