Book-Portal

created book portal project to:
1) learn javascript
2) learn git
3) implement the known ideas and logic aiming better performance

project includes:
1) Interface -
  create one list / array containing book details (obj) to implement a book store --> 
  
  book obj structure -- {
  	   name: "string"
  	   price: number
  	   status: "available" / "unavailable" --> string
  	   quantity: number
         }
         
  operations need to be performed in book store --> 
  options need to be shown to user 
  a) show available books to users
  b) add book
  c) show cart
   
2) Use case 1 - 
  show available books to users --> 
  	here you have to show all list items
  	
  add book --> 
  	here you have to take i/p from user to add book in cart --> that i/p can be index no of book from that list --> for this you have to maintain one list as cart & you have to add this book in that 
   
  list --> while adding that book in list you have to pass quantity as 1 
  -- once you add that book cart you have to update the quantity in book list -- like you have to decrease the quantity by one & update the same in list 

3) Use case 2 -
  show available books :-
  	here after each operation whenever user want to see available books..show them list with latest quantity...once quantity reaches 0 change status to unavailable	
  	
  add book -->
  	now you have to ask quantity as well...& pass that quantity to cart list with book details & update booklists entry quantity accordingly	
  	
  show cart -->
  	here now you have to calculate price of book according to quantity of each book & also calculate total cart value & display book name, price, quantity, total price & at last line total cart value
   
4) Use case 3 - 
  add book --> 
  	here while taking quantity you have to check if that much quantity is available or not --> if available directly add to cart ---> else show one message for available quantity --> & take new quantity
  	
  	
  ----------------------------------------------------------------------------------------------------------------------------	
  
  cart list structure can be -- [
                                  {
                                   book name: "",
                                   price: number,
                                   quantity: number,
                                   total price: number
                                  }
                                ]

5) Use case 4 -
  update cart
  
  here if user select this option then 1st check if we have anything in cart or not. If not then display cart empty & display main menu again.
  If cart is not empty then show the below menu
  
  a) increase quantity
  b) decrease quantity
  c) remove 
  
  here for all 3 option u have to ask id from user
  
  i) increase quantity -
  	1st check if enter id is there in cart or not. If it is there then take new quantity from user. Add that user given quantity in existing book obj in cart list & substract it from booklist qunatity
  	
  ii) decrease -
  	same like above one but here decrease / substract user entered quantity of book from cart list & increase in booklist
  	
  iii) remove -
  	remove the entire obj from cart list & add that qunatity back to booklist bookobj
  	
  	
  here when ur taking new quantity make sure that that much quantity is there in booklist & update the status as well (available / unavailable) 	