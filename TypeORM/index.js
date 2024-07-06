"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const person_1 = require("./person");
(() => __awaiter(void 0, void 0, void 0, function* () {
    // Initialize a connection pool against the database.
    const connection = yield (0, typeorm_1.createConnection)({
        type: "postgres",
        host: "localhost",
        port: 5432,
        username: "postgres",
        password: "Rocket1000$",
        database: "typeormdemo",
        entities: [person_1.Person],
    });
    // Register a new person in the database by calling the repository.
    const newPerson = new person_1.Person();
    newPerson.fullname = "Jane Doe";
    newPerson.gender = "F";
    newPerson.phone = "5555555555";
    newPerson.age = 29;
    yield newPerson.save();
    // Find the person we just saved to the database using the custom query
    // method we wrote in the person repository.
    const existingPerson = yield person_1.Person.findByName("Jane Doe");
    if (!existingPerson) {
        throw Error("Unable to find Jane Doe.");
    }
    // Change the person's full name.
    yield existingPerson.updateName("Jane Johnson");
    // Remove the person from the database.
    yield existingPerson.remove();
    // Clean up our connection pool so we can exit.
    yield connection.close();
}))();
