pragma solidity >=0.5.0;

contract TodoList {
    uint256 public taskCount = 0;

    struct Todo {
        uint256 id;
        string content;
        bool completed;
    }

    mapping(uint256 => Todo) public todos;

    function create(string memory _content) public {
        todos[taskCount] = Todo(taskCount, _content, false);
        taskCount++;
    }

    function toggleComplete(uint256 taskId) public {
        todos[taskId].completed = !todos[taskId].completed;
    }
}
