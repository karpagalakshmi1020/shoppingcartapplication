
function product(sku, name, description, price, cal, carot, vitc, folate, potassium, fiber) {
    this.sku = sku; // product code (SKU = stock keeping unit)
    this.name = name;
    this.description = description;
    this.price = price;
    this.cal = cal;
    this.nutrients = {
        "Price": carot,
        "Quality": vitc,
        "Product tracking": folate,
        "On time delivery": potassium,
        "Product return": fiber
    };
}
