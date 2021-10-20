/**
 * @jest-environment jsdom
 */

const { game } = require("../game");

beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});

describe("game object contains correct keys", () => {
    test("score key exist", () => {
        expect("score" in game).toBe(true);
    });
    test("currentGame key exist", () => {
        expect("currentGame" in game).toBe(true);
    });
    test("playerMoves key exist", () => {
        expect("playerMoves" in game).toBe(true);
    });
    test("choises key exist", () => {
        expect("choises" in game).toBe(true);
    });
    test("choises contain correct ids", () => {
        expect(game.choises).toEqual(["button1", "button2", "button3", "button4"]);
    });
});