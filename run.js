import chalk from "chalk";
import { readFileSync } from "fs";

export default function (runner, day, part) {
	const output = runner(readFileSync(`./days/${day}/input.txt`, "utf-8"));

	Object.prototype.toString = function () {
		return JSON.stringify(this, "", 2);
	};

	console.log(chalk.green("Day ") + chalk.blue(day) + chalk.green(", part ") + chalk.blue(part) + chalk.green(" result: ") + chalk.gray(output));
}
