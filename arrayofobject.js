const userDetails = [
        {
            Name : "neha",
            Qualification:"b.ed",
            age:32,
            id:635
         },
        {
            Name : "raj",
            Qualification:"btech",
            age:17,
            id:452
        },
        {
            Name : "aman",
            Qualification:"mtech",
            age:26,
            id:762
        }
        ]
        console.log(userDetails[0]);
        console.log(userDetails[1]);

        for(let i in userDetails){
            if (userDetails[i].age<18){
                console.log(userDetails[i].age);
            }
          
        }