from models.product_model import Product

fb_list = [
    Product(
        product_name="Heineken", 
        product_type="Drinks", 
        in_stock=True, 
        price=6.50,
        image="https://digitalcontent.api.tesco.com/v2/media/ghs/fb1a68f2-5c6c-4d20-afe8-ab11c38dbb81/snapshotimagehandler_1585391201.jpeg?h=540&w=540"
    ),
    Product(
        product_name="Carlsberg", 
        product_type="Drinks", 
        in_stock=True, 
        price=6.50,
        image="https://7.cdn.ekm.net/ekmps/shops/bb537e/images/carlsberg-zero-alcohol-free-beer-0-abv--2-p.png?v=1"
    ),
    Product(
        product_name="White wine", 
        product_type="Drinks", 
        in_stock=True, 
        price=21.99,
        image="https://robbreport.com/wp-content/uploads/2020/04/lillie-1.jpg?w=1000"
    ),
    Product(
        product_name="Red wine", 
        product_type="Drinks", 
        in_stock=True, 
        price=22.50,
        image="https://s7e5a.scene7.com/is/image/waitrose/CellarProductDetailMainImage/093345_a_chateau-musar"
    ),
    Product(
        product_name="Coca Cola", 
        product_type="Drinks", 
        in_stock=True, 
        price=3.35,
        image="https://media.istockphoto.com/photos/cocacola-plastic-bottle-isolated-on-white-background-picture-id157772748?k=6&m=157772748&s=170667a&w=0&h=qFECJTH1nIqw43CLpG37CVqthXj2-W1JVI0eYkXgQN8="
    ),
    Product(
        product_name="Orange juice", 
        product_type="Drinks", 
        in_stock=True, 
        price=3.20,
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0kMktaILA5u26nLX0GMS97ixmyCYgn_WCWA&usqp=CAU"
    ),
    Product(
        product_name="Rose wine", 
        product_type="Drinks", 
        in_stock=True, 
        price=23.75,
        image="https://cdn.shopify.com/s/files/1/0301/9712/1068/products/image_14b8bb7d-0afc-4a92-b32a-c84eec30f7ca_800x.png?v=1609627107"
    ),
    Product(
        product_name="Vodka", 
        product_type="Drinks", 
        in_stock=True, 
        price=6.25,
        image="data:image/jpeg;base64,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"
        ),
    Product(
        product_name="Whiskey", 
        product_type="Drinks", 
        in_stock=True, 
        price=6.25,
        image="https://cdn11.bigcommerce.com/s-720fd/images/stencil/1024x1024/products/979/1605/Jack_Daniels_2012_pack__31529.1541077706.jpg?c=2"
    ),
    Product(
        product_name="Lemonade", 
        product_type="Drinks", 
        in_stock=True, 
        price=3.35,
        image="https://bringmedrink.co.uk/app/uploads/2020/06/318828.jpg"
    ),
    Product(
        product_name="Cheeseburger", 
        product_type="Food", 
        price=11.99, 
        in_stock=True,
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHVscGreBJDLz817PuGKamldy06NTHZSdfvA&usqp=CAU"
    ),
    Product(
        product_name="Beetroot Burger", 
        product_type="Food", 
        price=11.99, 
        in_stock=True,
        image="https://www.telegraph.co.uk/content/dam/recipes/2020/01/29/TELEMMGLPICT000222928661_trans_NvBQzQNjv4BqzJTrEXLXsdLXDwEWHZNOw8IKM510r5k3slFwSg8ni2k.jpeg"
    ),
    Product(
        product_name="Grilled Chicken Burrito",
        product_type="Food",
        price=9.99,
        in_stock=True,
        image="https://www.mynourishedhome.com/wp-content/uploads/2019/11/burritos-800x800.jpg"
    ),
    Product(
        product_name="Guacamole Burrito", 
        product_type="Food", 
        price=9.80, 
        in_stock=True,
        image="https://i.pinimg.com/600x315/d3/6b/2b/d36b2b8634e6dfa15eb40fdee2c45b59.jpg"
    ),
    Product(
        product_name="Chicken Katsu", 
        product_type="Food", 
        price=14.50, 
        in_stock=True,
        image="https://www.thespruceeats.com/thmb/aim3qJd5RnSdE68kroJ9r_Ixfbk=/2000x1511/filters:no_upscale():max_bytes(150000):strip_icc()/chicken-katsu-4778466-09-e38cf8d3d6864a9c860034d49e76df25.jpg"
        ),
    Product(
        product_name="Pizza Margherita", 
        product_type="Food", 
        price=8.25, 
        in_stock=True,
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRHngXBXQsIwSdKy-isJlniGQXOjPSuNv--z-z_MjDOCUdBD9vqncsoymxbYsAJ7rj8Mw&usqp=CAU"
    ),
    Product(
        product_name="BBQ Pork Ribs", 
        product_type="Food", 
        price=12.50, 
        in_stock=True,
        image="https://i.pinimg.com/736x/72/d3/3b/72d33b02bb036ccebd2d76fb46f3bd71.jpg"
    ),
    Product(
        product_name="Vegan Pizza Margherita",
        product_type="Food",
        price=8.99,
        in_stock=True,
        image="https://www.abeautifulplate.com/wp-content/uploads/2015/08/the-best-homemade-margherita-pizza-1-4-600x858.jpg"
    ),
    Product(
        product_name="Vegetable Samosas", 
        product_type="Food",
        price=10.50,
        in_stock=True,
        image="data:image/jpeg;base64,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"
    ),
    Product(
        product_name="Falafel Wrap", 
        product_type="Food", 
        price=10.50, 
        in_stock=True,
        image="https://da28rauy2a860.cloudfront.net/wellbeing/wp-content/uploads/2020/12/03172949/Felafel-Wrap.png"
    ),
]