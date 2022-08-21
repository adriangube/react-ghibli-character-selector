export interface Entity {
    id: string;
    name: string;
}

export const hasEntities = (entityList?: Entity[]) =>
	typeof entityList === 'object' &&
    entityList !== undefined &&
    entityList !== null &&
    entityList?.length > 0;