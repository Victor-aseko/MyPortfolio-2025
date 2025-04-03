
const form = document.getElementById("contactForm");
const openModal= document.getElementById("successModal");
const closeModal = document.getElementById("closeModal");

form.addEventListener("submit", async(event) => {
    event.preventDefault(); //This will prevent the browser from reloading the page immediately when the form is submitted!

    const formData = new FormData(form);
           try {
               const response = await fetch(form.action, {
                method: "POST",
                body: formData
               });
               const result = await response.json();

               if(result.success){
                  openModal.style.display="flex";
                  form.reset(); //This clears all input fields after successful submission
               } else {
                  alert("There was an error submitting the form. Please try again!");
               }

           } catch(err){
              alert("Network error. Please check your internet connection")
           }
    
})
closeModal.addEventListener("click", ()=>{
    openModal.style.display = "none";
});

