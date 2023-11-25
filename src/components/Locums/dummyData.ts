
export interface Locum{
    id: number,
    title: string,
    requirements: string
    description: string
    location: string
    rate: number
    start: Date
    stop: Date
    avatar: string
}
export const activeLocumsArray: Locum[] = [
    {
        id: 1,
        title: 'Doctor',
        requirements: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam illum numquam, cupiditate deleniti temporibus, eligendi laborum amet molestiae deserunt dolor cumque commodi sequi reprehenderit totam molestias. Placeat corrupti id commodi.",
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam illum numquam, cupiditate deleniti temporibus, eligendi laborum amet molestiae deserunt dolor cumque commodi sequi reprehenderit totam molestias. Placeat corrupti id commodi.',
        location: 'Nairobi',
        rate: 500,
        start: new Date(),
        stop: new Date(),
        avatar: 'pixel 5'
    }
]

export const generateRandomData = () => {
    const rows = [];
    const names = ["Jon", "Cersei", "Jaime", "Arya", "Daenerys", "Melisandre", "Ferrara", "Rossini", "Harvey"];
    const lastNames = ["Snow", "Lannister", "Stark", "Targaryen", "Melisandre", "Clifford", "Frances", "Roxie"];
    
    for (let i = 1; i <= 100; i++) {
      const randomFirstName = names[Math.floor(Math.random() * names.length)];
      const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
      const randomAge = Math.floor(Math.random() * 100) + 1; // Random age between 1 and 100
  
      rows.push({
        id: i,
        lastName: randomLastName,
        firstName: randomFirstName,
        age: randomAge === 100 ? null : randomAge, // Assign null to age if it's 100
      });
    }
  
    return rows;
  }
  
  const generatedRows = generateRandomData();
  console.log(generatedRows);
  

