const themeToggle = document.getElementById("theme-toggle");

if(themeToggle){

    themeToggle.addEventListener("click",()=>{

        const currentTheme =
        document.documentElement.getAttribute("data-theme");

        if(currentTheme === "dark"){

            document.documentElement.removeAttribute("data-theme");
            themeToggle.textContent = "🌙";

        }else{

            document.documentElement.setAttribute("data-theme","dark");
            themeToggle.textContent = "☀️";

        }

    });

}