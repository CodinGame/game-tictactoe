import java.util.Random;
import java.util.Scanner;

public class Player2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int myId = scanner.nextInt();
        int[][] grid = new int[3][3];
        Random r = new Random();

        while (true) {
            for (int l = 0; l < 3; l++) {
                for (int c = 0; c < 3; c++) {
                    grid[c][l] = scanner.nextInt();
                }
            }
            System.out.println(String.format("%d %d", r.nextInt(3), r.nextInt(3)));
        }
    }
}
