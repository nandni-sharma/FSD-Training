let employe = [
            {
                employeId : 1,
                employeName : 'Rahul',
                offerLetter : 'accepted',
                salary : '2.5 l'
            },
            {
                employeId : 2,
                employeName : 'Nidhi',
                offerLetter : 'rejected',
                salary : '1.5 l'
            },
            {
                employeId : 3,
                employeName : 'Sahil',
                offerLetter : 'accepted',
                salary : '3 l'
            }
        ]
       let employeRecord =  employe.map((item)=>{
            return item.employeName;
            
        });
        console.log(employeRecord);