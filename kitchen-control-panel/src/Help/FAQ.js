import React, {Component} from "react";
import Qa from "./Qa";

const faq = [
    {
        q : "What can I do with Kitchen Control Panel?",
        a: "Kitchen Control Panel (KCP) is a one stop shop for all your kitchen needs! We have a platform that allows you to store recipes, plan meals, keep track of your ingredients at home, and create shopping lists based on those situations!"
    },
    {
        q : "Do I have to utilize all of the features offered to get results?",
        a: "Nope! If you're just here to store recipes, make a quick grocery list, keep an inventory of your stock at home, or whatever you chose to do with KCP, is all up to you! Use as many or as little features as you like; we all have different workflows :)"
    },
    {
        q : "How can I get a generated shopping list?",
        a: "Glad you asked! There's a few steps involved, but we think that once you get into the flow, you will be glad you started! Firstly, you should include ingredients you have at home in your inventory. Then, register some of your go-to recipes! You don't have to do a full course meal for each card - put as much or as little detail as you please. Once you have those stored, you can enter your meal plan for the week, day, month, year - whatever works best for your lifestyle. With all of this data, we can go to the shopping list page and select the dates you wish to make the list for. What this will do is look at your meals planned between said dates, examine the ingredients needed to make said recipes, and compare them to you inventory! Whatever ingredients you don't have enough of, we'll add to your list. You can add on to your list as well if we've missed anything (or if you wanna add stuff we don't know about! Sometimes you gotta get more than just food at the store.)"
    },
    {
        q : "I'm getting a lot of duplicate shopping items in different measurements. Is there any way to filter these?",
        a: "At the moment: no. Since we compare your inventory data and recipe data (based on your selected meals planned) we can give you varying data types for the same ingredient in the shopping list. We are investigating more innovative ways to solve this issue now! If you're super bummed about it, we do have a bright side. It may be annoying but it can be helpful at times! Knowing exactly how much of an ingredient needed for certain recipes can help us make better shopping choices for our wallet and our world! Lets say you are low on flour. You don't use it a lot and you are faced with buying in bulk or buying close to enough that will last long for you. It may be 'cheaper' to buy in bulk, but if you can't use the ingredient in time, it may go to waste. Knowing what you need for the week/month/day can help you decide which size item you want to purchase. This is one of the founding ideas of our application - controlling the ingredients we bring in so as to avoid wasted time, money, and food!"
    },
    {
        q : "Why can't I select a custom ingredient type, such as 'item'? I can't quantify my eggs very easily.",
        a: "We are working on ways to combat this issue. It's not fun to calculate (anything, but especially not in the kitchen!) certain items such as a package of spaghetti to grams and the like. Humans don't always think in hard measurements! As of now, our code is limited to hard data types such as oz, gallons, etc so we can do some of the math for you! We're working on a set of more people-friendly units for our lovely users to utilize now. We'll definietly update you when we get a breakthrough!"
    },
];


class Faq extends Component {
    
    render() {

        return(
            <div>
                <div className="dash faqDash">
                        FAQ
                </div>
                <div className="inventory faq">

                    <div className="recipesHeading">
                        <h2> Frequently Asked Questions </h2>
                    </div>
                    

                    <div className="inventoryItems">
            
                        {faq.map ((item, key)  =>
                            <Qa 
                                q = {item.q}
                                a = {item.a}
                                key = {key}
                            />)
                        }
                
                    </div>
            </div>
            </div>
        );
    }

}

export default Faq;