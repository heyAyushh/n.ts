import { exec } from "child_process";
import { promisify } from "util";

const execp = promisify(exec);

(async () => {
  try {
    const { stdout, stderr } = await execp("ls");
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  } catch (err) {
    console.error(err);
  }
})();
