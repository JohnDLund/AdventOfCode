let input =
    "....#...............#.#..###.## .#..#....###..............##... ....###......#....#.#...#.##..# .......#........#..###...##.... .....#..#......#..#..##..#...#. ....#..........#....#...#...... ............###...#............ ##......#.....#......#.....##.. ........#.........##..#.#...##. ....#.#..#.#...#........#..#... .#.....#.#......#....#..#..#..# #.##..##......#.....##...#..#.. #........#..##...###....##..... ......#.#..##...#.#.....#...... ##.......#..#.........#...#.... .....##.........#....#.#.###.#. ..##...........#.#.#.#.....#.#. ....#...............#......#.#. #.#..#....#.....#.....##...#..# #......#..............#.#.##... ......###.....#...#........###. ####...#.....#...#....#........ .......#...#....##...#......... .####..##............#......... #.#...#...#....#...#.#......#.. ..#..#.....#.......#...#.#...## .#.........#...#......##.#...#. .#.#...#...#.....#.#........#.# .#.....###....###..##.#..##.#.. .....##....#......#..#...#...#. #...##....#.......#.....##.##.. #...#.....#.#...........#..###. ##.#........###...........###.# #...#.#........#.#.....#....... ..................#..#......... .....#.#..#.#......#..#.....##. .#.#.......#..##........#..##.# .#.#..#.#...#.......#.#.#..#... ...#......#....#....##.#..#.... ......#.......##....##..#.....# ...#.##...##...............#..# .###....#.#.....##..#.......#.# #....#..........#...........#.# ...#...............#.#..#....#. .....#..##..........#..###..... .....####.....#.#.......#...#.. #.............#...#.......##... .#....##.......#.#......#.#.##. .#..#.......#..##...#...#...... #.......#..#..#..#.....#....... ##...#.#.#...........#....#.... .......#..#.#..............#.#. .....#.......#.......#.#.#..... ....##.##.....#......#.......#. #...#..#.#....###....##...#.#.# #..#......#........#.#.#.....#. ###..##..#......#.....#.......# ..##....#.#.#......#..##...#... .....#..#....#...#.#...#...#... .....#.#..###.#..#...##......#. #.#..#....#..#.....#.#...#.#... .#..#....#.......#..#.......#.. #.........#..#..#.........##..# ..##.##..#..#...##............. .....###...#..#...##.#..#...... #.##.....##..............#..... .......#.##.#.##...#.#.......## ...#.#.##...#......#........... ##.#........#.....##.....#..... .#.....#.............#......#.. ....#..##..#..#....#..#.#...... .#.....#....##..##..#...##..... .##........#.#.#.#..........#.# ...#.#.#..#....#...#..###.##... .#....#....#.#.#.#....#..#..... #.#.......#..#..#...........#.# .....#.....##..#....##......... ....#.##..............#........ .................#....#.......# ...................###...#...#. ...#.#..#..##..##....#.....#... #...#.......................... .......#..#..#.#..#.....#...... ..##.#..#......#...#.##..##..#. .##.........#.#...........#.... ...#...#..##.#......#..#..#.... .....#.#....#...#............#. .##..#.....##....#...#......... #......##...#...#............#. .....#.##...#.#....##.......... .............#.......#.#....... ##....#.#........#....#..##.... ....#...##.#....##..#.....#.#.. ...##..#....##......#...#...... .####.#..#..#.#...#.#.#....#... .#........#.##....#.#....#..... .........#....##..#..#......... ....##...#....##.............#. ....#..##.#....#.#..#...##..... .....##...#..#....#......#.#... ..........#.......#.##..#.##..# .......#.........#...#.##...... ....##.#.......#............... ....#.......#..##.......##.#.## #.#..#.#....#.#.........###...# .#.##.....##..##...........#.#. ...#....##........##...#...#... .#.##....#.#...#.#..#..#...#... #....#.##...#.#..#....#.....#.. #..#...#........#...........#.. ...........#.......#......#..#. ....##...#......##.....#......# .#.##.#.#.............#....##.. .#...#...##.#.#........#..##.#. .#.#........#.#...#..#........# .###.#.#...#..#..#.#....#..#... ..##..##....#.#............#... #..........#........#..#.#.#... .#...#..#..#.#.....#.....#....# #.....#.#.#.....####.......#... ...#.#........#.#.###...#.....# .....#.....##....#....#..##...# ..#....###.##.#..#..#....#...#. .....#.....#...........#.#.###. .....#......###...#.#...##..... ...........###..#...#....#.#..# ...#..###.....#....#.#...#..... .......#...#..#..##....#.#.#... ...#..####.###........#.....#.. ..#......###..#..#.##.......... ....#....##..##..##.......###.. ...#.......#..#.#....##........ .#.#.....#.#.#..........#..#..# .##....##....##...........##.## ........#......#.##....##...#.# ..#.#.....#..#....#..........#. ...........#...............#... .....####.....#.....###.#..#... ..........####..##.##.#....#... ...#.#.#......#....#..#.#...... .#.#......###.....#....#....... ..#..#..#.......#..#...#.....#. ...#............#......##...### ......#.............#..#..###.. .#.#......#..##.#..#..#.#...#.# .#.....#.......#..#...........# ..#.###.#..#...#.##..#.##...... ....#.#........#..#.#...#.#.##. .#..##.#..#.#.#...##..#.#...... .......#..#..#..#.....#.#.#..#. .##.###..##.....#.##..#........ ...##..............#.#.##....#. ##....#...#...........#........ ..#........#.#.##..#.#...#..#.. .......#.......##.#..#....#.#.. .......#....##..#.#.#..#....#.. ..........#....#..#..#....#.... ........#.....#.#.....##....... ........##.###.........#.#.#... ###......####...#.#........#... ......#........#......#.....#.. ##..#.##..##.###..#........##.. .#..#...#............##.##..#.. ...........#..#.#.............. .##.#.#....#...............#..# .........##.................#.. #............##..##.........##. ##........#.........#..##.#...# ........#.....#..#.........#.## ....#......#.....##.##......... .#.#.....#.#..#..##....#....#.. .###...#..##....##.....#.#..##. .#....#.#.......#..#..#...###.. ..#.#......#.#..#.....###.....# #....#..#...#.....#.......#.##. .#.......##.#.#...#......#..... ###....#.#......#....#.#...##.. ...#....####.......##.....#..#. .#.................#.......##.# ...#.###..........#..##......#. .....##.#..............##..#... #.....#..#..........#..#....... ..#...#.#.#.......##.#.....#... #........#.#........#.#.....#.. #.....#...##....##..##........# .#.##..#...#....#........#..#.. #..#.....#....#...##......#.... ...#...#...#.#.#....##....#.#.# ......#...............#.....#.. .......#.#..#..##.#.....#...... ...........##......#...#....... ....##..##.....#.#...#......... ......##..###.......#....#.##.. ......#..#.##....#..###..#..... .....#.........#........##..... .....####..................#... .#.#...##................#..... .#..#...#...#.....#.##..#..#... .#................#...###....#. ...#....#...........#...#....#. .......#....##...............#. .#.#.##..##.......#....#....### ......#.#....#...#..#.......... ....#.##.#.#...##.#.#......#... ##....#...##.....#..#.###.#.... .......#......#.........#.#...# .##.#...........##.........#.#. ##..##.....#...#..#.#...#....#. #..##......###........#...#.... .....#.#.......#...#..##....##. .....#.#..#.....#.......#..##.. ...#..#..............#.#....... .#.#...###......###............ .....#.....#...#.###........... .......#..................#...# #....#...#...#....#....#.#....# ....#..#............#.#........ #....#..........#.#.#..#..#.... .......#....#......#....#...... .##.#.#...#...#...##........... .........###.#..#.............. ...#........##....#....#....### ....##..#.......#.#...#.#..#.#. .....##....#..##.........#..... ........##..#........#......... ...........#..#.##..##...#..... .........#.#..####..#...#.##.## ##..#.#.....##.....#.........#. ..#...#...#....#.#....#.....#.# .###.#....#.#......#....#...... .##.....#....#.......#.#..#.##. #..#..##.....#....#...##.....#. ...#.........####.........##..# ..#.....#....###.#.#...#..#.... .........#....#..#.#.........#. .....###.##..#...#.....#..#..#. ....#......#..#.#...#.....#.... .......#...#..#....#.......#.#. .#....#............#....####... #..##..##....#.....#...#.....#. ...#...##...#.#....#........... .......#####.....#..###.#..#... .....#.....#.#....#.........#.. .###.#..#...##.##.#.#..#..#.... .#..#.##..#......#..........##. ##....#....#.........###..#.... ..#.............#.......#.#.... ..#.....#..##...#...###..#.##.. ##...##...#.#....#..#.......... ...............#.....#.......#. ....#.#......##.#......#...#.#. .........#.............#.#..... ...#.#......................... ..#..#....##..#...###.##....... ...##.#...##..#.#.##.#...#.##.. .##....#....#.......#.....##..# .#...............#..#...#...... ...##.....##.###....#.....#...# ...#.....#...####....##....#..# ..#.#.###..##.....#........#... .....##.##..#..#.........##.... ........##.....#..........#.##. ..##.#....####..#...........#.. ##....#..#..#.#.##.....#...##.. ...#...#......#..#.#....#...... ##.....##.......##.##....#..... .........#...##...........#.... .###.#..#....##...#.....#.....# ...#..........#.###..##...#.##. ...#..#....#.#.#.......###..... ....#..#.#.....##...#.#.#.#.... .......##..#...##..##.#....#... .##..........#.#.#.....#.....#. #....#......##...#..##.#..#..#. .#...#.....###..#......#.....#. .#..#.###.......#.##....###.... #....#....#....#....#..#.##.... ..#..#.....#.....#....###.....# ##.###..#...##.......#.#....... #...##......##....#.#...#....#. ..##.#.#....#...#.....##....... .#....#..#...#...##..##........ ###......#.##....#.#..##....... ...#.....##.#.........#..#..... .......#.#....#.....##......#.. #..#..............##.#........# ....#.#....#..#.#...##......... ..........#..........#......... .#.....#.....#.##....#.##..#..# .......#.......#.#.#.##....#... ..#...........#....#.......##.. ..#.#.#.#...##..#.#.#..#...#.#. ..#..#..........#...##....#.... ....##.#....#.............#.... .##...##..........#.#..#...#... #..#..#.##..........##......... ............#.......#..#.....## ....#......#........#..#.##.... #.#......#.#...#.....#......... ..#.....#..#..........#.....#.. .#..#.#.#.##...#..#.#.........# #...##....#..##..#...#.#.##.... #..##.##.#.##.......#.......#.. #.#.......#........#.##....#.#. ....#..##....##..##......#..##. #.....#....#.#........####..... ......#...#...###..#........... .##.#.##...##................## ..##.#.....#.#..#......#.#..... ......#...#........#.....#.##.. #..#.#..#.....#.#..#..##..#.#.. ...#.........#.#.#.##...#...... ...#..##....#..#.#....#.###.#.. ........###................##.# ##...........#......##.##.....# .#.#.#....#....#....#.......... #.....#........................ ....#.....#...#......#......... ....#.#..#..............#...... ##.........#..#....#.......#... .###....#..#.#.####.........#.. ..#.#....#.....###..#.......... ..........#................#.##"

let fixedInput = input.split(" ")

console.log(fixedInput)


