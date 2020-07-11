import chalk from 'chalk'

const types = ['debug', 'info', 'error', 'warn']

export default class Logger {

  private alignedTypes: string[] = []

  constructor(public moduleName: string) {
    let maxLength = types.reduce((p, c) => c.length > p ? c.length : p, 0)

    types.forEach((type, i) => this.alignedTypes[i] = `${type}${new Array(maxLength - type.length).fill(' ').join('')}`)
  }

  public debug(...args: any) {
    this.print(chalk.green(this.alignedTypes[0]), ...args)
  }

  public info(...args: any) {
    this.print(chalk.blueBright(this.alignedTypes[1]), ...args)
  }

  public error(...args: any) {
    this.print(chalk.redBright(this.alignedTypes[2]), ...args)
  }

  public warn(...args: any) {
    this.print(chalk.keyword('orange')(this.alignedTypes[3]), ...args)
  }

  private print(type: string, ...args: any) {
    const time = new Date().toLocaleTimeString('en-GB', { hour12: false })
    // tslint:disable-next-line:no-console
    console.log(`${chalk.yellow(time)}  ${chalk.magentaBright(this.moduleName)}  ${type} `, ...args)
  }

}