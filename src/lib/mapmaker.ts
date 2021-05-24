import { Tile, tileset, land_tiles, water_tiles, footpath_tiles } from "./tileset";


export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function arraySum(arr1, arr2) {
    var sum = arr1.map(function (num, idx) {
        return num + arr2[idx];
      }); 
      return sum;
}


function coordsContained(coords,searchcoords) {
    //console.log("--");
    //console.log(coords);
    for(var i=0;i<coords.length;i++) {
        if(coords[i][0]==searchcoords[0] && coords[i][1]==searchcoords[1]) {
            //console.log(coords[i]);
            //console.log(searchcoords);            
            //console.log("is contained");
            return true;
        }
    }
    //console.log(coords[i]);
    //console.log(searchcoords);
    //console.log("is not contained");
    return false;
}


export function initializeMapWithTile(width: number, height: number, tile: Tile) {
    var map=[];

    for (var y=0; y<height; y++) {
        map.push([]);
        for(var x=0;x<width;x++) {
            map[y].push(tile);
        }
    }
    return map  
}

export function fillMapWithTilesByCoords(coords,map,tile) {
    for (var i=0; i<coords.length; i++) {
        map[coords[i][0]][coords[i][1]]=tile;
    }
    return map;
}


export function generatePathCoordinates(width: number, height: number,length: number) {
    var path=[];    
    const directions = [
        [-1,  0], //up
        [ 1,  0], //down
        [ 0, -1], //left
        [ 0,  1],  //right
        [-1, -1],
        [ 1,  1],
        [ 1, -1],
        [-1,  1]
    ];

    var dirs=[];

    var currentPosition=[getRandomInt(height),getRandomInt(width)];
    var previousPosition=currentPosition;

    var currentdirection=directions[getRandomInt(directions.length)];
    path.push(currentPosition);

    var iterations=0;

    for(var s=0;s<length;s++) {

        var nextPosition = previousPosition;
        while(coordsContained(path,nextPosition)==true && iterations<(5*length)) {
            currentdirection=directions[getRandomInt(directions.length)];
            nextPosition = arraySum(currentPosition,currentdirection);
            if(nextPosition[0]<0) nextPosition[0]=height-1;
            if(nextPosition[0]>(height-1)) nextPosition[0]=0;
            if(nextPosition[1]<0) nextPosition[1]=width-1;
            if(nextPosition[1]>(width-1)) nextPosition[1]=0;     
            iterations++;
        }
        path.push(nextPosition);
        previousPosition=currentPosition;
        currentPosition=nextPosition;

        dirs.push(currentdirection);
        

    }

    return path;

}

