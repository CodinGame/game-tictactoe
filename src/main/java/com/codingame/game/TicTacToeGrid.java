package com.codingame.game;

import java.util.ArrayList;
import java.util.List;

import com.codingame.gameengine.module.entities.Curve;
import com.codingame.gameengine.module.entities.GraphicEntityModule;
import com.codingame.gameengine.module.entities.Group;
import com.codingame.gameengine.module.entities.Line;
import com.codingame.gameengine.module.entities.Sprite;
import com.google.inject.Inject;

public class TicTacToeGrid {
    @Inject private GraphicEntityModule graphicEntityModule;

    private String[] images = { "cross.png", "circle.png" };

    private Group entity;

    private int origX;
    private int origY;
    private int cellSize;
    private int[][] grid = new int[3][3];
    protected int winner = 0;

    public List<Action> getValidActions() {
        List<Action> validActions = new ArrayList<>();
        if (winner == 0) {
            for (int x = 0; x < 3; x++) {
                for (int y = 0; y < 3; y++) {
                    if (grid[x][y] == 0) {
                        validActions.add(new Action(null, x, y));
                    }
                }
            }
        }
        return validActions;
    }

    public int play(Action action) throws InvalidAction {
        if (action.row < 0 || action.row >= 3 || action.col < 0 || action.col >= 3 || grid[action.row][action.col] != 0) {
            throw new InvalidAction("Invalid move!");
        }

        // update grid
        grid[action.row][action.col] = action.player.getIndex() + 1;

        winner = checkWinner();
        drawPlay(action);
        return winner;
    }

    private int checkWinner() {
        for (int i = 0; i < 3; i++) {
            // check rows
            if (grid[i][0] > 0 && grid[i][0] == grid[i][1] && grid[i][0] == grid[i][2]) {
                return grid[i][0];
            }

            // check cols
            if (grid[0][i] > 0 && grid[0][i] == grid[1][i] && grid[0][i] == grid[2][i]) {
                return grid[0][i];
            }
        }

        // check diags
        if (grid[0][0] > 0 && grid[0][0] == grid[1][1] && grid[0][0] == grid[2][2]) {
            return grid[0][0];
        }
        if (grid[2][0] > 0 && grid[2][0] == grid[1][1] && grid[2][0] == grid[0][2]) {
            return grid[2][0];
        }

        return 0;
    }

    public void draw(int origX, int origY, int cellSize, int lineWidth, int lineColor) {
        this.origX = origX;
        this.origY = origY;
        this.cellSize = cellSize;
        this.entity = graphicEntityModule.createGroup();

        double xs[] = new double[] { 0, 0, 1, 2 };
        double x2s[] = new double[] { 2, 2, 0, 1 };
        double ys[] = new double[] { 1, 2, 0, 0 };
        double y2s[] = new double[] { 0, 1, 2, 2 };

        for (int i = 0; i < 4; ++i) {
            Line line = graphicEntityModule.createLine()
                .setX(convert(origX, cellSize, xs[i] - 0.5))
                .setX2(convert(origX, cellSize, x2s[i] + 0.5))
                .setY(convert(origY, cellSize, ys[i] - 0.5))
                .setY2(convert(origY, cellSize, y2s[i] + 0.5))
                .setLineWidth(lineWidth)
                .setLineColor(lineColor);
            entity.add(line);
        }
    }

    public void drawPlay(Action action) {
        Sprite avatar = graphicEntityModule.createSprite()
            .setX(convert(origX, cellSize, action.col))
            .setY(convert(origY, cellSize, action.row))
            .setImage(images[action.player.getIndex()])
            .setBaseWidth((int) (0.8 * cellSize))
            .setBaseHeight((int) (0.8 * cellSize))
            .setTint(action.player.getColorToken())
            .setAnchor(0.5);

        // Animate arrival
        avatar.setScale(0);
        graphicEntityModule.commitEntityState(0.2, avatar);
        avatar.setScale(1, Curve.ELASTIC);
        graphicEntityModule.commitEntityState(1, avatar);

        this.entity.add(avatar);
    }

    private int convert(int orig, int cellSize, double unit) {
        return (int) (orig + unit * cellSize);
    }

    public void hide() {
        this.entity.setAlpha(0);
    }

    public void activate() {
        this.entity.setAlpha(1, Curve.NONE);
        graphicEntityModule.commitEntityState(1, entity);
    }

    public void deactivate() {
        if (winner == 0) {
            this.entity.setAlpha(0.5, Curve.NONE);
            graphicEntityModule.commitEntityState(1, entity);
        }
    }
}