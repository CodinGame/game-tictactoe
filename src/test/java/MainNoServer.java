import com.codingame.gameengine.runner.GameRunner;
import com.codingame.gameengine.runner.dto.GameScore;

public class MainNoServer {

    public static void main(String[] args) {
        String currentDirectory = System.getProperty("user.dir");
        String testClassesDirectory = currentDirectory + "\\target\\test-classes";
        String commandLine = "java -cp " + testClassesDirectory;
        int gameCount = 5;

        for (int i = 0; i < gameCount; i++) {
            GameRunner gameRunner = new GameRunner();

            //TODO can find player classes instead of hardcoded ones
            gameRunner.addAgent(commandLine + " Player1", "player one", "url one");
            gameRunner.addAgent(commandLine + " Player2", "player two", "url two");

            GameScore gameScore = gameRunner.getGameScore();

            if (gameScore.scores.get(0) > gameScore.scores.get(1)) {
                System.out.println("Player 1 - winner, player 2 - loser");
            } else {
                System.out.println("Player 2 - winner, player 1 - loser");
            }
        }
    }

}