//每月每天花指定的，查看当天应该剩余多少。
function getWeekString(i) {
    switch(i) {
        case 0:
            return "星期日"
        case 1:
            return "星期一"
            case 2:
                return "星期二"
                case 3:
            return "星期三"
            case 4:
            return "星期四"
            case 5:
            return "星期五"
            case 6:
            return "星期六"
    }
}
let perDay = 25; //每天花费的
let year=2020; //年
let month = 8;//8月

month-=1;//程序里是0开始的
let startDay = new Date(year,month,1) //开始时间
let endDay = new Date(year,month+1,0) //0时得到上个月的最后一天，这里+1就是当前类

let dayCount = endDay.getDate()
//总共的投入
let totalCost = dayCount*perDay;
console.log(`${startDay.getFullYear()}年${startDay.getMonth()+1}月
共有${dayCount}天，
每天${perDay},一个月总共消费${totalCost}`)

console.log(startDay.getDay())

for(let i =1;i<=dayCount;i+=1){
    let nowDay = new Date(year,month,i)
    // 白天吃掉的
    totalCost-=perDay;
    let week = ''
    if(nowDay.getDay()==0||nowDay.getDay()==6)week = getWeekString(nowDay.getDay())
    console.log(`${i}号晚上，剩余${totalCost}\t${week}`)
}
