class AlarmClock {
    constructor() {
         this.timerId = null;
        this.alarmCollection = [];
    };


    addClock (time, callback, id) {
        if (id === undefined) {
            throw new Error('error text');
        }

        if (this.alarmCollection.some(element => element.id === id)) {
            return console.error("Будильник с таким id уже существует");

        }

        let call = {id, callback, time};
        this.alarmCollection.push(call);

    }

    removeClock(id){
    const found = this.alarmCollection.findIndex(element => element.id === id);

    if(found === -1){
        return false;
    }

    this.alarmCollection.splice(found, 1);
    return true;
}

    getCurrentFormattedTime(){
        return new Date().toLocaleTimeString("ru-Ru", {
            hour: "2-digit",
            minute: "2-digit",
        });
    }

    start(){

        checkClock = checkClock.bind(this);
      function checkClock(call){
          if(call.time === this.getCurrentFormattedTime()){
              call.callback();
          }
      }
      if(this.timerId === null){
        this.timerId = setInterval(() => this.alarmCollection.forEach(element => checkClock(element)), 1000);
      }
    }

    stop(){
        if(this.timerId != null){
            clearInterval(this.timerId);
            this.timerId = null;
        }
    }

    printAlarms(){
        console.log("Печать всех будильников в количестве: ", this.alarmCollection.length);
        this.alarmCollection.forEach(element => console.log("Будильник №", element.id, " заведен на ", element.time));
    }

    clearAlarms(){
        this.stop();
        this.alarmCollection = [];
    }
}
