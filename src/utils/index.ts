import fs from "fs";
import { createInterface } from "readline/promises";

/**
 * Check is file exists
 * @param {string} filePath - Path to file.
 * @returns {boolean} Is file exists
 */
export function checkFileExists(filePath: string): boolean {
    try {
        let stat = fs.statSync(filePath);

        return stat.isFile();
    }
    catch (e) {
        return false;
    }
}

/**
 * Yes/No CLI Dialog
 * 
 * @param {string} question - Question
 * @returns {Promise<boolean>} answer
*/
export async function yesNoDialog(question: string, def: boolean = true): Promise<boolean> {
    const rl = createInterface(process.stdin, process.stdout);

    const YES = ["y", "yes", "да", "д"];
    const NO =  ["n", "no", "нет", "н"];

    let t = def ? "Y/n" : "y/N";

    const x = await rl.question(`${question} (${t}): `);

    rl.close();
    if (YES.includes(x.toLowerCase())) return true;
    else if (NO.includes(x.toLowerCase())) return false;
    else return def;

}