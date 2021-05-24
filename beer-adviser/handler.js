exports.findtwobeers = async (event) => {
    
  try {
      
      const reqBody = JSON.parse(event.body)
      const {beers, target} = reqBody;

      let suggestedBeers = [];
    
      for (let firstBeer = 0; firstBeer < beers.length; firstBeer++) {
          for (let secondBeer = 0; secondBeer < beers.length; secondBeer++) {
              
              if (firstBeer === secondBeer) { 
                  continue;
              } 
              
              let sum = beers[firstBeer] + beers[secondBeer];
    
              if (sum === target) { 
    
                  suggestedBeers.push(firstBeer, secondBeer);
                   return { statusCode: 200, body: JSON.stringify({ index: suggestedBeers }) };
              }
    
          }
      }
  
      return { statusCode: 200, body: JSON.stringify({ index: suggestedBeers })};
      
  } catch (error) {

      return { statusCode: 400, body: JSON.stringify(error) };

  }

};
