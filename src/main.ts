import { ArgumentParser } from "argparse";
import { ScriptLauncher } from "./script-launcher";
import {FileNotFoundError} from "./constants/errors"
import { yesNoDialog } from "./utils";

try {
    const parser = new ArgumentParser({
        description: 'AutoJS CLI'
    });

    parser.add_argument('file', { help: "File to run" });

    const filePath = parser.parse_args()["file"]
    const sl = new ScriptLauncher(filePath);

    sl.launch();
}
catch (e) {
    if (e instanceof FileNotFoundError) {
        console.error(e.message);
        process.exit(1);
    }
    else {
        console.error("Error in AutoJS");
        console.error(e);
        process.exit(1);
    }
}