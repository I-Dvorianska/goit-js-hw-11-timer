class CountdownTimer {
  constructor({ selector, targetDate = {} }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.refs = {
      daysInput: document.querySelector(`${this.selector} [data-value="days"]`),
      hoursInput: document.querySelector(`${this.selector} [data-value="hours"]`),
      minsInput: document.querySelector(`${this.selector} [data-value="mins"]`),
      secsInput: document.querySelector(`${this.selector} [data-value="secs"]`)
    }
    
    
    this.timeRemaining()
  }
  
 
  
  timeRemaining() {
    setInterval(() => {
      const time = this.targetDate - Date.now()
      const timeComponents = this.getTimeComponents(time);
      this.refs.daysInput.textContent = timeComponents.days;
      this.refs.hoursInput.textContent = timeComponents.hours;
      this.refs.minsInput.textContent = timeComponents.mins;
      this.refs.secsInput.textContent = timeComponents.secs;
    }, 1000);
  }


  pad(value) {
  return String(value).padStart(2, '0')
};

 getTimeComponents(time) {
  const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

  return {days, hours, mins, secs}
}


};





const newTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 17, 2021'),
});





