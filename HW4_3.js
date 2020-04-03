function diffBetween(date1 , date2){ 
    let diffYear = Math.abs(date2.getFullYear() - date1.getFullYear()) ;
    let diffMonth = Math.abs(date2.getMonth() - date1.getMonth()) - 1 ;
    let diffDay = Math.abs(date2.getDay() - date1.getDay()) ;
    let diffHour = date2.getHours() - date1.getHours() ;
    let diffMinute = Math.abs(date2.getMinutes() - date1.getMinutes()) ;
    let diffsecond = Math.abs(date2.getSeconds() - date1.getSeconds()) ;

    diffDay > 0 ? diffDay  : diffMonth < 6 ? diffDay += 30 : diffDay += 31;
    diffHour > 0 ? diffHour : diffHour += 24;

    return (`{years:${diffYear} , months:${diffMonth} , days:${diffDay} , hours:${diffHour} , minutes:${diffMinute} , seconds:${diffsecond}}`) ;
}


//Extended function above
function extendDiffBetween(){
    let res = [] ;
    let min = new Date(), max = new Date() ;
    for(let i = 0; i < arguments.length; i++){
        if(arguments[i] < arguments[i - 1]){
            max = arguments[i - 1];
            min = arguments[i];
        }else{
            min = arguments[i - 1];
            max = arguments[i];
        }
        res.push(diffBetween(max , min)) ;
    }
    return res ;
    
}

console.log(extendDiffBetween( 
    new Date("2020-08-01T12:22") , 
    new Date("2020-02-20T23:19") , 
    new Date("2019-02-20T20:12") 
    ));
