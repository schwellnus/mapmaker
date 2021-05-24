
import { tileset, land_tiles, water_tiles, footpath_tiles } from "./lib/tileset";
import { initializeMapWithTile, generatePathCoordinates, fillMapWithTilesByCoords, getRandomInt} from "./lib/mapmaker";

var width=120;
var height=60;




function dumpMap(map) {
    var out='';
    for(var y=0;y<map.length;y++) {
        for(var x=0;x<map[y].length;x++) {
            out = out + map[y][x].symbol;
        }
        out = out + "\n";
    }
    return out;
}

function dumpHTMLMap(map) {
    var out='<table border="0" cellspacing="0" cellpadding="0" style="border: 0; border-spacing: 0px; padding: 0px;">';
    for(var y=0;y<map.length;y++) {
        out = out + '<tr style="border-spacing: 0px; padding: 0px;">';
        for(var x=0;x<map[y].length;x++) {
            out = out + '<td style="border-spacing: 0px; padding: 0px;">' + map[y][x].symbol + '</td>';
        }
        out = out + "</tr>\n";
    }
    out = out + "</table>\n";
    return out;
}


var map = initializeMapWithTile(width, height, land_tiles[0]);


for(var x=0;x<30;x++) {
    var newPath=generatePathCoordinates(width,height,150);
    var tileidx=getRandomInt(land_tiles.length);
    //console.log(newPath);
    map = fillMapWithTilesByCoords(newPath,map,land_tiles[tileidx]);
}

for(var x=0;x<10;x++) {
    var newPath=generatePathCoordinates(width,height,150);
    var tileidx=getRandomInt(water_tiles.length);
    //console.log(newPath);
    map = fillMapWithTilesByCoords(newPath,map,water_tiles[tileidx]);
}



for(var x=0;x<10;x++) {
    var newPath=generatePathCoordinates(width,height,100);
    var tileidx=getRandomInt(footpath_tiles.length);
    //console.log(newPath);
    map = fillMapWithTilesByCoords(newPath,map,footpath_tiles[tileidx]);
}


//console.log(map);

console.log(dumpHTMLMap(map));

