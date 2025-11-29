document.addEventListener("DOMContentLoaded", () => {
  const tabs = document.querySelectorAll(".tab");
  const panels = document.querySelectorAll(".panel");
  const folderBody = document.getElementById("folder-body");

  // Background colours for each tab (folder)
  const folderColors = {
    home: "#e0f2fe",        // light blue
    education: "#fef3c7",   // light yellow
    experience: "#dcfce7",  // light green
    projects: "#fae8ff",    // light purple
    skills: "#fee2e2",      // light red
    software: "#e6e9ef"     // new colour trial
  };

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const targetId = tab.getAttribute("data-tab");

      // Update active tab style
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      // Update visible panel
      panels.forEach(panel => {
        panel.classList.toggle("active", panel.id === targetId);
      });

      // Change folder background colour
      folderBody.style.background = folderColors[targetId] || "#ffffff";
    });
  });

  // -------------------------------------------------------
  // PROJECTS TAB INTERNAL SWITCHING (added below)
  // -------------------------------------------------------

  const projectCards = document.querySelectorAll(".project-card");
  const projectPanels = document.querySelectorAll(".project-panel");

  projectCards.forEach(card => {
    card.addEventListener("click", () => {
      const targetProject = card.getAttribute("data-project");
      const targetPanelId = `project-${targetProject}`;

      // Update active project card
      projectCards.forEach(c => c.classList.remove("active"));
      card.classList.add("active");

      // Update visible project panel
      projectPanels.forEach(panel => {
        panel.classList.toggle("active", panel.id === targetPanelId);
      });
    });
  });

});

