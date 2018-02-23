package com.codingame.game;

import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

import com.codingame.gameengine.core.AbstractPlayer.TimeoutException;
import com.codingame.gameengine.core.AbstractReferee;
import com.codingame.gameengine.core.GameManager;
import com.codingame.gameengine.module.entities.GraphicEntityModule;
import com.codingame.gameengine.module.entities.Sprite;
import com.codingame.gameengine.module.entities.Text;
import com.google.inject.Inject;
import com.google.inject.Provider;

public class Referee extends AbstractReferee {
    @Inject private GameManager<Player> gameManager;
    @Inject private GraphicEntityModule graphicEntityModule;
    @Inject private Provider<TicTacToeGrid> ticTacToeGridProvider;

    TicTacToeGrid masterGrid;
    TicTacToeGrid[][] smallGrids;
    private Action lastAction = null;
    private List<Action> validActions;
    
    @Override
    public Properties init(Properties params) {
        graphicEntityModule.createSprite()
                .setImage("Background.jpg")
                .setAnchor(0);

        drawHud();
        drawGrids();

        gameManager.setFrameDuration(600);

        if (gameManager.getLeagueLevel() == 1) {
            gameManager.setMaxTurns(9);
        } else {
            gameManager.setMaxTurns(9 * 9);
        }
        
        validActions = getValidActions();

        return params;
    }

    private void drawGrids() {
        int bigCellSize = 320;
        int bigOrigX = (int) Math.round(1920 / 2 - bigCellSize);
        int bigOrigY = (int) Math.round(1080 / 2 - bigCellSize);
        masterGrid = ticTacToeGridProvider.get();
        masterGrid.draw(bigOrigX, bigOrigY, bigCellSize, 5, 0xffffff);

        if (gameManager.getLeagueLevel() == 2) {
            smallGrids = new TicTacToeGrid[3][3];
            
            for (int i = 0; i < 3; i++) {
                for (int j = 0; j < 3; j++) {
                    int cellSize = 75;
                    int origX = bigOrigX + bigCellSize * i - cellSize;
                    int origY = bigOrigY + bigCellSize * j - cellSize;
                    smallGrids[j][i] = ticTacToeGridProvider.get();
                    smallGrids[j][i].draw(origX, origY, cellSize, 2, 0xeeeeee);
                }
            }
        }
    }
    
    private void drawHud() {
        for (Player player : gameManager.getPlayers()) {
            Text text = graphicEntityModule.createText(player.getNicknameToken())
                    .setX(180 + (player.getIndex() % 2) * 1400)
                    .setY(65 + 100 * (player.getIndex() / 2))
                    .setZIndex(20)
                    .setFontSize(50)
                    .setFillColor(player.getColorToken())
                    .setAnchor(0);

            Sprite avatar = graphicEntityModule.createSprite()
                    .setX(100 + (player.getIndex() % 2) * 1400)
                    .setY(90 + 100 * (player.getIndex() / 2))
                    .setZIndex(20)
                    .setImage(player.getAvatarToken())
                    .setAnchor(0.5)
                    .setBaseHeight(116)
                    .setBaseWidth(116);

            player.hud = graphicEntityModule.createGroup(text, avatar);
        }
    }

    private void sendInputs(Player player, List<Action> validActions) {
        // last action
        if (lastAction != null) {
            player.sendInputLine(lastAction.toString());
        } else {
            player.sendInputLine("-1 -1");
        }

        // valid actions
        player.sendInputLine(Integer.toString(validActions.size()));
        for (Action action : validActions) {
            player.sendInputLine(action.toString());    
        }
    }

    private void setWinner(Player player) {
        gameManager.addToGameSummary(GameManager.formatSuccessMessage(player.getNicknameToken() + " won!"));
        player.setScore(10);
        endGame();
    }

    private List<Action> getValidActions() {
        List<Action> validActions;
        if (gameManager.getLeagueLevel() == 1) {
            validActions = masterGrid.getValidActions();
        } else {
            validActions = new ArrayList<>();

            for (int row = 0; row < 3; row++) {
                for (int col = 0; col < 3; col++) {
                    smallGrids[row][col].deactivate();
                }
            }
            
            if (lastAction != null) {
                TicTacToeGrid grid = smallGrids[lastAction.row % 3][lastAction.col % 3];
                for (Action action : grid.getValidActions()) {
                    validActions.add(new Action(null, (lastAction.row % 3) * 3 + action.row, (lastAction.col % 3) * 3 + action.col));
                }
                grid.activate();
            }
            if (validActions.isEmpty()) {
                for (int row = 0; row < 3; row++) {
                    for (int col = 0; col < 3; col++) {
                        TicTacToeGrid grid = smallGrids[row][col];
                        grid.activate();
                        for (Action action : grid.getValidActions()) {
                            validActions.add(new Action(null, row * 3 + action.row, col * 3 + action.col));
                        }
                    }
                }
            }
        }
        return validActions;
    }

    @Override
    public void gameTurn(int turn) {
        Player player = gameManager.getPlayer(turn % gameManager.getPlayerCount());
        
        sendInputs(player, validActions);
        player.execute();

        // Read inputs
        try {
            final Action action = player.getAction();
            gameManager.addToGameSummary(String.format("Player %s played (%d %d)", action.player.getNicknameToken(), action.row, action.col));

            if (!validActions.contains(action)) {
                throw new InvalidAction("Invalid action.");
            }

            lastAction = action;

            final TicTacToeGrid grid;
            if (gameManager.getLeagueLevel() == 1) {
                int winner = masterGrid.play(action);
                if (winner > 0) {
                    setWinner(player);
                }
            } else {
                grid = smallGrids[action.row / 3][action.col / 3];
                if (grid.play(new Action(action.player, action.row % 3, action.col % 3)) > 0) {
                    player.setScore(player.getScore() + 1);
                    gameManager.addTooltip(player, "Won one cell");
                    grid.hide();
                    if (masterGrid.play(new Action(action.player, action.row / 3, action.col / 3)) > 0) {
                        setWinner(player);
                    }
                }
            }

            validActions = getValidActions();
            if (validActions.isEmpty()) {
                endGame();
            }
        } catch (NumberFormatException e) {
            player.deactivate("Wrong output!");
            player.setScore(-1);
            endGame();
        } catch (TimeoutException e) {
            gameManager.addToGameSummary(GameManager.formatErrorMessage(player.getNicknameToken() + " timeout!"));
            player.deactivate(player.getNicknameToken() + " timeout!");
            player.setScore(-1);
            endGame();
        } catch (InvalidAction e) {
            player.deactivate(e.getMessage());
            player.setScore(-1);
            endGame();
        }
    }

    private void endGame() {
        gameManager.endGame();

        Player p0 = gameManager.getPlayers().get(0);
        Player p1 = gameManager.getPlayers().get(1);
        if (p0.getScore() > p1.getScore()) {
            p1.hud.setAlpha(0.3);
        }
        if (p0.getScore() < p1.getScore()) {
            p0.hud.setAlpha(0.3);
        }
    }
}
