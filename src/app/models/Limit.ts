export interface Limit {
    limitID: number,
    limitType: string,
    limitLoans: {
        limitID: number,
        entityID: number,
        riskTakerGroupName: string,
        product: string,
        riskType: string,
        currency: string
    }

}