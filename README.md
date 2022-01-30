![logo](docs/PSlogo.png)

# PokerScript
Compiler for the language PokerScript 


## The language PokerScript

The usage of the PokerScript language is meant to mimic the language and terms that poker players uses when they are on the poker table.  

PokerScript is brought to you by [Evan Sciancalepore](https://github.com/evanscianc "Evan's Github"),
[Naradahana Utoro Dewo](https://github.com/naratheman "Nara's Github"), [Marvin Pramana](https://github.com/mpramana "Marvin's Github"), [Garrett](https://github.com/gmarzo "Garrett's Github") and [Warren Binder](https://github.com/wbinder1 "Warren's Github").

## Features
- Static typing?

## Types

| JavaScript | PokerScript.                                                                                       |
| ---------- | -------------------------------------------------------------------------------------------------- |
| string     | stringbet                                                                                          |
| number     | numberedcards                                                                                      |
| const      | constantpressure                                                                                   |
| bool       | playingontilt                                                                                      |

## Built In Functions

| JavaScript                      | PokerScript                                |
| ----------------------------    | ------------------------------------------ |
| console.log(“Place your bets”); | reveal “Place your bets” “place your bets” |

## Variable Declaration and Assignment

| JavaScript                               | PokerScript                                       |
| ---------------------------------------- | ------------------------------------------------  |
| let x = 5;                               | numberedcards x: 5                                |
| let y = “hello!”;                        | stringbet y: “hello!”                             |
| let z = 100.52;                          | stringbets z: 100.52                              |
| let t = true;                            | playingontilt t: hit                              |
| let f = false;                           | playingontilt f: miss                             |
| const name = “I should be winning more”; | constantpressure name: “I should be winning more” |


## Arithmetic

- sum = 
- difference = 
- multiplication = 
- integer division = 
- float division = 
- exponents = 
- modulus = 

## Keywords

| PokerScript                  | Traditional |
| ---------------------------- | ----------- |
| fold                         | break       |
| miss                         | false       |
| hit                          | true        |
| gamebreak                    | break       |
| straddle                     | function    |
| excuses                      | if          |
| followingexcuses             | else if     |
|                              | else        |
|                              | switch      |
|                              | case        |
|                              | default     |
|                              | void        |
|                              | for         |
|                              | async       |
|                              | print       |
| redeal                       | return      |
| deal                         | var         |


## Control Flow 

### If Statements

```
excuses x == 0 $
  redeal hit
 followingexcuses $
  redeal miss
 $
``` 

### While Loops 

### For Loops 

### For Loops with Spread

## Comments

In Poker, it's rude to comment on the way people play. Hence, 
Single line comments are marked with `rude` and multiline comments are marked with `rude/` at the beginning and `/rude` at the end.

```
rude this is a single line comment

rude/
this is a multiline comment
/rude
```

## Examples Programs

### **JavaScript** on the left; **PokerScript** on the right.


Function Decleration
@JavaScript                                   @PokerScript
```
function add (a, b) {                         straddle add (a, b) $
    return a + b;                                   cashout a + b
}	                                            $                                             
```    



