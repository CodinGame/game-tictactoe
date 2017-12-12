import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import com.codingame.gameengine.core.AbstractPlayer;
import com.codingame.gameengine.core.AbstractPlayer.TimeoutException;
import com.codingame.gameengine.core.GameManager;
import com.codingame.gameengine.core.Referee;
import com.codingame.gameengine.module.entities.EntityManager;
import com.google.inject.Inject;

class TicTacToePlayer extends AbstractPlayer {
    @Override
    public int getExpectedOutputLines() {
        return 1;
    }
}

public class TicTacToeReferee implements Referee {
    @Inject private GameManager<TicTacToePlayer> gameManager;
    @Inject private EntityManager entityManager;
    private int[][] grid = new int[3][3];

    private static final int SPACE_BETWEEN_CELLS = 250;
    private static final int LINE_WIDTH = 10;
    private static final int LINE_COLOR = 0xff0000;
    private static final int GRID_ORIGIN_Y = (int) Math.round(1080 / 2 - SPACE_BETWEEN_CELLS);
    private static final int GRID_ORIGIN_X = (int) Math.round(1920 / 2 - SPACE_BETWEEN_CELLS);

    @Override
    public Properties init(int playerCount, Properties params) {

        for (TicTacToePlayer player : gameManager.getPlayers()) {
            player.sendInputLine(String.format("%d", player.getIndex() + 1));
            entityManager.createText(player.getNickname())
                    .setX(100)
                    .setY(200 + 100 * player.getIndex())
                    .setZIndex(20)
                    .setFontSize(90)
                    .setFillColor(player.getColor());

        }

        gameManager.setFrameDuration(500);

        drawGrid();

        return params;
    }

    private void drawGrid() {
        entityManager.createLine().setX(GRID_ORIGIN_X - SPACE_BETWEEN_CELLS / 2)
                .setX2(GRID_ORIGIN_X + SPACE_BETWEEN_CELLS * 2 + SPACE_BETWEEN_CELLS / 2)
                .setY(GRID_ORIGIN_Y + SPACE_BETWEEN_CELLS / 2).setY2(GRID_ORIGIN_Y + SPACE_BETWEEN_CELLS / 2)
                .setLineWidth(LINE_WIDTH).setLineColor(LINE_COLOR);
        entityManager.createLine().setX(GRID_ORIGIN_X - SPACE_BETWEEN_CELLS / 2)
                .setX2(GRID_ORIGIN_X + SPACE_BETWEEN_CELLS * 2 + SPACE_BETWEEN_CELLS / 2)
                .setY(GRID_ORIGIN_Y + SPACE_BETWEEN_CELLS + SPACE_BETWEEN_CELLS / 2)
                .setY2(GRID_ORIGIN_Y + SPACE_BETWEEN_CELLS + SPACE_BETWEEN_CELLS / 2)
                .setLineWidth(LINE_WIDTH).setLineColor(LINE_COLOR);

        entityManager.createLine().setX(GRID_ORIGIN_X + SPACE_BETWEEN_CELLS / 2).setX2(GRID_ORIGIN_X + SPACE_BETWEEN_CELLS / 2)
                .setY(GRID_ORIGIN_Y - SPACE_BETWEEN_CELLS / 2).setY2(GRID_ORIGIN_Y + SPACE_BETWEEN_CELLS * 2 + SPACE_BETWEEN_CELLS / 2)
                .setLineWidth(LINE_WIDTH).setLineColor(LINE_COLOR);
        entityManager.createLine().setX(GRID_ORIGIN_X + SPACE_BETWEEN_CELLS + SPACE_BETWEEN_CELLS / 2)
                .setX2(GRID_ORIGIN_X + SPACE_BETWEEN_CELLS + SPACE_BETWEEN_CELLS / 2).setY(GRID_ORIGIN_Y - SPACE_BETWEEN_CELLS / 2)
                .setY2(GRID_ORIGIN_Y + SPACE_BETWEEN_CELLS * 2 + SPACE_BETWEEN_CELLS / 2)
                .setLineWidth(LINE_WIDTH)
                .setLineColor(LINE_COLOR);

    }

    private void drawVictoryLine(int row1, int col1, int row2, int col2, TicTacToePlayer winner) {

        entityManager.createLine()
                .setX(GRID_ORIGIN_X + col1 * SPACE_BETWEEN_CELLS)
                .setY(GRID_ORIGIN_Y + row1 * SPACE_BETWEEN_CELLS)
                .setX2(GRID_ORIGIN_X + col2 * SPACE_BETWEEN_CELLS)
                .setY2(GRID_ORIGIN_Y + row2 * SPACE_BETWEEN_CELLS)
                .setLineWidth(LINE_WIDTH)
                .setLineColor(winner.getColor())
                .setZIndex(30);
    }

    private int checkWinner() {
        for (int i = 0; i < 3; i++) {
            // check rows
            if (grid[i][0] > 0 && grid[i][0] == grid[i][1] && grid[i][0] == grid[i][2]) {
                drawVictoryLine(i, 0, i, 2, gameManager.getPlayer(grid[i][0] - 1));
                return grid[i][0];
            }

            // check cols
            if (grid[0][i] > 0 && grid[0][i] == grid[1][i] && grid[0][i] == grid[2][i]) {
                drawVictoryLine(0, i, 2, i, gameManager.getPlayer(grid[0][i] - 1));
                return grid[0][i];
            }
        }

        // check diags
        if (grid[0][0] > 0 && grid[0][0] == grid[1][1] && grid[0][0] == grid[2][2]) {
            drawVictoryLine(0, 0, 2, 2, gameManager.getPlayer(grid[0][0] - 1));
            return grid[0][0];
        }
        if (grid[2][0] > 0 && grid[2][0] == grid[1][1] && grid[2][0] == grid[0][2]) {
            drawVictoryLine(2, 0, 0, 2, gameManager.getPlayer(grid[1][1] - 1));
            return grid[2][0];
        }

        return 0;
    }

    @Override
    public void gameTurn(int turn) {
        List<String> gameSummary = new ArrayList<>();

        TicTacToePlayer player = gameManager.getPlayer(turn % 2);

        // Send inputs
        for (int l = 0; l < 3; l++) {
            player.sendInputLine(String.format("%d %d %d", grid[l][0], grid[l][1], grid[l][2]));
        }
        player.execute();

        // Read inputs
        try {
            String[] output = player.getOutputs().get(0).split(" ");
            int targetRow = Integer.parseInt(output[0]);
            int targetCol = Integer.parseInt(output[1]);

            if (targetRow < 0 || targetRow >= 3 || targetCol < 0 || targetCol >= 3 || grid[targetRow][targetCol] != 0) {
                player.deactivate("Invalid action.");
                player.setScore(-1);
                gameManager.endGame();
            }

            gameSummary.add(String.format("Player %s played (%d %d)", player.getNickname(), targetRow, targetCol));

            // update grid
            grid[targetRow][targetCol] = player.getIndex() + 1;

            if (player.getIndex() == 1) {
                entityManager.createSprite().setX(GRID_ORIGIN_X + targetCol * SPACE_BETWEEN_CELLS)
                        .setY(GRID_ORIGIN_Y + targetRow * SPACE_BETWEEN_CELLS)
                        .setImage(player.getAvatar());

            } else {
                entityManager.createSprite().setX(GRID_ORIGIN_X + targetCol * SPACE_BETWEEN_CELLS)
                        .setY(GRID_ORIGIN_Y + targetRow * SPACE_BETWEEN_CELLS)
                        .setImage(player.getAvatar());
            }
        } catch (NumberFormatException e) {
            player.deactivate("Wrong output!");
            player.setScore(-1);
            gameManager.endGame();
        } catch (TimeoutException e) {
            gameSummary.add(GameManager.getColoredReason(true, String.format("$%d timeout!", player.getIndex())));
            player.deactivate(String.format("$%d timeout!", player.getIndex()));
            player.setScore(-1);
            gameManager.endGame();
        }

        // check winner
        int winner = checkWinner();
        if (winner > 0) {
            gameSummary.add(GameManager.getColoredReason(false, String.format("$%d won!", winner)));

            gameManager.getPlayer(winner - 1).setScore(1);
            gameManager.endGame();
        }

        // Send game state to view
        gameManager.setGameSummary(gameSummary);
    }
}
