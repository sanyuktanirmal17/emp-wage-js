/**
 * Purpose: Employee Wage
 * @author : Sanyukta Nirmal
 * @since : 10/7/2021
 */

/**
 * Daily wage of employee
 */
 const IS_PART_TIME = 1;
 const IS_FULL_TIME = 2;
 const PART_TIME_HOURS = 4;
 const FULL_TIME_HOURS = 8;
 const WAGE_PER_HOUR = 20;

 let empHrs = 0;
 /**
  * Calculate emp wage using case
  */
 let empCheck = Math.floor(Math.random() * 10) % 3;
 switch(empCheck){
    case 1:
        empHrs = PART_TIME_HOURS;
        break;
    case 2:
        empHrs = FULL_TIME_HOURS;
        break;
        default:
            empHrs = 0;
}
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Employee Wage:" + empWage);


 