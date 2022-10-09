class AlarmClock {
    constructor() {
         this.timerId = null;
        this.alarmCollection = [];
    };


    addClock (time, callback, id) {
        if (id === undefined) {
            throw new Error('error text');
        }
        if (this.alarmCollection.includes(id)) {
            return console.error("Будильник с таким id уже существует");

        } else {
            let call = {
                id: id,
                callback: callback(),
                time: time
            }

            if (this.alarmCollection.length === 0) {
                this.alarmCollection = [call];
            } else {
                this.alarmCollection.push(call);
            }
        }
    }

    removeClock(id){
        const found = this.alarmCollection.findIndex(element => element.id === id);
        let tmp = this.alarmCollection.length;
        this.alarmCollection.splice(found, 1);
        if(tmp > this.alarmCollection.length){
            return true;
        } else{
            return false;
        }
    }

    getCurrentFormattedTime(){
        const date = new Date();
        return((date.getHours().toString()+":"+date.getMinutes().toString()));
    }

    start(){
      function checkClock(call){
          if(call.time === this.getCurrentFormattedTime()){
              call.callback();
          }
      }
      if(this.timerId === undefined){
        this.timerId = setInterval(() => this.alarmCollection.forEach(element => checkClock(element)), 1000);
      }
    }

    stop(){
        if(this.timerId != undefined){
            clearInterval(this.timerId);
            this.timerId = undefined;
        }
    }

    printAlarms(){
        console.log("Печать всех будильников в количестве: ", this.alarmCollection.length);
        this.alarmCollection.forEach(element => console.log("Будильник №", element.id, " заведен на ", element.time));
    }

    clearAlarms(){
        this.stop();
        this.alarmCollection.length = 0;
    }
}
