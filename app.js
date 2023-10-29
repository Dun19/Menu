      // Function to add a new part outline
      function addNewPart() {
        // Create a new list item (outline)
        const outlineItem = document.createElement("li");

        // Customize the name of the outline
        const outlineName = prompt("Enter the name of the new part outline:");

        outlineItem.textContent = outlineName;
        // Add the outline to the menu list
        const menuList = document.getElementById("menu-list");
        menuList.appendChild(outlineItem);
      }
      // Add an event listener to the "Add Part" button
      const addButton = document.getElementById("add-button");
      addButton.addEventListener("click", addNewPart);