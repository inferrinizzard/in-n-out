import { rm } from "node:fs/promises";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { exec } from "node:child_process";

const appJson = JSON.parse(readFileSync("./app.json").toString());

const baseAppJson = { ...appJson };
if (!process.env.CI) {
	console.log(process.cwd());
	if (existsSync("./dist")) {
		rm("./dist", { recursive: true });
	}

	const newAppJson = { ...appJson };
	newAppJson.expo.experiments.baseUrl = "";

	writeFileSync("./app.json", JSON.stringify(newAppJson));
}

exec("expo export -p web");

if (!process.env.CI) {
	writeFileSync("./app.json", JSON.stringify(baseAppJson));
}
