function calculate(){
    const dateOfBirth = document.getElementById('dateOfBirth').value;
    if(dateOfBirth === ''){
        alert('you must enter the date')
    }
    else{
        const [year, month, day] = dateOfBirth.split('-')
        const yearB = parseInt(year)
        const monthB = parseInt(month)
        const dayB = parseInt(day)
        const dateA = new Date();
        console.log(dateA)
        const yearA = parseInt(dateA.getFullYear())
        const monthA = parseInt(dateA.getMonth()+1)
        const dayA = parseInt(dateA.getDate())
             
           let years, months,days;
           years = yearA-yearB;
           if(monthA >= monthB) months = monthA-monthB;
           else {
            years--;
            months = monthA+12 - monthB
           }
           if(dayA >= dayB) days = dayA - dayB;
           else{
             months--; 
             days = getDaysInMonths(yearB, monthB) +dayA - dayB;
           }
           if(months <0) {
            months = 11; 
            years--;
           }

            const Age = `You are <span>${years}</span> years, <span>${months}</span> months and <span>${days}</span> days.`
            document.getElementById('result').innerHTML = Age;
        }
    }

    function getDaysInMonths(y, m){
        return new Date(y, m, 0).getDate();
    }

