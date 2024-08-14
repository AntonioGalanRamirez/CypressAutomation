class Logger {
  constructor() {
    this.logs = [];
    this.stepNumber = 1; 
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${type.toUpperCase()}] [Step ${this.stepNumber}] ${message}`;
    this.logs.push(logMessage);
    cy.log(logMessage);
    this.stepNumber++; 
  }

  getLogs() {
    return this.logs;
  }

  clearLogs() {
    this.logs = [];
    this.stepNumber = 1; 
  }
}

export default Logger;