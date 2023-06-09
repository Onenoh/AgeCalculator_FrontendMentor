
const birthDay = document.getElementById("day");  
const birthMonth = document.getElementById("month");  
const birthYear = document.getElementById("year");
const dayMessage = document.getElementById("day-message");
const monthMessage = document.getElementById("month-message");
const yearMessage = document.getElementById("year-message");
const yearsCurrent = document.getElementById("ageYears");
const monthCurrent = document.getElementById("ageMonth");
const daysCurrent = document.getElementById("ageDays");
const clickBtn = document.getElementById("button");
const dateError = document.getElementById("date1");
const monthError = document.getElementById("date2");
const yearError = document.getElementById("date3");
const borderColor = document.querySelector("input");
const inputMessage = "This field is required";
    





function dayCalculator() {   
    let value = birthDay.value;
    if (!borderColor.value) {
        borderColor.style.border = '1px solid';
        borderColor.style.borderColor = 'hsl(0, 100%, 67%)';
     }
     if (!dateError.value) {
        dateError.style.color = 'hsl(0, 100%, 67%)';
     }
    if(value == ''){
        dayMessage.innerHTML = inputMessage;
        return false;
    }
    else if(value < 1 || value > 31){
        dayMessage.innerHTML = inputMessage;
        return false;
    }
    else {
        dayMessage.innerHTML = '';
        return true;
    }
 }

     function monthCalculator() {  
        let value = birthMonth.value;
        if (!birthMonth.value) {
            birthMonth.style.border = '1px solid';
            birthMonth.style.borderColor = 'hsl(0, 100%, 67%)';
         } 
         if (!monthError.value) {
            monthError.style.color = 'hsl(0, 100%, 67%)';
         }
        if(value == ''){
            monthMessage.innerHTML = inputMessage;
            return false;
        }
        if(value == ''){
            monthMessage.innerHTML = inputMessage;
            return false;
        }
        else if(value < 1 || value > 12){
            monthMessage.innerHTML = inputMessage;
            return false;
        }
        else {
            monthMessage.innerHTML = '';
            return true;
        }
    } 

       function yearCalculator() {   
            let value = birthYear.value;
            let nowYear = new Date().getFullYear();
            console.log(nowYear);
            if (!birthYear.value) {
                birthYear.style.border = '1px solid';
                birthYear.style.borderColor = 'hsl(0, 100%, 67%)';
             }
             if (!yearError.value) {
                yearError.style.color = 'hsl(0, 100%, 67%)';
             }
            if(value == ''){
                yearMessage.innerHTML = inputMessage;
                return false;
            }
            else if(value > nowYear){
                yearMessage.innerHTML = inputMessage;
                return false;
            }
            else {
                yearMessage.innerHTML = '';
                return true;
            }
        }
    

        function ageCalculation(age){
            var age = new Date(age);
            var now = new Date();

            var year1 = now.getFullYear() - age.getFullYear();
            var month1 = now.getMonth() - age.getMonth();
            var day1 = now.getDate() - age.getDate();
           
            
         if (month1 < 0 || (month1 === 0 && day1 < 0)) {
            year1--;
            if (month1 === 0){
                month1 = 11;
            } else {
                month1 = 12 + month1;
            }
            day1 = 30 + day1;
         }  

            yearsCurrent.innerHTML = year1;
            monthCurrent.innerHTML = month1;
            daysCurrent.innerHTML = day1;
        }

        clickBtn.addEventListener('click', function (e) {
            e.preventDefault();
            let day = dayCalculator();
            let month = monthCalculator();
            let year = yearCalculator();
            if (!day || !month || !year) return
            let age = `${birthMonth.value}/${birthDay.value}/${birthYear.value}`;
            ageCalculation(age);
        })

//         "use strict";
// class AgeCalc {
//   inputsBox = document.querySelector(".inputs-box");
//   form = document.querySelector(".date-form");
//   constructor() {
//     this.currentDate = new Date();
//     this.form.setAttribute("novalidate", "novalidate");
//     this.form.addEventListener("submit", this.checkForm.bind(this));
//   }
//   checkForm(e) {
//     e.preventDefault();
//     const dateTemp = [];
//     let validInputs = 0;
//     const formChildren = Array.from(this.form.children);
//     formChildren.forEach((child) => {
//       const childElements = Array.from(child.children);
//       childElements.forEach((el) => {
//         if (el.tagName === "INPUT") {
//           const input = el.value;
//           const inputValue = Number(input);
//           const placeholder = el.getAttribute("placeholder");
//           if (input === "") {
//             this.showError(child, "This field is required");
//             return;
//           }
//           if (this.checkInput(inputValue, placeholder, child)) {
//             dateTemp.push(inputValue);
//             validInputs++;
//             this.removeError(child);
//           }
//         }
//       });
//     });
//     const dateFinal = dateTemp.join("-");
//     if (validInputs === 3) {
//       this.removeError("", true);
//       if (moment(dateFinal, "DD/MM/YYYY").isValid()) {
//         const results = this.getDateDifference(moment(dateFinal, "DD/MM/YYYY"));
//         this.showResults(results);
//       } else {
//         this.showError(formChildren[0], "Must be a valid date", true);
//       }
//     }
//   }
//   checkInput(inputValue, placeholder, child) {
//     const maxRange = placeholder === "DD" ? 31 : 12;
//     const message =
//       placeholder === "DD" ? "Must be a valid day" : "Must be a valid month";
//     if (placeholder === "YYYY") {
//       if (!Number.isInteger(inputValue)) {
//         this.showError(child, "Must be a valid year");
//         return false;
//       } else if (inputValue > this.currentDate.getFullYear()) {
//         this.showError(child, "Must be in the past");
//         return false;
//       } else {
//         return true;
//       }
//     }
//     if (placeholder !== "YYYY") {
//       if (!Number.isInteger(inputValue)) {
//         this.showError(child, message);
//         return false;
//       } else if (inputValue >= 1 && inputValue <= maxRange) {
//         return true;
//       } else {
//         this.showError(child, message);
//         return false;
//       }
//     }
//   }
//   getDateDifference(date) {
//     const inputDate = date;
//     const curDate = moment(this.currentDate);
//     const difference = new Date(curDate.diff(inputDate));
//     const differenceFormat = (
//       difference.getDate() +
//       "-" +
//       (difference.getMonth() + 1) +
//       "-" +
//       difference.getFullYear()
//     ).split("-");
//     const daysPassed = Number(Math.abs(differenceFormat[0]) - 1);
//     const monthsPassed = Number(Math.abs(differenceFormat[1]) - 1);
//     const yearsPassed = Number(Math.abs(differenceFormat[2]) - 1970);
//     return [daysPassed, monthsPassed, yearsPassed];
//   }
//   showError(child, message, whole) {
//     const messageEl = Array.from(child.children)[2];
//     messageEl.textContent = message;
//     if (!whole) {
//       child.classList.add("form-invalid");
//       this.inputsBox.classList.add("error-padding");
//     }
//     if (whole) {
//       this.inputsBox.classList.add("whole-error", "error-padding");
//     }
//   }
//   removeError(child, whole) {
//     if (!whole) {
//       child.classList.remove("form-invalid");
//     }
//     if (whole) {
//       this.inputsBox.classList.remove("error-padding", "whole-error");
//     }
//   }
//   showResults(results) {
//     const resultsFormat = results.reverse();
//     let day = 0;
//     let month = 0;
//     let year = 0;
//     const intervals = [
//       setInterval(function () {
//         if (day <= resultsFormat[2]) {
//           document.querySelector(".num-day").textContent = day;
//           day++;
//         }
//       }, 25),
//       setInterval(function () {
//         if (month <= resultsFormat[1]) {
//           document.querySelector(".num-month").textContent = month;
//           month++;
//         }
//       }, 25),
//       setInterval(function () {
//         if (year <= resultsFormat[0]) {
//           document.querySelector(".num-year").textContent = year;
//           year++;
//         } else {
//           return;
//         }
//       }, 25),
//     ];
//     intervals.forEach((interval) => interval);
//   }
// }
// const ageCalculator = new AgeCalc();
    