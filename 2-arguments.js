const argument = ['name', 'age'];

if(argument.length < 1){
    console.log('No argument')
} else if(argument.length == 1){
    console.log('Argument found')
} else if(argument.length > 1){
    console.log('Arguments found')
}