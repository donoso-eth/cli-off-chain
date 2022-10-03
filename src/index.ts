#!/usr/bin/env node
import  { blue}from "chalk";
import { printAsciiLogo, printWelcomeMessage } from "./0-setupOptions";
import { copySampleProject } from "./copyProject";
import { Action } from "./models";


async function main() {

printWelcomeMessage()
//copySampleProject(process.cwd(),Action.CREATE_EMPTY_RESOLVER_ACTION);

let action = "Create am empty off-chain resolver";

// const action = await getAction();
// console.log(action)
// console.log('jaujajajaj')
// if (action === Action.QUIT_ACTION) {
//   return;
// }
// console.log(action)
// }

async function installDependencies(
    packageManager: string,
    args: string[]
  ): Promise<boolean> {
    const { spawn } = await import("child_process");
  
    console.log(`${packageManager} ${args.join(" ")}`);
  
    const childProcess = spawn(packageManager, args, {
      stdio: "inherit",
    });
  
    return new Promise((resolve, reject) => {
      childProcess.once("close", (status) => {
        childProcess.removeAllListeners("error");
  
        if (status === 0) {
          resolve(true);
          return;
        }
  
        reject(false);
      });
  
      childProcess.once("error", (_status) => {
        childProcess.removeAllListeners("close");
        reject(false);
      });
    });
  }

  export async function getAction(): Promise<Action> {

    const {  prompt} = await import("enquirer");
    try {
      const actionResponse = await prompt<{ action: string }>([
        {
          name: "action",
          type: "select",
          message: "What do you want to do?",
          initial: 0,
          choices: Object.values(Action).map((a: Action) => {
            return { name: a, message: a, value: a };
          }),
        },
      ]);
  
      if ((Object.values(Action) as string[]).includes(actionResponse.action)) {
        return actionResponse.action as Action;
      } else {
        throw new Error('Error ')
      }
    } catch (e) {
      if (e === "") {
        return Action.QUIT_ACTION;
      }
  
      // eslint-disable-next-line @nomiclabs/hardhat-internal-rules/only-hardhat-error
      throw e;
    }
}
  


main()
  .then(() => process.exit(process.exitCode))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });