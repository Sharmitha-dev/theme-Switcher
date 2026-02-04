 const form = document.getElementById("settingsForm");
    const errorDiv = document.getElementById("error");

    // Object to store user preferences
    let userPreferences = {
      theme: "",
      fontSize: 16,
      primaryColor: "#007bff"
    };

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      errorDiv.textContent = "";

      const theme = document.getElementById("theme").value;
      const fontSize = Number(document.getElementById("fontSize").value);
      const primaryColor = document.getElementById("primaryColor").value;

      // Validation
      if (!theme) {
        errorDiv.textContent = "Please select a theme.";
        return;
      }

      if (fontSize < 12 || fontSize > 24 || isNaN(fontSize)) {
        errorDiv.textContent = "Font size must be between 12 and 24.";
        return;
      }

      // Update preferences object
      userPreferences = {
        theme,
        fontSize,
        primaryColor
      };

      // Apply theme
      document.body.classList.toggle("dark", theme === "dark");

      // Apply font size
      document.documentElement.style.setProperty("--font-size", fontSize + "px");

      // Apply primary color
      document.documentElement.style.setProperty("--primary-color", primaryColor);

      console.log("User Preferences:", userPreferences);
    });
