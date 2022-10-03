import { Dependencies } from "./models";


function createConfirmationPrompt(name: string, message: string) {
  return {
    type: "confirm",
    name,
    message,
    initial: "y",
    default: "(Y/n)",
    isTrue(input: string | boolean) {
      if (typeof input === "string") {
        return input.toLowerCase() === "y";
      }

      return input;
    },
    isFalse(input: string | boolean) {
      if (typeof input === "string") {
        return input.toLowerCase() === "n";
      }

      return input;
    },
    format(): string {
      const that = this as any;
      const value = that.value === true ? "y" : "n";

      if (that.state.submitted === true) {
        return that.styles.submitted(value);
      }

      return value;
    },
  };
}

export async function confirmRecommendedDepsInstallation(
  depsToInstall: Dependencies,
  useYarn: boolean
): Promise<boolean> {
  const {prompt} = await import("enquirer");

  let responses: {
    shouldInstallPlugin: boolean;
  };

  const packageManager = useYarn ? "yarn" : "npm";

  try {
    responses = await prompt<typeof responses>([
      createConfirmationPrompt(
        "shouldInstallPlugin",
        `Do you want to install this sample project's dependencies with ${packageManager} (${Object.keys(
          depsToInstall
        ).join(" ")})?`
      ),
    ]);
  } catch (e) {
    if (e === "") {
      return false;
    }

    // eslint-disable-next-line @nomiclabs/hardhat-internal-rules/only-hardhat-error
    throw e;
  }

  return responses.shouldInstallPlugin;
}

export async function confirmProjectCreation(): Promise<{
  projectRoot: string;
  shouldAddGitIgnore: boolean;
}> {
  const {prompt } = await import("enquirer");
  return prompt([
    {
      name: "projectRoot",
      type: "input",
      initial: process.cwd(),
      message: "Hardhat project root:",
    },
    createConfirmationPrompt(
      "shouldAddGitIgnore",
      "Do you want to add a .gitignore?"
    ),
  ]);
}


