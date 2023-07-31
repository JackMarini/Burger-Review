/* eslint-disable no-console */
import RestaurantSeeder from "./seeders/RestaurantSeeders.js"
import BurgerSeeder from "./seeders/BurgerSeeder.js" 
import UserSeeder from "./seeders/UserSeeder.js"
import ReviewSeeder from "./seeders/ReviewSeeder.js"
import { connection } from "../boot.js"

class Seeder {
  static async seed() {
    console.log("seeding users...")
    await UserSeeder.seed()
    
    console.log("seeding restaurants...")
    await RestaurantSeeder.seed()

    console.log("seeding burgers...")
    await BurgerSeeder.seed()

    console.log("seeding reviews...")
    await ReviewSeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder