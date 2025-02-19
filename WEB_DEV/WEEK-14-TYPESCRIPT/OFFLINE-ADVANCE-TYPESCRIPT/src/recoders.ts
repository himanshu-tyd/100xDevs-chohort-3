
interface User5{
    name:string,
    id: string
}

type BigObject=Record<string , User5>


const users: BigObject = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
  };
  
  console.log(users['abc123']); // 