const colors = require("colors/safe");
const log = (file: string, action: string) => {
  console.log(
    `${colors.green.inverse(`make-mongo-api`)}
    ${colors.green.underline(file)}
    ${colors.green(action)}
    `
  );
};
export default log;
