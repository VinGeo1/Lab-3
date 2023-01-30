const SimpleStorage = artifacts.require("SimpleStorage") 

contract('SimpleStorage', (accounts) => {
		const [Vineeth, Amanda] = accounts
		it("Verify Vineeth and Amanda's favorite numbers default to 0", async () => {
					const ssContract = await SimpleStorage.deployed()
					const VineethNum = await ssContract.favoriteNumbers.call(Vineeth)
					assert.equal(VineethNum, 0,
									"Vineeth's default value was non-zero")
					
					const AmandaNum = await ssContract.favoriteNumbers.call(Amanda)
					assert.equal(AmandaNum, 0,
									"Amanda's default value was non-zero")
				})

		it("Set Vineeth's favorite number to 99", async () => {
					const ssContract = await SimpleStorage.deployed()
					ssContract.setFavorite(99, {from: Vineeth})
					const newVineethNum = await ssContract.favoriteNumbers.call(Vineeth)
					assert.equal(newVineethNum, 45,
									"Vineeth's new value was not 99")
				})
})
