import generateData from "data-generator-retail";
// @ts-ignore not typings yet
import jsonServer from "json-server";

const PORT = process.env.PORT || 3000;

const { customers, commands, reviews, invoices, ...rest } = generateData();

const server = jsonServer.create();
const router = jsonServer.router({ customers, commands, reviews, invoices });
const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
  console.log(`REST API running at http://localhost:${PORT}/`);
});
