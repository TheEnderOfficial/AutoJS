import vm from "vm";
import { CONTEXT } from "./context";
import { checkFileExists } from "../utils";
import fs from "fs"
import { FileNotFoundError } from "../constants/errors";

export class ScriptLauncher {
    private code: string = "";

    constructor(private scriptPath: string) {
        this.readFile();
    }

    /*
        Reading a file
    */
    private readFile() {
        if (!checkFileExists(this.scriptPath)) {
            throw new FileNotFoundError(`File ${this.scriptPath} not found.`);
        }

        this.code = fs.readFileSync(this.scriptPath, {encoding: "utf-8"});
    }

    get pCode(): string {
        return `
            (async () => {
                ${this.code}
            })()
        `
    }

    /* 
        Launches code in vm

        @returns {any} - result of vm.runInContext
    */
    launch() {
        const ctx = vm.createContext(CONTEXT);
        return vm.runInContext(this.pCode, ctx, {
            displayErrors: true
        });
    }

}