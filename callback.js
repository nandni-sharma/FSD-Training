function user1(user2){
            console.log("module 1 completed")
            user2();
        }
        function user2(user3){
            console.log("module 2 completed")
            user3();
        }
        function user3(user4){
            console.log("module 3  completed")
            user4();
        }
        function user4(){
            console.log("module 4 completed")
        }
        
        user1(()=>{
            user2(()=>{
                user3(()=>{
                    user4();
                });
            });
        });