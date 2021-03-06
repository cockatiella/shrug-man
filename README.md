# shrug-man
# Shrugman

## How does it work?

One player, makes up a secret word or phrase (we will use movie titles), while the other player tries to guess the word by asking what letters it contains.
However, every wrong guess brings them one step closer to losing.
To indicate how many attempts are left, instead of the usual hanging man drawing, we draw the shrug emoji. It consists of exactly 10 characters:

```bash
¯\_(:/)_/¯
```

Every wrong guess, draws one more piece of the emoji.
If the user has already guessed this letter once, ask them for another letter, instead of couting it as a wrong guess.

The secret movie title is displayed masked - every character except spaces is represented by an underscore `_`. With every correct guess, all ocurrences of the letter are revealed.

Once the game is over, print a list of all games played, and whether they were a win or a loss:

## Example

Take a look at the example:

![example loss](./shrugman.png)

---

## Created by:

@cockatiella - https://github.com/cockatiella


