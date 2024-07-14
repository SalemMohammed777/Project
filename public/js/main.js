if (localStorage.getItem("isSmall") === "yes") {
    SidebarId.classList.add("small-sidebar")
  } else {
    SidebarId.classList.remove("small-sidebar")
  }

  const toggleSidebar = () => {
    if (localStorage.getItem("isSmall") === "yes") {
      localStorage.setItem("isSmall", "no")
      SidebarId.classList.remove("small-sidebar")
    } else {
      localStorage.setItem("isSmall", "yes")
      SidebarId.classList.add("small-sidebar")
    }
  }