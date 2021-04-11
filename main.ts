controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart = darts.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . e e . . . . . . . . . 
        . . . . . . . e . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f 1 f f 1 f f . . . . 
        . . . . f f f 1 1 f f f . . . . 
        . . . . f f 1 f f 1 f f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Projectile, mySprite.x, mySprite.y)
    myDart.throwDart()
    music.pewPew.play()
})
info.onLifeZero(function () {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.fire, 100)
    mySprite2 = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f e e f f f . . . . 
        . . . f f f e e e e f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e e e e e e e e e f . . 
        . . f e e f f f f f f e e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f 7 f b 7 f 7 f e f f . 
        . f e e 7 7 f 7 7 f b 7 e e f . 
        . . f e e b 7 7 7 7 7 e e f . . 
        . . . f e e 7 f f b e e f . . . 
        . . 7 b f 9 9 9 9 9 9 f 7 b . . 
        . . b 7 f 9 9 9 9 9 9 f b 7 . . 
        . . 7 7 f 9 9 9 9 9 9 f 7 b . . 
        . . . . . a a a a a a . . . . . 
        . . . . . a a . . a a . . . . . 
        `, SpriteKind.Enemy)
    mySprite2.setPosition(randint(0, 140), randint(0, 160))
    info.changeScoreBy(1)
    if (info.score() == 10) {
        tiles.setTilemap(tilemap`level2`)
    }
    if (info.score() == 20) {
        tiles.setTilemap(tilemap`level3`)
    }
    if (info.score() == 30) {
        tiles.setTilemap(tilemap`level4`)
    }
    if (info.score() == 40) {
        tiles.setTilemap(tilemap`level5`)
    }
    if (info.score() == 50) {
        tiles.setTilemap(tilemap`level6`)
    }
    if (info.score() == 60) {
        game.over(true)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    pause(1000)
})
let myDart: Dart = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
game.setDialogFrame(img`
    ...cc......................cc....
    ..c55c..bbbb...bbbbb......c55c...
    .cb55bcbdddbbbbbdddbbbbbbcb55bc..
    b555555bbdddb111bdddb11db555555b.
    bb5555bbdbdb11111bdb1111bb5555bb.
    cb5555bcddd11111ddd11111cb5555bc.
    .c5bb5c1111d111d111d111ddc5bb5c..
    .cbbbbc111111111111111111cbbbbc..
    ..b11111111111111111111111d111bb.
    ..b111111111111111111111111d1bdb.
    ..bb11111111111111111111111dbddb.
    .bbdb1d11111111111111111111ddddb.
    .bdddd11111111111111111111d1bdbb.
    .bddbd11111111111111111111111bb..
    .bdb1d111111111111111111111111b..
    .bb111d11111111111111111111111b..
    ..b11111111111111111111111d111bb.
    ..b111111111111111111111111d1bdb.
    ..bb11111111111111111111111dbddb.
    .bbdb1d11111111111111111111ddddb.
    .bdddd11111111111111111111d1bdbb.
    .bddbd11111111111111111111111bb..
    .bdbb1111111111111111111111111b..
    .bbbd1111111111111111111111111b..
    ..bcc111111111111111111111dccdb..
    ..c55c111d111d111d111d1111c55cb..
    .cb55bcdd11111ddd11111dddcb55bc..
    b555555b11111bdb11111bdbb555555b.
    bb5555bbb111bdddb111bdddbb5555bb.
    cb5555bcdbbbbbdddbbbbbddcb5555bc.
    .c5bb5c.bb...bbbbb...bbbbc5bb5c..
    .cbbbbc..................cbbbbc..
    .................................
    `)
scene.setBackgroundColor(9)
game.showLongText("fallout", DialogLayout.Bottom)
mySprite = sprites.create(img`
    . . . . f f f f . . . . 
    . . f f f f f f f f . . 
    . f f f f f f f f f f . 
    f f f f f f f f f f f f 
    f f f f f f f f f f f f 
    f f f f f f f f f f f f 
    f d d f f f f f f d d f 
    f d d 1 1 f f 1 1 d d f 
    f d d f f f f f f d d f 
    . f d f f f f f f d f . 
    . f f f d d d d f f f . 
    1 1 f d f d d f d f 1 1 
    1 1 f d d f f d d f 1 1 
    1 1 f f f d d f f f 1 1 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`level1`)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
mySprite2 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f e e f f f . . . . 
    . . . f f f e e e e f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e e e e e e e e e f . . 
    . . f e e f f f f f f e e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f 7 f b 7 f 7 f e f f . 
    . f e e 7 7 f 7 7 f b 7 e e f . 
    . . f e e b 7 7 7 7 7 e e f . . 
    . . . f e e 7 f f b e e f . . . 
    . . 7 b f 9 9 9 9 9 9 f 7 b . . 
    . . b 7 f 9 9 9 9 9 9 f b 7 . . 
    . . 7 7 f 9 9 9 9 9 9 f 7 b . . 
    . . . . . a a a a a a . . . . . 
    . . . . . a a . . a a . . . . . 
    `, SpriteKind.Enemy)
info.setLife(5)
mySprite.setPosition(5, 15)
forever(function () {
    while (true) {
        pause(1000)
        mySprite2.x = mySprite2.x + 10
    }
})
forever(function () {
    mySprite2.setFlag(SpriteFlag.StayInScreen, true)
    mySprite2.setFlag(SpriteFlag.BounceOnWall, true)
})
