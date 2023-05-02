const { execSync } = require('child_process')
const { Select } = require('enquirer');
const { join } = require("path");
const fs = require('fs');

// const UI_TEST_TYPE = new Select({
//     name: 'runmode',
//     message: 'Which test framework do you want to run?',
//     choices: ['POM', 'Cucumber']
// })
const TEST_MODULE = new Select({
    name: 'framework',
    message: 'Which test module you want to  run?',
    choices: ['POM', 'Cucumber']
})

let runnerCommand = {
    localpomRunner: () => execSync('cd pom && npm run cy:e2e:run', { stdio: 'inherit' }),
    localBDDRunner: () => execSync('cd cucumber && npm run cypress:execu-allure', { stdio: 'inherit' }),
}

const POM_NODE_MODULES_PATH = join(process.cwd(), 'pom', 'node_modules');
const CUCUMBER_NODE_MODULES_PATH = join(process.cwd(), 'cucumber', 'node_modules');

const isNodeModuleDoesNotExists = (path) => {
    if (!fs.existsSync(path)) {
        console.log(`"node_modules" folder is missing!!! Starting installation...`);
        return true;
    }
    else return false;
}

let installerCommand = {
    pom: () => { execSync('cd pom && npm install', { stdio: 'inherit' }) },
    cucumber: () => execSync('cd cucumber && npm install', { stdio: 'inherit' }),
}

let nodeModuleInstaller = {
    pom: () => {
        if (isNodeModuleDoesNotExists(POM_NODE_MODULES_PATH))
            installerCommand.pom();
    },
    cucumber: () => {
        if (isNodeModuleDoesNotExists(CUCUMBER_NODE_MODULES_PATH))
            installerCommand.cucumber();
    }
}

const configRunner = async () => {
let answers = await TEST_MODULE.run();
    switch (answers) {
        case "POM":
            nodeModuleInstaller.pom();
            runnerCommand.localpomRunner()
            break;
        case "Cucumber":
            nodeModuleInstaller.cucumber();
            runnerCommand.localBDDRunner()
            break;
       default: throw new Error("Please select option from ::  pom | cucumber")
    }
}
configRunner()