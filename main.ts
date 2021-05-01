namespace SpriteKind {
    export const HUD = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(tiles.tileIsWall(tiles.locationInDirection(tiles.locationOfSprite(playerSprite), CollisionDirection.Top)))) {
        playerSprite.y += 0 - tiles.tileWidth()
        onPlayerAction()
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(tiles.tileIsWall(tiles.locationInDirection(tiles.locationOfSprite(playerSprite), CollisionDirection.Left)))) {
        playerSprite.x += 0 - tiles.tileWidth()
        onPlayerAction()
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(tiles.tileIsWall(tiles.locationInDirection(tiles.locationOfSprite(playerSprite), CollisionDirection.Right)))) {
        playerSprite.x += tiles.tileWidth()
        onPlayerAction()
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(tiles.tileIsWall(tiles.locationInDirection(tiles.locationOfSprite(playerSprite), CollisionDirection.Bottom)))) {
        playerSprite.y += tiles.tileWidth()
        onPlayerAction()
    }
})
function onPlayerAction () {
    timeSinceTick = game.runtime() % actionInterval
    timeUntilTick = actionInterval - timeSinceTick
    if (timeSinceTick > gracePeriod && timeUntilTick > gracePeriod) {
        scene.cameraShake(2, actionInterval)
    }
}
let timeUntilTick = 0
let timeSinceTick = 0
let playerSprite: Sprite = null
let gracePeriod = 0
let actionInterval = 0
actionInterval = 500
gracePeriod = 300
tiles.loadMap(tiles.createMap(tilemap`level0`))
playerSprite = sprites.create(assets.image`Player`, SpriteKind.Player)
tiles.placeOnRandomTile(playerSprite, sprites.dungeon.stairSouth)
playerSprite.y += -5
scene.cameraFollowSprite(playerSprite)
let timerSprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.HUD)
timerSprite.setFlag(SpriteFlag.RelativeToCamera, true)
timerSprite.setPosition(12, 94)
animation.runImageAnimation(
timerSprite,
assets.animation`Clock`,
actionInterval,
true
)
game.onUpdateInterval(actionInterval, function () {
    timer.background(function () {
        music.playTone(220, music.beat(BeatFraction.Eighth))
    })
})
