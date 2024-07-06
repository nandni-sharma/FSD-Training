setTimeout(()=>{
            console.log(" API is loading");
        },2000);

        let interval = setInterval(()=>{
            console.log("Data of hotel is loading");
        },3000);

        setTimeout(function(){
            clearInterval(interval);
        },9000);

        setTimeout(()=>{
            console.log(" API is loading");
        },10000);

        setTimeout(()=>{
            console.log(" Hotel is found");
        },11000);

        setTimeout(()=>{
            console.log(" Sucessfully fetched the data from the ApI");
        },12000);