const choices = ['snake', 'water', 'gun'];
        const limit = 5; 
        let score = 0;
        let waterScore = 0;
        let gunScore = 0;
        
    for (let i = 0; i < limit; i++) 
    {
            let Index = Math.floor(Math.random() * choices.length);
            let Element = choices[Index];
            console.log((i+1)+":" + Element);
         
                if (Element == 'gun') 
                 {
                   gunScore += 2;
                   score += 2;
                 } 
                else if (Element == 'water') 
                {
                    waterScore += 1;
                    score += 1;
                }
                else if (Element == 'snake')
                 {
                     let snakeScore = (gunScore - waterScore);   
                     score += snakeScore; 
                 }         
    }
         
console.log("Final Score: " + score);
      
  if(score>0)
    {
        console.log("YOU WON");
    }
  else if(score<=0)
    {
        console.log("YOU LOOSE")
    }