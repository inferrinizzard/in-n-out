import { rm } from "node:fs/promises";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { exec } from "node:child_process";

const appJsonString = readFileSync("./app.json").toString();
const appJson = JSON.parse(appJsonString);
const baseAppJson = JSON.parse(appJsonString);

if (!process.env.CI) {
	console.log(process.cwd());
	if (existsSync("./dist")) {
		rm("./dist", { recursive: true });
	}

	appJson.expo.experiments.baseUrl = "";

	writeFileSync("./app.json", JSON.stringify(appJson));
}

exec("expo export -p web");

if (!process.env.CI) {
	writeFileSync("./app.json", JSON.stringify(baseAppJson));
}

exec("npx prettier --write app.json");
