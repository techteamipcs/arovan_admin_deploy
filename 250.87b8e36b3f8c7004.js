"use strict";(self.webpackChunkarovan_dashboard=self.webpackChunkarovan_dashboard||[]).push([[250],{7250:(et,_,c)=>{c.r(_),c.d(_,{CartModule:()=>B});var u=c(6895),m=c(8869),C=c(2340),g=c(1454),t=c(4650),Z=c(678),s=c(433),A=c(8601),v=c(3189);function b(e,a){1&e&&(t.TgZ(0,"td",19)(1,"div",20),t._uU(2," Cart List is Empty "),t.qZA()())}function x(e,a){if(1&e&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&e){const o=t.oxw().index;t.xp6(1),t.Oqu(o+1)}}function q(e,a){if(1&e&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&e){const o=t.oxw().index,r=t.oxw();t.xp6(1),t.Oqu(o+1+(r.currentPage-1)*r.currentLimit)}}function y(e,a){if(1&e&&(t.TgZ(0,"td"),t._uU(1),t.qZA()),2&e){const o=t.oxw().$implicit;t.xp6(1),t.Oqu(o.customer_name)}}function U(e,a){if(1&e){const o=t.EpF();t.TgZ(0,"tr"),t.YNc(1,x,2,1,"td",21),t.YNc(2,q,2,1,"td",21),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.YNc(5,y,2,1,"td",21),t.TgZ(6,"td"),t._uU(7),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.ALo(12,"date"),t.qZA(),t.TgZ(13,"td")(14,"a",22),t._UZ(15,"i",23),t.qZA()(),t.TgZ(16,"td")(17,"a",24),t.NdJ("click",function(){const i=t.CHM(o).$implicit,l=t.oxw(),d=t.MAs(44);return t.KtG(l.open(d,i))}),t._UZ(18,"i",25),t.qZA()()()}if(2&e){const o=a.$implicit,r=t.oxw();t.xp6(1),t.Q6J("ngIf",1==r.currentPage),t.xp6(1),t.Q6J("ngIf",1!=r.currentPage),t.xp6(2),t.Oqu(o.product_name),t.xp6(1),t.Q6J("ngIf",o.customer_name),t.xp6(2),t.Oqu(o.qty),t.xp6(2),t.Oqu(o.price),t.xp6(2),t.Oqu(t.xi3(12,8,o.created_at,"dd/MMM/yyyy hh:mm a")),t.xp6(3),t.MGl("routerLink","/cart/edit/",o._id,"")}}function N(e,a){if(1&e){const o=t.EpF();t.TgZ(0,"div",26)(1,"app-pagination",27,28),t.NdJ("changePage",function(n){t.CHM(o);const i=t.oxw();return t.KtG(i.onListChangePage(n))}),t.qZA()()}if(2&e){const o=t.oxw();t.xp6(1),t.Q6J("initialPage",o.currentPage)("count",o.totalRecord)}}function w(e,a){if(1&e&&(t.TgZ(0,"p")(1,"strong"),t._uU(2,"Are you sure you want to delete "),t.TgZ(3,"span",36),t._uU(4),t.qZA(),t._uU(5," Cart Data?"),t.qZA()()),2&e){const o=t.oxw(2);t.xp6(4),t.hij('"',o.selectedCart.product_name,'"')}}function J(e,a){if(1&e){const o=t.EpF();t.TgZ(0,"div",29)(1,"h4",30),t._uU(2,"Cart deletion"),t.qZA(),t.TgZ(3,"button",31),t.NdJ("click",function(){const i=t.CHM(o).$implicit;return t.KtG(i.dismiss("Cross click"))}),t._uU(4,"close"),t.qZA()(),t.TgZ(5,"div",32),t.YNc(6,w,6,1,"p",21),t.TgZ(7,"p"),t._uU(8," All information associated to this Cart Data will be permanently deleted. "),t.TgZ(9,"span",33),t._uU(10,"This operation can not be undone."),t.qZA()()(),t.TgZ(11,"div",34)(12,"button",35),t.NdJ("click",function(){const i=t.CHM(o).$implicit;return t.KtG(i.dismiss("cancel click"))}),t._uU(13,"Cancel"),t.qZA(),t.TgZ(14,"button",35),t.NdJ("click",function(){t.CHM(o);const n=t.oxw();return t.KtG(n.deleteCart())}),t._uU(15,"Ok"),t.qZA()()}if(2&e){const o=t.oxw();t.xp6(6),t.Q6J("ngIf",o.selectedCart)}}let h=(()=>{const a=class{constructor(r,n,i){this.router=r,this.cartService=n,this.modalService=i,this.msg_danger=!1,this.currentPage=1,this.initialized=!1,this.currentLimit=10,this.totalRecord=0,this.searchText="",this.closeResult="",this.modalReference=null,this.imagePath=C.N.baseUrl+"/public/",this.token=localStorage.getItem("miniaar-token")}ngOnInit(){this.get_cartData()}get_cartData(){this.cartService.getCartDetails({limit:this.currentLimit,page:this.currentPage}).subscribe(n=>{200==n.code&&(null!=n.result&&""!=n.result?(this.cartData=n.result,this.totalRecord=n?.count,window.scroll(0,0)):this.msg_danger=!0)})}onListChangePage(r){this.currentPage=r,this.get_cartData()}deleteCart(){if(this.selectedCart){var r={id:this.selectedCart._id};r.token=this.token,this.cartService.deletecart(r).subscribe(n=>{200==n.code&&(this.get_cartData(),this.router.navigate(["/cart/view"]),this.modalService.dismissAll())})}}searchCart(){this.searchText?(this.currentLimit=1e3,this.currentPage=1):this.currentLimit=10,this.get_cartData()}open(r,n){this.selectedCart=n,this.modalReference=this.modalService.open(r,{ariaLabelledBy:"modal-basic-title"}).result.then(i=>{this.closeResult=`Closed with: ${i}`},i=>{this.closeResult=`Dismissed ${this.getDismissReason(i)}`})}getDismissReason(r){return r===g.If.ESC?"by pressing ESC":r===g.If.BACKDROP_CLICK?"by clicking on a backdrop":`with: ${r}`}};let e=a;return a.\u0275fac=function(n){return new(n||a)(t.Y36(m.F0),t.Y36(Z.N),t.Y36(g.FF))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-view-cart"]],decls:45,vars:7,consts:[[1,"container-fluid","mt--7"],[1,"row"],[1,"col"],[1,"card","shadow"],[1,"card-header","border-0"],[1,"mb-0"],[1,"card-body"],[1,"col-md-12"],[1,"col-md-6"],["type","text","name","search","autocomplete","off","placeholder","\uf002  Start searching a Cart by name",1,"form-control","mt-4",3,"ngModel","keyup","ngModelChange"],["type","button","routerLink","/cart/add",1,"btn","btn-button","pull-right","ml-auto","mt-4"],[1,"title"],[1,"table-responsive"],[1,"table","align-items-center","table-flush"],["colspan","5",4,"ngIf"],[4,"ngFor","ngForOf"],["class","pcommece-pagination",4,"ngIf"],["style","z-index: 0;"],["content",""],["colspan","5"],[1,"alert","alert-dismissable",2,"text-align","center"],[4,"ngIf"],[2,"cursor","pointer",3,"routerLink"],["aria-hidden","true",1,"mdi","mdi-lead-pencil"],[2,"cursor","pointer","padding-left","15px",3,"click"],["aria-hidden","true",1,"mdi","mdi-close-box"],[1,"pcommece-pagination"],[3,"initialPage","count","changePage"],["pagination",""],[1,"modal-header"],["id","modal-title",1,"modal-title"],["type","button","aria-describedby","modal-title",1,"btn","btn-button",3,"click"],[1,"modal-body"],[1,"text-danger"],[1,"modal-footer"],["type","button",1,"btn","btn-button",3,"click"],[1,"text-primary"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h3",5),t._uU(6,"Cart List"),t.qZA()(),t.TgZ(7,"div",6)(8,"div",7)(9,"div",1)(10,"div",8)(11,"input",9),t.NdJ("keyup",function(){return i.searchCart()})("ngModelChange",function(d){return i.searchText=d}),t.qZA()(),t.TgZ(12,"div",8)(13,"button",10),t._uU(14,"Add Cart"),t.qZA()()()(),t.TgZ(15,"div",8),t._UZ(16,"h4",11),t.qZA()(),t.TgZ(17,"div",6)(18,"div",12)(19,"table",13)(20,"thead")(21,"tr")(22,"th"),t._uU(23,"SL No"),t.qZA(),t.TgZ(24,"th"),t._uU(25,"Product Name"),t.qZA(),t.TgZ(26,"th"),t._uU(27,"Customer"),t.qZA(),t.TgZ(28,"th"),t._uU(29,"Quantity"),t.qZA(),t.TgZ(30,"th"),t._uU(31,"Price"),t.qZA(),t.TgZ(32,"th"),t._uU(33,"Created At"),t.qZA(),t.TgZ(34,"th"),t._uU(35,"Action"),t.qZA(),t.TgZ(36,"th"),t._uU(37,"Delete"),t.qZA()()(),t.TgZ(38,"tbody"),t.YNc(39,b,3,0,"td",14),t.YNc(40,U,19,11,"tr",15),t.ALo(41,"filter"),t.qZA()(),t.YNc(42,N,3,2,"div",16),t.qZA()()()()(),t.YNc(43,J,16,1,"ng-template",17,18,t.W1O),t.qZA()),2&n&&(t.xp6(11),t.Q6J("ngModel",i.searchText),t.xp6(28),t.Q6J("ngIf",!i.cartData),t.xp6(1),t.Q6J("ngForOf",t.xi3(41,4,i.cartData,i.searchText)),t.xp6(2),t.Q6J("ngIf",i.totalRecord>0&&!i.searchText))},dependencies:[u.sg,u.O5,m.rH,s.Fj,s.JJ,s.On,A.Q,u.uU,v.Z],styles:[".pcommece-pagination{display:inline-block;width:100%;text-align:center}  .pcommece-pagination .pagination{justify-content:center;margin-top:1rem;align-items:center}  .btn-primary{color:#fff;background-color:#ff5e14;border-color:#ff5e14}  .title{font-size:30px}  .box-title{font-size:60px}  .cdis{display:flex;align-items:center;margin-bottom:15px}  .cdis button{margin-left:10px}  .modal-backdrop{position:inherit!important}    .modal-backdrop{z-index:0!important}"]}),e})();var p=c(5826),I=c(6570),P=c(2773),Y=c(8503),k=c(4540);function F(e,a){1&e&&(t.TgZ(0,"h4",26),t._uU(1,"Edit Cart"),t.qZA())}function S(e,a){1&e&&(t.TgZ(0,"h4",26),t._uU(1,"Add New Cart"),t.qZA())}function Q(e,a){if(1&e&&(t.TgZ(0,"div",27),t._uU(1),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.hij(" ",o.throw_msg," ")}}function L(e,a){if(1&e&&(t.TgZ(0,"div",28),t._uU(1),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.hij(" ",o.throw_msg," ")}}function O(e,a){if(1&e&&(t.TgZ(0,"option",29),t._uU(1),t.qZA()),2&e){const o=a.$implicit;t.s9C("value",o._id),t.xp6(1),t.hij(" ",o.name,"")}}function D(e,a){1&e&&(t.TgZ(0,"span",30),t._uU(1,"Product is required"),t.qZA())}function E(e,a){if(1&e&&(t.TgZ(0,"option",29),t._uU(1),t.qZA()),2&e){const o=a.$implicit;t.s9C("value",o._id),t.xp6(1),t.hij(" ",o.username,"")}}function M(e,a){1&e&&(t.TgZ(0,"span",30),t._uU(1,"Customer is required"),t.qZA())}function V(e,a){1&e&&(t.TgZ(0,"span",30),t._uU(1,"Quantity is required"),t.qZA())}function j(e,a){1&e&&(t.TgZ(0,"span",30),t._uU(1,"Price is required"),t.qZA())}let T=(()=>{const a=class{constructor(r,n,i,l,d,f,H,X){this.formBuilder=r,this.router=n,this.route=i,this.cartservice=l,this.toastr=d,this.productService=f,this.loginService=H,this.customerService=X,this.submitted=!1,this.msg_success=!1,this.msg_danger=!1,this.isEdit="edit"===this.route.snapshot.data.title,this.allproducts=[],this.allusers=[],this.currentPage=1,this.initialized=!1,this.currentLimit=1e3,this.totalRecord=0,this.products=[],this.hasError=(W,tt)=>this.addCartForm.controls[W].hasError(tt),this.addCartForm=this.formBuilder.group({product_id:["",s.kI.required],customer:["",s.kI.required],qty:["",s.kI.required],price:["",s.kI.required]}),this.uploadInput=new t.vpe,this.token=localStorage.getItem("miniaar-token")}ngOnInit(){this.id=this.route.snapshot.paramMap.get("id"),this.imagePath=C.N.baseUrl+"/public/",this.getallProducts(),this.getallcustomers(),this.isEdit?(this.patchingdata(this.id),this.applyAction="Update"):this.applyAction="Add"}patchingdata(r){this.cartservice.getCartWithId({id:r}).subscribe(i=>{if(200==i.code){let l=i?.result;this.addCartForm.patchValue({product_id:l?.product,customer:l?.customer,qty:l?.qty,price:l?.price})}})}onSubmit(){this.submitted=!0;let r=this.addCartForm.value,n=this.id;this.addCartForm.invalid||(r.token=this.token,r.productid=this.products,this.isEdit?this.cartservice.editcartdata(r,n).subscribe(i=>{200==i.code?(this.toastr.successToastr(i.message),setTimeout(()=>{this.router.navigate(["/cart/view"])},2e3)):this.toastr.errorToastr(i.message)}):this.cartservice.addCart(r).subscribe(i=>{200==i.code?(this.toastr.successToastr(i.message),setTimeout(()=>{this.router.navigate(["/cart/view"])},2e3)):400==i.code&&this.toastr.errorToastr(i.message)}))}getallProducts(){this.productService.getallProducts({}).subscribe(r=>{200==r.code&&null!=r.result&&""!=r.result&&(this.allproducts=r.result)})}getallcustomers(){this.customerService.getAllCustomers({limit:this.currentLimit,page:this.currentPage}).subscribe(n=>{200==n.code&&null!=n.result&&""!=n.result&&(this.allusers=n.result)})}selectProduct(r){this.products.push(r)}onCancel(){this.router.navigate(["/cart/view"])}};let e=a;return a.\u0275fac=function(n){return new(n||a)(t.Y36(s.qu),t.Y36(m.F0),t.Y36(m.gz),t.Y36(Z.N),t.Y36(I.eP),t.Y36(P.M),t.Y36(Y.r),t.Y36(k.v))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-add-cart"]],decls:47,vars:11,consts:[[1,"content-wrapper"],[1,"page-header"],[1,"page-title"],[1,"row","justify-content-center"],[1,"col-xxl-5","col-xl-6","col-lg-8","col-md-8","col-sm-10","col-12","grid-margin","stretch-card"],[1,"card"],[1,"card-body"],["class","card-title",4,"ngIf"],["class","alert alert-success alert-dismissable","style","margin-left: 0;",4,"ngIf"],["class","alert alert-danger alert-dismissable","style","margin-left: 0;",4,"ngIf"],["method","post","novalidate","",3,"formGroup","ngSubmit"],[1,"box-body"],[1,"form-group","col-md-12"],["for","exampleInputEmail1"],["name","product_id","formControlName","product_id",1,"form-control",3,"change"],["product",""],["value",""],[3,"value",4,"ngFor","ngForOf"],["class","alert-danger",4,"ngIf"],["name","customer","formControlName","customer",1,"form-control"],["type","number","name","qty","autocomplete","off","formControlName","qty","placeholder","Quantity",1,"form-control"],["type","number","name","price","autocomplete","off","formControlName","price","placeholder","Price",1,"form-control"],[1,"col-12"],[1,"box-footer","d-flex"],["type","submit",1,"btn","btn-button","mr-2"],["type","cancel",1,"btn","btn-button",3,"click"],[1,"card-title"],[1,"alert","alert-success","alert-dismissable",2,"margin-left","0"],[1,"alert","alert-danger","alert-dismissable",2,"margin-left","0"],[3,"value"],[1,"alert-danger"]],template:function(n,i){if(1&n){const l=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"h3",2),t._uU(3," Cart "),t.qZA()(),t.TgZ(4,"div",3)(5,"div",4)(6,"div",5)(7,"div",6),t.YNc(8,F,2,0,"h4",7),t.YNc(9,S,2,0,"h4",7),t.YNc(10,Q,2,1,"div",8),t.YNc(11,L,2,1,"div",9),t.TgZ(12,"form",10),t.NdJ("ngSubmit",function(){return i.onSubmit()}),t.TgZ(13,"div",11)(14,"div",12)(15,"label",13),t._uU(16,"Product"),t.qZA(),t.TgZ(17,"select",14,15),t.NdJ("change",function(){t.CHM(l);const f=t.MAs(18);return t.KtG(i.selectProduct(f.value))}),t.TgZ(19,"option",16),t._uU(20,"Select Product"),t.qZA(),t.YNc(21,O,2,2,"option",17),t.qZA(),t.YNc(22,D,2,0,"span",18),t.qZA(),t.TgZ(23,"div",12)(24,"label",13),t._uU(25,"Customer"),t.qZA(),t.TgZ(26,"select",19)(27,"option",16),t._uU(28,"Select Customer"),t.qZA(),t.YNc(29,E,2,2,"option",17),t.qZA(),t.YNc(30,M,2,0,"span",18),t.qZA(),t.TgZ(31,"div",12)(32,"label",13),t._uU(33,"Quantity"),t.qZA(),t._UZ(34,"input",20),t.YNc(35,V,2,0,"span",18),t.qZA(),t.TgZ(36,"div",12)(37,"label",13),t._uU(38,"Price"),t.qZA(),t._UZ(39,"input",21),t.YNc(40,j,2,0,"span",18),t.qZA()(),t.TgZ(41,"div",22)(42,"div",23)(43,"button",24),t._uU(44,"Submit"),t.qZA(),t.TgZ(45,"button",25),t.NdJ("click",function(){return i.onCancel()}),t._uU(46,"Cancel"),t.qZA()()()()()()()()()}2&n&&(t.xp6(8),t.Q6J("ngIf",i.id),t.xp6(1),t.Q6J("ngIf",!i.id),t.xp6(1),t.Q6J("ngIf",i.msg_success),t.xp6(1),t.Q6J("ngIf",i.msg_danger),t.xp6(1),t.Q6J("formGroup",i.addCartForm),t.xp6(9),t.Q6J("ngForOf",i.allproducts),t.xp6(1),t.Q6J("ngIf",i.submitted&&i.hasError("product_id","required")),t.xp6(7),t.Q6J("ngForOf",i.allusers),t.xp6(1),t.Q6J("ngIf",i.submitted&&i.hasError("customer","required")),t.xp6(5),t.Q6J("ngIf",i.submitted&&i.hasError("qty","required")),t.xp6(5),t.Q6J("ngIf",i.submitted&&i.hasError("price","required")))},dependencies:[u.sg,u.O5,s._Y,s.YN,s.Kr,s.Fj,s.wV,s.EJ,s.JJ,s.JL,s.sg,s.u]}),e})();const R=[{path:"",component:h,canActivate:[p.a]},{path:"add",component:T,canActivate:[p.a],data:{title:"add"}},{path:"view",component:h,canActivate:[p.a]},{path:"edit/:id",component:T,canActivate:[p.a],data:{title:"edit"}},{path:"**",component:h,canActivate:[p.a]}];let z=(()=>{const a=class{};let e=a;return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[m.Bz.forChild(R),m.Bz]}),e})();var $=c(1310),G=c(6913),K=c(9207);let B=(()=>{const a=class{};let e=a;return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[u.ez,z,s.u5,s.UX,G.TA,K.UM,v.h,$.j]}),e})()}}]);