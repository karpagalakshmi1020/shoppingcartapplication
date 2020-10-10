
function store() {
    this.products = [
        new product("KUR1", "WOMEN - KURTHIS", "Life is too short to wear frumpy dresses!!", 20, 90, 0, 2, 0, 1, 2),
        new product("KUR2", "WOMEN - SAREES", "Six yards of pure grace!!", 30, 90, 0, 1, 1, 1, 2),
        new product("KUR3", "WOMEN - ANARKALIS", "Money can't buy happiness, but it can get you a perfect anarkali!!", 25, 120, 0, 2, 1, 2, 2),
        new product("MEN1", "MEN - SHIRTS", "The first step to being respected is to look respectable!!", 28, 50, 4, 4, 1, 2, 0),
        new product("MEN2", "MEN - PANTS", "Dressing well is a good form of manners!!", 35, 100, 0, 0, 0, 1, 2),
        new product("MEN3", "MEN - SHARWANIS", "The joy of dressing is an art!!", 40, 50, 4, 4, 1, 1, 1),
        new product("KID1", "KIDS - FROCK", "Find the angel in you, with me!!", 15, 100, 0, 3, 0, 1, 1),
        new product("KID2", "KIDS - CASUAL WEAR", "Simplicity is the keynote of true elegance!!", 10, 50, 4, 4, 0, 1, 2),
        new product("KID3", "KIDS - PARTY WEAR", "Life is a party, dress like it!!", 30, 90, 1, 4, 0, 2, 2),
        new product("GAD1", "GADGETS - SMART PHONES", "Find the world in your palm!!", 180, 125, 1, 4, 0, 2, 2),
        new product("GAD2", "GADGETS - PENDRIVES", "Make sure you sore all your memories in me!!", 50, 70, 3, 4, 0, 1, 1),
        new product("GAD3", "GADGETS - LAPTOPS", "User friendly, easy to carry and portable!!", 200, 70, 1, 4, 2, 1, 2),
        new product("ELE1", "ELECTRONICS - TELEVISION", "Feeling bored? Watch your favourite teleshows in me!!", 150, 60, 3, 4, 2, 2, 2),
        new product("ELE2", "ELECTRONICS - FRIDGE", "Whenever you lose some weight, find it again in me!!", 80, 70, 1, 2, 0, 1, 2),
        new product("ELE3", "ELECTRONICS - WASHING MACHINE", "Brilliant performance and washing aglow ; stylish quality and consumption low!!", 70, 100, 0, 2, 0, 1, 2),
        new product("VEG1", "VEGETABLES - TOMATO", "I am rich in antioxidant, rich in potassium and I help in reducing weight!!", 8, 110, 0, 2, 0, 2, 0),
        new product("EAT2", "EATABLES - CHOCOLATES", "A little bit of sweetness can drown out a whole lot of bitterness!!", 5, 60, 0, 3, 0, 0, 1),
        new product("EAT3", "EATABLES - JUICES", "If life gives you lemons, make some kind of fruity juice!!", 6, 120, 4, 3, 0, 1, 3),
        new product("VEG2", "VEGETABLES - POTATO", "Vitamin C anyone?, go ahead and make some curry!!", 8, 40, 0, 4, 1, 1, 2),
        new product("FRU1", "FRUITS - WATERMELON", "Beat the heat with juicy me!!", 5, 50, 3, 4, 1, 1, 2),
        new product("FRU2", "FRUITS - PINEAPPLE", "Make sure you peel off my skin before consuming!!", 5, 90, 4, 4, 0, 1, 1)
    ];
    this.dvaCaption = [
        "Negligible",
        "Low",
        "Average",
        "Good",
        "Great"
    ];
    this.dvaRange = [
        "below 10%",
        "between 10 and 20%",
        "between 20 and 40%",
        "between 40 and 80%",
        "above 80%"
    ];
}
store.prototype.getProduct = function (sku) {
    for (var i = 0; i < this.products.length; i++) {
        if (this.products[i].sku == sku)
            return this.products[i];
    }
    return null;
}
