export interface IChallenge {
    challenge_mode: Array<{
        id: string, 
        name: string
    }>,
    category: Array<{
        id: string,
        name: string
    }>,
    category_sub: Array<{
        id: string,
        name: string,
        id_category: string
    }>
}