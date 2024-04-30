import express from "express";
import cors from "cors";
import generateData from "data-generator-retail";
// @ts-ignore not typings yet
import jsonGraphqlExpress from "json-graphql-server/node";

const PORT = process.env.PORT || 3000;

const { products, categories, ...rest } = generateData();

const app = express();
app.use(cors());
app.use(jsonGraphqlExpress({ products, categories }));
console.log(`GraphQL API running at http://localhost:${PORT}/`);
app.listen(PORT);
