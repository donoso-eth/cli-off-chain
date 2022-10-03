import {yellow, cyan} from 'chalk'
import { emoji } from "./emoji";
import { getPackageJson } from './utils/packageInfo';

export const async =()=> {

  

}

export const printWelcomeMessage = async()=> {
  const packageJson = await getPackageJson();

  console.log(
    cyan(
      `${emoji("🍦 ")}Welcome to Gelato Off Chain Resolvers v${packageJson.version}${emoji(
        " 🍦‍"
      )}\n`
    )
  );
}


export const  printAsciiLogo =() => {
    console.log(yellow("888    888                      888 888               888"));
    console.log(yellow("888    888                      888 888               888"));
    console.log(yellow("888    888                      888 888               888"));
    console.log(yellow("8888888888  8888b.  888d888 .d88888 88888b.   8888b.  888888"));
    console.log(yellow('888    888     "88b 888P"  d88" 888 888 "88b     "88b 888'));
    console.log(yellow("888    888 .d888888 888    888  888 888  888 .d888888 888"));
    console.log(yellow("888    888 888  888 888    Y88b 888 888  888 888  888 Y88b."));
    console.log(yellow('888    888 "Y888888 888     "Y88888 888  888 "Y888888  "Y888'));
    console.log("");
  }