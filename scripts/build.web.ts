import { rm } from "node:fs/promises";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { promisify } from "node:util";
import { exec as _exec } from "node:child_process";
const exec = promisify(_exec);

const appJsonString = readFileSync("./app.json").toString();
const appJson = JSON.parse(appJsonString);
const baseAppJson = JSON.parse(appJsonString);

if (!process.env.CI) {
	console.log("Updating app.json");
	if (existsSync("./dist")) {
		rm("./dist", { recursive: true });
	}

	appJson.expo.experiments.baseUrl = "";

	writeFileSync("./app.json", JSON.stringify(appJson));

	// Update index.html
	let indexTemplate = readFileSync("./public/index.html").toString();
	indexTemplate = indexTemplate.replace(
		/(?<=href=")(.*)(?=[/]manifest.json)/,
		"",
	);
	writeFileSync("./public/index.html", indexTemplate);
}

exec("expo export -p web")
	.then(() => {
		if (!process.env.CI) {
			console.log("Reverting app.json");
			writeFileSync("./app.json", JSON.stringify(baseAppJson));

			// Update index.html
			let indexTemplate = readFileSync("./public/index.html").toString();
			indexTemplate = indexTemplate.replace(
				/href=".*[/]manifest.json/,
				(match) =>
					match.replace('"', `"/${baseAppJson.expo.experiments.baseUrl}`),
			);
			writeFileSync("./public/index.html", indexTemplate);
		}
	})
	.finally(() => exec("npx prettier --write app.json"));
