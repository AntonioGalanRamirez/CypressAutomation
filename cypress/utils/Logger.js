class Logger {
    constructor() {
      this.logs = [];
    }
  
    log(message, type = 'info') {
      const timestamp = new Date().toISOString();
      const logMessage = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
      this.logs.push(logMessage);
      cy.log(logMessage);
    }
  
    getLogs() {
      return this.logs;
    }
  
    clearLogs() {
      this.logs = [];
    }
  }
  
  export default Logger;