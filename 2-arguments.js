const argument = process.argv.slice(2);

if(argument.length < 1){
    console.log('No argument');
} else if(argument.length == 1){
    console.log('Argument found');
} else if(argument.length > 1){
    console.log('Arguments found');
}