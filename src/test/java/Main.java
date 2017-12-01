import com.codingame.gameengine.core.Game;

public class Main {
    public static void main(String[] args) {
        Game game = new Game();
        game.addJavaPlayer(Player1.class);
        game.addJavaPlayer(Player2.class);
        game.start();
    }
}
