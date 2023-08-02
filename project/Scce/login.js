const studentToggle=document.querySelector(".s_Login")
const facultyToggle=document.querySelector(".f_Login")
const toggle=document.querySelector(".movBtn")
const visibleStudentForm=document.querySelector(".student")
const visibleFacultyForm=document.querySelector(".faculty")

facultyToggle.addEventListener("click",()=>{
    // Faculty form
    toggle.classList.add("rightSwitch")
    toggle.innerHTML="Faculty"

    visibleFacultyForm.classList.add("facultyVisible")
    visibleStudentForm.classList.remove("studentVisible")
    
    
})
studentToggle.addEventListener("click",()=>{
    //    Student Form 
    toggle.classList.remove("rightSwitch")
    toggle.innerHTML="Student"

    visibleFacultyForm.classList.remove("facultyVisible")
    visibleStudentForm.classList.add("studentVisible")
})