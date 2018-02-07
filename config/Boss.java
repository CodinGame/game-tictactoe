import java.util.Random;
import java.util.Scanner;

class Player {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int myId = scanner.nextInt();
        int[][] grid = new int[3][3];
        Random random = new Random();

        while (true) {
            for (int r = 0; r < 3; r++) {
                for (int c = 0; c < 3; c++) {
                    grid[r][c] = scanner.nextInt();
                }
            }

            int r, c;
            do {
                r = random.nextInt(3);
                c = random.nextInt(3);
            } while (grid[r][c] != 0);

            System.out.println(String.format("%d %d", r, c));
        }
    }
}
