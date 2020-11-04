info.onCountdownEnd(function () {
    info.setScore(info.life())
    game.over(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    mySprite.startEffect(effects.fire, 200)
    music.pewPew.play()
    info.changeLifeBy(-1)
})
info.onLifeZero(function () {
    mySprite.destroy()
    game.over(false, effects.dissolve)
    info.setScore(info.life())
})
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(11)
mySprite = sprites.create(img`
    e e e . . . . e e e . . . . 
    c d d c . . c d d c . . . . 
    c b d b b c b d b c . . . . 
    c 3 b d d d d b 3 c . . . . 
    f b 3 d b b d 3 b f . . . . 
    e d d d d d d d d e . . . . 
    e d f d d d d f d e . b f b 
    f d d f d d f d d f . f d f 
    f b d d b b d d 2 f . f d f 
    . f 2 2 2 2 2 2 b b f f d f 
    . f b d d d d d d b b d b f 
    . f d d d d d b d d f f f . 
    . f d f f f d f f d f . . . 
    . f f . . f f . . f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(1000)
info.setScore(0)
info.startCountdown(60)
game.onUpdateInterval(800, function () {
    projectile = sprites.createProjectileFromSide(img`
        . . c c c . . . . c c c . . . . 
        . c f f f c . . c f f f c . . . 
        c f f f f f c c f f f f f c . . 
        c f f c c f f f f c c f f c . . 
        c f c c f f f f f f c c f c . . 
        . c c f f f f f f f f c c . . . 
        . . c f 2 f f f f 2 f c . . . . 
        . . f f f f b b f f f f . . f f 
        . . f c f f f f f f c f . f f f 
        . . . f c c c c c c c c f f f f 
        . . . f c f f f f f f c c f f . 
        . . . f f f f f f c f f f f . . 
        . . . f f f f f f f f f f . . . 
        . . . f f . . f f . . f f . . . 
        `, randint(-50, 50), randint(-50, 50))
    projectile.startEffect(effects.halo)
})
