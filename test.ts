import Logger from './src/index'

// Logger.defaults.format = '$s  $t  $m '
// Logger.defaults.format = '$m  $t  $s '
Logger.defaults.showMilliseconds = true

const l1: any = new Logger('ExampleModule')
const l2: any = new Logger('Module2', {
  moduleStyle: Logger.styles.cyan,
  // warnStyle: Logger.rgb(220, 54, 126),
  // padModule: false,
})
const l3: any = new Logger('MySuperLongModuleNameForTesting', {
  moduleStyle: Logger.hex('#12f378'),
  // padSeverity: false,
})

const funcs = ['debug', 'info', 'warn', 'error']

const now = new Date()
console.log(`${now.toLocaleTimeString('en-GB', { hour12: false })}.${now.getMilliseconds()}`)

for(let i = 0; i < 4; i++) {
  l1[funcs[i]]('Yes')
  l2[funcs[i]]('Yes')
  l3[funcs[i]]('Yes')
}
