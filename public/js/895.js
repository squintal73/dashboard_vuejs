(self.webpackChunk=self.webpackChunk||[]).push([[895],{3811:(t,s,e)=>{"use strict";function a(t){var s=[],e=[],a=t.response.data.message||"The given data was invalid.";s.push(a),t.response.data.errors&&(e=[].concat.apply([],Object.values(t.response.data.errors)),s=s.concat(e)),s.forEach((function(t){Vue.toasted.show(t,{theme:"toasted-primary",position:"top-right",duration:5e3})}))}e.d(s,{w:()=>a})},895:(t,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>d});var a=e(8311),r=e.n(a),i=e(9669),o=e.n(i),n=e(9819),c=e(3811);function l(t,s,e,a,r,i,o){try{var n=t[i](o),c=n.value}catch(t){return void e(t)}n.done?s(c):Promise.resolve(c).then(a,r)}const u={name:"Login",components:{Nav:n.Z},data:function(){return{email:"",password:"",verificationStatus:!!this.$route.query.verification_status,verificationMessage:"",verificationAlertClasses:{"alert-success":!1,"alert-danger":!1}}},created:function(){"success"===this.$route.query.verification_status?(this.verificationMessage="Your account has been verified. Please log in.",this.verificationAlertClasses["alert-success"]=!0):"error"===this.$route.query.verification_status&&(this.verificationMessage="Your account could not be verified.",this.verificationAlertClasses["alert-danger"]=!0)},methods:{login:function(){var t,s=this;return(t=r().mark((function t(){var e;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o().post("login",{email:s.email,password:s.password});case 3:e=t.sent,localStorage.setItem("token",e.data.token),s.$store.dispatch("user",e.data.user),s.$router.push("/admin"),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),c.w(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})),function(){var s=this,e=arguments;return new Promise((function(a,r){var i=t.apply(s,e);function o(t){l(i,a,r,o,n,"next",t)}function n(t){l(i,a,r,o,n,"throw",t)}o(void 0)}))})()}}};const d=(0,e(1900).Z)(u,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("Nav"),t._v(" "),e("div",{staticClass:"container"},[t.verificationStatus?e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-xl-10 col-lg-12 col-md-9"},[e("div",{staticClass:"alert alert-dismissible fade show mt-5",class:t.verificationAlertClasses,attrs:{role:"alert"}},[e("div",[t._v(t._s(t.verificationMessage))]),t._v(" "),t._m(0)])])]):t._e(),t._v(" "),e("div",{staticClass:"row justify-content-center"},[e("div",{staticClass:"col-xl-10 col-lg-12 col-md-9"},[e("div",{staticClass:"card o-hidden border-0 shadow-lg my-5"},[e("div",{staticClass:"card-body p-0"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-6 d-none d-lg-block bg-login-image"}),t._v(" "),e("div",{staticClass:"col-lg-6"},[e("div",{staticClass:"p-5"},[t._m(1),t._v(" "),e("form",{staticClass:"user",on:{submit:function(s){return s.preventDefault(),t.login.apply(null,arguments)}}},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control form-control-user",attrs:{type:"email",id:"exampleInputEmail","aria-describedby":"emailHelp",placeholder:"Enter Email Address..."},domProps:{value:t.email},on:{input:function(s){s.target.composing||(t.email=s.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control form-control-user",attrs:{type:"password",id:"exampleInputPassword",placeholder:"Password"},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})]),t._v(" "),t._m(2),t._v(" "),e("button",{staticClass:"btn btn-primary btn-user btn-block",attrs:{type:"submit"}},[t._v("\n                      Login\n                    ")])]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"text-center"},[e("router-link",{staticClass:"small",attrs:{to:"/forgot-password"}},[t._v("Forgot Password?")])],1),t._v(" "),e("div",{staticClass:"text-center"},[e("router-link",{staticClass:"small",attrs:{to:"/register"}},[t._v("Create an Account!")])],1)])])])])])])])])],1)}),[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"text-center"},[e("h1",{staticClass:"h4 text-gray-900 mb-4"},[t._v("Welcome Back!")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"form-group"},[e("div",{staticClass:"custom-control custom-checkbox small"},[e("input",{staticClass:"custom-control-input",attrs:{type:"checkbox",id:"customCheck"}}),t._v(" "),e("label",{staticClass:"custom-control-label",attrs:{for:"customCheck"}},[t._v("Remember Me")])])])}],!1,null,null,null).exports}}]);