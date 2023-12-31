import {createServer, Model} from 'miragejs'

createServer({
  models: {
    menu : Model,
    discount : Model
  },

  seeds(server){
    server.create('menu', {
      id: 1,
      category: 'Desayuno',
      inCart : false,
      numInCart : 0,
      item : 'Huevos picados (revueltos)',
      price : 7.99,
      img: 'https://i.pinimg.com/736x/1f/75/6b/1f756baf244ea641d4eb3bdd210a156b.jpg',
      })
    server.create('menu', {
      id: 2,
      category: 'Desayuno',
      inCart : false,
      numInCart : 0,
      item : 'Huevos estrellados (fritos)',
      price : 6.99,
      img: 'https://cheforopeza.com.mx/wp-content/uploads/2017/11/huevos-estrellados-sobre-nopal-y-salsa-roja-recetas-chef-oropeza-jpg-940x450.jpg'
    })
    server.create('menu', {
      id: 3,
      category : 'Desayuno',
      inCart : false,
      numInCart : 0,
      item: 'Plantanos con crema y frijolitos',
      price : 5.99,
      img: 'https://www.trendeing.com/wp-content/uploads/2017/03/3.6.17-5.JPG.17-5-1000x667.jpg'
    })
    server.create('menu', {
      id: 4,
      category : 'Desayuno' ,
      inCart : false,
      numInCart : 0,
      item : 'Huevos Rancheros',
      price : 6.99,
      img: 'https://gran.luchito.com/wp-content/uploads/2018/10/Huevos-Rancheros-6-1-660x500.jpg'
    })
    server.create('menu', {
      id: 5,
      category: 'Desayuno',
      inCart : false,
      numInCart : 0,
      item: 'Chilaquiles Verdes',
      price : 7.99,
      img: 'https://gran.luchito.com/wp-content/uploads/2023/05/Landscape-Hero-Chilaquiles-Verdes-660x500.jpg'
    })
    server.create('menu', {
      id: 6,
      category : 'Desayuno',
      inCart : false,
      numInCart : 0,
      item: 'Huevos picados con fruta',
      price: 4.99,
      img: 'https://www.rujamar.com/wp-content/uploads/2022/05/Copia-de-Copia-de-Copia-de-Copia-de-Copia-de-Copia-de-PROTEINA-DEL-HUEVO-4-1024x1024.jpg'
    })
    server.create('menu',  {
      id : 7,
      category : 'Entree',
      inCart : false,
      numInCart : 0,
      item : 'Pupusas (2)',
      price : 5.99,
      subOptions : ['queso', 'chicharoon', 'ayote', 'frijoles', 'chilipin', 'jalapeno', 'camaron', 'pollo'],
      img : 'https://www.cookingforkeeps.com/wp-content/uploads/2020/04/Cheesy-Salvadoran-Pupusas-with-Chorizo-2-1-1.jpg.webp'
    })
    server.create('menu', {
      id : 8,
      category : 'Entree',
      inCart : false,
      numInCart : 0,
      item : 'Corn Atole',
      price : 4.99,
      img : 'https://travelfoodatlas.com/wp-content/uploads/2022/10/Corn-Atole-768x512.jpg.webp'
    })
    server.create('menu', {
      id : 9,
      category : 'Desayuno',
      inCart : false,
      numInCart : 0,
      item : 'Torrejas (2)',
      price : 3.99,
      img : 'https://travelfoodatlas.com/wp-content/uploads/2022/10/Torrejas-735x490.jpg.webp'
    })
    server.create('menu',  {
      id : 10,
      category : 'Entree',
      inCart : false,
      numInCart : 0,
      item : 'Tamal Pisque (3)',
      price : 5.99,
      img : 'https://www.196flavors.com/wp-content/uploads/2019/01/tamales-pisques-1.jpg'
    })
    server.create('menu',  {
      id: 11,
      category : 'Entree',
      inCart : false,
      numInCart : 0,
      item : 'Gallina India',
      price : 6.99,
      img : 'https://live.staticflickr.com/7093/7358518340_4f02c26a20_h.jpg'
    })
    server.create('menu', {
      id : 12 ,
      category : 'Entree',
      inCart : false,
      numInCart : 0,
      item : 'Yuca Sancochada',
      price : 5.99,
      img : 'https://huertalejandro.com/wp-content/uploads/2020/05/yuca.jpg'
    })
    server.create('menu', {
      id : 13,
      category : 'Entree',
      inCart : false,
      numInCart : 0,
      item : 'Enchiladas (3)',
      price : 6.99,
      subOptions : ['Enfrijoladas', 'Enchiladas potosinas', 'Enchiladas suizas', 'Enchiladas San Miguel', 'Enchiladas con mole '] ,
      img : 'https://weelicious.com/wp-content/uploads/2021/05/Mexican-Enchiladas-10-1.jpg'
    })
    server.create('menu', {
      id : 14,
      category : 'Entree',
      inCart : false,
      numInCart : 0,
      item : 'Tacos mexicanos (3)',
      subOptions : ['Al Pastor', 'Barbacoa' , 'Birria' , 'Carne Asada', 'Carnitas', 'Chorizo', 'Pollo', 'Pescado'] ,
      price : 4.99,
      img : 'https://bpprivilegeclub.com/blog/wp-content/uploads/2021/07/bigstock-three-carne-asada-mexican-stre-385360028-scaled.jpg'
    })
    server.create('menu', {
      id : 15,
      category : 'Bebidas',
      inCart : false,
      numInCart : 0,
      item : 'Fresco Horchata',
      price : 1.99,
      img: 'https://travelfoodatlas.com/wp-content/uploads/2022/10/Fresh-Horchata-768x512.jpg.webp'
    })
    server.create('menu', {
      id : 16, 
      category: 'Bebidas',
      inCart : false,
      numInCart : 0,
      item : 'Fresco Limonada',
      price : 1.99,
      img : 'https://www.blossmangas.com/wp-content/uploads/2020/05/Lemonade-1-1.jpg'
    })
    server.create('menu', {
      id : 17,
      category : 'Bebidas',
      inCart : false,
      numInCart : 0,
      item : 'Agua Fresca',
      price : 1.75,
      subOptions: ['sandia' , 'pepino' , 'pina', 'mango' , 'melon', 'tamarindo' ,'jamaica'],
      img : 'https://www.cookingclassy.com/wp-content/uploads/2021/06/aqua-fresca-5-600x400.jpg'
    })
    server.create('menu', {
      id : 18,
      category : 'Bebidas',
      inCart : false,
      numInCart : 0,
      item: 'agua',
      price : .99,
      img : 'https://www.riverkeeper.org/wp-content/uploads/2018/04/bottled-water-credit-CC-Myrtle-Beach-TheDigitel-viaFlickr-modified-1000-650x333.jpg'
    })
    server.create('menu', {
      id : 19, 
      category : 'Bebidas',
      inCart : false,
      numInCart : 0,
      item : 'cafe',
      price : 2.25,
      img : 'https://media.cnn.com/api/v1/images/stellar/prod/150929101049-black-coffee-stock.jpg?q=x_3,y_1231,h_1684,w_2993,c_crop/h_540,w_960/f_webp'
    })
    server.create('menu', {
      id : 20,
      category: 'Bebidas',
      inCart : false,
      numInCart : 0,
      item : 'ice tea',
      price : 1.99,
      img : 'https://sugarspunrun.com/wp-content/uploads/2022/05/Easy-sweet-tea-recipe-4-of-6.jpg'
    })
    server.create('menu',  {
      id: 21,
      category : 'Pastel',
      inCart : false,
      numInCart : 0,
      item : 'Quesadilla',
      price : 2.99,
      img : 'https://blog.amigofoods.com/wp-content/uploads/2020/09/salvadoran-quesdailla.jpg'
    })
    server.create('menu', {
      id: 22,
      category : 'Pastel',
      inCart : false,
      numInCart : 0,
      item : 'Tres Leches',
      price : 3.99,
      img : 'https://blog.amigofoods.com/wp-content/uploads/2019/07/Tres-leche-cake.jpg'
    })
    server.create('menu', {
      id: 23, 
      category : 'Pastel',
      inCart : false,
      numInCart : 0,
      item : 'Pastelitos de Pina',
      price : 2.99,
      img : 'https://blog.amigofoods.com/wp-content/uploads/2023/03/pastelitos-de-pina.jpg'
    })
    server.create('menu', {
      id : 24,
      category : 'Pastel',
      inCart : false,
      numInCart : 0,
      item : 'Torta Maria Luisa',
      price: 2.99,
      img : 'https://blog.amigofoods.com/wp-content/uploads/2023/03/torta-maria-luisa.jpg'
    })
    server.create('menu', {
      id: 25,
      category : 'Pastel',
      inCart : false,
      numInCart : 0,
      item : 'Semita',
      price: 1.99,
      img: 'https://cdn0.recetasgratis.net/es/posts/9/1/8/pan_de_semitas_75819_600.webp'
    })
    server.create('discount', {
      id: 0,
     dayOfWeek : 'Domingo',
     discount: "Dos o mas platos de desayuno 15 por ciento de descuento" ,
     img : "https://i0.wp.com/www.aspicyperspective.com/wp-content/uploads/2018/04/best-huevos-rancheros-recipe-25.jpg?resize=650%2C975&ssl=1"
    })
    server.create('discount', {
     id: 1,
     dayOfWeek : "Lunes",
     discount: "10% de descuento al pedir dos platos de entree",
     img: "https://res.cloudinary.com/sagacity/image/upload/c_crop,h_2470,w_3600,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/allwayz_hungry_pupusas_houston_argvux.jpg"
    })
    server.create('discount', {
      id: 2,
     dayOfWeek : "Martes",
     discount: "Bebidas a mitad de precio",
     img: "https://lavendervines.com/wp-content/uploads/2017/04/Agua-Fresca-1.jpg"
    })
    server.create('discount', {
      id: 3,
     dayOfWeek : "Miercoles",
     discount: "Un cafe y postre 10 por ciento de descuento" ,
     img:"https://cdn.colombia.com/gastronomia/2012/04/13/pastel-de-cafe-3058.webp"
    })
    server.create('discount', {
      id:4,
     dayOfWeek : "Jueves",
     discount: "Un Plato principal y una bebida con 10 por ciento de descuento ",
     img : "https://cdn.cheapism.com/images/Mexican-Dishes.2e16d0ba.fill-1440x605.jpg"
    })
    server.create('discount', {
      id: 5,
     dayOfWeek : "Viernes",
     discount: "4 o Mas platos principales 10 por ciento de descuento" ,
     img: "https://www.guiarepsol.com/content/dam/repsol-guia/contenidos-imagenes/comer/nuestros-favoritos/restaurantes-comida-latina-zaragoza/gr-cms-media-featured_images-none-67545808-51f5-495d-aea8-af52a4c7374a-collage-apertura.jpg"
    })
    server.create('discount', {
      id: 6,
     dayOfWeek : "Sabado",
     discount: "10 por ciento de descuento en platos principales y desayuno ",
     img: "https://canalcocina.es/medias/_cache/zoom-ce2dc95fd5d8cc134220da1eaeb0ad51-920-518.jpg"
    })
  
  },

  routes(){
    this.namespace = 'api'
    this.logging = false

    this.get('/menu', (schema, request)=>{
      return schema.menus.all()
    })
    this.get('/menu/:id', (schema , request) =>{
      const id = request.params.id
      return schema.menus.find(id)
    })
    this.get('/discounts/:id', (schema , request) =>{
      const id = request.params.id
      return schema.discounts.find(id)
    })
    this.get('/cartItems', (schema, request)=>{
      return schema.menus.where({inCart: true})
    })

    this.post(`/clearCart` , (schema, request)=>{
      const menu = schema.menus.all()
      menu.update({
        inCart: false,
        numInCart : 0
      })
      return menu
    })

    this.post('/:id', (schema,request) =>{
      const id = request.params.id
      const item = schema.menus.find(id)
      item.update({
        inCart:true,
        numInCart:item.numInCart + 1
      }) 
	  return item
    })
    this.post('/decrementCount/:id', (schema,request) =>{
      const id = request.params.id
      const item = schema.menus.find(id)
      item.update({
        numInCart:item.numInCart - 1,
        inCart: item.numInCart -1 <=0? false : true
      }) 
	  return item
    })


  }
})