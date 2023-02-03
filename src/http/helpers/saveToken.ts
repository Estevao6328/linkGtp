import fs from "fs";
import { join } from "path";

export const saveToken = (tokendata: object) => {
  let tokenInfo = tokendata;
  Object.assign(tokenInfo, { created_at: new Date() });

  const pathToSave = join(__dirname, "../../config/accessToken.json");

  try {
    fs.writeFileSync(pathToSave, JSON.stringify(tokenInfo));
  } catch (err) {
    console.log(err);
  }
};
