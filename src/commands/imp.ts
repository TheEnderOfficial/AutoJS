import { yesNoDialog } from "../utils";

/**
 * Require for module 
 * @param module {string} - path to module
 * @returns {any} - module
 */
export async function imp(module: string): Promise<any> {
    console.log("[AUTOJS] Script requires to import module", module, "you can allow import or disallow from script, but script can crash if developer don`t check is module are imported");
    const x = await yesNoDialog(`[AUTOJS] Allow import module ${module}`);

    if (x) {
        return await import(module)
    }
    else {
        return undefined
    }
}