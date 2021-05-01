controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(tiles.tileIsWall(tiles.locationInDirection(tiles.locationOfSprite(playerSprite), CollisionDirection.Top)))) {
        playerSprite.y += 0 - tiles.tileWidth()
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(tiles.tileIsWall(tiles.locationInDirection(tiles.locationOfSprite(playerSprite), CollisionDirection.Left)))) {
        playerSprite.x += 0 - tiles.tileWidth()
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(tiles.tileIsWall(tiles.locationInDirection(tiles.locationOfSprite(playerSprite), CollisionDirection.Right)))) {
        playerSprite.x += tiles.tileWidth()
    }
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(tiles.tileIsWall(tiles.locationInDirection(tiles.locationOfSprite(playerSprite), CollisionDirection.Bottom)))) {
        playerSprite.y += tiles.tileWidth()
    }
})
let playerSprite: Sprite = null
tiles.loadMap(tiles.createMap(tilemap`level0`))
playerSprite = sprites.create(assets.image`Player`, SpriteKind.Player)
tiles.placeOnRandomTile(playerSprite, sprites.dungeon.stairSouth)
scene.cameraFollowSprite(playerSprite)
