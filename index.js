const express= require("express");
const app=express();
app.use(express.static("public"));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/tablets',function(req,res){
                             res.setHeader('Content-Type', 'application/json');
        const abc=require("./db/tabletsschema.js")
//        abc.create([
//    {"id":1000,"price":"₹6,199","name":"Micromax Canvas Tab","image":"http://ecx.images-amazon.com/images/I/41T5h4ZJnEL._SY300_QL70_.jpg","highlights":["1 GB RAM | 16 GB ROM","5 MP Primary Camera | 2 MP Front","Android 6.0 (Marshmallow)","Battery: 4000 mAh Lithium - Ion","Voice Call (Dual Sim)"],"description":[
//"If you are looking for a tablet that you can take with you wherever you go,","the Micromax Canvas Tab is what you need."],"sideimg":["http://drop.ndtv.com/TECH/product_database/images/820201560134PM_635_micromax_canvas_tab_p680.jpeg","https://n3.sdlcdn.com/imgs/a/x/d/Micromax-Canvas-Tab-P480-SDL924852720-2-92fbb.jpg","http://cdn.ndtv.com/tech/images/micromax_canvas_tab_p480_front_back.jpg"]},
//    {"id":1001,"price":"₹4,999","name":"Lenovo Tab 3","image":"https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_300x300/SYLTAB310B_lenovo_tab_3_10_32gb_tablet_black.jpg","highlights":["1 GB RAM | 8 GB ROM","2 MP Primary Camera | 0.3 MP Front","Android 5.0 (Lollipop), Upgradable to v6 (Marshmallow)","Battery: 3450 mAh Lithium - Ion"],"description":["With the provided RAM and processor, it is fast.","The applications, games, songs and videos are loading smooth.","Pure android, so new bloat wares! This is really good for the given configuration."],"sideimg":["http://ecx.images-amazon.com/images/I/61U1P4ipuFL._SY445_.jpg","https://www.buyereview.com/wp-content/uploads/2016/01/yoga3-right.jpg","http://www.fashioniel.com/wp-content/uploads/2017/01/Lenovo-Tab-3-710-7-3G-Tablet-16GB-Black-side-650x850.jpg"]
//}],function(error){
//        if(error){
//            console.log("Error Occur During Addition of New User",error);
//               response.send("Can't Add a New User"); 
//        }
//        else{
//            console.log("Record Added SuccessFully ");
            
        

        abc.find(function(error,docs){
                if(error){
                    console.log("some problem")
                    response.send('Some Problem in my Connection');   
                }
                else{
                    console.log("calling tablet")
                   //console.log("docsis",docs);
        res.send(JSON.stringify(docs));
                    
                             }
        })
//}
        })

//});
        
app.get('/laptops',function(req,res){
                             res.setHeader('Content-Type', 'application/json');
        const lap=require("./db/laptopsschema.js")
//lap.create([{"id":1000,"price":"₹21,990","name":"HP pentium quad core","image":"https://images-na.ssl-images-amazon.com/images/I/41DLxatS5NL._SY300_.jpg","highlights":["Intel Pentium Quad Core Processor","4 GB DDR3 RAM","DOS Operating System","1 TB HDD","15.6 inch Display"],"sideimg":["https://rukminim1.flixcart.com/image/832/832/computer/t/y/w/hp-notebook-original-imaepy5f6aj6uy7v.jpeg?q=70","https://rukminim1.flixcart.com/image/832/832/computer/z/h/p/hp-notebook-original-imaepy5f9zjvyw7t.jpeg?q=70","https://rukminim1.flixcart.com/image/832/832/computer/z/h/p/hp-notebook-original-imaepy5fhevyaygz.jpeg?q=70"]},{"id":1001,"price":"₹24,990","name":"Acer Es 15 core","image":"http://ecx.images-amazon.com/images/I/417M2cNa%2BCL._SY300_QL70_.jpg","highlights":["Intel Core i3 Processor (6th Gen)","4 GB DDR4 RAM","64 bit Linux/Ubuntu Operating System","500 GB HDD","15.6 inch Display"],"sideimg":["https://rukminim1.flixcart.com/image/832/832/j2p1ci80/computer/c/6/7/acer-es-15-notebook-original-imaer2fqzhngdzc3.jpeg?q=70","https://rukminim1.flixcart.com/image/832/832/j2p1ci80/computer/c/6/7/acer-es-15-notebook-original-imaer3a7yf6xzudt.jpeg?q=70","https://rukminim1.flixcart.com/image/832/832/j2p1ci80/computer/c/6/7/acer-es-15-notebook-original-imaer2fqqtpvmhhz.jpeg?q=70"]},{"id":1002,"price":"₹32,490","name":"Asus Apu quad","image":"https://khandwa.online/instasolution/wp-content/uploads/2016/10/iBall-CompBook-300x300.jpg","highlights":["Intel Core i3 Processor (6th Gen)","4 GB DDR4 RAM","Endless Operating System","1 TB HDD","15.6 inch Display"],"sideimg":["https://rukminim1.flixcart.com/image/832/832/j5crukw0/computer/w/w/8/asus-na-notebook-original-imaewfq87cfawrvu.jpeg?q=70","https://rukminim1.flixcart.com/image/832/832/j5vcknk0-1/computer/5/v/h/asus-notebook-original-imaewf4fjg5mznhs.jpeg?q=70","https://rukminim1.flixcart.com/image/832/832/j5vcknk0-1/computer/5/v/h/asus-notebook-original-imaewf4fgtvazyvg.jpeg?q=70"]}],function(error){
//            if(error){
//            console.log("Error Occur During Addition of New User",error);
//               response.send("Can't Add a New User"); 
//        }
//        else{
//            console.log("Record Added SuccessFully ");
 lap.find(function(error,docs){
                if(error){
                    console.log("some problem")
                    response.send('Some Problem in my Connection');   
                }
                else{
                    console.log("calling laptop")
                  // console.log("docsis",docs);
        res.send(JSON.stringify(docs));
                    
                             }
        })
        }
//}
       )
//})


app.get('/mobiles',function(req,res){
                             res.setHeader('Content-Type', 'application/json');
console.log("calling mobile")
        const mobile=require("./db/mobilesschema.js")
        
//                mobile.create([
//    {
//        "id":1000,"name":"iphone 7","image":"https://i1.wp.com/3tech.org/wp-content/uploads/2017/04/iPhone-7s.jpg?resize=200%2C200&ssl=1","price":"₹ 48,999","highlights":["32 GB ROM","4.7 inch Retina HD Display","12MP Rear Camera | 7MP Front Camera","Li-Ion Battery","A10 Fusion Chip with 64-bit Architecture and Embedded M10 Motion Co-processor Processor"],"description":["Take your iPhone experience to the next level with iPhone 7.","Featuring new camera systems, a better battery-life, an efficient processor and powerful stereo speakers,","this smartphone will drastically enhance your iPhone experience."," With a sharp and vibrant display, and a sleek water-resistant body, this phone is as powerful as it is attractive."],"sideimg":["http://www.starhub.com/content/dam/catalog/starhub-store-apple-iphone-7-gold-right-side.png","http://handheldcare.vn/upload/14547/20161102/sp_gcpevrqch2zbn69-765-iphone-7-chua-active-32gb-vang.png","https://store.storeimages.cdn-apple.com/8750/as-images.apple.com/is/image/AppleInc/aos/published/images/M/MT/MMT02/MMT02_AV2?wid=1000&hei=1000&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=1486423428650"]
//    },
//    {
//        "id":1001,"name":"Samsung J7","image":"http://www.price4compare.com/wp-content/uploads/2016/09/Samsung-Galaxy-J7-2016-2.jpg","price":"₹ 17,990","highlights":["4 GB RAM <br> 32 GB ROM","Expandable Upto 256 GB","5.7 inch Full HD Display","13MP Rear Camera | 13MP Front Camera","3300 mAh Battery"],"description":["In a world where time does not wait for anyone, it helps to have a smartphone that’s fast and reliable like this Samsung J7 Max."," This touchscreen smartphone packs features like the Samsung Pay which lets you safely pay and receive money on the go.","atures like the geo-tagging let you capture, edit, and share pictures in a matter of seconds.","amsung J7 Max is also performance oriented, with its octa-core processor facilitating seamless multitasking."],"sideimg":["http://ecx.images-amazon.com/images/I/716BDbFHFjL._SY445_.jpg","http://images.samsung.com/is/image/samsung/my-galaxy-j7-2016-j710gn-sm-j710gzduxme-000000003-side-gold?$PD_GALLERY_JPG$","http://n1.sdlcdn.com/imgs/b/0/3/PKStar-Side-Chrome-back-case-SDL276307518-1-6f82c.jpg"]
//    },
//    {
//        "id":1002,"name":"Redmi Note 4","image":"http://www.directd.com.my/content/images/thumbs/0017876_xiaomi-redmi-note-4-4gb-ram-64gb-rom-original-by-xiaomi-malaysia_200.jpeg","price":"₹ 12,999","highlights":["4 GB RAM","64 GB ROM"," Expandable Upto 128 GB","5.5 inch Full HD Display","13MP Rear Camera | 5MP Front Camera","4100 mAh Li-Polymer Battery","Qualcomm Snapdragon 625 64-bit Processor"],"description":["Switching between apps or launching apps won’t take forever with the Redmi Note 4,thanks to the octa-core Snapdragon 625 processor."," To add more power to you, the Redmi Note 4 is 20% more power efficient than the Redmi Note 3."],"sideimg":["http://st1.bgr.in/wp-content/uploads/2016/07/7f8dfd8d9dffed18b0397672c43fd704_375x500_1.jpg","https://apexdigital.com.np/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/r/e/redmi-note-4-side1.png","http://www.dragon-tt.com/Uploads/photo/1230201610333AM9732.jpg"]
//    }
//],function(error){
//        if(error){
//            console.log("Error Occur During Addition of New User",error);
//               response.send("Can't Add a New User"); 
//        }
//        else{
//            console.log("Record Added SuccessFully ");
//            
//        

        mobile.find(function(error,docs){
                if(error){
                    console.log("some problem")
                    response.send('Some Problem in my Connection');   
                }
                else{
                    console.log("calling mobile")
                   //console.log("docsis",docs);
        res.send(JSON.stringify(docs));
                    
                             }
        })
//}
  //      })
})



                             app.listen(7777,function(){
    console.log("Server start");
})