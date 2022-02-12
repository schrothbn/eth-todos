const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("TodoList", function () {
  it("Creating Todo should increase taskCount", async () => {
    const TodoList = await ethers.getContractFactory("TodoList");
    const todoList = await TodoList.deploy();

    expect(await todoList.taskCount()).to.equal(0);

    const todoListTX = await todoList.create("Learn blockchain");
    await todoListTX.wait();

    expect(await todoList.taskCount()).to.equal(1);
  });

  it("Creating Todo should fill todo-object correctly", async () => {
    const TodoList = await ethers.getContractFactory("TodoList");
    const todoList = await TodoList.deploy();
    // Create todo
    const todoListTX = await todoList.create("Learn blockchain");
    await todoListTX.wait();

    const todos = await todoList.todos(0);
    expect(todos).to.not.undefined;
    expect(todos.id.toNumber()).to.equal(0);
    expect(todos.completed).to.equal(false);
    expect(todos.content).to.equal("Learn blockchain");
  });
});
