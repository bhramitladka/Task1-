document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("task");
    const categoryInput = document.getElementById("category");
    const addTaskButton = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");
    const recommendationList = document.getElementById("recommendation-list");

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        const taskCategory = categoryInput.value;
        if (taskText === "") return;

        const li = document.createElement("li");
        li.innerHTML = `
            <span>${taskText}</span>
            <span class="category">${taskCategory}</span>
            <button class="delete">Delete</button>
            <button class="complete">Complete</button>
        `;

        taskList.appendChild(li);

        taskInput.value = "";
        categoryInput.value = "General";

        const deleteButton = li.querySelector(".delete");
        deleteButton.addEventListener("click", function () {
            taskList.removeChild(li);
        });

        const completeButton = li.querySelector(".complete");
        completeButton.addEventListener("click", function () {
            li.classList.add("completed");
        });

        if (taskCategory === "Development") {
            const recommendation = document.createElement("li");
            recommendation.textContent = "Consider setting a deadline for your development tasks.";
            recommendationList.appendChild(recommendation);
        }
    });
});
