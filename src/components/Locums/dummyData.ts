
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

