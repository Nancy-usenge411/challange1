function calculateSpeed(){
    const speedLimit = 70
    const kmPerPoint = 5
    const speed = parseInt(prompt("enter speed"))
    if (isNaN(speed)|| speed <0){
        alert ("enter valid speed")
    }else if (speed <= speedLimit){
        console.log ('OK')
    }else{
        const overSpeed = speed - speedLimit
        const demeritPoints = Math.floor(overSpeed/kmPerPoint)
        console.log (demeritPoints)
        if (demeritPoints>= 12){
            console.log ('lisence suspended')
        }
    }
}