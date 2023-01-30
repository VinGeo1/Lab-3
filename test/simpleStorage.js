const SimpleStorage = artifacts.require("SimpleStorage") 

contract('SimpleStorage', (accounts) => {
	        //Two test case
		const [Vineeth, Amanda] = accounts
		const amount = 0;
		it("Verify Vineeth and Amanda's favorite numbers default to 0", async () => {
					const ssContract = await SimpleStorage.deployed()
					const VineethNum = await ssContract.favoriteNumbers.call(Vineeth)
					assert.equal(VineethNum, amount,"Vineeth's default value was non-zero")
					
					const AmandaNum = await ssContract.favoriteNumbers.call(Amanda)
					assert.equal(AmandaNum, amount,"Amanda's default value was non-zero")
				})
                const amount1 = 99;
	        const amount2 = 45;
		it("Set Vineeth's favorite number to 99", async () => {
					const ssContract = await SimpleStorage.deployed()
					ssContract.setFavorite(amount1, {from: Vineeth})
					const newVineethNum = await ssContract.favoriteNumbers.call(Vineeth)
					assert.equal(newVineethNum,amount2,Vineeth's new value was not 99")
				})
})
