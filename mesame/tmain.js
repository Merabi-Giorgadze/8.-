  function deepCopyAsync(input) {
    return new Promise((resolve, reject) => {
      // Check that the argument is an object and not null
      if (typeof input !== 'object' || input === null) {
        return reject('Argument must be a non-null object.');
      }
  
      try {
        // Recursive function to deep copy the object
        const deepCopy = (obj) => {
          // Handle arrays separately
          if (Array.isArray(obj)) {
            return obj.map(item => deepCopy(item));
          }
  
          // Handle objects
          if (typeof obj === 'object' && obj !== null) {
            const copiedObject = {};
            for (const key in obj) {
              if (obj.hasOwnProperty(key)) {
                copiedObject[key] = deepCopy(obj[key]);
              }
            }
            return copiedObject;
          }
  
          // Return the value if it's not an object (e.g., primitive types)
          return obj;
        };
  
        const copiedObject = deepCopy(input);
        resolve(copiedObject);
      } catch (error) {
        reject('Failed to copy object.');
      }
    });
  }
  
  // Example usage of the function
  const myObject = {
    name: 'John',
    age: 30,
    address: {
      city: 'New York',
      zip: '10001'
    },
    hobbies: ['reading', 'traveling'],
    meta: null
  };
  
  deepCopyAsync(myObject)
    .then(copiedObject => {
      console.log('Copied Object:', copiedObject);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  