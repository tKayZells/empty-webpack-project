function init( args ) {
    console.log("Starting APP")
    document.getElementById(args.id).innerHTML = args.msg
}

init({ 
    id: 'app', 
    msg : 'App started successfully!'
})