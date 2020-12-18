const colors = require("colors/safe");
const log = (file: string, action: string) => {
  console.log(
    `${colors.green.inverse(`api-make`)} 
    ${colors.green.underline(file)}
    ${colors.green(action)}
    `
  );
};
export default log;
