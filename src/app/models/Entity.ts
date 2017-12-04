export interface Entity {
    entityID: number,
    entityName: string,
    parentRelationships: {
        relationshipID: number,
        relationshipType: string,
        childID: number,
        childName: string
    }

}