import { sleep } from "../commands/sleep";
import { print } from "../commands/print";
import { imp } from "../commands/imp";
import robot from "robotjs";

// Functions here
export const CONTEXT = {
    sleep: sleep,
    print: print,
    imp: imp,
    robot: robot
}