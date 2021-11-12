const colors = require("colors/safe");
const log = (file: string, action: string) => {
  console.log(
    `${colors.green.inverse(`create-mongo-api`)}
    ${colors.green.underline(file)}
    ${colors.green(action)}
    `
  );
};
export default log;
