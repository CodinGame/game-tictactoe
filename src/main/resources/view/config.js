import { GraphicEntityModule } from './entity-module/GraphicEntityModule.js';

export const demo = {
  playerCount: 2,
  agents: [{
    index: 0,
    name: 'Alice',
    avatar: 'https://www.codingame.com/servlet/fileservlet?id=' + 16085713250612 + '&format=viewer_avatar',
    type: 'CODINGAMER',
    color: '#ffae16',
    typeData: {
      me: true,
      nickname: '[CG]Nonofr'
    }
  }, {
    index: 1,
    name: 'Bob',
    avatar: 'https://www.codingame.com/servlet/fileservlet?id=' + 16085756802960 + '&format=viewer_avatar',
    type: 'CODINGAMER',
    color: '#ff1d5c',
    typeData: {
      me: true,
      nickname: '[CG]Maxime'
    }
  }],
  frames: [
    "KEY_FRAME 0\n{\"global\":{\"entitymodule\":{\"width\":1920,\"height\":1080}},\"frame\":{\"duration\":600,\"entitymodule\":[\"C S\",\"C T\",\"C S\",\"C G\",\"C T\",\"C S\",\"C G\",\"C G\",\"C L\",\"C L\",\"C L\",\"C L\",\"C G\",\"C L\",\"C L\",\"C L\",\"C L\",\"C G\",\"C L\",\"C L\",\"C L\",\"C L\",\"C G\",\"C L\",\"C L\",\"C L\",\"C L\",\"C G\",\"C L\",\"C L\",\"C L\",\"C L\",\"C G\",\"C L\",\"C L\",\"C L\",\"C L\",\"C G\",\"C L\",\"C L\",\"C L\",\"C L\",\"C G\",\"C L\",\"C L\",\"C L\",\"C L\",\"C G\",\"C L\",\"C L\",\"C L\",\"C L\",\"C G\",\"C L\",\"C L\",\"C L\",\"C L\",\"U 43 0.1 C 44,46,47,45 a 1\",\"U 48 0.1 C 50,51,52,49 a 1\",\"U 23 0.1 C 25,27,24,26 a 1\",\"U 53 0.1 C 56,55,57,54 a 1\",\"U 13 0.1 C 17,15,16,14 a 1\",\"U 28 0.1 C 31,30,32,29 a 1\",\"U 18 0.1 C 22,19,20,21 a 1\",\"U 33 0.1 C 34,36,35,37 a 1\",\"U 38 0.1 C 41,39,42,40 a 1\",\"U 10 1 x 480 y 700 Y 700 X 1440 c 16777215 W 5\",\"U 34 1 x 847 y 502 Y 502 X 1072 c 15658734 W 2\",\"U 41 1 x 922 y 747 Y 972 X 922 c 15658734 W 2\",\"U 44 1 x 1167 y 182 Y 182 X 1392 c 15658734 W 2\",\"U 55 1 x 1167 y 897 Y 897 X 1392 c 15658734 W 2\",\"U 8 1 C 10,12,9,11\",\"U 27 1 x 677 y 747 Y 972 X 677 c 15658734 W 2\",\"U 12 1 x 1120 y 60 Y 1020 X 1120 c 16777215 W 5\",\"U 37 1 x 997 y 427 Y 652 X 997 c 15658734 W 2\",\"U 24 1 x 527 y 822 Y 822 X 752 c 15658734 W 2\",\"U 45 1 x 1167 y 257 Y 257 X 1392 c 15658734 W 2\",\"U 2 1 f -1 ay 0 ax 0 x 180 y 65 s 50 T $0 z 20\",\"U 40 1 x 847 y 897 Y 897 X 1072 c 15658734 W 2\",\"U 39 1 x 847 y 822 Y 822 X 1072 c 15658734 W 2\",\"U 3 1 bw 116 i $0 ay 0.5 ax 0.5 x 100 y 90 bh 116 z 20\",\"U 57 1 x 1317 y 747 Y 972 X 1317 c 15658734 W 2\",\"U 51 1 x 1242 y 427 Y 652 X 1242 c 15658734 W 2\",\"U 30 1 x 847 y 257 Y 257 X 1072 c 15658734 W 2\",\"U 6 1 bw 116 i $1 ay 0.5 ax 0.5 x 1500 y 90 bh 116 z 20\",\"U 50 1 x 1167 y 577 Y 577 X 1392 c 15658734 W 2\",\"U 47 1 x 1317 y 107 Y 332 X 1317 c 15658734 W 2\",\"U 20 1 x 527 y 577 Y 577 X 752 c 15658734 W 2\",\"U 22 1 x 677 y 427 Y 652 X 677 c 15658734 W 2\",\"U 5 1 f -2 ay 0 ax 0 x 1580 y 65 s 50 T $1 z 20\",\"U 1 1 i Background.jpg ay 0 ax 0\",\"U 16 1 x 602 y 107 Y 332 X 602 c 15658734 W 2\",\"U 42 1 x 997 y 747 Y 972 X 997 c 15658734 W 2\",\"U 29 1 x 847 y 182 Y 182 X 1072 c 15658734 W 2\",\"U 21 1 x 602 y 427 Y 652 X 602 c 15658734 W 2\",\"U 15 1 x 527 y 257 Y 257 X 752 c 15658734 W 2\",\"U 7 1 C 6,5\",\"U 31 1 x 922 y 107 Y 332 X 922 c 15658734 W 2\",\"U 46 1 x 1242 y 107 Y 332 X 1242 c 15658734 W 2\",\"U 14 1 x 527 y 182 Y 182 X 752 c 15658734 W 2\",\"U 54 1 x 1167 y 822 Y 822 X 1392 c 15658734 W 2\",\"U 56 1 x 1242 y 747 Y 972 X 1242 c 15658734 W 2\",\"U 35 1 x 847 y 577 Y 577 X 1072 c 15658734 W 2\",\"U 26 1 x 602 y 747 Y 972 X 602 c 15658734 W 2\",\"U 4 1 C 3,2\",\"U 25 1 x 527 y 897 Y 897 X 752 c 15658734 W 2\",\"U 36 1 x 922 y 427 Y 652 X 922 c 15658734 W 2\",\"U 17 1 x 677 y 107 Y 332 X 677 c 15658734 W 2\",\"U 9 1 x 480 y 380 Y 380 X 1440 c 16777215 W 5\",\"U 52 1 x 1317 y 427 Y 652 X 1317 c 15658734 W 2\",\"U 32 1 x 997 y 107 Y 332 X 997 c 15658734 W 2\",\"U 19 1 x 527 y 502 Y 502 X 752 c 15658734 W 2\",\"U 49 1 x 1167 y 502 Y 502 X 1392 c 15658734 W 2\",\"U 11 1 x 800 y 60 Y 1020 X 800 c 16777215 W 5\"]}}\n",
    "KEY_FRAME 1\n{\"entitymodule\":[\"C S\",\"U 43 0.1 a 0.5\",\"U 48 0.1 a 0.5\",\"U 53 0.1 C 56,55,57,54,58 a 0.5\",\"U 13 0.1 a 0.5\",\"U 28 0.1 a 0.5\",\"U 18 0.1 a 0.5\",\"U 33 0.1 a 0.5\",\"U 38 0.1 a 0.5\",\"U 58 0.2 bw 60 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 1205 y 935 bh 60 t -1\",\"U 58 1 sx 1 ~ sy 1 ~\"]}\n",
    "KEY_FRAME 2\n{\"entitymodule\":[\"C S\",\"U 23 0.1 C 25,27,24,26,59 a 0.5\",\"U 53 0.1 a 1\",\"U 59 0.2 bw 60 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 715 y 935 bh 60 t -2\",\"U 59 1 sx 1 ~ sy 1 ~\"]}\n",
    "KEY_FRAME 3\n{\"entitymodule\":[\"C S\",\"U 53 0.1 C 56,55,57,60,54,58 a 0.5\",\"U 38 0.1 a 1\",\"U 60 0.2 bw 60 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 1280 y 935 bh 60 t -1\",\"U 60 1 sx 1 ~ sy 1 ~\"]}\n",
    "KEY_FRAME 4\n{\"entitymodule\":[\"C S\",\"U 53 0.1 a 1\",\"U 38 0.1 C 41,61,39,42,40 a 0.5\",\"U 61 0.2 bw 60 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 1035 y 935 bh 60 t -2\",\"U 61 1 sx 1 ~ sy 1 ~\"]}\n",
    "KEY_FRAME 5\n{\"entitymodule\":[\"C S\",\"U 53 0.1 C 56,55,62,57,60,54,58 a 0.5\",\"U 33 0.1 a 1\",\"U 62 0.2 bw 60 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 1280 y 860 bh 60 t -1\",\"U 62 1 sx 1 ~ sy 1 ~\"]}\n",
    "KEY_FRAME 6\n{\"entitymodule\":[\"C S\",\"U 53 0.1 a 1\",\"U 33 0.1 C 34,36,35,63,37 a 0.5\",\"U 63 0.2 bw 60 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 1035 y 615 bh 60 t -2\",\"U 63 1 sx 1 ~ sy 1 ~\"]}\n",
    "KEY_FRAME 7\n{\"entitymodule\":[\"C S\",\"C S\",\"U 43 0.1 a 1\",\"U 48 0.1 a 1\",\"U 23 0.1 a 1\",\"U 53 0.1 v false C 56,55,64,62,57,60,54,58\",\"U 13 0.1 a 1\",\"U 28 0.1 a 1\",\"U 18 0.1 a 1\",\"U 33 0.1 a 1\",\"U 38 0.1 a 1\",\"U 65 0.2 bw 256 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 1280 y 860 bh 256 t -1\",\"U 64 0.2 bw 60 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 1355 y 935 bh 60 t -1\",\"U 8 1 C 10,65,12,9,11\",\"U 65 1 sx 1 ~ sy 1 ~\",\"U 64 1 sx 1 ~ sy 1 ~\"]}\n",
    "KEY_FRAME 8\n{\"entitymodule\":[\"C S\",\"U 43 0.1 a 0.5\",\"U 48 0.1 a 0.5\",\"U 23 0.1 a 0.5\",\"U 13 0.1 a 0.5\",\"U 28 0.1 a 0.5\",\"U 18 0.1 a 0.5\",\"U 33 0.1 a 0.5\",\"U 38 0.1 C 41,61,39,42,66,40\",\"U 66 0.2 bw 60 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 960 y 935 bh 60 t -2\",\"U 66 1 sx 1 ~ sy 1 ~\"]}\n",
    "KEY_FRAME 9\n{\"entitymodule\":[\"C S\",\"U 33 0.1 a 1\",\"U 38 0.1 C 41,61,67,39,42,66,40 a 0.5\",\"U 67 0.2 bw 60 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 960 y 860 bh 60 t -1\",\"U 67 1 sx 1 ~ sy 1 ~\"]}\n",
    "KEY_FRAME 10\n{\"entitymodule\":[\"C S\",\"U 33 0.1 C 34,36,35,63,37,68 a 0.5\",\"U 38 0.1 a 1\",\"U 68 0.2 bw 60 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 960 y 615 bh 60 t -2\",\"U 68 1 sx 1 ~ sy 1 ~\"]}\n",
    "KEY_FRAME 11\n{\"entitymodule\":[\"C S\",\"U 23 0.1 a 1\",\"U 38 0.1 C 41,61,67,39,69,42,66,40 a 0.5\",\"U 69 0.2 bw 60 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 885 y 935 bh 60 t -1\",\"U 69 1 sx 1 ~ sy 1 ~\"]}\n",
    "KEY_FRAME 12\n{\"entitymodule\":[\"C S\",\"U 23 0.1 C 25,27,24,70,26,59 a 0.5\",\"U 38 0.1 a 1\",\"U 70 0.2 bw 60 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 640 y 935 bh 60 t -2\",\"U 70 1 sx 1 ~ sy 1 ~\"]}\n",
    "KEY_FRAME 13\n{\"entitymodule\":[\"C S\",\"U 28 0.1 a 1\",\"U 38 0.1 C 41,61,71,67,39,69,42,66,40 a 0.5\",\"U 71 0.2 bw 60 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 960 y 785 bh 60 t -1\",\"U 71 1 sx 1 ~ sy 1 ~\"]}\n",
    "KEY_FRAME 14\n{\"entitymodule\":[\"C S\",\"U 43 0.1 a 1\",\"U 48 0.1 a 1\",\"U 23 0.1 a 1\",\"U 13 0.1 a 1\",\"U 28 0.1 C 72,31,30,32,29\",\"U 18 0.1 a 1\",\"U 33 0.1 a 1\",\"U 38 0.1 a 1\",\"U 72 0.2 bw 60 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 1035 y 295 bh 60 t -2\",\"U 72 1 sx 1 ~ sy 1 ~\"]}\n",
    "KEY_FRAME 15\n{\"entitymodule\":[\"C S\",\"U 43 0.1 a 0.5\",\"U 23 0.1 a 0.5\",\"U 13 0.1 C 17,15,73,16,14 a 0.5\",\"U 28 0.1 a 0.5\",\"U 18 0.1 a 0.5\",\"U 33 0.1 a 0.5\",\"U 38 0.1 a 0.5\",\"U 73 0.2 bw 60 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 715 y 220 bh 60 t -1\",\"U 73 1 sx 1 ~ sy 1 ~\"]}\n",
    "KEY_FRAME 16\n{\"entitymodule\":[\"C S\",\"U 43 0.1 a 1\",\"U 48 0.1 C 50,51,52,74,49\",\"U 23 0.1 a 1\",\"U 13 0.1 a 1\",\"U 28 0.1 a 1\",\"U 18 0.1 a 1\",\"U 33 0.1 a 1\",\"U 38 0.1 a 1\",\"U 74 0.2 bw 60 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 1355 y 615 bh 60 t -2\",\"U 74 1 sx 1 ~ sy 1 ~\"]}\n",
    "KEY_FRAME 17\n{\"entitymodule\":[\"C S\",\"U 43 0.1 a 0.5\",\"U 23 0.1 a 0.5\",\"U 13 0.1 a 0.5\",\"U 28 0.1 a 0.5\",\"U 18 0.1 a 0.5\",\"U 33 0.1 C 34,36,35,63,37,75,68 a 0.5\",\"U 38 0.1 a 0.5\",\"U 75 0.2 bw 60 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 1035 y 540 bh 60 t -1\",\"U 75 1 sx 1 ~ sy 1 ~\"]}\n",
    "KEY_FRAME 18\n{\"entitymodule\":[\"C S\",\"U 48 0.1 C 50,51,52,74,76,49 a 0.5\",\"U 38 0.1 a 1\",\"U 76 0.2 bw 60 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 1280 y 615 bh 60 t -2\",\"U 76 1 sx 1 ~ sy 1 ~\"]}\n",
    "KEY_FRAME 19\n{\"entitymodule\":[\"C S\",\"U 48 0.1 a 1\",\"U 38 0.1 C 41,61,71,67,77,39,69,42,66,40 a 0.5\",\"U 77 0.2 bw 60 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 1035 y 860 bh 60 t -1\",\"U 77 1 sx 1 ~ sy 1 ~\"]}\n",
    "KEY_FRAME 20\n{\"entitymodule\":[\"C S\",\"C S\",\"U 23 0.1 a 1\",\"U 78 0.2 bw 60 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 1205 y 615 bh 60 t -2\",\"U 79 0.2 bw 256 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 1280 y 540 bh 256 t -2\",\"U 8 1 C 10,65,12,9,79,11\",\"U 78 1 sx 1 ~ sy 1 ~\",\"U 79 1 sx 1 ~ sy 1 ~\",\"U 48 1 v false C 78,50,51,52,74,76,49\"]}\n",
    "KEY_FRAME 21\n{\"entitymodule\":[\"C S\",\"U 23 0.1 C 25,80,27,24,70,26,59 a 0.5\",\"U 28 0.1 a 1\",\"U 80 0.2 bw 60 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 640 y 785 bh 60 t -1\",\"U 80 1 sx 1 ~ sy 1 ~\"]}\n",
    "KEY_FRAME 22\n{\"entitymodule\":[\"C S\",\"U 28 0.1 C 72,81,31,30,32,29 a 0.5\",\"U 38 0.1 a 1\",\"U 81 0.2 bw 60 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 960 y 295 bh 60 t -2\",\"U 81 1 sx 1 ~ sy 1 ~\"]}\n",
    "KEY_FRAME 23\n{\"entitymodule\":[\"C S\",\"C S\",\"U 18 0.1 a 1\",\"U 83 0.2 bw 256 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 960 y 860 bh 256 t -1\",\"U 82 0.2 bw 60 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 885 y 860 bh 60 t -1\",\"U 8 1 C 10,65,12,9,79,83,11\",\"U 38 1 v false C 41,61,71,67,77,39,69,42,66,82,40\",\"U 82 1 sx 1 ~ sy 1 ~\",\"U 83 1 sx 1 ~ sy 1 ~\"]}\n",
    "KEY_FRAME 24\n{\"entitymodule\":[\"C S\",\"U 43 0.1 a 1\",\"U 23 0.1 a 1\",\"U 13 0.1 a 1\",\"U 28 0.1 a 1\",\"U 18 0.1 C 22,19,84,20,21\",\"U 33 0.1 a 1\",\"U 84 0.2 bw 60 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 715 y 615 bh 60 t -2\",\"U 84 1 sx 1 ~ sy 1 ~\"]}\n",
    "KEY_FRAME 25\n{\"entitymodule\":[\"C S\",\"U 28 0.1 C 72,81,85,31,30,32,29\",\"U 85 0.2 bw 60 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 1035 y 220 bh 60 t -1\",\"U 85 1 sx 1 ~ sy 1 ~\"]}\n",
    "KEY_FRAME 26\n{\"entitymodule\":[\"C S\",\"C S\",\"U 23 0.1 v false C 25,86,80,27,24,70,26,59\",\"U 86 0.2 bw 60 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 565 y 935 bh 60 t -2\",\"U 87 0.2 bw 256 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 640 y 860 bh 256 t -2\",\"U 8 1 C 10,65,87,12,9,79,83,11\",\"U 86 1 sx 1 ~ sy 1 ~\",\"U 87 1 sx 1 ~ sy 1 ~\"]}\n",
    "KEY_FRAME 27\n{\"entitymodule\":[\"C S\",\"U 43 0.1 a 0.5\",\"U 13 0.1 a 0.5\",\"U 28 0.1 a 0.5\",\"U 18 0.1 C 22,88,19,84,20,21 a 0.5\",\"U 88 0.2 bw 60 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 640 y 540 bh 60 t -1\",\"U 88 1 sx 1 ~ sy 1 ~\"]}\n",
    "KEY_FRAME 28\n{\"entitymodule\":[\"C S\",\"C S\",\"U 43 0.1 a 1\",\"U 13 0.1 a 1\",\"U 28 0.1 a 1\",\"U 18 0.1 a 1\",\"U 33 0.1 v false C 34,36,89,35,63,37,75,68\",\"U 89 0.2 bw 60 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 885 y 615 bh 60 t -2\",\"U 90 0.2 bw 256 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 960 y 540 bh 256 t -2\",\"U 8 1 C 10,65,87,12,90,9,79,83,11\",\"U 90 1 sx 1 ~ sy 1 ~\",\"U 89 1 sx 1 ~ sy 1 ~\"]}\n",
    "KEY_FRAME 29\n{\"entitymodule\":[\"C S\",\"U 13 0.1 C 17,15,73,16,14,91\",\"U 91 0.2 bw 60 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 565 y 295 bh 60 t -1\",\"U 91 1 sx 1 ~ sy 1 ~\"]}\n",
    "KEY_FRAME 30\n{\"entitymodule\":[\"C S\",\"U 18 0.1 C 22,88,19,84,20,92,21\",\"U 92 0.2 bw 60 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 640 y 615 bh 60 t -2\",\"U 92 1 sx 1 ~ sy 1 ~\"]}\n",
    "KEY_FRAME 31\n{\"entitymodule\":[\"C S\",\"U 43 0.1 a 0.5\",\"U 13 0.1 C 17,93,15,73,16,14,91\",\"U 28 0.1 a 0.5\",\"U 18 0.1 a 0.5\",\"U 93 0.2 bw 60 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 565 y 145 bh 60 t -1\",\"U 93 1 sx 1 ~ sy 1 ~\"]}\n",
    "KEY_FRAME 32\n{\"entitymodule\":[\"C S\",\"U 43 0.1 a 1\",\"U 13 0.1 C 17,93,15,73,16,14,91,94\",\"U 28 0.1 a 1\",\"U 18 0.1 a 1\",\"U 94 0.2 bw 60 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 715 y 295 bh 60 t -2\",\"U 94 1 sx 1 ~ sy 1 ~\"]}\n",
    "KEY_FRAME 33\n{\"entitymodule\":[\"C S\",\"U 43 0.1 C 44,46,47,95,45\",\"U 95 0.2 bw 60 sx 0 i cross.png ay 0.5 sy 0 ax 0.5 x 1280 y 295 bh 60 t -1\",\"U 95 1 sx 1 ~ sy 1 ~\"]}\n",
    "KEY_FRAME 34\n{\"entitymodule\":[\"C S\",\"C S\",\"U 18 0.1 v false C 22,88,19,84,20,92,96,21\",\"U 96 0.2 bw 60 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 565 y 615 bh 60 t -2\",\"U 97 0.2 bw 256 sx 0 i circle.png ay 0.5 sy 0 ax 0.5 x 640 y 540 bh 256 t -2\",\"U 8 1 C 10,65,87,12,90,9,79,83,11,97\",\"U 97 1 sx 1 ~ sy 1 ~\",\"U 96 1 sx 1 ~ sy 1 ~\",\"U 4 1 a 0.3\"]}\n"
  ]
};

export const modules = [
	GraphicEntityModule
];
