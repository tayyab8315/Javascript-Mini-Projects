let date = document.querySelector('#date');
let nextbtn = document.querySelector('.nextbtn');
let agee = document.querySelectorAll('.agee');

date.max = new Date().toISOString().split("T")[0];

function CalculateAge(){
    let birthdate = new Date(date.value);
    let day1 = birthdate.getDate();
    let mon1 = birthdate.getMonth() + 1;
    let year1 = birthdate.getFullYear();

    let today = new Date();
    let day2 = today.getDate();
    let mon2 = today.getMonth() + 1;
    let year2 = today.getFullYear();

    console.log("Birth "+day1+" "+ mon1+" "+year1);
    console.log("Today "+day2+" "+ mon2+" "+year2);

    let day3, mon3, year3;

    year3 = year2 - year1;

    if (mon2 >= mon1) {
        mon3 = mon2 - mon1;
    } else {
        year3--;
        mon3 = 12 + mon2 - mon1;
    }

    if (day2 >= day1) {
        day3 = day2 - day1;
    } else {
        mon3--;
        if (mon3 < 0) {
            mon3 = 11;
            year3--;
        }
        day3 = getdaysinmonth(year2, mon2 - 1) + day2 - day1;
    }

    console.log("Age "+day3+" "+ mon3+" "+year3);
    agee[0].innerHTML = year3;
    agee[1].innerHTML = mon3;
    agee[2].innerHTML = day3;
}

function getdaysinmonth(year, month){
    return new Date(year, month, 0).getDate(); 
}
