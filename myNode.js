const chalk = require('chalk')
const chalkAnimation = require('chalk-animation')
const log = console.log

const pulse = chalkAnimation.pulse('\t\t--by Gerard Manley Hopkins')
setTimeout(() => {
    pulse.start(); // Animation resumes
}, 2000);
setTimeout(() => {
    pulse.stop(); // Animation stops
}, 1000);
 
log(`
${chalk.green.bold("\t\t\tSpring")}

(       ${chalk.hex('B5EAEA')('Nothing is so beautiful as Spring –')}
(       ${chalk.hex('E7EAB5')('When weeds, in wheels, shoot long and lovely and lush;')}
(       ${chalk.hex('B5EAEA')('Thrush’s eggs look little low heavens, and thrush')}
(       ${chalk.hex('E7EAB5')('Through the echoing timber does so rinse and wring')}
(       ${chalk.hex('B5EAEA')('The ear, it strikes like lightnings to hear him sing;')}
(       ${chalk.hex('E7EAB5')('The glassy peartree leaves and blooms, they brush')}
(       ${chalk.hex('B5EAEA')('The descending blue; that blue is all in a rush')}
(       ${chalk.hex('E7EAB5')('With richness; the racing lambs too have fair their fling.')}
(
(       ${chalk.hex('B5EAEA')('What is all this juice and all this joy?')}
(       ${chalk.hex('E7EAB5')('A strain of the earth’s sweet being in the beginning')}
(       ${chalk.hex('B5EAEA')('n Eden garden. – Have, get, before it cloy,')}
(       ${chalk.hex('E7EAB5')('Before it cloud, Christ, lord, and sour with sinning,')}
(       ${chalk.hex('B5EAEA')('Innocent mind and Mayday in girl and boy,')}
(       ${chalk.hex('E7EAB5')('Most, O maid’s child, thy choice and worthy the winning.')}
`)
 
