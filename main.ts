controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    timer.throttle("playerAction", actionInterval, function () {
        if (!(tiles.tileIsWall(tiles.locationInDirection(tiles.locationOfSprite(playerSprite), CollisionDirection.Top)))) {
            playerSprite.y += 0 - tiles.tileWidth()
        }
    })
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    timer.throttle("playerAction", actionInterval, function () {
        if (!(tiles.tileIsWall(tiles.locationInDirection(tiles.locationOfSprite(playerSprite), CollisionDirection.Left)))) {
            playerSprite.x += 0 - tiles.tileWidth()
        }
    })
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    timer.throttle("playerAction", actionInterval, function () {
        if (!(tiles.tileIsWall(tiles.locationInDirection(tiles.locationOfSprite(playerSprite), CollisionDirection.Right)))) {
            playerSprite.x += tiles.tileWidth()
        }
    })
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    timer.throttle("playerAction", actionInterval, function () {
        if (!(tiles.tileIsWall(tiles.locationInDirection(tiles.locationOfSprite(playerSprite), CollisionDirection.Bottom)))) {
            playerSprite.y += tiles.tileWidth()
        }
    })
})
let playerSprite: Sprite = null
let actionInterval = 0
actionInterval = 1000
tiles.loadMap(tiles.createMap(tilemap`level0`))
playerSprite = sprites.create(assets.image`Player`, SpriteKind.Player)
tiles.placeOnRandomTile(playerSprite, sprites.dungeon.stairSouth)
scene.cameraFollowSprite(playerSprite)
