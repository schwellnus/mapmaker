
export type Tile = {
    name: string;
    type: string;
    symbol: String;
}

export const land_tiles: Tile[] = [
    {
        name: 'grass',
        type: 'land',
        symbol: '🟩'
    },
    {
        name: 'sand',
        type: 'land',
        symbol: '🟨'
    },
    {
        name: 'rock',
        type: 'land',
        symbol: '⛰'
    },
    {
        name: 'tree',
        type: 'land',
        symbol: '🌲'
    },
    {
        name: 'tree2',
        type: 'land',
        symbol: '🌳'
    }
];

export const footpath_tiles: Tile[] = [
    {
        name: 'gravel',
        type: 'land',
        symbol: '⬜️'
    },
    {
        name: 'path',
        type: 'land',
        symbol: '🟫'
    }, 
];

export const water_tiles: Tile[] = [
    {
        name: 'lake',
        type: 'water',
        symbol: '🟦'
    }
];

export const tileset: Tile[]=land_tiles.concat(footpath_tiles,water_tiles);
