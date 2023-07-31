import { Review } from "../../models/index.js"
import { Burger } from "../../models/index.js"
import { User } from "../../models/index.js"

class ReviewSeeder {
  static async seed() {
    const donnie = await User.query().findOne({ email: "donnie@ninjaturtles.com" })
    const leo = await User.query().findOne({ email: "leo@ninjaturtles.com" })
    const mikey = await User.query().findOne({ email: "mikey@ninjaturtles.com" })
    const raph = await User.query().findOne({ email: "raph@ninjaturtles.com" })
    const email = await User.query().findOne({ email: "email@gmail.com" })
    const email1 = await User.query().findOne({ email: "email1@gmail.com" })
    const email2 = await User.query().findOne({ email: "email2@gmail.com" })
    const email3 = await User.query().findOne({ email: "email3@gmail.com" })

    const wTF = await Burger.query().findOne({ name: "WTF Burger" })
    const shack = await Burger.query().findOne({ name: "Shack Stack" })
    const chris = await Burger.query().findOne({ name: "Chris Burger" })
    const black = await Burger.query().findOne({ name: "Black & Blue Burger" })
    const blackjack = await Burger.query().findOne({ name: "Blackjack" })
    const mother = await Burger.query().findOne({ name: "The Mother Clucker" })
    const hawaii = await Burger.query().findOne({ name: "Hawaii 8.0 Burger" })

    const reviewData = [
      {
        userId: email.id,
        burgerId: black.id,
        title: "My Burger Review",
        rating: 5,
        comment: "Wow, what a great burger!"
      },
      {
        userId: email1.id,
        burgerId: wTF.id,
        title: "Uh-MAZING",
        rating: 5,
        comment: "Literally speechless"
      },
      {
        userId: email2.id,
        burgerId: chris.id,
        title: "Really pretty great",
        rating: 4,
        comment: "Could be a little juicier but overall great taste"
      },
      {
        userId: email3.id,
        burgerId: black.id,
        title: "Wutta Burger",
        rating: 5,
        comment: "What's juicy, black, and blue all over? This fantastic creation. Eat now."
      },
      {
        userId: mikey.id,
        burgerId: hawaii.id,
        title: "Cowabunga! Hang 10 Dudes!",
        rating: 5,
        comment: "Like whoa!  Rad burger, bruh!  Like a Hawaiian Pizza but like, BURGER!"
      },      
      {
        userId: donnie.id,
        burgerId: blackjack.id,
        title: "You can taste why it's a favorite.",
        rating: 5,
        comment: "It's because it's pure and simple, just like Master Splinter."
      },
      {
        userId: leo.id,
        burgerId: shack.id,
        title: "Elevated Fast Food",
        rating: 5,
        comment: "A great burger for human kind"
      },
      {
        userId: raph.id,
        burgerId: mother.id,
        title: "Breakfast or Burger",
        rating: 3,
        comment: "I thought this was going to be a chicken burger, but mostly eggs and bacon."
      },
    ]

    for (const reviewObject of reviewData) {
      const currentReview = await Review.query().findOne({ title: reviewObject.title })

      if (!currentReview) {
        await Review.query().insert(reviewObject)
      }
    }
  }
}

export default ReviewSeeder